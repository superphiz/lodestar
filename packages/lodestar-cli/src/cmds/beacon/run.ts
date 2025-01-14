import * as fs from "fs";
import process from "process";
import {initBLS} from "@chainsafe/bls";
import {BeaconNode} from "@chainsafe/lodestar/lib/node";
import {createNodeJsLibp2p} from "@chainsafe/lodestar/lib/network/nodejs";
import {fileTransport, WinstonLogger} from "@chainsafe/lodestar-utils";
import {ENR} from "@chainsafe/discv5";
import {consoleTransport} from "@chainsafe/lodestar-utils";

import {readPeerId, readEnr, writeEnr} from "../../network";
import {mergeConfigOptions} from "../../config/beacon";
import {getMergedIBeaconConfig} from "../../config/params";
import {initHandler as initCmd} from "../init/init";
import {IBeaconOptions} from "./options";
import {getBeaconPaths} from "./paths";
import {updateENR} from "../../util/enr";

/**
 * Run a beacon node
 */
export async function run(options: IBeaconOptions): Promise<void> {
  await initBLS();
  // always run the init command
  await initCmd(options);

  const beaconPaths = getBeaconPaths(options);
  options = {...options, ...beaconPaths};

  options = mergeConfigOptions(options);
  const peerId = await readPeerId(beaconPaths.peerIdFile);
  // read local enr from disk
  options.network.discv5.enr = await readEnr(beaconPaths.enrFile);
  // set enr overrides
  updateENR(options.network.discv5.enr, options);
  if (options.enr?.ip || options.enr?.ip6) {
    options.network.discv5.enrUpdate = false;
  }
  // TODO: Rename db.name to db.path or db.location
  options.db.name = beaconPaths.dbDir;

  const config = await getMergedIBeaconConfig(options.preset, options.paramsFile, options.params);
  const libp2p = await createNodeJsLibp2p(peerId, options.network, options.peerStoreDir);
  const loggerTransports = [
    consoleTransport
  ];
  if(options.logFile && beaconPaths.logFile) {
    loggerTransports.push(fileTransport(beaconPaths.logFile));
  }
  const logger = new WinstonLogger({}, loggerTransports);

  const node = new BeaconNode(options, {config, libp2p, logger});

  async function cleanup(): Promise<void> {
    await node.stop();
    await writeEnr(beaconPaths.enrFile, options.network.discv5.enr as ENR, peerId);
  }

  process.on("SIGTERM", cleanup);
  process.on("SIGINT", cleanup);
  if (options.genesisStateFile) {
    await node.chain.initializeBeaconChain(
      config.types.BeaconState.tree.deserialize(await fs.promises.readFile(options.genesisStateFile))
    );
  }
  await node.start();
}
