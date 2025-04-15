
- A **Turing machine** (TM) is a 7-tuple $(Q,\Sigma,\Gamma,\delta,q_0,q_{\text{accept}},q_{\text{reject}})$, where:
	- $Q$ is a finite set of states
	- $\Gamma$ is the tape alphabet, and $\sqcup\in \Gamma$ is the **blank symbol**
	- $\Sigma\subseteq \Gamma$ is the input alphabet
	- $\delta:Q\times \Gamma\longrightarrow Q\times \Gamma\times \{L,R\}$ is the transition function
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

- A Turing machine $M$ **accepts** input $w$ if a sequence of configurations $C_1,C_2,\dots,C_k$ exists, such that:
	- $C_1$ is the start configuration of $M$ on input $w$
	- $C_k$ is an accepting configuration of $M$
	- $C_i$ yields $C_{i+1}$ for $i=1,\dots,k-1$

- The set of all strings accepted by $M$ is called the **language recognized by $M$**, denoted by $L(M)$.
- A language is said to be **Turing-recognizable** (or **recursively enumerable** (RE)) if it is recognized by some Turing machine.
- For a given input, a Turing machine may:
	- Accept the input
	- Reject the input
	- Loop forever (not halt)
- A Turing machine is a **decider** if it halts on all inputs.
- A decider that recognizes some language is said to **decide** that language.
- A language is said to be **decidable** (or **Turing-decidable**  or **recursive**) if some Turing machine decides it.
	- Every finite language is decidable.
	- The language of univariate polynomials with integer roots is decidable.
	- The set polynomials with integer roots is undecidable.


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
