
# Module: "nodes/sort-nodes/sort-nodes-by-canonical-order"

## Index

### Functions

* [sortNodesByCanonicalOrder](_nodes_sort_nodes_sort_nodes_by_canonical_order_.md#sortnodesbycanonicalorder)

## Functions

###  sortNodesByCanonicalOrder

▸ **sortNodesByCanonicalOrder**(`siblingNodes`: Array‹SceneNode›): *Array‹SceneNode›*

*Defined in [nodes/sort-nodes/sort-nodes-by-canonical-order.ts:9](https://github.com/yuanqing/create-figma-plugin/blob/c1a9a79/packages/utilities/src/nodes/sort-nodes/sort-nodes-by-canonical-order.ts#L9)*

Sorts `siblingNodes` according to their layer list order. Does not modify
the original `siblingNodes` array.

**Parameters:**

Name | Type |
------ | ------ |
`siblingNodes` | Array‹SceneNode› |

**Returns:** *Array‹SceneNode›*

A new array of `SceneNode` objects
