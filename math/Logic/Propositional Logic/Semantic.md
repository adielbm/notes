## Model

- The set of the **truth values** (or **Boolean values**) is $\mathbb{B}=\{ \mathsf{T},\mathsf{F} \}$
- ${\mathcal{P}}$ is the set of the propositions recursively defined by the set $\mathcal{S}$ of the elementary propositions
- A **truth assignment** is a function $\nu:{\mathcal{S}}\to\mathbb{B}$, which assigns a truth value to each proposition in ${\mathcal{S}}$
- A **truth valuation** (or **model**) is a function $\mathcal{V}:\mathcal{P}\to\mathbb{B}$, which assigns a truth value to each proposition in $\mathcal{P}$
	- By structural induction the truth valuation $\mathcal{V}$ is uniquely defined by the truth assignment $\nu$:
		- For each $Q\in\mathcal{S}$, $\mathcal{V}(Q)=\nu(Q)$
		- For each $\varphi\in\mathcal{P}$
			- If $\varphi=\lnot{\psi}$ then $\mathcal{V}(\varphi)=\begin{cases}\mathsf{T} & \mathcal{V}(\psi)=\mathsf{F}\\ \mathsf{F} & \mathcal{V}(\psi)=\mathsf{T} \end{cases}$
			- If $\varphi=(\psi \lor \theta)$ then $\mathcal{V}(\varphi)=\begin{cases}\mathsf{T} & \mathcal{V}(\psi)=\mathsf{T} \text{ or } \mathcal{V}(\theta)=\mathsf{T}\\ \mathsf{F} & \text{otherwise} \end{cases}$
			- If $\varphi=(\psi \land \theta)$ then $\mathcal{V}(\varphi)=\begin{cases}\mathsf{T} & \mathcal{V}(\psi)=\mathsf{T} \text{ and } \mathcal{V}(\theta)=\mathsf{T}\\ \mathsf{F} & \text{otherwise} \end{cases}$
			- If $\varphi=(\psi \rightarrow \theta)$ then $\mathcal{V}(\varphi)=\begin{cases}\mathsf{T} & \mathcal{V}(\psi)=\mathsf{F} \text{ or } \mathcal{V}(\theta)=\mathsf{T}\\ \mathsf{F} & \text{otherwise} \end{cases}$
			- If $\varphi=(\psi \leftrightarrow \theta)$ then $\mathcal{V}(\varphi)=\begin{cases}\mathsf{T} & (\mathcal{V}(\psi)=\mathsf{T} \text{ and } \mathcal{V}(\theta)=\mathsf{T}) \text{ or } (\mathcal{V}(\psi)=\mathsf{F} \text{ and } \mathcal{V}(\theta)=\mathsf{F}) \\ \mathsf{F} & \text{otherwise} \end{cases}$
- Model of a proposition
	- if $M(\varphi)=\mathsf{T}$ we say that $\varphi$ is **true** in the model $M$, and denote $M \models \varphi$
	- if $M(\varphi)=\mathsf{F}$ we say that $\varphi$ is **false** in the model $M$, and denote $M \not\models \varphi$
