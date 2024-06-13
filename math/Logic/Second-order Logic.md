
[en.wikipedia.org/wiki/Second-order_logic](https://en.wikipedia.org/wiki/Second-order_logic)
https://en.wikipedia.org/wiki/Many-sorted_logic

- **Second-order Logic** is an extension of [[Predicate Logic/Syntax|first-order logic]].

- First-order logic [[Predicate Logic/Syntax#Logical symbols|quantifies]] only variables that range over individuals, (elements of the [[Predicate Logic/Semantic#Model|domain of discourse]]). 

- Let $\mathcal{L}$ be a [[Predicate Logic/Syntax|first-order language]] over an [[Predicate Logic/Syntax#Alphabet|alphabet]] $\mathcal{A}$, we define the **second-order (monadic) logic** $\mathcal{L}^2$ as the following:
    - Two Domains (two-sorted logic) $\mathbb{D}, \mathbb{P}$
    - **Alphabet** $\mathcal{A}^2$ obtained by adding to $\mathcal{A}$ 
        - variable symbols $V_0, V_1, V_2, \ldots$
        - (optional) constant symbols $c_0, c_1, c_2, \ldots$
        - A binary relation symbol $\in$ (membership relation)
    - **Terms** in $\mathcal{L}^2$ are the terms and variables in $\mathcal{L}$, plus the second-order variables. (we denote $x,y,z$ for first-order variables and $X,Y,Z$ for second-order variables)
    - **Atomic formulas** in $\mathcal{L}^2$ are the atomic formulas in $\mathcal{L}$, the formulas $T=S$ and the formulas $t\in S$ where $t$ is a first-order term and $T,S$ are second-order terms.
    - **Formulas** in $\mathcal{L}^2$ are the formulas in $\mathcal{L}$, plus the formulas $\forall X\phi$ and $\exists X\phi$ where $\phi$ is a formula in $\mathcal{L}^2$. (the difference between $\forall x$ and $\forall X$ will appear in the semantics)
    - **Theory** in $\mathcal{L}^2$ is a consistent set of sentences in $\mathcal{L}^2$.

- Let $\mathcal{L}$ be a FOL language, and let $\mathcal{L}^2$ be the SOL language generated from $\mathcal{L}$, and let $\mathcal{M}$ be a [[Predicate Logic/Semantic#Model|model]] in $\mathcal{L}$. The **second-order model** generated from $\mathcal{M}$ (and denote $\mathcal{M}$ as well) is the model in which $\mathbb{P}$ is the set of subsets of $\mathbb{D}$ (power set of $\mathbb{D}$, i.e. $\mathbb{P} =\mathcal{P}(\mathbb{D})$)

> By these definitions, second-order logic is actually extension of first-order logic, and every SOL model is uniqe extension of the corresponding FOL model.

## Weak Definition of SOL Model

- (weak definition of SOL model) A **second-order model** in SOL language, is two-sorted model $\mathcal{M}=(\mathbb{D}, \mathbb{P}, \mathcal{I})$ where the elements of $\mathbb{P}$ are subsets of $\mathbb{D}$, and the relation symbol $\in$ is interpreted as the membership relation.

> In contrast to the strong definition, the weak definition does not require that $\mathbb{P}$ be the set of _all_ subsets of $\mathbb{D}$. 

- (t9.1) Let $\mathcal{L}$ be a SOL language and let $\mathcal{M}$ be a two-sorted model in $\mathcal{L}$ with the following property:
    - $M\models \forall X\forall Y \left[ \forall x(x\in X \leftrightarrow x\in Y) \rightarrow X=Y \right]$ (extensionality axiom)
    - then there exists a SOL model (weak) $\mathcal{M}'$ in $\mathcal{L}$ such that $\mathcal{M}$ is isomorphic to $\mathcal{M}'$. 
- (t9.2) (Commpactness Theorem & Completeness Theorem for SOL (weak))
    - Let $\mathcal{L}$ be a SOL language (weak). A second-order **proof calculus** for $\mathcal{L}$ is a proof calculus of $\mathcal{L}$ as two-sorted language, where we add the extensionality axiom as a logical axiom.
        - (compactness) If a set of sentences $T$ in $\mathcal{L}$ such that every finite subset of $T$ has a model, then $T$ has a model.
        - (completeness) For every consistent set of sentences in $\mathcal{L}$ has a model. 