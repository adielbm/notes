
- A **homomorphism** is a map between two algebraic structures of the same type (that is of the same name), that preserves the operations of the structures. 
	- This means a map $\displaystyle f:A\to B$ between two sets $\displaystyle A, \displaystyle B$ equipped with the same structure such that, if $\cdot$ is an operation of the structure (supposed here, for simplification, to be a binary operation), then $\displaystyle f(x\cdot y)=f(x)\cdot f(y)$ for every pair $x, y$ of elements of $A$. One says often that $f$ preserves the operation or is compatible with the operation.
	- Formally, a map $\displaystyle f:A\to B$ preserves an operation $\displaystyle \mu$ of arity $\displaystyle k$, defined on both $\displaystyle A$ and $\displaystyle B$ if $\displaystyle f(\mu _{A}(a_{1},\ldots ,a_{k}))=\mu _{B}(f(a_{1}),\ldots ,f(a_{k}))$, for all elements $\displaystyle a_{1},...,a_{k}$ in $\displaystyle A.$
	- The operations that must be preserved by a homomorphism include 0-ary operations, that is the constants. In particular, when an identity element is required by the type of structure, the identity element of the first structure must be mapped to the corresponding identity element of the second structure.

For example:

- A [[Group Theory#Group Homomorphism|Group Homomorphism]] is a map between groups that preserves the group operation. 
	- This implies that the group homomorphism maps the identity element of the first group to the identity element of the second group, and maps the inverse of an element of the first group to the inverse of the image of this element. ($\displaystyle f(a^{-1}) = \left(f(a)\right)^{-1}$)
- A [[Linear Transformations|Linear Transformation]] is a homomorphism of vector spaces; that is, a group homomorphism between vector spaces that preserves the operations (vector addition and scalar multiplication)

