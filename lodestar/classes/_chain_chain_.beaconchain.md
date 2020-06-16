[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/chain"](../modules/_chain_chain_.md) › [BeaconChain](_chain_chain_.beaconchain.md)

# Class: BeaconChain <**T, U, V**>

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* TypeRecord‹EventEmitter‹›, [IChainEvents](../interfaces/_chain_interface_.ichainevents.md), [IChainEvents](../interfaces/_chain_interface_.ichainevents.md), this› & object & object

  ↳ **BeaconChain**

## Implements

* [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)

## Index

### Constructors

* [constructor](_chain_chain_.beaconchain.md#constructor)

### Properties

* [ _emitType](_chain_chain_.beaconchain.md#optional--_emittype)
* [ _emitterType](_chain_chain_.beaconchain.md#optional--_emittertype)
* [ _eventsType](_chain_chain_.beaconchain.md#optional--_eventstype)
* [_currentForkDigest](_chain_chain_.beaconchain.md#private-_currentforkdigest)
* [attestationProcessor](_chain_chain_.beaconchain.md#private-attestationprocessor)
* [blockProcessor](_chain_chain_.beaconchain.md#private-blockprocessor)
* [chain](_chain_chain_.beaconchain.md#chain)
* [chainId](_chain_chain_.beaconchain.md#chainid)
* [clock](_chain_chain_.beaconchain.md#clock)
* [config](_chain_chain_.beaconchain.md#private-config)
* [db](_chain_chain_.beaconchain.md#private-db)
* [epochCtx](_chain_chain_.beaconchain.md#private-epochctx)
* [eth1](_chain_chain_.beaconchain.md#private-eth1)
* [forkChoice](_chain_chain_.beaconchain.md#forkchoice)
* [logger](_chain_chain_.beaconchain.md#private-logger)
* [metrics](_chain_chain_.beaconchain.md#private-metrics)
* [networkId](_chain_chain_.beaconchain.md#networkid)
* [opts](_chain_chain_.beaconchain.md#private-opts)

### Accessors

* [currentForkDigest](_chain_chain_.beaconchain.md#currentforkdigest)

### Methods

* [checkGenesis](_chain_chain_.beaconchain.md#private-checkgenesis)
* [getBlockAtSlot](_chain_chain_.beaconchain.md#getblockatslot)
* [getCurrentForkDigest](_chain_chain_.beaconchain.md#private-getcurrentforkdigest)
* [getENRForkID](_chain_chain_.beaconchain.md#getenrforkid)
* [getFinalizedCheckpoint](_chain_chain_.beaconchain.md#getfinalizedcheckpoint)
* [getHeadBlock](_chain_chain_.beaconchain.md#getheadblock)
* [getHeadState](_chain_chain_.beaconchain.md#getheadstate)
* [handleForkDigestChanged](_chain_chain_.beaconchain.md#private-handleforkdigestchanged)
* [initializeBeaconChain](_chain_chain_.beaconchain.md#initializebeaconchain)
* [receiveAttestation](_chain_chain_.beaconchain.md#receiveattestation)
* [receiveBlock](_chain_chain_.beaconchain.md#receiveblock)
* [restoreHeadState](_chain_chain_.beaconchain.md#private-restoreheadstate)
* [start](_chain_chain_.beaconchain.md#start)
* [stop](_chain_chain_.beaconchain.md#stop)
* [waitForBlockProcessed](_chain_chain_.beaconchain.md#waitforblockprocessed)
* [waitForState](_chain_chain_.beaconchain.md#private-waitforstate)

## Constructors

###  constructor

\+ **new BeaconChain**(`opts`: [IChainOptions](../interfaces/_chain_options_.ichainoptions.md), `__namedParameters`: object): *[BeaconChain](_chain_chain_.beaconchain.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:71](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L71)*

**Parameters:**

▪ **opts**: *[IChainOptions](../interfaces/_chain_options_.ichainoptions.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`eth1` | [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)‹› |
`forkChoice` | [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md) |
`logger` | ILogger |
`metrics` | [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md) |

**Returns:** *[BeaconChain](_chain_chain_.beaconchain.md)*

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md).[ _emitType](../interfaces/_chain_interface_.ibeaconchain.md#optional--_emittype)*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md).[ _emitterType](../interfaces/_chain_interface_.ibeaconchain.md#optional--_emittertype)*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitterType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md).[ _eventsType](../interfaces/_chain_interface_.ibeaconchain.md#optional--_eventstype)*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _eventsType](../interfaces/_network_gossip_interface_.igossip.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

___

### `Private` _currentForkDigest

• **_currentForkDigest**: *ForkDigest*

*Defined in [packages/lodestar/src/chain/chain.ts:70](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L70)*

___

### `Private` attestationProcessor

• **attestationProcessor**: *[IAttestationProcessor](../interfaces/_chain_interface_.iattestationprocessor.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:71](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L71)*

___

### `Private` blockProcessor

• **blockProcessor**: *[BlockProcessor](_chain_blocks_processor_.blockprocessor.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:69](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L69)*

___

###  chain

• **chain**: *string*

*Defined in [packages/lodestar/src/chain/chain.ts:57](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L57)*

___

###  chainId

• **chainId**: *Uint16*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md).[chainId](../interfaces/_chain_interface_.ibeaconchain.md#chainid)*

*Defined in [packages/lodestar/src/chain/chain.ts:59](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L59)*

___

###  clock

• **clock**: *[IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md).[clock](../interfaces/_chain_interface_.ibeaconchain.md#clock)*

*Defined in [packages/lodestar/src/chain/chain.ts:61](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L61)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/chain/chain.ts:63](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L63)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:64](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L64)*

___

### `Private` epochCtx

• **epochCtx**: *EpochContext*

*Defined in [packages/lodestar/src/chain/chain.ts:62](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L62)*

___

### `Private` eth1

• **eth1**: *[IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:65](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L65)*

___

###  forkChoice

• **forkChoice**: *[ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md).[forkChoice](../interfaces/_chain_interface_.ibeaconchain.md#forkchoice)*

*Defined in [packages/lodestar/src/chain/chain.ts:58](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L58)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/chain/chain.ts:66](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L66)*

___

### `Private` metrics

• **metrics**: *[IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:67](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L67)*

___

###  networkId

• **networkId**: *Uint64*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md).[networkId](../interfaces/_chain_interface_.ibeaconchain.md#networkid)*

*Defined in [packages/lodestar/src/chain/chain.ts:60](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L60)*

___

### `Private` opts

• **opts**: *[IChainOptions](../interfaces/_chain_options_.ichainoptions.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:68](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L68)*

## Accessors

###  currentForkDigest

• **get currentForkDigest**(): *ForkDigest*

*Defined in [packages/lodestar/src/chain/chain.ts:143](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L143)*

**Returns:** *ForkDigest*

## Methods

### `Private` checkGenesis

▸ **checkGenesis**(`timestamp`: number, `eth1Data`: Eth1Data): *Promise‹TreeBacked‹BeaconState› | null›*

*Defined in [packages/lodestar/src/chain/chain.ts:333](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L333)*

Create a candidate BeaconState from the deposits at a certain time and eth1 state

Returns the BeaconState if it is valid else null

**Parameters:**

Name | Type |
------ | ------ |
`timestamp` | number |
`eth1Data` | Eth1Data |

**Returns:** *Promise‹TreeBacked‹BeaconState› | null›*

___

###  getBlockAtSlot

▸ **getBlockAtSlot**(`slot`: Slot): *Promise‹SignedBeaconBlock | null›*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:101](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

### `Private` getCurrentForkDigest

▸ **getCurrentForkDigest**(): *Promise‹ForkDigest›*

*Defined in [packages/lodestar/src/chain/chain.ts:299](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L299)*

**Returns:** *Promise‹ForkDigest›*

___

###  getENRForkID

▸ **getENRForkID**(): *Promise‹ENRForkID›*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:196](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L196)*

**Returns:** *Promise‹ENRForkID›*

___

###  getFinalizedCheckpoint

▸ **getFinalizedCheckpoint**(): *Promise‹Checkpoint›*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:113](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L113)*

**Returns:** *Promise‹Checkpoint›*

___

###  getHeadBlock

▸ **getHeadBlock**(): *Promise‹SignedBeaconBlock | null›*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:97](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L97)*

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

###  getHeadState

▸ **getHeadState**(): *Promise‹BeaconState | null›*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:93](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L93)*

**Returns:** *Promise‹BeaconState | null›*

___

### `Private` handleForkDigestChanged

▸ **handleForkDigestChanged**(): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/chain.ts:294](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L294)*

**Returns:** *Promise‹void›*

___

###  initializeBeaconChain

▸ **initializeBeaconChain**(`genesisState`: TreeBacked‹BeaconState›): *Promise‹void›*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:155](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`genesisState` | TreeBacked‹BeaconState› |

**Returns:** *Promise‹void›*

___

###  receiveAttestation

▸ **receiveAttestation**(`attestation`: Attestation): *Promise‹void›*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:147](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  receiveBlock

▸ **receiveBlock**(`signedBlock`: SignedBeaconBlock, `trusted`: boolean, `reprocess`: boolean): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/chain.ts:151](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L151)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`signedBlock` | SignedBeaconBlock | - |
`trusted` | boolean | false |
`reprocess` | boolean | false |

**Returns:** *Promise‹void›*

___

### `Private` restoreHeadState

▸ **restoreHeadState**(`lastKnownState`: TreeBacked‹BeaconState›): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/chain.ts:222](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L222)*

Restore state cache and forkchoice from last finalized state.

**Parameters:**

Name | Type |
------ | ------ |
`lastKnownState` | TreeBacked‹BeaconState› |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:117](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L117)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/chain/chain.ts:132](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L132)*

**Returns:** *Promise‹void›*

___

###  waitForBlockProcessed

▸ **waitForBlockProcessed**(`blockRoot`: Uint8Array): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/chain.ts:208](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L208)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |

**Returns:** *Promise‹void›*

___

### `Private` waitForState

▸ **waitForState**(): *Promise‹TreeBacked‹BeaconState››*

*Defined in [packages/lodestar/src/chain/chain.ts:305](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/chain/chain.ts#L305)*

**Returns:** *Promise‹TreeBacked‹BeaconState››*