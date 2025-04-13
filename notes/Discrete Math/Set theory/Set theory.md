- (**Axiom of Empty Set**) $\exists \emptyset \, \forall x \, (x \notin \emptyset)$
- (**Axiom of Extensionality**) $\forall A \, \forall B \, ( \forall x \, (x \in A \iff x \in B) \implies A = B)$
- A **set** is an unordered collection of distinct objects, called **elements** (or **members**) of the set. 
	- A set is said to **contain** its elements. We write $a \in A$ to denote that $a$ is an element of the set $A$. The notation $a \notin A$ denotes that $a$ is not an element of the set $A$.
- The **universal set** (or **universe of discourse**) is the set containing all elements under consideration
- The **empty set** (or **null set**) is the set containing no elements, denoted by $\emptyset$ or $\{\}$
- A **singleton** is a set with exactly one element
- An **index set** is a set whose elements are used to index (label) the elements of another set

### Set Operations, Relations, and Properties

- Let $A$ be a set:
	- The **power set** of $A$ is the set $\mathcal{P}(A) = \{ X \, | \, X \subseteq A \}$
	- The **complement** of $A$ is the set $A^{\complement} = \{ x \, | \, x \in U \land x \notin A \}$ (also denoted by $\overline{A}$ or $A'$)

- Let $A$ and $B$ be sets:
	- $A$ and $B$ are **disjoint** if $A \cap B = \emptyset$
	- $A$ is a **subset** of $B$ (and $B$ is a **superset** of $A$) if $\forall x \, (x \in A \implies x \in B)$, and denoted by $A \subseteq B$ (and $B \supseteq A$)
	- $A$ is a **proper subset** of $B$ if $A \subseteq B \land A \neq B$, denoted by $A \subset B$ (and $B \supset A$)
	- The **union** of $A$ and $B$ is the set $A \cup B = \{ x \, | \, x \in A \lor x \in B \}$
	- The **intersection** of $A$ and $B$ is the set $A \cap B = \{ x \, | \, x \in A \land x \in B \}$
	- The **difference** of $A$ and $B$ is the set $A \setminus B = \{ x \, | \, x \in A \land x \notin B \}$
		- Also denoted by $A - B$
		- Also called the **(relative) complement of $B$ with respect to $A$**
	- The **symmetric difference** of $A$ and $B$ is the set $A \Delta B = (A \setminus B) \cup (B \setminus A)$
- Let be a set of sets $\mathcal{A}=\{A_i\}_{i \in I}$, where $I$ is an index set:
	- The **union** of the sets is $\displaystyle\bigcup_{i \in I} A_i = \{ x \, | \, \exists i \in I : x \in A_i \}$
	- The **intersection** of the sets is $\displaystyle\bigcap_{i \in I} A_i = \{ x \, | \, \forall i \in I : x \in A_i \}$
	- The sets in $\mathcal{A}$ are **pairwise disjoint** (or **mutually disjoint** or **non-overlapping**) if $\forall i,j \in I : i \neq j \implies A_i \cap A_j = \emptyset$
  
# Set Identities

| Identity                                                                                                          | Name                                    |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| $A \cap U = A$ <br>$A\cup \emptyset = A$                                                                          | Identity laws                           |
| $A \cup U = U$ <br>$A \cap \emptyset = \emptyset$                                                                 | Domination laws (Universal Bound)       |
| $A \cup A = A$ <br>$A \cap A = A$                                                                                 | Idempotent laws                         |
| $\overline{\overline{A}} = A$                                                                                     | Complementation law (Double Complement) |
| $A \cup B = B \cup A$ <br>$A \cap B = B \cap A$                                                                   | Commutative laws                        |
| $A \cup (B \cup C) = (A \cup B) \cup C$ <br>$A \cap (B \cap C) = (A \cap B) \cap C$                               | Associative laws                        |
| $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ <br>$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$             | Distributive laws                       |
| $\overline{A \cap B} = \overline{A} \cup \overline{B}$ <br>$\overline{A \cup B} = \overline{A} \cap \overline{B}$ | De Morgan’s laws                        |
| $A \cup (A \cap B) = A$ <br>$A \cap (A \cup B) = A$                                                               | Absorption laws                         |
| $A \cup \overline{A} = U$ <br>$A \cap \overline{A} = \emptyset$                                                   | Complement laws                         |
| $U^{\complement}=\emptyset$<br>$\emptyset^{\complement}=U$                                                        | Complements of $U$ and $\emptyset$      |
| $A\setminus B=A\cap B^{\complement}$                                                                              | Set Difference Law                      |

# Theorems

- Let $A$, $B$, $C$, and $D$ be sets:
	- (**Inclusion of Intersection**)
		- $A \cap B \subseteq A$
		- $A \cap B \subseteq B$
	- (**Inclusion of Union**)
		- $A \subseteq A \cup B$
		- $B \subseteq A \cup B$
	- (**Subsets Properties**)
		- (**Transitivity**) $A \subseteq B \land B \subseteq C \implies A \subseteq C$
		- (**Reflexivity**) $A \subseteq A$
		- (**Antisymmetry**) $A \subseteq B \land B \subseteq A \implies A = B$
	- (**Proper Subsets Properties**)
		- (**Irreflexivity**) $A \not\subset A$
		- (**Transitivity**) $A \subset B \land B \subset C \implies A \subset C$
		- (**Asymmetry**) $A \subset B \implies B \not\subset A$
	- $C\subseteq{A\cap{B}}\iff{C\subseteq{A}\land{C\subseteq{B}}}$
	- $(A\cup{B}=A\cup{C})\land (A\cap{B}=A\cap{C})\implies B=C$
	- $(A\subseteq{B})\land(C\subseteq{D})\implies(A\cup{C}\subseteq{B\cup{D}})\land(A\cap{C}\subseteq{B\cap{D}})$
	- $A\subseteq{B}\iff{A\cap{B}=A}$
	- $A\subseteq{B}\iff{A\cup{B}=B}$

# Cardinality

- The term _cardinal number_ (or _cardinal_) of a set $A$, denoted by $|A|$ or $\operatorname{card}(A)$, is what is commonly called the number of elements in a set.
- Two sets $A$ and $B$ are said to have the same **cardinality**, denoted by $|A| = |B|$, if there exists a [[Functions|bijection]] from $A$ to $B$.
	- If there exists an injective function from $A$ to $B$, then the cardinality of $A$ is said to be _less than or equal to_ the cardinality of $B$, denoted by $|A| \leq |B|$.
- A set $A$ is **countably infinite** if $|A| = |\mathbb{N}|$ and its cardinality is denoted by $|A| = \aleph_0$ (**aleph-null**)
- A set $A$ is **finite** if $\exists n \in \mathbb{N} : |A| = n$
- A set $A$ is **countable** if it is _finite_ or _countably infinite_
- A set $A$ is **uncountable** if it is not countable
	- $\set{0,1}^{\mathbb{N}}$ is uncountable
- The set of real numbers $\mathbb{R}$ is uncountable, and its cardinality is denoted by $\mathfrak{c}$ (or $2^{\aleph_0}$ or $\beth_1$) and called the **cardinality of the continuum** (or **beth-one**)
	- If a set $A$ has a cardinality $|A|=\mathfrak{c}$, then $A$ is uncountable
- (**Cantor's theorem**) For every set $A$, we have $|A| < |\mathcal{P}(A)|$
- If $|A|=\aleph_0$, then $\mathcal{P}(A)$ is uncountable
- Let $A$ and $B$ be sets:
	- (**Cantor–Bernstein theorem**) If there exist injective functions $f : A → B$ and $g : B → A$ between the sets $A$ and $B$, then there exists a bijective function $h : A → B$.
	- If $|A| \leq |B|$ and $|B| \neq |A|$, then it is denoted $|A| < |B|$.
	- $|A|=|A|$
	- $|A|=|B|\iff|B|=|A|$
	- $|A|=|B|\land|B|=|C|\implies|A|=|C|$
	- $A$ is countable iff there exists a bijection between $A$ and some subset of $\mathbb{N}$.
	- If $B$ is countable and $A\subseteq{B}$, then $A$ is countable
	- If $A$ is uncountable and $A\subseteq{B}$, then $B$ is uncountable
	- If $A$ is uncountable and $B$ is countable then: 
		- $A\setminus{B}$ is uncountable
		- $A\cup{B}$ is uncountable
	- If $A$ is infinite, then there exists a set $X$ such that $X$ is countable
	- If $A$ and $B$ are countable then: 
		- $A \cup B$ is countable (This can be generalized to a finite number of sets)
		- $A \times B$ is countable (This can be generalized to a finite number of sets)
	- $|A \cup B| \leq |A|+|B|$
	- If $A$ and $B$ are finite, then:
		- $|A \cup B| = |A| + |B| - |A \cap B|$, 
		- If $A$ and $B$ are disjoint, then $|A \cup B| = |A| + |B|$
		- If $A$ and $B$ are non-disjoint, then $|A \cup B| < |A| + |B|$
		- $|B^A|=|B|^{|A|}$
	- if $f:A\to B$ is onto function, and $A$ is countable, then $B$ is countable
	- if $f:A\to B$ is ono-to-one function, and $B$ is countable, then $A$ is countable
	- $|A|\cdot{|B|}:=|A\times{B|}$
- If $|A|=\aleph_0$ and $B$ is finite, and $|B|\geq{2}$, then $|B^A|=\mathfrak{c}$
- If $A\subseteq B \subseteq C$, and $|A|=|C|$, then $|A|=|B|$ and $|B|=|C|$
- $\mathfrak{c}\cdot\mathfrak{c}=\mathfrak{c}$
- $\aleph_0{\cdot{\aleph_0}}=\aleph_0$
- (q4.38a) $1\leq\kappa\leq\aleph_0\Longrightarrow{\kappa\cdot\aleph_0=\aleph_0\cdot\kappa=\aleph_0}$ 
- (q4.38b) $1\leq\kappa\leq\mathfrak{c}\Longrightarrow{\kappa\cdot\mathfrak{c}=\mathfrak{c}\cdot\kappa=\mathfrak{c}}$ 
- (4.38) $\kappa\lambda=\lambda\kappa$
- (4.38) $(\kappa\lambda)\mu=\kappa(\lambda\mu)$
- (4.39) $\kappa(\lambda+\mu)=\kappa\lambda+\kappa\mu$
- (4.42) $|P(A)|=2^{|A|}$ 
- (4.43) $\kappa<{2^\kappa}$ 
- (4.45) $\mathfrak{c}^{\aleph_0}=\mathfrak{c}$

#### Examples

- The cardinality of the following sets is $\aleph_0$:
	- The set of natural numbers $\mathbb{N}$
	- The set of integers $\mathbb{Z}$
	- The set of rational numbers $\mathbb{Q}$
	- The set of algebraic numbers $\mathbb{A}$
- The following sets have the cardinality $\mathfrak{c}=2^{\aleph_0}=\beth_1$:
	- The set of real numbers $\mathbb{R}$
	- $\mathcal{P}(\mathbb{N})$
	- $\mathbb{N}^{\mathbb{N}}$
	- The set of complex numbers $\mathbb{C}$
	- The set of irrational numbers $\mathbb{R} \setminus \mathbb{Q}$
	- The set of transcendental numbers
	- Eucledian space $\mathbb{R}^n$ for any positive integer $n$
	- Every interval non-degenerate in $\mathbb{R}$
	- $A^{\mathbb{N}}$
	- $\mathbb{R} \times\mathbb{R}$
	- $\{0,1,\ldots,n\}^{\mathbb{N}}$ for any positive integer $n$
- The following sets have the cardinality $2^{\mathfrak{c}}=\beth_2$:
	- $\mathcal{P}(\mathbb{R})$
	- $\{0,1\}^{\mathbb{R}}$
	- $2^{\mathbb{R}}$
	- $\mathbb{R}^{\mathbb{R}}$


# Multisets

- A _multiset_ (or _bag_) is a modification of the concept of a set that, unlike a set, allows for multiple instances for each of its elements.
- A **multiset** may be formally defined as an ordered pair $M=(U, m)$, where: 
	- $U$ is a set called the **underlying set**
	- $m:U \to \mathbb{Z}_{\geq 0}$ is a function that assigns to each element of $U$ a nonnegative integer
		- The value $m(x)$ for an element $x\in U$ is called the **multiplicity** of $x$ in the multiset $M$ and interpreted as the number of occurrences of $x$ in the multiset.
	- The [[Set theory#Cardinality|cardinality]] (or **size**) of the multiset $M$ is the sum of the multiplicities of its elements, denoted by $\displaystyle |M| = \sum_{x \in U} m(x)$
	- The **support** of the multiset $M$ is the set $\displaystyle \operatorname{supp}(M) = \{ x \in U \, | \, m(x) > 0 \}$
	- The elements of the support can be listed with their multiplicities: $\displaystyle M = \{ a_1^{m(a_1)}, a_2^{m(a_2)}, \ldots, a_n^{m(a_n)} \}$ where $a_i \in U$ and $m(a_i) > 0$.


