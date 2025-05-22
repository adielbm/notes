
| Common terminology       | CLRS                            | Diagram                                 |
| ------------------------ | ------------------------------- | --------------------------------------- |
| **Full** Binary Tree     |                                 | ![ \|110](Full%20Binary%20Tree.svg)     |
| **Complete** Binary Tree | **Nearly Complete** Binary Tree | ![ \|110](Complete%20Binary%20Tree.svg) |
| **Perfect** Binary Tree  | **Complete** Binary Tree        | ![ \|110](Perfect%20Binary%20Tree.svg)                |

>[!warning] **Common terminology** will be used below

> [!notation] Notation:  $n$ nodes,   $l$ leaves,   $h$ height,    $n_{k}$ nodes at depth $k$, 

- The **height (depth) of a node** is the number of edges on the longest simple downward path from the root to the node.

- The **height $h$ of a tree** is the number of edges on the longest simple downward path from the root to a leaf.

## Complete Binary Tree

- A **complete binary tree** is a binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible

- $2^h\leq{n\leq{2^{h+1}-1}}$
	- $n_{k}=2^k$ (where $k<h$)
	- $1\leq{n_{h}\leq{2^h}}$
- $l=\lceil{n/2}\rceil$
- $h={\lfloor{\lg{n}\rfloor}}$

## Perfect Binary Tree

- $n=2^{h+1}-1$
	- $n_{k}=2^k$
- $l=2^h=\lceil{n/2}\rceil$
- $h={\lfloor{\lg{n}\rfloor}}$


# Traversal

- **Preorder**: **Root**, Left, Right
- **Inorder**: Left, **Root**, Right
- **Postorder**: Left, Right, **Root**
