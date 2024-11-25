
# Graphs

- Graph 
- Adjacency list
- Adjacency matrix
- 

# Linked Data Structures

## Linked list

|                  |        | desc                                                |
| ---------------- | ------ | --------------------------------------------------- |
| list-insert(L,x) | $O(1)$ | insert x onto the front of the linked list          |
| list-delete(L,x) | $O(1)$ | delete element x from the linked list               |
| list-search(L,k) | $O(n)$ | returning a pointer to the first element with key k |

# Trees

## Heap

### Binary Heap

- A **binary heap** (or **heap**) is defined as a binary tree with two additional constraints:
	- **shape property:** a binary heap is a [[Binary Tree#Complete Binary Tree|complete binary tree]]
	- **heap property:** 
		- (max-heap) for every node $i$ other than the root, $A[\text{parent}(i)]\geq A[i]$)
		- (min-heap) for every node $i$ other than the root, $A[\text{parent}(i)]\leq A[i]$)
	- Heaps are commonly implemented with an array $A$ of length $n$.
		- In our implementation, the root of is in $A[1]$, so
			- $\text{parent}(i)=\lfloor{i/2}\rfloor$
			- $\text{left}(i)=2i$
			- $\text{right}(i)=2i+1$
			- the last index is $n$
		- (Alternatively, the root can be in $A[0]$, so $\text{left}(i)=2i+1$, $\text{right}(i)=2i+2$, and $\text{parent}(i)=\lfloor{(i-1)/2}\rfloor$, and the last index is $n-1$)


- Theorems:
	- The index $i$ of the $k$-greatest ($k\neq{1}$) element in max-heap is $2\leq{i}\leq{2}^{k}-1$ 
		- (the same for  $k$-smallest element in min-heap)
	- (6.3-3) #todo There are at most $\lceil{n}/{2^{h+1}}\rceil$ nodes of height $h$ in any $n$-element heap 


| procedure (max heap)         | Run Time    |                                                                 |
| ---------------------------- | ----------- | --------------------------------------------------------------- |
| `heapify(A, i)`              | $O(h)$      | (the height of $A[i]$ is $h$)                                   |
| `max-heapify(A, i)`          | $O(\lg n)$  |                                                                 |
| `build-max-heap(A)`          | $O(n)$      |                                                                 |
| `heap-maximum(A)`            | $O(1)$      | returns the element of $A$ with the largest key                 |
| `heap-extract-max(A)`        | $O(\lg{n})$ | remove max and retrun it                                        |
| `heap-increase-key(A,i,key)` | $O(\lg{n})$ | increases the value of $i$ to new value $key$ (larger or equal) |
| `max-heap-insert(A,key)`     | $O(\lg{n})$ | insert $key$ to $A$                                             |

- in **min-heap** the procedures will be: *min-heapify, build-min-heap, heap-minimum, heap-extract-min, heap-decrease-key, min-heap-insert*


## Binary Search Tree (BST)

- Type of: [[Binary Tree]]
- Sorted data structure
- all **dynamic set operations** take $O(h)$ time
- **Traversal** (*Inorder*, *preorder*, and *postorder*) take $\Theta(n)$ time

- (12.4) The expected height of a **randomly built BST** on $n$ distinct keys is $O(\lg n)$

### Red-Black Tree (RB)

- **Red-Black Tree** is Binary Search Tree, which staify the **Red-Black tree properties**:
	- Every node is either **black** or **red**
	- The **root** is black
	- Every **leaf** (NIL) is black
	- if node red, then both of its children are black (thus, red nodes $<$ black nodes)
	- For each node, all simple paths from the node to leaves have the same number of black nodes, (limiting h ???)


- $\text{bh}(x)$ is the **black-height** of the node $x$, which is the number of black nodes on any path from a node $x$ (not including) down to a leaf
- $\text{bh}(T)$ is the **black-height** of a RB tree, which is **the black-height of the root**

- (13.1) A red-black tree with $n$ internal nodes has height at most $2\lg{(n+1)}$. (which means that it's **approximatly balanced**)

- **dynamic set operations** take $O(\lg{n})$ time

#### Order-statistic tree

- (Theorem 14.1) **Augmenting** a red-black tree - Let $f$ be a field that augments a red-black tree $T$ of $n$ nodes, and suppose that the contents of $f$ for a node $x$ can be computed using only the information in nodes $x$, $\text{left}[x]$, and $\text{right}[x]$, including $f[\text{left}[x]]$ and $f[\text{right}[x]]$. **Then**, we can maintain the values of $f$ in all nodes of $T$ during insertion and deletion without asymptotically affecting the $O(\lg n)$ performance of these operations. 

- **order-statistic tree** is RB Tree with additional node field: *size*. 
	- $\text{OS-Select}(x,i)$ returns a pointer to the node containing the $i$th smallest key in the subtree rooted at $x$.  ($O(\lg{n})$ (worst case))
	- $\text{OS-Rank}(T,x)$ returns the position of $x$ in the linear order determined by an inorder tree walk of $T$. ($O(\lg{n})$ (worst case))

# Hash Tables

## Hash function

## Collision resolution

### Chaining


|                              | Average | Worst  |
| ---------------------------- | ------- | ------ |
| **space**                    | $O(n)$  | $O(n)$ |
| chained-hash-**insert**(T,x) | $O(1)$  |        |
| chained-hash-**search**(T,k) | $O(1)$  |        |
| chained-hash-**delete**(T,x) | $O(1)$  |        |

### Open addressing

- Linear probing
- Quadratic probing
- Double hashing



# Direct-address tables 


| operation |  |
| ---- | ---- |
| direct-address-insert(T,k) | $O(1)$ |
| direct-address-delete(T,x) | $O(1)$ |
| direct-address-search(T,x) | $O(1)$ |

