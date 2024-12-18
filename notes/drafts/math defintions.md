


- `f(s: Structure) -> Structure` 
	- `complement(g: Graph) -> Graph`
		- (`f` is the _complement_ operator, and the result is the _complement_ of `g`)
	- `transpose(A: Matrix) -> Matrix` 
		- (`f` is the _transpose_ operator, and the result is the _transpose_ of `A`)
	-this is a _unary operator_ on the domain of the `Structure`s
 

____


- `f(s: Structure) -> boolean`
	- `is_connected(g: Graph) -> boolean` (_connected graph_)
	- `is_symmetric(A: Matrix) -> boolean` (_symmetric matrix_)
	- `is_palindrome(s: String) -> boolean` (_palindrome string_)
	- `is_prime(n: Integer) -> boolean` (_prime number_)
	- `is_invertible(A: SquareMatrix) -> boolean` (_invertible matrix_. note that `SquareMatrix` is substucture of `Matrix`) 
	- `is_square(A: Matrix) -> boolean` (_square matrix_)
	- (`f` is a _predicate_ of the domain of the `Structure`s)
- `f(s: Structure) -> number`
	- `rank(A: Matrix) -> Integer` (_rank of a matrix_)
	- `length(s: String) -> Integer` (_length of a string_)
- todo
	- `degree(g:Graph, v:Vertex) -> Integer` here we have both the structure and some element of the structure..





____

- `f(s: Structure) -> Structure[]`
	- `subgraphs(g: Graph) -> Graph[]`
	- `substrings(s: String) -> String[]`

alternatively, using _relations_

- `R(s1, Structure, s2: Structure) -> boolean`
	- `is_subgraph(g1: Graph, g2: Graph) -> boolean`
	- `is_substring(s1: String, s2: String) -> boolean`
	- `is_spanning_tree(g1: Graph, g2: Graph) -> boolean` or `is_spanning_tree(g1: Graph, t: Tree) -> boolean` (since `Tree` is a substructure of `Graph`)

___

- `f(s: Structure) -> OtherStructure`

___

> if the `OtherStructure` is a _substructure_ of the `Structure`, then we can actually use the `f(s: Structure) -> Structure[]` form, since the result is a collection of substructures of the input structure....

- `f(s: Structure) -> OtherStructure[]` (i.e. there are multiple possible results, e.g. $T$ is ***a*** spanning tree of $G$) 

alternatively, using _relations_

- `R(s1: Structure, s2: OtherStructure) -> boolean`

____
