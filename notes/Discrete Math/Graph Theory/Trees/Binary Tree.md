
| Common terminology       | CLRS                            | Diagram                     |
| ------------------------ | ------------------------------- | --------------------------- |
| **Full** Binary Tree     |                                 | ![cBt\|110](fullBT.svg)     |
| **Complete** Binary Tree | **Nearly Complete** Binary Tree | ![cBt\|110](completeBT.svg) |
| **Perfect** Binary Tree  | **Complete** Binary Tree        | ![pBt\|110](perfectBT.svg)  |

>[!warning] **Common terminology** will be used below

> [!notation] Notation:  $n$ nodes,   $l$ leaves,   $h$ height,    $n_{k}$ nodes at depth $k$, 

- The **height (depth) of a node** is the number of edges on the longest simple downward path from the root to the node.

- The **height $h$ of a tree** is the number of edges on the longest simple downward path from the root to a leaf.

## Complete Binary Tree

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

