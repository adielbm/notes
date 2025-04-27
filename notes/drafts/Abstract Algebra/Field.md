
- A **field** is a set $F$ together with two binary operations on $F$ called **addition** and **multiplication**.
	- A **binary operation** on $F$ is a mapping $F × F → F$, that is, a correspondence that associates with each ordered pair of elements of F a uniquely determined element of $F$.
	- The result of the addition of $a$ and $b$ is called the **sum** of $a$ and $b$, and is denoted $a + b$. Similarly, the result of the multiplication of $a$ and $b$ is called the **product** of $a$ and $b$, and is denoted ab or $a ⋅ b$. 
	- These operations are required to satisfy the following properties, referred to as **field axioms** (in these axioms, $a$, $b$, and $c$ are arbitrary elements of the field $F$):
		- Addition
			- Associative $(a+b)+c = a+(b+c)$
			- Commutative $a+b=b+a$
			- Identity $\exists{0}:a + 0 = 0 + a = a$
			- Inverse $\forall a \in \mathbb{F}, \exists b \in \mathbb{F} : a + b = 0$
		- Multiplication
			- Associative $a · (b · c) = (a · b) · c$
			- Commutative $a · b = b · a$
			- Identity $∃ 1 \neq 0 : a · 1 = 1 · a = a$ 
			- Inverse $\forall a \in \mathbb{F} \setminus \{0\}, \exists b \in \mathbb{F} : a \cdot b = 1$
		- Distributive $a · (b + c) = a · b + a · c$

> A _field_ can be defined alternatively, but equivalently, as s [[Ring|commutative ring]] with unity in which every nonzero element is a unit (i.e., has a multiplicative inverse).

> Examples:
> - Rational numbers
> - [[Real Numbers]]
> - Complex numbers

## Field Properties

- Let $F$ be a field, and let $a,b,c,d\in F$.
	- (uniqueness of additive inverse) $\forall a\in F, \exists! b\in F: a+b=0$ 
		- (This unique element $b$ is called the **additive inverse** of $a$, and is denoted $-a$)
	- (uniqueness of multiplicative inverse) $\forall a\in F\setminus \{0\}, \exists! b\in F: a\cdot b=1$
		- (This unique element $b$ is called the **multiplicative inverse** of $a$, and is denoted $a^{-1}$ or $\frac{1}{a}$)
	- $\nexists x\in F: x\cdot 0=1$
	- (additive cancellation) $a+c=b+c\iff a=b$
	- (multiplicative cancellation) $(c\neq 0)\land(a\cdot c=b\cdot c)\implies a=b$
	- $a\cdot 0=0\cdot a=0$
	- $a+(-0)=a$
	- $a\cdot 1^{-1}=a$
	- (zero-product property) $a \cdot b=0\iff a=0\lor b=0$
	- $-0=0$
	- $1^{-1}=1$
	- $(-a)\cdot b=a\cdot (-b)=-(a\cdot b)$
	- $a\neq 0\implies(a^{-1})^{-1}=a$
	- $-a=a\cdot (-1)$
	- $(-(-a))=a$
	- $F$ is an integral domain
- Notation:
	- $a-b:=a+(-b)$
	- $a/b:=a\cdot b^{-1}$ (where $b\neq 0$)

## Field Extension

### Subfield

- The following statements are equivalent for a subset $K$ of a field $F$:
	- $K$ is a **subfield** of $F$
	- $K$ is a field with respect to the field operations inherited from $F$
	- The following conditions hold:
		- $K$ is closed under addition and multiplication
		- $K$ contains $0$ (the additive identity of $F$), and $1$ (the multiplicative identity of $F$)
		- $\forall x \in K, -x \in K$
		- $\forall x \in K \setminus \{0\}, x^{-1} \in K$

- If $K$ is a subfield of $F$, then $F$ is an **extension field** (or simply **extension**) of $K$, and this pair of fields is a **field extension**
- If $F$ is a field, then $F$ is a subfield of itself

#### Examples

- The field $\mathbb{Q}$ of rational numbers is a subfield of the field $\mathbb{R}$ of real numbers, which is itself a subfield of the field $\mathbb{C}$ of complex numbers
- The field $\mathbb{Q}$ of rational numbers has no subfields other than itself
- If $F$ is an extension field of $\mathbb{Q}$, and $K$ is a subfield of $F$, then $K$ is an extension field of $\mathbb{Q}$
- The field $\mathbb{Q}(\sqrt{2})=\{a+b\sqrt{2} \mid a,b \in \mathbb{Q}\}$ is a subfield of $\mathbb{R}$
- 

## Ordered Field

>aka **totally ordered field**

- A field $(F,+,\cdot \,)$ together with a [[Discrete Math/Set theory/Relations#Transitive Relations|total order]] denoted $\leq$ on $F$ is an **ordered field** if the order satisfies the following properties for all $\displaystyle a,b,c\in F$
	- $a\leq b\implies a+c\leq b+c$
	- $0\leq a\land 0\leq b\implies 0\leq a\cdot b$

### Alternative Definition $<$

- A field $(F,+,\cdot \,)$ together with a [[Discrete Math/Set theory/Relations#Transitive Relations|strict total order]] denoted $<$ on $F$ is an **ordered field** if the order satisfies the following properties for all $\displaystyle a,b,c\in F$
	- $a<b\implies a+c<b+c$
	- $a<b \land c>0\implies a \cdot c<b \cdot c$

#todo check that both definitions are equivalent

### Examples

- Rational numbers
- [[Real Numbers]]



- https://en.wikipedia.org/wiki/Ordered_field
- https://en.wikipedia.org/wiki/Real_number#%22The_complete_ordered_field%22
- https://en.wikipedia.org/wiki/Field_(mathematics)#Fields_with_additional_structure
- #todo Properties of ordered fields https://en.wikipedia.org/wiki/Ordered_field#Properties_of_ordered_fields


