[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/impl/ethers"](../modules/_eth1_impl_ethers_.md) › [EthersEth1Notifier](_eth1_impl_ethers_.etherseth1notifier.md)

# Class: EthersEth1Notifier <**T, U, V**>

The EthersEth1Notifier watches the eth1 chain using ethers.js

It proceses eth1 blocks, starting from block number `depositContract.deployedAt`, maintaining a follow distance.
It stores deposit events and eth1 data in a IBeaconDb resumes processing from the last stored eth1 data

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* TypeRecord‹EventEmitter‹›, [IEth1Events](../interfaces/_eth1_interface_.ieth1events.md), [IEth1Events](../interfaces/_eth1_interface_.ieth1events.md), this› & object & object

  ↳ **EthersEth1Notifier**

## Implements

* [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)

## Index

### Constructors

* [constructor](_eth1_impl_ethers_.etherseth1notifier.md#constructor)

### Properties

* [ _emitType](_eth1_impl_ethers_.etherseth1notifier.md#optional--_emittype)
* [ _emitterType](_eth1_impl_ethers_.etherseth1notifier.md#optional--_emittertype)
* [ _eventsType](_eth1_impl_ethers_.etherseth1notifier.md#optional--_eventstype)
* [config](_eth1_impl_ethers_.etherseth1notifier.md#private-config)
* [contract](_eth1_impl_ethers_.etherseth1notifier.md#private-contract)
* [db](_eth1_impl_ethers_.etherseth1notifier.md#private-db)
* [lastProcessedDepositIndex](_eth1_impl_ethers_.etherseth1notifier.md#private-lastprocesseddepositindex)
* [lastProcessedEth1BlockNumber](_eth1_impl_ethers_.etherseth1notifier.md#private-lastprocessedeth1blocknumber)
* [logger](_eth1_impl_ethers_.etherseth1notifier.md#private-logger)
* [opts](_eth1_impl_ethers_.etherseth1notifier.md#private-opts)
* [processingBlock](_eth1_impl_ethers_.etherseth1notifier.md#private-processingblock)
* [provider](_eth1_impl_ethers_.etherseth1notifier.md#private-provider)
* [started](_eth1_impl_ethers_.etherseth1notifier.md#private-started)

### Methods

* [contractExists](_eth1_impl_ethers_.etherseth1notifier.md#private-contractexists)
* [getBlock](_eth1_impl_ethers_.etherseth1notifier.md#getblock)
* [getDepositEvents](_eth1_impl_ethers_.etherseth1notifier.md#getdepositevents)
* [getLastProcessedBlockTag](_eth1_impl_ethers_.etherseth1notifier.md#getlastprocessedblocktag)
* [getLastProcessedDepositIndex](_eth1_impl_ethers_.etherseth1notifier.md#getlastprocesseddepositindex)
* [initContract](_eth1_impl_ethers_.etherseth1notifier.md#initcontract)
* [onNewEth1Block](_eth1_impl_ethers_.etherseth1notifier.md#onneweth1block)
* [parseDepositEvent](_eth1_impl_ethers_.etherseth1notifier.md#private-parsedepositevent)
* [processBlock](_eth1_impl_ethers_.etherseth1notifier.md#processblock)
* [processBlocks](_eth1_impl_ethers_.etherseth1notifier.md#processblocks)
* [start](_eth1_impl_ethers_.etherseth1notifier.md#start)
* [stop](_eth1_impl_ethers_.etherseth1notifier.md#stop)

## Constructors

###  constructor

\+ **new EthersEth1Notifier**(`opts`: [IEthersEth1Options](../interfaces/_eth1_impl_ethers_.ietherseth1options.md), `__namedParameters`: object): *[EthersEth1Notifier](_eth1_impl_ethers_.etherseth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:51](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L51)*

**Parameters:**

▪ **opts**: *[IEthersEth1Options](../interfaces/_eth1_impl_ethers_.ietherseth1options.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`logger` | ILogger |

**Returns:** *[EthersEth1Notifier](_eth1_impl_ethers_.etherseth1notifier.md)*

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _emitType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_emittype)*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _emitterType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_emittertype)*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitterType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _eventsType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_eventstype)*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _eventsType](../interfaces/_network_gossip_interface_.igossip.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:44](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L44)*

___

### `Private` contract

• **contract**: *Contract*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:42](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L42)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:45](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L45)*

___

### `Private` lastProcessedDepositIndex

• **lastProcessedDepositIndex**: *number*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:51](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L51)*

___

### `Private` lastProcessedEth1BlockNumber

• **lastProcessedEth1BlockNumber**: *number*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:50](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L50)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:46](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L46)*

___

### `Private` opts

• **opts**: *[IEthersEth1Options](../interfaces/_eth1_impl_ethers_.ietherseth1options.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:39](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L39)*

___

### `Private` processingBlock

• **processingBlock**: *boolean*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:49](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L49)*

___

### `Private` provider

• **provider**: *BaseProvider*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:41](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L41)*

___

### `Private` started

• **started**: *boolean*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:48](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L48)*

## Methods

### `Private` contractExists

▸ **contractExists**(`address`: string): *Promise‹boolean›*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:238](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *Promise‹boolean›*

___

###  getBlock

▸ **getBlock**(`blockTag`: string | number): *Promise‹Block›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:216](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L216)*

**Parameters:**

Name | Type |
------ | ------ |
`blockTag` | string &#124; number |

**Returns:** *Promise‹Block›*

___

###  getDepositEvents

▸ **getDepositEvents**(`blockTag`: string | number): *Promise‹[IDepositEvent](../interfaces/_eth1_interface_.idepositevent.md)[]›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:205](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L205)*

**Parameters:**

Name | Type |
------ | ------ |
`blockTag` | string &#124; number |

**Returns:** *Promise‹[IDepositEvent](../interfaces/_eth1_interface_.idepositevent.md)[]›*

___

###  getLastProcessedBlockTag

▸ **getLastProcessedBlockTag**(): *Promise‹string | number›*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:116](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L116)*

**Returns:** *Promise‹string | number›*

___

###  getLastProcessedDepositIndex

▸ **getLastProcessedDepositIndex**(): *Promise‹number›*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:120](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L120)*

**Returns:** *Promise‹number›*

___

###  initContract

▸ **initContract**(): *Promise‹void›*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:225](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L225)*

**Returns:** *Promise‹void›*

___

###  onNewEth1Block

▸ **onNewEth1Block**(`blockNumber`: number): *Promise‹void›*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:125](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | number |

**Returns:** *Promise‹void›*

___

### `Private` parseDepositEvent

▸ **parseDepositEvent**(`log`: any): *[IDepositEvent](../interfaces/_eth1_interface_.idepositevent.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:247](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L247)*

Parse DepositEvent log

**Parameters:**

Name | Type |
------ | ------ |
`log` | any |

**Returns:** *[IDepositEvent](../interfaces/_eth1_interface_.idepositevent.md)*

___

###  processBlock

▸ **processBlock**(`blockNumber`: number): *Promise‹boolean›*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:146](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L146)*

Process an eth1 block for DepositEvents and Eth1Data

Must process blocks in order with no gaps

Returns true if processing was successful

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | number |

**Returns:** *Promise‹boolean›*

___

###  processBlocks

▸ **processBlocks**(`toNumber`: number): *Promise‹void›*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:132](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`toNumber` | number |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:71](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L71)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:104](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/eth1/impl/ethers.ts#L104)*

**Returns:** *Promise‹void›*