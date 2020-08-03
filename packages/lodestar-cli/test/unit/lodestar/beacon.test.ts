import * as fs from "fs";
import yargs from "yargs/yargs";
import {expect} from "chai";

import {beacon} from "../../../src/cmds/beacon";
import {altonaConfig} from "../../../src/cmds/beacon/testnets/altona";
import { downloadGenesisFile } from "../../../src/cmds/beacon/testnets";
import {testnetName, testnetDir} from "../../constants";
import {tmpDir} from "../../constants";

describe("beacon cli", function() {
  this.timeout("10 min");

  const tmpGenesisPath = `${tmpDir}/beacon/tmpGenesis.ssz`;

  // const tmpGenesisStateFile = downloadGenesisFile("altona", tmpGenesisPath);

  const testTemplateConfigFile = {
    "params": {
      "MIN_GENESIS_ACTIVE_VALIDATOR_COUNT": 640,
      "MIN_GENESIS_TIME": 1593433800,
      "GENESIS_DELAY": 172800,
      "GENESIS_FORK_VERSION": "0x00000121",
      "DEPOSIT_NETWORK_ID": 5,
      "DEPOSIT_CONTRACT_ADDRESS": "0x16e82D77882A663454Ef92806b7DeCa1D394810f"
    },
    "api": {
      "rest": {
        "enabled": true,
        "namespaces": [
          "beacon",
          "validator"
        ],
        "host": "127.0.0.1",
        "port": 9596,
        "cors": {
          "origin": "*"
        }
      }
    },
    "chain": {
      "preset": "mainnet"
    },
    "eth1": {
      "enabled": true,
      "provider": {
        "url": "https://goerli.prylabs.net"
      },
      "depositContract": {
        "deployedAt": 2917810
      }
    },
    "metrics": {
      "enabled": true,
      "timeout": 5000,
      "pushGateway": false,
      "gatewayUrl": "",
      "serverPort": 5000
    },
    "logger": {
      "chain": {
        "level": "verbose"
      },
      "sync": {
        "level": "verbose"
      },
      "network": {
        "level": "verbose"
      }
    },
    "network": {
      "discv5": {
        "enabled": true,
        "bindAddr": "/ip4/0.0.0.0/udp/9000",
        "bootEnrs": [
          "enr:-LK4QFtV7Pz4reD5a7cpfi1z6yPrZ2I9eMMU5mGQpFXLnLoKZW8TXvVubShzLLpsEj6aayvVO1vFx-MApijD3HLPhlECh2F0dG5ldHOIAAAAAAAAAACEZXRoMpD6etXjAAABIf__________gmlkgnY0gmlwhDMPYfCJc2VjcDI1NmsxoQIerw_qBc9apYfZqo2awiwS930_vvmGnW2psuHsTzrJ8YN0Y3CCIyiDdWRwgiMo",
          "enr:-LK4QPVkFd_MKzdW0219doTZryq40tTe8rwWYO75KDmeZM78fBskGsfCuAww9t8y3u0Q0FlhXOhjE1CWpx3SGbUaU80Ch2F0dG5ldHOIAAAAAAAAAACEZXRoMpD6etXjAAABIf__________gmlkgnY0gmlwhDMPRgeJc2VjcDI1NmsxoQNHu-QfNgzl8VxbMiPgv6wgAljojnqAOrN18tzJMuN8oYN0Y3CCIyiDdWRwgiMo",
          "enr:-LK4QHe52XPPrcv6-MvcmN5GqDe_sgCwo24n_2hedlfwD_oxNt7cXL3tXJ7h9aYv6CTS1C_H2G2_dkeqm_LBO9nrpiYBh2F0dG5ldHOIAAAAAAAAAACEZXRoMpD9yjmwAAABIf__________gmlkgnY0gmlwhANzD9uJc2VjcDI1NmsxoQJX7zMnRU3szfGfS8MAIfPaQKOBpu3sBVTXf4Qq0b_m-4N0Y3CCIyiDdWRwgiMo",
          "enr:-LK4QLkbbq7xuRa_EnWd_kc0TkQk0pd0B0cZYR5LvBsncFQBDyPbGdy8d24TzRVeK7ZWwM5_2EcSJK223f8TYUOQYfwBh2F0dG5ldHOIAAAAAAAAAACEZXRoMpD9yjmwAAABIf__________gmlkgnY0gmlwhAPsjtOJc2VjcDI1NmsxoQJNw_aZgWXl2SstD--WAjooGudjWLjEbbCIddJuEPxzWYN0Y3CCIyiDdWRwgiMo",
          "enr:-LK4QHy-glnxN1WTk5f6d7-xXwy_UKJLs5k7p_S4KRY9I925KTzW_kQLjfFriIpH0de7kygBwrSl726ukq9_OG_sgKMCh2F0dG5ldHOIUjEAIQEAFMiEZXRoMpD9yjmwAAABIf__________gmlkgnY0gmlwhBLmhrCJc2VjcDI1NmsxoQNlU7gT0HUvpLA41n-P5GrCgjwMwtG02YsRRO0lAmpmBYN0Y3CCIyiDdWRwgiMo",
          "enr:-LK4QDz0n0vpyOpuStB8e22h9ayHVcvmN7o0trC7eC0DnZV9GYGzK5uKv7WlzpMQM2nDTG43DWvF_DZYwJOZCbF4iCQBh2F0dG5ldHOI__________-EZXRoMpD9yjmwAAABIf__________gmlkgnY0gmlwhBKN136Jc2VjcDI1NmsxoQP5gcOUcaruHuMuTv8ht7ZEawp3iih7CmeLqcoY1hxOnoN0Y3CCIyiDdWRwgiMo",
          "enr:-LK4QOScOZ35sOXEH6CEW15lfv7I3DhqQAzCPQ_nRav95otuSh4yi9ol0AruKDiIk9qqGXyD-wQDaBAPLhwl4t-rUSQBh2F0dG5ldHOI__________-EZXRoMpD9yjmwAAABIf__________gmlkgnY0gmlwhCL68KuJc2VjcDI1NmsxoQK5fYR3Ipoc01dz0d2-EcL7m26zKQSkAbf4rwcMMM09CoN0Y3CCIyiDdWRwgiMo",
          "enr:-Ku4QMqmWPFkgM58F16wxB50cqWDaWaIsyANHL8wUNSB4Cy1TP9__uJQNRODvx_dvO6rY-BT3psrYTMAaxnMGXb6DuoBh2F0dG5ldHOIAAAAAAAAAACEZXRoMpD1pf1CAAAAAP__________gmlkgnY0gmlwhBLf22SJc2VjcDI1NmsxoQNoed9JnQh7ltcAacHEGOjwocL1BhMQbYTgaPX0kFuXtIN1ZHCCE4g",
          "enr:-LK4QDHu6BtDKnGbthNp-GvweQlW0jiOX9KFCj5Ql9kScrFed76tgHlFv7A-9ZRB-EVZpKItvlNjo3yxjj7jYIZUJa4Bh2F0dG5ldHOIAAAAAAAAAACEZXRoMpAAAAAAAAAAAAAAAAAAAAAAgmlkgnY0gmlwhDbUyQKJc2VjcDI1NmsxoQLV6Yse8baXDFu9r_dvm9BVd2ni2-wwvANWA-4ewbhniIN0Y3CCIyiDdWRwgiMo",
          "enr:-LK4QF3lT3Ch8Ljyx-KwoPrvoJHO-HDd3jOREMIZCWzi_HkHFVub5qt52MliDTLDgpXMS9tBzzLI4ObT_Z2m2Kus9vMBh2F0dG5ldHOIAAAAAAAAAACEZXRoMpAAAAAAAAAAAAAAAAAAAAAAgmlkgnY0gmlwhBKNqHeJc2VjcDI1NmsxoQOTO9uI9UZjuTOpcWvnCfhfQTmcMaIzBFsjMpXYnppET4N0Y3CCIyiDdWRwgiMo",
          "enr:-LK4QHdys8TViG_QtAVjTKaP92xlbD7eP_kdqQDGEOSTYh2sW_uN41AyS_cBWP1nM-Gi_cXYQ5_rjx-Qgn3dCDydi8MBh2F0dG5ldHOI__________-EZXRoMpD9yjmwAAABIf__________gmlkgnY0gmlwhDZdpaaJc2VjcDI1NmsxoQNX8JXYTfTkL1rZ9-4Dd9De-C9W7bwUlmwOEhSIa8jZ0YN0Y3CCI4yDdWRwgiOM---",
          "enr:-LK4QPM8lQwCtEFVqBnqHs6p_OE2WkDtcDh5gLriXMMSy-wnd8058swVyiUgANqFgbPdV6Pm5_LyeAIT6gKLBW70ia4Bh2F0dG5ldHOI__________-EZXRoMpD9yjmwAAABIf__________gmlkgnY0gmlwhBLCKTOJc2VjcDI1NmsxoQMQfjhh_GwSLRpPKweO79mo_n3sPaK75E11DbrM-8OaY4N0Y3CCI4yDdWRwgiOM---",
          "enr:-LK4QKFLQRdyIaxd8_eT0nD35ZU2JrRc6IcO347uURaVaZ7UbU3ts_jAaEt2krT5DyI9IQt5JECOTO7IpSPCZgeySwMBh2F0dG5ldHOI__________-EZXRoMpD9yjmwAAABIf__________gmlkgnY0gmlwhDZdfJeJc2VjcDI1NmsxoQNnAwjMpA-1zWgd4ogGmRqsM1x7y7EQGDw_XxRpoo7KFIN0Y3CCI4yDdWRwgiOM---",
          "enr:-LK4QOCodKmp5bsgQyl1nciqX7FGpsZdu0Mj1qFFpmw5BEdSOQ1xEwFlOuSkOVC4vHvbMNV5MPLkPvzw7xC42BvlMnEBh2F0dG5ldHOI__________-EZXRoMpD9yjmwAAABIf__________gmlkgnY0gmlwhBLEHx6Jc2VjcDI1NmsxoQLjYA6hPlO-7bzqsnT_NJRC0vjGTSQwyhlSqSVCdB0UcYN0Y3CCI4yDdWRwgiOM---"
        ]
      },
      "maxPeers": 25,
      "bootnodes": [
        "/ip4/51.15.97.240/tcp/9000/p2p/16Uiu2HAkwVT363kpFmupwJBH5tkhnaNZPQSY7zANnPGB63ikD1Wp",
        "/ip4/51.15.70.7/tcp/9000/p2p/16Uiu2HAmHV1UA1SBnNK7Ztp8ACQ8DzHwNnR49VDEPBavCU33PtVE"
      ],
      "multiaddrs": [
        "/ip4/0.0.0.0/tcp/30607"
      ]
    }
  };

  it("should init beacon configuration", async function() {
    // initialize beacon node configured to talk to testnet
    await new Promise(resolve => yargs().default({
      rootDir: tmpDir,
      preset: "mainnet",
      // @ts-ignore
    }).command(init).parse(["init"], resolve));
    await new Promise(resolve => setTimeout(resolve, 500));
    expect(fs.existsSync(tmpDir)).to.be.true;
    expect(fs.existsSync(`${tmpDir}/beacon.config.json`)).to.be.true;
  });

  // @TODO: bugs out; WIP fix in #1267
  it.skip("should init beacon configuration with --testnet option", async function() {
    // initialize beacon node configured to talk to testnet
    await new Promise(resolve => yargs()
      .default({
        rootDir: testnetDir,
        preset: "mainnet",
        genesisStateFile: tmpGenesisPath,
      })
      .command(beacon)
      .help().parse(["beacon", "init" ,"--testnet", "altona"], resolve));
    await new Promise(resolve => setTimeout(resolve, 500));
    expect(fs.existsSync(testnetDir)).to.be.true;
    const beaconConfigPath = `${testnetDir}/beacon/beacon.config.json`;
    expect(fs.existsSync(beaconConfigPath)).to.be.true;
    
    const beaconConfig = JSON.parse(fs.readFileSync(beaconConfigPath, "utf8"));
    expect(beaconConfig).to.deep.equal(altonaConfig);
  });

  // @TODO: this one fails, documented in #1252
  it.skip("should init beacon configuration with --templateConfigFile option and copy over all options from altona config to beacon config", async function() {
    // initialize beacon node configured to talk to testnet
    await new Promise(resolve => yargs().default({
      rootDir: tmpDir,
      templateConfigFile: testTemplateConfigFile,
      // @ts-ignore
    }).command(beacon).help().parse(["beacon", "init"], resolve));
    await new Promise(resolve => setTimeout(resolve, 500));
    expect(fs.existsSync(tmpDir)).to.be.true;
    const beaconConfigPath = `${tmpDir}/beacon/beacon.config.json`;
    expect(fs.existsSync(beaconConfigPath)).to.be.true;
    
    const beaconConfig = JSON.parse(fs.readFileSync(beaconConfigPath, "utf8"));
    expect(beaconConfig).to.deep.equal(testTemplateConfigFile);
  });

  it.skip("should init beacon configuration & run beacon node", async function() {
    // initialize beacon node configured to talk to testnet
    await new Promise(resolve => yargs().default({
      rootDir: tmpDir,
      testnet: testnetName,
      preset: "mainnet",
      // @ts-ignore
    }).command(beacon).help().parse(["beacon", "init"], resolve));
    await new Promise(resolve => setTimeout(resolve, 500));
    expect(fs.existsSync(tmpDir)).to.be.true;
    const beaconConfigPath = `${tmpDir}/beacon/beacon.config.json`;
    // expect(fs.existsSync(beaconConfigPath)).to.be.true;
    
    const beaconConfig = JSON.parse(fs.readFileSync(beaconConfigPath, "utf8"));
    expect(beaconConfig).to.deep.equal(altonaConfig);

    // initialize beacon node configured to talk to testnet
    await new Promise(resolve => yargs().default({
      rootDir: tmpDir,
      preset: "mainnet",
      // @ts-ignore
    }).command(beacon).help().parse(["beacon", "run"], resolve));
    await new Promise(resolve => setTimeout(resolve, 500));
  });

  it.skip("should run beacon node", async function() {
    
    // initialize beacon node configured to talk to testnet
    await new Promise(resolve => yargs().default({
      rootDir: tmpDir,
      preset: "mainnet",
      testnet: "altona"
      // @ts-ignore
    }).command(beacon).help().parse(["beacon", "run"], resolve));
    await new Promise(resolve => setTimeout(resolve, 500));
    const beaconConfigPath = `${tmpDir}/beacon/beacon.config.json`;
    expect(fs.existsSync(beaconConfigPath)).to.be.true;
    expect(fs.existsSync(tmpDir)).to.be.true;
    
    const beaconConfig = JSON.parse(fs.readFileSync(beaconConfigPath, "utf8"));
    expect(beaconConfig).to.deep.equal(altonaConfig);
  });
});