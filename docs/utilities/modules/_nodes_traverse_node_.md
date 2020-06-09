
# Module: "nodes/traverse-node"

## Index

### Functions

* [traverseNode](_nodes_traverse_node_.md#traversenode)

## Functions

###  traverseNode

▸ **traverseNode**(`node`: SceneNode, `processNode`: function, `stopTraversal?`: undefined | function): *void*

*Defined in [nodes/traverse-node.ts:9](https://github.com/yuanqing/create-figma-plugin/blob/c1a9a79/packages/utilities/src/nodes/traverse-node.ts#L9)*

Traverses `node` and its child nodes recursively in a *depth-first*
manner, passing each node to the specified `processNode` callback.

Each node is also passed to a `stopTraversal` function. If you return
`false` in `stopTraversal` for a particular node, then its child nodes
will not be traversed.

**Parameters:**

▪ **node**: *SceneNode*

▪ **processNode**: *function*

▸ (`node`: SceneNode): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | SceneNode |

▪`Optional`  **stopTraversal**: *undefined | function*

**Returns:** *void*
