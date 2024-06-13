
- Let $M$ and $M'$ [[Logic/Predicate Logic/Semantic#Model|model]] in $L$. and $H\colon M\to M'$ a function
	- We say that $H$ **preserves** the relations if for every $n$-ary [[Logic/Predicate Logic/Syntax#Non-logical symbols (Signature)|predicate symbol]] $R$ in $L$, and for all $a_{1},\dots,a_{n}$ elements of the domain, we have:
		- $(a_{1},\dots,a_{n})\in R^{M}\implies (H(a_{1}),\dots,H(a_{n}))\in R^{M'}$
	- We say that $H$ **reflects** the relations if for every $n$-ary predicate symbol $R$ in $L$, and for all $a_{1},\dots,a_{n}$ elements of the domain, we have:
		- $(a_{1},\dots,a_{n})\in R^{M}\impliedby (H(a_{1}),\dots,H(a_{n}))\in R^{M'}$
	- $H$ is a **homomorphism** of $M$ into $M'$ if:
		-  ($H$ **preserves** constants) For every [[Logic/Predicate Logic/Syntax#Terms|term]] $c$ in $L$, we have $H(c^M)=c^{M'}$ 
			- ( #todo in other book this goes on *constants* only)
		-  ($H$ **preserves** functions) For every n-ary [[Logic/Predicate Logic/Syntax#Non-logical symbols (Signature)|function symbol]] $f$ and for all $a_{1},\dots,a_{n}$ elements of the domain $A$ we have: 
			- $H(f^M(a_{1},\dots,a_{n}))=f^{M'}(H(a_{1}),\dots,H(a_{n}))$
		- $H$ preserves relations
	- $H$ is an **strong homomorphism** if:
		- $H$ is a homomorphism 
		- $H$ reflects relations
	- $H$ is an **embedding** if:
		- $H$ is a homomorphism 
		- $H$ is injective (one-to-one)
		- $H$ reflects relations
	- $H$ is an **isomorphism** if:
		- $H$ is an homomorphism
		- $H$ is injective (one-to-one)
		- $H$ is surjective (onto) $M'$
		- $H$ reflects relations
	- $M$ and $M'$ are **isomorphic** if an isomorphism exists between them
	- $H$ is called an **epimorphism** if:
		- $H$ is a homomorphism
		- $H$ is surjective (onto) $M'$
		- $H$ reflects relations (possibly excluding the equality relation)
	- $H$ is called an **automorphism** if:
		- $H$ is an isomorphism
		- $M=M'$
	- $H$ is called an **endomorphism** if:
		- $H$ is a homomorphism
		- $M=M'$
	- $H$ is called an **monomorphism** if:
		- $H$ is a homomorphism
		- $H$ is injective (one-to-one)

- If $H$ is an epimorphism that reflects also the equality relation, then $H$ is called a


> In algebra, when dealing with groups, rings, and linear spaces, the focus is on functions (operations) and not on relations, therefore the condition _$H$ reflects relations_ is not relevant, therefore, for example, a surjective homomorphism is an epimorphism

> If one of the relation in $L$ is the equality relation, (and it is the real equality in $M$ and $M'$), then by the property "$H$ reflects relations" we have that $H$ is injective. Therefore, in this case, an epimorphism is an isomorphism.

- (6.7) (asuume L with equality) Let $H:M\to M'$ be an isomorphism, and $\varphi[x_{1},\dots,x_{n}]$ a formula (i.e. a formula with free variables $x_{1},\dots,x_{n}$), and let $a_{1},\dots,a_{n}$ elements of the domain of $M$. Then $M\models \varphi[a_{1},\dots,a_{n}]\iff M'\models \varphi[H(a_{1}),\dots,H(a_{n})]$

## draft

https://people.math.sc.edu/mcnulty/762/modeltheory.pdf




## Congruence Relation

- A [[Binary Relation|binary relation]] $E$ on a [[Logic/Predicate Logic/Semantic#Model|model]] $M$ in $L$ is called a **congruence (relation)** on $M$ if
	- $E$ is an [[Binary Relation#Equivalence relation|equivalence relation]]
	- if $f$ is n-ary function in $L$, and $(b_{1},a_{1})\in E,\dots,(b_{n},a_{n}) \in E$, then $(f^{M}(b_{1},\dots,b_{n}),f^{M}(a_{1},\dots,a_{n}))\in E$
	- if $R$ is n-ary relation in $L$, and $(b_{1},a_{1})\in E,\dots ,(b_{n},a_{n})\in E$, then $(b_{1},\dots,b_{n})\in{R}\iff (a_{1},\dots,a_{n})\in {R}$

- Let be a [[Logic/Predicate Logic/Semantic#Model|model]] $M=\langle D,\dots\rangle$ in $L$.
	- We define a model $M'=\langle D',\dots\rangle$ as follow:
		- $D'$ is the [[Binary Relation#Quotient Set|quotient set]] of $D$ induced by $E$
		- The function $I:D\to D'$, $I(a)=[a]$ is called (ההתאמה הטבעית)
		- For every constant $c$ in $L$, we define $c^{M'}=[c^{M}]$
		- Let be n-ary function symbol $f$ in $L$, and $C_{1},\dots,C_{n}$ the [[Binary Relation#Equivalence Class|equivalence classes]] in $M'$, we choose $a_{1},\dots,a_{n}$ where $a_{i}\in C_{i}$, and we define $f^{M'}(C_{1},\dots,C_{n})$ to be the equivalence class in which $f^{M}(a_{1},\dots,a_{n})$ is contained. (i.e. $f^{M'}([a_{1}],\dots ,[a_{n}])=[f^{M}(a_{1},\dots ,a_{n})]$)
		- For every n-ary relation $R$ in $L$, we define the relation $R^{M'}$ in $M'$ as follow: $([a_{1}],\dots,[a_{n}])\in R^{M'}\iff(a_{1},\dots,a_{n})\in R^M$
	- Then $M'$ is well-defined (i.e. the definition of $M'$ does not depend on the choice of the representatives of the equivalence classes), and called the **quotient structure** defined by $E$ and denote by $M'=\frac{E}{M}$, and $I$ is epimorphism
- (6.21) let $H:M\to M'$ be an epimorphism, and $E$ be a binary realtion in $M$ where $(a,b)\in E \iff H(a)=H(b)$, then $E$ is congruence relation, and the quotient structure $\frac{E}{M}$ and $M'$ are isomorphic 


