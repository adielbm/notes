
- A **Turing machine** (TM) is a 7-tuple $(Q,\Sigma,\Gamma,\delta,q_0,q_{\text{accept}},q_{\text{reject}})$, where:
	- $Q$ is a finite set of states
	- $\Gamma$ is the tape alphabet, and $\sqcup\in \Gamma$ is the **blank symbol**
	- $\Sigma\subseteq \Gamma$ is the input alphabet (where $\sqcup\notin \Sigma$)
	- $\delta:Q\times \Gamma\longrightarrow Q\times \Gamma\times \{\text{L},\text{R}\}$ is the transition function
	- $q_0\in Q$ is the start state
	- $q_{\text{accept}}\in Q$ is the accept state
	- $q_{\text{reject}}\in Q$ is the reject state, where $q_{\text{reject}}\neq q_{\text{accept}}$

### Configuration

- A **configuration** $C$ of a Turing machine $M$ is a string $uqv$, where:
	- $u,v\in \Gamma^*$
	- $q\in Q$ represent the current state of $M$
	- $uv$ is the contents of the tape
	- The current head is positioned over the first symbol of $v$
- A **start configuration** of $M$ on a string $w$ (**input**) is a configuration $q_0w$ (indicating that the machine is in the start state $q_0$ and the input $w$ is on the tape).
- (**halting configuration**)
	- A **accepting configuration** of $M$ is a configuration $uq_{\text{accept}}v$
	- A **rejecting configuration** of $M$ is a configuration $uq_{\text{reject}}v$
	- The halting configurations do not yield any other configurations.
- A configuration $C_{1}$ **yields** a configuration $C_{2}$ if the TM can go from $C_{1}$ to $C_{2}$ in one step, as the following definition for $a,b,c\in \Gamma$, $q_i,q_j\in Q$ and $u,v\in \Gamma^*$:
	- (Middle of tape)
		- $uaq_ibv$ yields $uq_{j}acv$ if $\delta(q_i,b)=(q_j,c,L)$
		- $uaq_ibv$ yields $uacq_{j}v$ if $\delta(q_i,b)=(q_j,c,R)$
	- (Left-hand end)
		- $q_ibv$ yields $q_jcv$ if $\delta(q_i,b)=(q_j,c,L)$
		- $q_ibv$ yields $cq_jv$ if $\delta(q_i,b)=(q_j,c,R)$
	- (Right-hand end)
		- $uaq_i$ will be handled as if it were $uaq_i\sqcup$
### Acceptance

- A Turing machine $M$ **accepts** (or **reject**) a string input $w$ if there exists an _accepting_ (or _rejecting_, resp.) **computation history**, which is a sequence of configurations $C_1,C_2,\dots,C_k$ such that: 
	- $C_1$ is the start configuration of $M$ on input $w$
	- $C_k$ is an _accepting_ (or _rejecting_, respectively) configuration of $M$
	- $C_i$ yields $C_{i+1}$ for $i=1,\dots,k-1$
- A Turing machine $M$ said to **halt** on input $w$ if it either accepts or rejects $w$.

### Recursively Enumerable (RE)

- A language $L$ is said to be **recognized** by a Turing machine $M$ if:
	- For every string $w\in L$, $M$ accepts $w$
	- For every string $w\notin L$, $M$ either rejects $w$ or loops forever
- A language is said to be **Turing-recognizable** (or **recursively enumerable** (RE)) if it is recognized by some Turing machine.
- (4.18) There exists some languages that are not Turing-recognizable.
- A language is said to be **co-Turing-recognizable** if its complement is Turing-recognizable. 

#### Recursive (Decidable) Languages (R)

- A Turing machine $M$ is said to **decide** a language $L$ (and $L$ is said to be **decided** by $M$) if: 	
	- For every string $w\in L$, $M$ accepts $w$
	- For every string $w\notin L$, $M$ rejects $w$
