
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

> A field can define as a [[Ring|commutative ring]] with unity in which every nonzero element is a unit (i.e., has a multiplicative inverse).

### Examples

- Rational numbers
- [[Real Numbers]]
- Complex numbers

## Ordered Field

>aka **totally ordered field**

- A field $(F,+,\cdot \,)$ together with a [[Binary Relation#Transitive Relations|total order]] denoted $\leq$ on $F$ is an **ordered field** if the order satisfies the following properties for all $\displaystyle a,b,c\in F$
	- $a\leq b\implies a+c\leq b+c$
	- $0\leq a\land 0\leq b\implies 0\leq a\cdot b$

### Alternative Definition $<$

- A field $(F,+,\cdot \,)$ together with a [[Binary Relation#Transitive Relations|strict total order]] denoted $<$ on $F$ is an **ordered field** if the order satisfies the following properties for all $\displaystyle a,b,c\in F$
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


