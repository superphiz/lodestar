import * as fs from "fs";
import yargs from "yargs/yargs";
import { expect } from "chai";
import * as sinon from "sinon";

import {rootDir} from "../../constants";
import { account } from "../../../src/cmds/account";
import { ValidatorDirManager } from "../../../src/validatorDir";
import { getAccountPaths } from "../../../src/cmds/account/paths";
import { init } from "../../../src/cmds/init";
import { TestnetName } from "../../../src/testnets";
import { medallaConfig } from "../../../src/testnets/medalla";

describe.only("account cli", function() {
  this.timeout("10 min");

  const spy = sinon.stub(console, 'log');

  const testnetName = "medalla";
  const initDefaults = {
    rootDir,
    preset: "mainnet",
    testnet: testnetName as TestnetName,
    paramsFile: `${rootDir}/config.yaml`,
    params: {
      "DEPOSIT_CHAIN_ID": 5,
      "DEPOSIT_NETWORK_ID": 5
    },
  }

  const walletsDir = `${rootDir}/wallets/`;
  const walletName = "primary";

  const accountDefaults = {
    rootDir,
    name: walletName,
    passphraseFile: "primary.pass",
    testnet: testnetName as TestnetName,
    preset: "mainnet",
    paramsFile: `${rootDir}/config.yaml`,
    params: {
      "DEPOSIT_CHAIN_ID": 5,
      "DEPOSIT_NETWORK_ID": 5
    },
  };

  it("should init beacon configuration with --testnet option", async function() {
    await new Promise(resolve => yargs()
      .default(initDefaults)
      .command(init).help().parse(["init"], resolve));
    await new Promise(resolve => setTimeout(resolve, 5000));
    expect(fs.existsSync(rootDir)).to.be.true;
    const beaconConfigPath = `${rootDir}/beacon.config.json`;
    expect(fs.existsSync(beaconConfigPath)).to.be.true;
    
    const beaconConfig = JSON.parse(fs.readFileSync(beaconConfigPath, "utf8"));
    let templateConfigCopy = JSON.parse(JSON.stringify(medallaConfig));
    templateConfigCopy = {
      ...templateConfigCopy,
      beaconDir: rootDir,
      configFile: beaconConfigPath,
      dbDir: `${rootDir}/chain-db`,
      enrFile: `${rootDir}/enr.json`,
      eth1: { ...templateConfigCopy.eth1, enabled: false },
      genesisStateFile: `${rootDir}/genesis.ssz`,
      peerIdFile: `${rootDir}/peer-id.json`
    }
    expect(beaconConfig).to.deep.equal(templateConfigCopy);
  });
  
  it("should create a wallet", async function() {
    expect(fs.existsSync(rootDir)).to.be.true;
    await new Promise(resolve => yargs().default(accountDefaults)
      .command(account).help().parse(["account", "wallet", "create"], resolve));
    await new Promise(resolve => setTimeout(resolve, 500));
    expect(fs.existsSync(walletsDir)).to.be.true;
    const wallets = fs.readdirSync(walletsDir);
    expect(wallets.length > 0).to.be.true;
  });

  it("should list existing wallets", async function() {
    await new Promise(resolve => yargs().default(accountDefaults)
      .command(account).help().parse(["account", "wallet", "list"], resolve));
    await new Promise(resolve => setTimeout(resolve, 500));
    expect(spy.calledWith(walletName)).to.be.true;
  });

  it("should create new validator", async function() {
    const wallets = fs.readdirSync(walletsDir);
    expect(wallets.length > 0).to.be.true;
    await new Promise(resolve => yargs().default(accountDefaults)
      .command(account).help().parse(["account", "validator", "create"], resolve));
    await new Promise(resolve => setTimeout(resolve, 500));
    expect(spy.calledWith(sinon.match.string)).to.be.true;
  });

  it("should list validators", async function() {
    expect(fs.existsSync(`${rootDir}/keystores`)).to.be.true;
    await new Promise(resolve => yargs().default(accountDefaults)
      .command(account).help().parse(["account", "validator", "list"], resolve));
    await new Promise(resolve => setTimeout(resolve, 500));
    const accountPaths = getAccountPaths({rootDir});
    const validatorDirManager = new ValidatorDirManager(accountPaths);
    const validatorPubKeys = validatorDirManager.iterDir();
    expect(spy.calledWith(validatorPubKeys.join("\n"))).to.be.true;
  });

  it("should make a deposit to validator registration contract", async function() {
    const validatorId = fs.readdirSync(`${rootDir}/keystores`)[0];
    expect(validatorId).to.not.be.undefined;
    await new Promise(resolve => yargs().default({
      ...accountDefaults,
      rpcUrl: "http://127.0.0.1:8545",
    }).command(account).help().parse(["account", "validator", "deposit", "validator", validatorId], resolve));
    await new Promise(resolve => setTimeout(resolve, 500));
  });
});