- Model of a propositions Set
	- Let $K$ a set of propositions, $M$ is a **structure** (see §5.2.3 #todo ), we say that $M$ is a **model** of $K$ and denote $M \models K$ if and only if every proposition in $K$ is true in $M$
		- If $K=\{ \varphi_{1},\dots ,\varphi_{n} \}$ is a finite set of propositions then $M \models K$ if and only if $M \models \varphi_{1}\land\dots\land\varphi_{n}$
- A set of propositions $K$ is **satisfiable** if and only if there exists a model of $K$

> Terminology: 
> (Model of a proposition) $M(\varphi)=\mathsf{T}$; $\varphi$ is **true** in the model $M$; the **truth value** of $\varphi$ is $\mathsf{T}$; $M$ **satisfies** $\varphi$; $M$ is a model of $\varphi$.
> (Model of a propositions Set) $M \models K$; $M$ is a model of $K$; $M$ **satisfies** $K$; $M$ is a model of $K$; For every $\varphi\in K$, $M$ is a model of $\varphi$.
> (satisfiable set) $K$ is satisfiable; there exists a model of $K$; $K$ has a model; 

- (3.1, special-case of 2.4) Let $L_{1}$ and $L_{2}$ be proportional languages (possibly $L_{1}=L_{2}$), and let $\varphi$ be a proposition in both (and therefore the elementary propositions in $\varphi$ are in both languages). And let $M_{1}$ be a model of $L_{1}$ and $M_{2}$ be a model of $L_{2}$ such that for each elementary proposition $Q$ in $\varphi$ we have $M_{1}(Q)=M_{2}(Q)$ then $M_{1}(\varphi)=M_{2}(\varphi)$
- In a language with $n$ elementary propositions there are $2^n$ models
- (3.2) substitution of other proposition in subproposition with the the same truth value does not change the truth value of the proposition

## Tautology & Contradiction

- A proposition $\varphi$ is a **tautology** (and denoted by $\models \varphi$) if and only if it is true in every model in the language of the proposition. (טאוטולוגיה, פסוק אמיתי לוגית)
- A proposition is a **contradiction** if and only if it is false in every model in the language of the proposition. (סתירה לוגית, פסוק שקרי לוגית)
- $\varphi$ is a tautology if and only if $\lnot \varphi$ is a contradiction
- $\varphi$ is a contradiction if and only if $\lnot \varphi$ is a tautology
## Logical Equivalence

- Propositions $\varphi$ and $\psi$ are **logically equivalent** (and denoted $\varphi \equiv \psi$ (or $\varphi\iff \psi$)) if and only if they are true in the same models exactly
	- If two propositions $\varphi$ and $\psi$ have the same elementary propositions, then:
		- $\varphi \equiv \psi$ if and only if $(\varphi\leftrightarrow{\psi})$ is a tautology
	- Propositions are logically equivalent if and only if they always have the same truth values
	- Examples: [[Rules of Replacement]]
- $\varphi \equiv \psi$ if and only if $\varphi \models \psi$ and $\psi \models \varphi$ #todo
- $\varphi \equiv \psi$ if and only if for every model $M$ for $\varphi$ and $\psi$, we have $M(\varphi)=M(\psi)$ #todo

> is the term *tautologically equivalent* (Cunningham) equivalent to *logically equivalent* #todo

## Logical Implication

- A proposition $\varphi$ **logically implies** a proposition $\psi$ (or $\psi$ **logically implied by** $\varphi$), and denoted by $\varphi \implies \psi$ (or more common $\varphi \models \psi$), if and only if, in every model $M$, if $M\models{\varphi}$ then $M\models{\psi}$. 
	- $\varphi$ logically implies a proposition $\psi$ if and only if $\varphi\rightarrow{\psi}$ is a tautology. In other words, $\varphi \implies \psi$ if and only if $\models (\varphi\rightarrow{\psi})$
- A set propositions $K$ **logically implies** a proposition $\psi$ (and $\psi$ **logically implied by** $K$), and denoted by $K \implies \psi$ (or more common $K \models \psi$), if and only if, in every model in which all proposition in $K$ are true, also $\psi$ is true
	- If $K=\{ \varphi_{1},\dots ,\varphi_{n} \}$ is a finite set of propositions, then, $K\implies \psi$ if and only if $\varphi_{1}\land\dots\land\varphi_{n}\implies \psi$. 
		- Hence, $\{ \varphi_{1},\dots ,\varphi_{n} \}\implies \psi$ if and only if $\models((\varphi_{1}\land\dots\land\varphi_{n})\to \psi)$
	- (4.8, 3.6) **Compactness theorem** - Let $K$ be a propositions set, 
		- if every finite subset of $K$ has at least one model, then there exist a model of $K$
		- if $K \implies \psi$ then there exists a finite subset $\{ \varphi_{1},\dots,\varphi_{n} \}\subseteq K$ such that $\{ \varphi_{1},\dots ,\varphi_{n} \}\implies \psi$

> is the term *tautologically implies* (Cunningham) equivalent to *logically implies* #todo

> Note: If $\emptyset \models \varphi$ then $\varphi$ is a [[#Tautology & Contradiction|tautology]] which is denoted by $\models\varphi$

> $\varphi \implies \psi$ and $K\implies \varphi$ in this course are more commonly denoted by notations $\varphi \models \psi$ and $K\models \varphi$

## CNF & DNF

| Course Term             |                                                                             | BNF                                                                             |
| ----------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| קוניונקציה מרובה        | $\varphi_{1} \land\dots \land \varphi_{n}$                                  |                                                                                 |
| דיסיונקציה מרובה        | $\varphi_{1} \lor\dots \lor \varphi_{n}$                                    |                                                                                 |
| פסוק בסיסי              | $P$ or $\lnot P$                                                            | **Literal**<br>*Literal→¬Variable*<br>*Literal→Variable*<br>                    |
|                         |                                                                             | **Disjunction**<br>Disjunction→Literal∨Disjunction<br>Disjunction→Literal       |
| קוניונקציה פשוטה        | קוניונקציה מרובה של פסוקים בסיסיים                                          | **Conjunction**<br>Conjunction→Literal∧Conjunction<br>Conjunction→Literal       |
| פסוק דיסיונקטיבי נורמלי | דיסיונקציה של קוניוקציות פשוטות                                             | **Disjunctive normal form (DNF)**<br>DNF→(Conjunction)∨DNF<br>DNF→(Conjunction) |
|                         |                                                                             | **Conjunctive normal form (CNF)**<br>CNF→(Disjunction)∨CNF<br>CNF→(Disjunction) |
| קוניונקציה פשוטה מלאה   | קוניונקציה פשוטה שמופיעה בה כל פסוק אלמנטרי (לחיוב או לשלילה) בדיוק פעם אחת | **Full Conjunction**                                                            |
|                         |                                                                             |                                                                                 |
|                         |                                                                             |                                                                                 |


- Notation of full conjunction: $C=\varepsilon_{1}P_{1}\land\dots \land \varepsilon_nP_{n}$
- In a language $L_{n}$ with the elementary propositions $\{ P_{1},\dots,P_{n} \}$ there are exactly $2^n$ full conjunctions 

- (3.5) Every proposition has an equivalent DNF (see algorithm 3.3.2.1 #todo )

- A CNF is a conjunction of clauses
- A **clause** is a disjunction (or rarely, conjunction) of literals

# Definabllty

(from Sarai Sheinvald)

- Let be $\Sigma$ be a set of propositions, and $M(\Sigma)$ be the set of all models of $\Sigma$. Where $M(\Sigma)=\{ M \mid M\models \Sigma \}$
- Given a set of models $X$. 
	- If there exists a set of propositions $\Sigma$ such that $X=M(\Sigma)$ then we say that the set $X$ is **definable** (גדירה) by $\Sigma$



