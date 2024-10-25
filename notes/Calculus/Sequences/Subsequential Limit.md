## Definitions 

Equivalence definitions of a subsequential limit  

- $L\in\mathbb{R}$ is a **subsequential limit** of $(a_{n})^{\infty}_{n=1}$ 
- (d3.26) There exists subsequence $(a_{n_{k}})^{\infty}_{k=1}$ such that $a_{n_{k}}\to L$
- (3.27) $\forall{ε>0}$ there are infinite $n$ values for which $|a_n-L|<ε$
- (3.27) $\forall{ε>0},\forall{N\in\mathbb{N}},\exists{n>N},|a_n-L|<ε$
- (3.27 geometrically) For every neighborhood of $L$ there are infinite terms of $(a_{n})$

## Theorems
- $\infty$ (or $-\infty$) is a **subsequential limit** of $(a_{n})^{\infty}_{n=1}$ if there exists subsequence $(a_{n_{k}})^{\infty}_{k=1}$ such that $a_{n_{k}}\to \infty$ (or $a_{n_{k}}\to -\infty$)
- (q3.38) $\infty$ is a subsequential limit of $(a_{n})$ if and only if $(a_{n})$ is not bounded above

# Limit Superior & Inferior 

## Limit Superior

- The **limit superior** of $(a_{n})$ 
- $\displaystyle{\varlimsup _{n\to \infty }a_{n}} =\limsup _{n\to \infty }a_{n}:=\lim_{n\to \infty }\!{\Big (}\sup _{m\geq n}a_{m}{\Big )}=\lim_{ n \to \infty }\Big(\sup\set{a_{m}:m\geq n}\Big)$
- The maximal subsequential limit of $(a_{n})$
- The supremum of the set of all subsequential limits of $(a_{n})$

## Limit Inferior

- The **limit inferior** of $(a_{n})$
- $\displaystyle {\varliminf _{n\to \infty }a_{n}}={  \liminf _{n\to \infty }a_{n}:=\lim_{n\to \infty }\!{\Big (}\inf _{m\geq n}a_{m}{\Big )}}=\lim_{ n \to \infty }\Big(\inf\set{a_{m}:m\geq n}\Big)$
- The minimal subsequential limit of $(a_{n})$
- The infimum of the set of all subsequential limits of $(a_{n})$
## Theorems

- (3.41, 3.38) **Existence** - Each sequence has a limit superior and limit inferior
	- if it's bounded above, then $\lim\sup$ is finite, else is $\infty$ 
	- if it's bounded below, then $\lim\inf$ is finite, else is $-\infty$
- (3.40) 
	- If $\displaystyle\varlimsup _{n\to \infty }a_{n}<c$ then for almost all $n$ then $a_{n}<c$
	- If $\displaystyle c<\varlimsup _{n\to \infty }a_{n}$ then there are $\infty$ values of $n$ such that $c<a_{n}$ 
	- $\displaystyle\varlimsup _{n\to \infty }(a_{n}+b_{n})\leq\varlimsup _{n\to \infty }(a_{n})+\varlimsup _{n\to \infty }(b_{n})$
	- $\displaystyle\varlimsup _{n\to \infty }(a_{n}\cdot b_{n})\leq\varlimsup _{n\to \infty }(a_{n})\cdot \varlimsup _{n\to \infty }(b_{n})$ (if $a_{n},b_{n}\geq 0$)
	- if $c>0$ then $\displaystyle\varlimsup _{n\to \infty }(ca_{n})=c\varlimsup _{n\to \infty }(a_{n})$
	- if $a_{n}\leq b_{n}$ for each $n$ then $\displaystyle\varlimsup _{n\to \infty }a_{n}\leq\varlimsup _{n\to \infty }b_{n}$
- (q3.56) $\displaystyle  {\displaystyle \liminf _{n\to \infty }a_{n}=\limsup _{n\to \infty }a_{n}}$ if and only if $(a_{n})$ is convergent
- (q3.59) 
	- $\displaystyle\varlimsup _{n\to \infty }a_{n}=-\infty \implies \lim_{ n \to \infty }a_{n}=-\infty$
	- $\displaystyle\varliminf _{n\to \infty }a_{n}=\infty \implies \lim_{ n \to \infty }a_{n}=\infty$
- $\displaystyle  {\displaystyle \inf _{n}x_{n}\leq \liminf _{n\to \infty }x_{n}\leq \limsup _{n\to \infty }x_{n}\leq \sup _{n}x_{n}}$
- $\displaystyle\varlimsup _{n\to \infty }(a_{n}b_{n})=\lim_{ n \to \infty }a_{n}\varlimsup _{n\to \infty }(b_{n})$ (Kenneth, t12.1)


