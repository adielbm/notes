
| Peano axioms $P$                               |                                                                                                                                                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| $0$ is not the successor of any natural number | $∀x(¬s(x)=0)$                                                                                                                                                                              |
| Successor is injective                         | $∀x∀y[s(x)=s(y)→x=y]$                                                                                                                                                                      |
| Addition identity                              | $∀x(x+0=x)$                                                                                                                                                                                |
| Addition successor                             | $∀x∀y[x+s(y)=s(x+y)]$                                                                                                                                                                      |
| Multiplication identity                        | $∀x(x⋅0=0)$                                                                                                                                                                                |
| Multiplication successor                       | $∀x∀y[x⋅s(y)=(x⋅y)+x]$                                                                                                                                                                     |
|                                                | $∀x(x∗0=s(0))$                                                                                                                                                                             |
|                                                | $∀x∀y[x∗s(y)=(x∗y)⋅x]$                                                                                                                                                                     |
| Non-negativity                                 | $∀x(¬(x<0))$                                                                                                                                                                               |
|                                                | $∀x∀y[(x<s(y))↔((x<y)∨(x=y))]$                                                                                                                                                             |
| Induction                                      | For every formula $\varphi[x_{1},\dots ,x_{k},y]$, we have<br>$\forall x_{1}\dots \forall x_{k}\forall y((\varphi[0/y]\land \forall y(\varphi\to \varphi[s(y) / y]))\to \forall y\varphi)$ |


- only 0 has no predecessor: $\forall x(x\neq 0\to \exists y(x=s(y)))$
- $\forall x\forall y(x\neq s(y)+x)$
- Addition
	- Associativity $\forall x \forall y \forall z((x+y)+z=x+(y+z))$
	- Commutative $\forall x\forall y(x+y=y+x)$
- Multiplication
	- Associativity $\forall x \forall y \forall z((x\cdot y)\cdot z=x\cdot (y\cdot z))$
	- Commutative $\forall x\forall y(x\cdot y=y \cdot x)$
- multiplication is distributes over addition: $\forall x \forall y \forall z(x\cdot (y+ z)=x\cdot y\cdot + x \cdot z)$
- Exp
	- $\forall x \forall y \forall z(x^y\cdot x^z=x^{y+z})$
	- $\forall x \forall y \forall z((x^y)^z=x^{y\cdot z})$
	- $\forall x \forall y \forall z((x\cdot z)^y=x^y\cdot x^z)$
- $\forall x\forall y (x<y \leftrightarrow \exists z(x+S(z)=y))$
- the relation $<$ is a [[Binary Relation#Transitive Relations|strict total order]] relation
	- irreflexivity $\forall x\lnot(x<x)$
	- transitivity $\forall x \forall y \forall z((x<y \land y<z)\to (x < z))$
	- $\forall x \forall y((x<y)\lor (x=y)\lor (x>y))$




- is $P$ a [[Logic/Predicate Logic/Syntax#Theory|complete]] theory?
- [[Logic/Predicate Logic/Syntax#Theory|consistency]]
