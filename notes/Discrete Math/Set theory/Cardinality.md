- d4.1 - $A$ is countable if and only if there exists a bijection between $A$ and a subset of $\mathbb{N}$.
- d4.3 - Let $A$ be a set. $A$ is **countable** if and only if it is **finite** or **countably infinite**. 
- **Axiom of countable choice**

# Theorems

### Countable
- Theorem 4.5 - Subset of Countable Set is Countable
- Theorem 4.6 - Every infinite set has a countably infinite subset
- Theorem 4.8 - Union of Two Countable Sets is Countable
- Theorem 4.9a - if $f:A\to B$ is onto function, and $A$ is countable, then also $B$ is countable
- Theorem 4.9b - if $f:A\to B$ is ono-to-one function, and $B$ is countable, then also $A$ is countable
- Theorem 4.10 - Countable Union of Countable Sets is Countable
- Theorem 4.11 - Cartesian Product of Two Countable Sets is Countable
- Quastion 16 - Cartesian Product of **finite** number of Countable Sets is Countable

- Let A be a countable set. Then the set of all finite sequences of members of A is also countable.

#### Countably Infinite
- Cardinality of infinite countable set is $\aleph_0$
- Theorem 4.4 - $|\mathbb{N}|=|\mathbb{Z}|=|\mathbb{Q}|=\aleph_0$

### Cardinality of the Continuum $\aleph=\mathfrak c$
Some common examples of sets with cardinality of the continuum^[עוצמת הרצף] 

- Theorem 4.7 - set of real numbers $\mathbb{R}$ is uncountable
- Theorem E - any (nondegenerate) closed or open interval in $\mathbb{R}$
- Theorem 4.12 - union of countable Set with uncountable set is uncountable
- Quastion 19 - Uncountable Set less Countable Set is Uncountable
- Theorem 4.17 -  $|A^{\mathbb{N}} \times A^{\mathbb{N}}|=|A^{\mathbb{N}}|$
- Theorem 4.18 -  $|\mathbb{R} \times\mathbb{R}|=|\mathbb{R}|=\aleph$

#### Set of Functions
$B^A$ is set of functions from $A$ to $B$

- for $A$ and $B$ finite sets, $|B^A|=|B|^{|A|}$ 
- Theorem 4.13 - $\set{0,1}^{\mathbb{N}}$ is uncountable
- Theorem 4.14 - Cardinality of Power Set is of infinite countable set is uncountable. i.e. if $|A|=\aleph_0$ then $|P(A)|=|\set{0,1}^{A}|=\aleph$
- Theorem 4.15 - if $n$ is possitive natural number, then $|\set{0,1,\ldots , n}^{\mathbb{N}}|=\aleph$
- (q21a) - if $|A|=\aleph_0$ and $B$ is finite, and $|B|\geq{2}$, then $|B^A|=\aleph$ 
- q21b - cardinality of set of infinite subsets of $\mathbb{N}$ is $\aleph$

### $\aleph{'}$
- end of section 4.6 - $|\set{0,1}^{\mathbb{R}}|=|P(\mathbb{R})|=\aleph{'}$
-  q41 - $\aleph^{\aleph}=\aleph'$ 

## Cardinality inequalities

- **Cantor's theorem** (4.25) - for any set $A$, then $|P(A)|>|A|$
- **Cantor–Bernstein theorem** (4.26) - if there exist injective functions $f : A → B$ and $g : B → A$ between the sets $A$ and $B$, then there exists a bijective function $h : A → B$.
- In terms of the cardinality of the two sets, this classically implies that if $|A| ≤ |B|$ and $|B| ≤ |A|$, then $|A|=|B|$.
- **Corollary** (4.27) - if $A\subseteq B \subseteq C$, and $|A|=|C|$, then $|A|=|B|$ and $|B|=|C|$

## Cardinal arithmetic

- (d4.36) $|A|\cdot{|B|}=|A\times{B|}$
- (4.37) $\aleph{\cdot{\aleph}}=\aleph$
- (4.37) $\aleph_0{\cdot{\aleph_0}}=\aleph_0$
- (q4.38a) $1\leq\kappa\leq\aleph_0\Longrightarrow{\kappa\cdot\aleph_0=\aleph_0\cdot\kappa=\aleph_0}$ 
- (q4.38b) $1\leq\kappa\leq\aleph\Longrightarrow{\kappa\cdot\aleph=\aleph\cdot\kappa=\aleph}$ 
- (4.38) $\kappa\lambda=\lambda\kappa$
- (4.38) $(\kappa\lambda)\mu=\kappa(\lambda\mu)$
- (4.39) $\kappa(\lambda+\mu)=\kappa\lambda+\kappa\mu$
- (4.42) $|P(A)|=2^{|A|}$ 
- (4.43) $\kappa<{2^\kappa}$ 
- (4.45) $\aleph^{\aleph_0}=\aleph$ 