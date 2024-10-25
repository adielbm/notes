
# Stable Matching Problem

- Let $M=\{m_1,\ldots,m_n\},W=\{w_1,\ldots,w_n\}$ be two sets. 
	- A set $S\subseteq M\times W$ is called a **matching** if no two pairs in $S$ have the same first or second element.
		- A matching $S$ is **perfect** if each element of $M$ and each element of $W$ appears in exactly one pair in $S$.
		- A **preference list** $P_m$ for $m\in M$ is a list of elements of $W$ in the order of preference. (similarly for $w\in W$)
		- An **unstable** pair $(m,w)$ is a pair such that $m$ prefers $w$ to his current partner, and $w$ prefers $m$ to her current partner.
		- A matching $S$ is **stable** if (i) it is perfect, and (ii) there is no instability with respect to $S$.


> [!question] Stable Matching Problem
> Does there exist a stable matching for every set of preference lists?
> Given a set of preference lists, can we efficiently construct a stable matching if there is one?

> [!example] Example 1
> given $M=\{m,m'\},W=\{w,w'\}$, and the following preference lists:
> - $m$: $w,w'$
> - $m'$: $w,w'$
> - $w$: $m,m'$
> - $w'$: $m,m'$
> there is a unique stable matching: $\{(m,w),(m',w')\}$.

> [!example] Example 2
> given $M=\{m,m'\},W=\{w,w'\}$, and the following preference lists:
> - $m$: $w,w'$
> - $m'$: $w',w$
> - $w$: $m',m$
> - $w'$: $m,m'$
> there are two stable matchings: $\{(m,w),(m',w')\}$ and $\{(m,w'),(m',w)\}$.
