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
