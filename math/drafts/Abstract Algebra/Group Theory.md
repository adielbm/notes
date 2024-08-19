
- A **binary operation** on set $G$ is a function $*:G\times G\to G$

# Group

- A **group** is a set $G$ equipped with an operation $∗$ and an element $e\in G$, called the **identity**, such that 
	- (i) the associative law holds: for every a, b, c ∈ G, a ∗ (b ∗ c) = (a ∗ b) ∗ c; 
	- (ii) $e ∗ a = a$ for all a ∈ G; 
	- (iii) for every a ∈ G, there is $a' ∈ G$ with $a' ∗ a = e$

##### Examples

- The [[Matrices#Invertibility|general linear group]] $\text{GL}_n(\mathbb{F})$

### Abelian Group (Commutative Group)

- A group $G$ is called **abelian** if it satisfies the commutative law: $x ∗ y = y ∗ x$ holds for every $x, y ∈ G$

## Group Homomorphism

- Given two groups, $(G, ∗)$ and $(H, ·)$, a **group homomorphism** from $(G, ∗)$ to $(H, ·)$ is a function $h : G → H$ such that for all $u$ and $v$ in $G$ it holds that $h(u∗v)=h(u)⋅h(v)$
### Types

- Monomorphism - A group homomorphism that is **injective** (one-to-one)
- Epimorphism - A group homomorphism that is **surjective** (onto)
- Isomorphism - A group homomorphism that is **bijective** 
- Endomorphism - A group homomorphism, $h: G → G$
- Automorphism - A group endomorphism that is bijective, and hence an isomorphism
## Examples

- Let $(\mathbb{R}_{>0},×)$ be the multiplicative group of positive real numbers, and let $(\mathbb{R}, + )$ be the additive group of real numbers
	- The logarithm function $\log :\mathbb {R} ^{+}\to \mathbb {R}$ satisfies $\log(xy)=\log x+\log y$ for all $x,y\in \mathbb {R} ^{+}$, so it is a group homomorphism
	- The exponential function $\exp :\mathbb {R} \to \mathbb {R} ^{+}$ satisfies $\exp(x+y)=(\exp x)(\exp y)$ for all $x,y\in \mathbb {R}$ , so it too is a group homomorphism
	- The functions $\log$ and $\exp$ are inverses of each other (i.e. $\log \exp x=x$ and $\exp \log y=y$), so $\log$ and $\exp$ are a homomorphism that has an inverse that is also a homomorphism, therefore they are both an isomorphism of groups


# Subgroup

- If a subset $H$ of a group $G$ is itself a group under the operation of $G$, we say that $H$ is a **subgroup** of $G$ and write $H ≤ G$
	- If $H\neq G$, we say that $H$ is a **proper subgroup** of $G$ and write $H < G$
	- The subgroup $\{e\}$ is called the **trivial subgroup** of $G$
	- If $H\neq \{e\}$, we say that $H$ is a **nontrivial subgroup** of $G$

