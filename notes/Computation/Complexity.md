- Let $M$ be a determistic decider TM. 
	- The **running time** or **time complexity** of $M$ is the function $f:\mathbb{N} \to \mathbb{N}$, where $f(n)$ is the maximum number of steps that $M$ takes on any input of length $n$. 
		- If $f$ is the running time of $M$, we say that $M$ **runs in time $f(n)$**, and we say that $M$ is a **$f(n)$-time TM**.

- Time complexity classes
	- (**(deterministic) time complexity class**) $\mathsf{TIME}(t(n))=\set{L \mid L \text{ is decidable by an }O(t(n))\text{-time TM}}$.
		- (Also denoted $\mathsf{DTIME}(t(n))$).
	- (**nondeterministic time complexity class**) $\mathsf{NTIME}(t(n))=\set{L \mid L \text{ is decidable by an }O(t(n))\text{-time NTM}}$.
	- (examples: $\mathsf{TIME}(n^2)$ is the set of languages decidable by a TM that runs in $O(n^2)$ time. $\mathsf{NTIME}(\log n)$ is the set of languages decidable by a NTM that runs in $O(\log n)$ time.)



- The complexity class $\mathrm{P}$ (**polynomial time**) is defined as $\displaystyle\mathrm{P}=\bigcup_{k \in \mathbb{N}}\mathsf{TIME}(n^k)$ (i.e. the set of languages decidable by a polynomial-time TM)
	- (Also denoted $\mathsf{PTIME}$, or $\mathsf{DTIME}(n^{O(1)})$).
- A **verifier** for a language $L$ is a TM $V$ such that $L=\{w\mid \exists c : V(\langle w,c\rangle)=\textsf{accept} \}$.
	- Let $L$ be a language with verifier $V$. 
		- A **certificate** (or **proof**) for a string $w \in L$ is a string $c$ such that $V(\langle w,c\rangle)=\textsf{accept}$.
		- The **running time** of $V$ is 
			- (e.g. A **polynomial time verifier** is a verifier that runs in polynomial time, and a language is **polynomially verifiable** if it has a polynomial time verifier.)
- The complexity class $\mathrm{NP}$ (**nondeterministic polynomial time**) can be defined by the two equivalent definitions:
	- $\mathrm{NP}=\displaystyle\bigcup_{k \in \mathbb{N}}\mathsf{NTIME}(n^k)$ (i.e. the set of languages decidable by a polynomial-time NTM).
	- (7.20) $\mathrm{NP}=\set{L \mid L \text{ is decidable by a polynomial time verifier}}$.


- $\mathrm{P}\subseteq\mathrm{NP}$.
- $\displaystyle\mathrm{EXPTIME}=\bigcup_{k \in \mathbb{N}}\mathsf{TIME}(2^{n^k})$ is the time complexity class of languages decidable by an exponential time TM.
- $\mathrm{NP}\subseteq\mathrm{EXPTIME}$.

- Exmaples of languages in $\mathrm{NP}$:
	- **Clique**: $\text{CLIQUE}=\{\langle G,k\rangle \mid G \text{ is an undirected graph with a }k\text{-clique}\}$.
	- **Subset sum problem** (SSP): $\displaystyle\text{SUBSET-SUM}=\{\langle S,k\rangle \mid S \text{ is a multiset of integers and there exists }  T\subseteq S \text{ s.t.} \sum_{x\in T}x=k\}$.


- A function $f:\Sigma^*\to\Sigma^*$ is a **polynomial time computable function** if there exists a polynomial time TM $M$ such that for every $w\in\Sigma^*$, $M$ halts with $f(w)$ on its tape.
- A language $A$ is **polynomial time many-one reducible** (or **polynomial time (mapping) reducible**) to a language $B$, denoted $A\leq_P B$, if there exists a polynomial time computable function $f:\Sigma^*\to\Sigma^*$ such that for every $w\in\Sigma^*$, $w\in A \iff f(w)\in B$. (in such case $f$ is called the **polynomial time reduction** of $A$ to $B$).
	- If $A\leq_P B$ and $B\in\mathrm{P}$, then $A\in\mathrm{P}$.
	- If $A\leq_P B$ and $B\leq_P A$, then $A$ and $B$ are **polynomial time equivalent**, denoted $A\equiv_P B$. 
		- $\equiv_P$ is an equivalence relation on $\mathrm{NP}$. 
		- $\mathrm{P}\setminus \{ \emptyset, \Sigma^* \}$ is an equivalence class of $\equiv_P$. 
		- 
- A language $B$ is **$\mathrm{NP}$-complete** if:
	- $B\in\mathrm{NP}$.
	- For every language $A\in\mathrm{NP}$, $A\leq_P B$.
- (7.35) If $B$ is $\mathrm{NP}$-complete and $B\in\mathrm{P}$, then $\mathrm{P}=\mathrm{NP}$.
- (7.36) If $B$ is $\mathrm{NP}$-complete and $B\leq_P C$ for $C$ in $\mathrm{NP}$, then $C$ is $\mathrm{NP}$-complete.
- If $\mathrm{P}\neq\mathrm{NP}$, then:
	- (**Ladner's theorem**) $\mathrm{NP}\text{-intermediate}=\mathrm{NP}\setminus(\mathrm{P}\cup\mathrm{NP}\text{-complete})\neq \emptyset$.  
- If $\mathrm{P}=\mathrm{NP}$, then:
	- $\mathrm{NP}\text{-complete}=\mathrm{P}=\mathrm{NP}$. 
	- 