- A Turing machine is called a **decider** if it halts on all inputs.
- A language is said to be **decidable** (**Turing-decidable** or **recursive**) if some Turing machine decides it, and it is said to be **undecidable** if it is not decidable.
- A language is decidable iff it is Turing-recognizable and co-Turing-recognizable. 
- (**Rice's Theorem**) Let $P$ be a language of TM descriptions, such that (i) $P$ is nontrivial (not empty and not all TM descriptions) and (ii) for each two TM $M_1$ and $M_2$, we have $L(M_1)=L(M_2)\implies(\langle M_1\rangle\in P\iff \langle M_2\rangle\in P)$. Then $P$ is undecidable. 


#### Examples
##### Turing-unrecognizable languages

- $\overline{A_{TM}}$
- (5.30) $EQ_{\textsf{TM}}=\{ M_1\text{ and }M_2 \text{ are TMs and }L(M_1)=L(M_2)\}$
- (5.30) $\overline{EQ_{\textsf{TM}}}$
- $EQ_{\textsf{CFG}}$
- $\overline{HALT_{\textsf{TM}}}$
- $\text{REGULAR}_{\textsf{TM}}=\{ M \text{ is a TM and }L(M) \text{ is regular}\}$
- $E_{\textsf{TM}}$

##### Turing-undecidable #todo

#todo check which are recognizable and which are not

- $ALL_{\textsf{CFG}}=\{ G \text{ is a CFG and }L(G)=\Sigma^*\}$
- $E_\textsf{LBA}=\{ M \text{ is a LBA and }L(M)=\emptyset\}$


##### Turing-recognizable but not decidable languages

- $A_{TM}=\{ \langle M,w\rangle\mid M \text{ is a TM that accepts } w\}$
- $HALT_{TM}=\{ \langle M,w\rangle\mid M \text{ is a TM that halts on } w\}$
- $D=\{ p \mid p \text{ is an integer polynomial with an integral root} \}$
- $\overline{EQ_{\textsf{CFG}}}$
##### Turing-decidable languages

- $A_{\textsf{DFA}}$, $A_{\textsf{NFA}}$, $A_{\textsf{REX}}$
- $E_{\textsf{DFA}}$
- $EQ_{\textsf{DFA}}$
- $A_{\textsf{CFG}}$
- $E_{\textsf{CFG}}$
- (4.9) Every CFL is decidable.
- Every finite language is decidable.
- $D_1=\{ p \mid p \text{ is an univariate integer polynomial with an integral root} \}$
- (5.9) $A_{\textsf{LBA}}$
- (3.12, **Element distinctness problem**) $E=\{ \#x_{1}\#x_{2}\#\dots\#x_{n}\mid x_{i}\in \{ 0,1 \}^*\text{ and }x_{1},x_{2},\dots,x_{n} \text{ are all distinct}\}$


## Description

- A **description** of a Turing machine $M$, denoted by $\langle M\rangle$, is a string that encodes the transition function of $M$ in some way.


# Equivalence Models
#### Multitape Turing Machine

- A **multitape Turing machine** is a Turing machine with multiple tapes, each with its own head. Each tape can be read and written to independently. 
	- The transition function for a multitape Turing machine is of the form $\delta:Q\times\Gamma^k\longrightarrow Q\times\Gamma^k\times\{L,R,S\}^k$, where $k$ is the number of tapes.
	- $\delta(q_i,a_1,a_2,\dots,a_k)=(q_j,b_1,b_2,\dots,b_k,D_1,D_2,\dots,D_k)$ means that the machine is in state $q_i$ and heads $1$ through $k$ are reading symbols $a_1,a_2,\dots,a_k$. The machine will change to state $q_j$, write symbols $b_1,b_2,\dots,b_k$ on the tapes, and move the heads in the directions specified by $D_1,D_2,\dots,D_k$. (where $D_i\in\{L,R,S\}$) 
- Every multitape Turing machine has an equivalent single-tape Turing machine.
- A language is Turing-recognizable iff some multitape Turing machine recognizes it.

#### Nondeterministic Turing Machine

#todo 

#### Enumerator

- An **enumerator** is a 7-tuple $(Q,\Sigma,\Gamma,\delta,q_0,q_{\text{print}},q_{\text{halt}})$, where:
	- $Q$ is a finite set of states
	- $\Gamma$ is a finite alphabet of **work tape**
	- $\Sigma$ is a finite alphabet of **output tape**
	- $\delta:Q\times \Gamma\longrightarrow Q\times \Gamma\times \{L,R\}\times\Sigma_\varepsilon$ is the transition function
	- $q_0\in Q$ is the start state
	- $q_{\text{print}}\in Q$ is the print state
	- $q_{\text{halt}}\in Q$ is the halt state (where $q_{\text{print}}\neq q_{\text{halt}}$)


##### Unrestricted Grammar

- An **unrestricted grammar** (or **phrase structure grammar**) is a formal grammar $\displaystyle {\textstyle G=(V,\Sigma,R,S)}$, where each production rule is of the form $\displaystyle \alpha \to \beta$ where:
	- $\alpha \in (V\cup \Sigma)^+$
	- $\beta \in (V\cup \Sigma)^*$

# Reducibility

#### Mapping Reducibility

- A function $f:\Sigma^*\longrightarrow\Sigma^*$ is called a **computable function** if there exists a Turing machine $M$ such that for every string $w\in \Sigma^*$, $M$ halts on input $w$ and outputs $f(w)$ on its tape.
- A language $A$ is **mapping reducible** (or **many-one reducible**) to a language $B$ (denoted by $A\leq_{\text{m}}B$), if there exists a computable function $f:\Sigma^*\longrightarrow\Sigma^*$ such that for every string $w$, we have $w\in A\iff f(w)\in B$. Such a function $f$ is called the **reduction** from $A$ to $B$.
- (5.22) If $A\leq_{\text{m}}B$ and $B$ is decidable, then $A$ is decidable.
- (5.23) If $A\leq_{\text{m}}B$ and $A$ is undecidable, then $B$ is undecidable.
- (5.28) If $A\leq_{\text{m}}B$ and $B$ is Turing-recognizable, then $A$ is Turing-recognizable.
- (5.29) If $A\leq_{\text{m}}B$ and $A$ is not Turing-recognizable, then $B$ is not Turing-recognizable.
- (e5.6) If $A\leq_{\text{m}}B$ and $B\leq_{\text{m}}C$, then $A\leq_{\text{m}}C$. 