- (**Axiom of Empty Set**) $\exists \emptyset \, \forall x \, (x \notin \emptyset)$
- (**Axiom of Extensionality**) $\forall A \, \forall B \, ( \forall x \, (x \in A \iff x \in B) \implies A = B)$
- A **set** is an unordered collection of distinct objects, called **elements** (or **members**) of the set. 
	- A set is said to **contain** its elements. We write $a \in A$ to denote that $a$ is an element of the set $A$. The notation $a \notin A$ denotes that $a$ is not an element of the set $A$.
- The **universal set** is the set containing all elements under consideration
- The **empty set** (or **null set**) is the set containing no elements, denoted by $\emptyset$ or $\{\}$
- A **singleton** is a set with exactly one element
- An **index set** is a set whose elements are used to index (label) the elements of another set

# Set Operations

- Let $A$ be a set:
	- The **power set** of $A$ is the set $\mathcal{P}(A) = \{ X \, | \, X \subseteq A \}$
	- The **complement** of $A$ is the set $A^{\complement} = \{ x \, | \, x \in U \land x \notin A \}$ (also denoted by $\overline{A}$ or $A'$)
	- A **partition** of $A$ is a set of non-empty pairwise disjoint sets whose union is $A$
		- The sets in the partition are called **cells** (or **blocks**)
		- If $a\in A$ then the cell containing $a$ is denoted by $[a]$
- Let $A$ and $B$ be sets:
	- $A$ and $B$ are **disjoint** if $A \cap B = \emptyset$
	- $A$ is a **subset** of $B$ (and $B$ is a **superset** of $A$) if $\forall x \, (x \in A \implies x \in B)$, and denoted by $A \subseteq B$ (and $B \supseteq A$)
	- $A$ is a **proper subset** of $B$ if $A \subseteq B \land A \neq B$, denoted by $A \subset B$ (and $B \supset A$)
	- The **union** of $A$ and $B$ is the set $A \cup B = \{ x \, | \, x \in A \lor x \in B \}$
	- The **intersection** of $A$ and $B$ is the set $A \cap B = \{ x \, | \, x \in A \land x \in B \}$
	- The **difference** of $A$ and $B$ is the set $A \setminus B = \{ x \, | \, x \in A \land x \notin B \}$
		- Also denoted by $A - B$
		- Also called the **complement of $B$ with respect to $A$**
	- The **symmetric difference** of $A$ and $B$ is the set $A \Delta B = (A \setminus B) \cup (B \setminus A)$
- Let be a set of sets $\mathcal{A}=\{A_i\}_{i \in I}$, where $I$ is an index set:
	- The **union** of the sets is $\displaystyle\bigcup_{i \in I} A_i = \{ x \, | \, \exists i \in I : x \in A_i \}$
	- The **intersection** of the sets is $\displaystyle\bigcap_{i \in I} A_i = \{ x \, | \, \forall i \in I : x \in A_i \}$
	- The sets in $\mathcal{A}$ are **pairwise disjoint** if $\forall i,j \in I : i \neq j \implies A_i \cap A_j = \emptyset$
  
# Set Identities

| Identity                                                                                                          | Name                |
| ----------------------------------------------------------------------------------------------------------------- | ------------------- |
| $A \cap U = A$ <br>$A\cup \emptyset = A$                                                                          | Identity laws       |
| $A \cup U = U$ <br>$A \cap \emptyset = \emptyset$                                                                 | Domination laws     |
| $A \cup A = A$ <br>$A \cap A = A$                                                                                 | Idempotent laws     |
| $\overline{\overline{A}} = A$                                                                                     | Complementation law |
| $A \cup B = B \cup A$ <br>$A \cap B = B \cap A$                                                                   | Commutative laws    |
| $A \cup (B \cup C) = (A \cup B) \cup C$ <br>$A \cap (B \cap C) = (A \cap B) \cap C$                               | Associative laws    |
| $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ <br>$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$             | Distributive laws   |
| $\overline{A \cap B} = \overline{A} \cup \overline{B}$ <br>$\overline{A \cup B} = \overline{A} \cap \overline{B}$ | De Morgan’s laws    |
| $A \cup (A \cap B) = A$ <br>$A \cap (A \cup B) = A$                                                               | Absorption laws     |
| $A \cup \overline{A} = U$ <br>$A \cap \overline{A} = \emptyset$                                                   | Complement laws     |

# Theorems

- (1.16a) $A\cap{B}\subseteq{A}$ and $A\cap{B}\subseteq{B}$
- (1.17) $A\subseteq{B}\iff{A\cap{B}=A}$
- (1.18) $C\subseteq{A\cap{B}}\iff{C\subseteq{A}\land{C\subseteq{B}}}$
- (q22) $A\cup{B}=A\cup{C}\land{A\cap{B}=A\cap{C}}\implies{B=C}$
- (q24) $A\subseteq{B}\land{C\subseteq{D}}\implies{A\cup{C}\subseteq{B\cup{D}}}\land{A\cap{C}\subseteq{B\cap{D}}}$
- $(A\subseteq B)\land (B\subseteq C)\implies A\subseteq C$

# Cardinality


- (1.19) - for finite sets: $|A\cup{B}|=|A|+|B|-|A\cap{B}|$
- (corollary) - for disjoint sets: $|A\cup{B}|=|A|+|B|$, for non-disjoint sets: $|A\cup{B}|<|A|+|B|$, and anyway $|A\cup{B}|\leq|A|+|B|$

- (d4.1) $A$ is countable if and only if there exists a bijection between $A$ and a subset of $\mathbb{N}$.
- (d4.3) Let $A$ be a set. $A$ is **countable** if and only if it is **finite** or **countably infinite**. 
- **Axiom of countable choice**

# Theorems

### Countable

- (4.5) Subset of Countable Set is Countable
- (4.6) Every infinite set has a countably infinite subset
- (4.8) Union of Two Countable Sets is Countable
- (4.9a) if $f:A\to B$ is onto function, and $A$ is countable, then also $B$ is countable
- (4.9b) if $f:A\to B$ is ono-to-one function, and $B$ is countable, then also $A$ is countable
- (4.10) Countable Union of Countable Sets is Countable
- (4.11) Cartesian Product of Two Countable Sets is Countable
- (q16) - Cartesian Product of **finite** number of Countable Sets is Countable

- Let A be a countable set. Then the set of all finite sequences of members of A is also countable.

#### Countably Infinite

- Cardinality of infinite countable set is $\aleph_0$
- (4.4) $|\mathbb{N}|=|\mathbb{Z}|=|\mathbb{Q}|=\aleph_0$

### Cardinality of the Continuum $\aleph=\mathfrak c$

Some common examples of sets with cardinality of the continuum^[עוצמת הרצף] 

- (4.7) set of real numbers $\mathbb{R}$ is uncountable
- (tE) any (nondegenerate) closed or open interval in $\mathbb{R}$
- (4.12) union of countable Set with uncountable set is uncountable
- (q19) Uncountable Set less Countable Set is Uncountable
- (4.17) $|A^{\mathbb{N}} \times A^{\mathbb{N}}|=|A^{\mathbb{N}}|$
- (4.18) $|\mathbb{R} \times\mathbb{R}|=|\mathbb{R}|=\aleph$

#### Set of Functions

$B^A$ is set of functions from $A$ to $B$

- for $A$ and $B$ finite sets, $|B^A|=|B|^{|A|}$ 
- (4.13) $\set{0,1}^{\mathbb{N}}$ is uncountable
- (4.14) Cardinality of Power Set is of infinite countable set is uncountable. i.e. if $|A|=\aleph_0$ then $|P(A)|=|\set{0,1}^{A}|=\aleph$
- (4.15) if $n$ is possitive natural number, then $|\set{0,1,\ldots , n}^{\mathbb{N}}|=\aleph$
- (q21a) - if $|A|=\aleph_0$ and $B$ is finite, and $|B|\geq{2}$, then $|B^A|=\aleph$ 
- (q21b) - cardinality of set of infinite subsets of $\mathbb{N}$ is $\aleph$

### $\aleph{'}$
- $|\set{0,1}^{\mathbb{R}}|=|P(\mathbb{R})|=\aleph{'}$
-  (q41) $\aleph^{\aleph}=\aleph'$ 

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


# Multisets