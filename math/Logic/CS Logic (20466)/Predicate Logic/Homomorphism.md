
- Let $M$ and $M'$ [[Logic/CS Logic (20466)/Predicate Logic/Semantic#Structure (Model)|model]] in $L$. and $H\colon M\to M'$ a function
	- $H$ is a **homomorphism** of $M$ into $M'$ if:
		-  $H$ **preserves** constants: For every [[Logic/CS Logic (20466)/Predicate Logic/Syntax#Terms|term]] $c$ in $L$, $H(c^M)=c^{M'}$ ( #todo in other book this goes on *constants* only)
		-  $H$ **preserves** functions: For every n-ary [[Logic/CS Logic (20466)/Predicate Logic/Syntax#Non-logical symbols|function symbol]] $f$ and for all $a_{1},\dots,a_{n}$ elements of the domain $A$ we have: 
			- $H(f^M(a_{1},\dots,a_{n}))=f^{M'}(H(a_{1}),\dots,H(a_{n}))$
		- $H$ **preserves** relations: For every n-ary [[Logic/CS Logic (20466)/Predicate Logic/Syntax#Non-logical symbols|predicate symbol]] $R$ and for all $a_{1},\dots,a_{n}$ elements of the domain $A$ we have:
			- $(a_{1},\dots,a_{n}) \in R^{M}\implies (H(a_{1}),\dots,H(a_{n}))\in R^{M'}$
	- $H$ is an **embedding** if:
		- $H$ is a homomorphism 
		- $H$ is injective (one-to-one).
		- $H$ **reflects** relations: For every n-ary relation symbol $R$ in $L$, and for all $a_1,\dots,a_n\in M$, we have: 
			- $(a_1,\dots,a_n)\in R^{M} \impliedby  (H(a_1),\dots,H(a_n))\in R^{M'}$
	- $H$ is an **isomorphism** if:
		- $H$ is an homomorphism
		- $H$ is injective (one-to-one)
		- $H$ is surjective (onto) $M'$
	- $H$ is called ( #todo איזומורפיזם מוכלל) if: 
		- $H$ is a homomorphism
		- $H$ is surjective (onto) $M'$
		-  $H$ **preserves & reflects** relations: 
			- $(a_{1},\dots,a_{n})\in R^{M}\iff (H(a_{1}),\dots,H(a_{n}))\in R^{M'}$
	- $M$ and $M'$ are **isomorphic** if an isomorphism exists between them
	- $H$ is called an **epimorphism** if:
		- $H$ is a homomorphism
		- $H$ is surjective (onto) $M'$



> If one of the relation in $L$ is the equality relation, (and it is the real equality in $M$ and $M'$), then by the property "H reflects relations" we have that H is injective, therefore in that case "isomorphism" is the same as "איזומורפיזם מוכלל"


## Congruence Relation

- A [[Binary Relation|binary relation]] $E$ on a [[Logic/CS Logic (20466)/Predicate Logic/Semantic#Structure (Model)|structure]] $M$ in $L$ is called a **congruence (relation)** on $M$ if
	- $E$ is an [[Binary Relation#Equivalence relation|equivalence relation]]
	- if $f$ is n-ary function in $L$, and $(b_{1},a_{1})\in E,\dots,(b_{n},a_{n}) \in E$, then $(f^{M}(b_{1},\dots,b_{n}),f^{M}(a_{1},\dots,a_{n}))\in E$
	- if $R$ is n-ary relation in $L$, and $(b_{1},a_{1})\in E,\dots ,(b_{n},a_{n})\in E$, then $(b_{1},\dots,b_{n})\in{R}\iff (a_{1},\dots,a_{n})\in {R}$

- Let be a [[Logic/CS Logic (20466)/Predicate Logic/Semantic#Structure (Model)|structure]] $M$ in $L$, with the domain $D$, and let $D'$ be the [[Binary Relation#Quotient Set|quotient set]] of $D$ induced by $E$.
	- We define $M'$ as follow:
		- $c^{M'}=[c^M]$
		- Let be a n-ary function, and let $C_{1},\dots,C_{n}$ the [[Binary Relation#Equivalence Class|equivalence classes]] in $M'$, and let $a_{1},\dots,a_{n}$ where $a_{i}\in C_{i}$. we define: $f^{M'}([a_{1}],\dots ,[a_{n}])=[f^{M}(a_{1},\dots ,a_{n})]$
		- for every n-ary relation: $([a_{1}],\dots,[a_{n}])\in R^{M'}\iff(a_{1},\dots,a_{n})\in R^M$
	- Then $M'$ is well-defined and called the **quotient structure** defined by $E$ and denote by $M'=\frac{E}{M}$


- (6.21) let $H:M\to M'$ be an epimorphism, and $E$ be a binary realtion in $M$ where $(a,b)\in E \iff H(a)=H(b)$, then $E$ is congruence relation, and the quotient structure $\frac{E}{M}$ and $M'$ are isomorphic 