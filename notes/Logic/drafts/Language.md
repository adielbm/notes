
- An **alphabet** (or **keyboard**) is any finite or infinite set $\Sigma$ of **letters** (arbitrary symbols)
- A **string** is a finite sequence of letters over an alphabet
	- A string $T$ is a **prefix** of a string $S$ if and only if $S$ can be formed by concatenating $T$ with another string $T'$ as $S=TT'$
		- A **proper prefix** of a string $S$ is a prefix of $S$ which does not equal the whole of $S$
	- A string $T$ is a **suffix** of a string $S$ if and only if $S$ can be formed by concatenating $T$ with another string $T'$ as $S=T'T$
		- A **proper suffix** of a string $S$ is a suffix of $S$ which does not equal the whole of $S$
	- A string $u$ is a **substring** (or **factor**) of a string $t$ if there exists two strings $p$ and $s$ such that $t=pus$. 
		- The empty string is a substring of every string


- The set of strings is called the **set of words over** $\Sigma$, denoted by $\Sigma^*$
- In $\Sigma^*$, the **concatenation** (symbol $\cdot$) binary operation is defined. 
	- $α⋅β$ or $\alpha \beta$ is the string composed of the concatenation of $α$ and $β$. Its beginning is the string $α$, and its continuation is the string β. 
	- If a word can be written as $α⋅β$, then $α$ is the **prefix** of the word, and $β$ is its **suffix**.
- Empty string $\varepsilon \in\Sigma^*$
- Every subset $L\subseteq \Sigma^*$ is a **language over** $\Sigma$
