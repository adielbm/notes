# Finite Limits

- Definitions: $(a_n)$ converges to $L$
	- $\displaystyle\lim_{ n \to \infty }{a_{n}}=L$
	- The sequence $(a_n)$ **converges to** (or **tends to**) the limit $L$
	- For each real number $\varepsilon >0$, there exists a natural number $N$ such that, for every natural number $n>N$, we have ${\displaystyle |a_{n}-L|<\varepsilon }$
	- $\forall\varepsilon>0,\exists N \in \mathbb{N}: \forall n \in\mathbb{N}\left(n \geq N \implies |a_n - L| < \varepsilon \right)$
- Definitions: Convergent Sequence 
	- $(a_n)$ is a **convergent sequence** 
	- $\exists{x\in\mathbb{R}}:\displaystyle\lim_{ n \to \infty }{a_{n}}=x$
	- $\exists{x\in\mathbb{R}}:\forall\varepsilon>0,\exists N \in \mathbb{N}: \forall n \in\mathbb{N}\left(n \geq N \implies |a_n - x| < \varepsilon \right)$
	- #not-in-course  (3.36. Cauchy's convergence test) $\forall{\varepsilon>0}\;\exists{N\in\mathbb{N}}:{m,n>N}\implies{|{a_{n}-a_{m}}|<\varepsilon}.$ (in words: $(a_n)$ is **Cauchy sequence** )
	- (3.34 #todo) $(a_n)$ is bounded and has only one **subsequential limit**
	- (q3.56) $(a_n)$ is bounded and $\displaystyle  {\displaystyle \liminf _{n\to \infty }a_{n}=\limsup _{n\to \infty }a_{n}}$

## Arithmetic 

> Assuming $(a_{n})$ and $(b_{n})$ are convergent (2.28)

| Sequence Limit Rules |  |  |
| ---- | ---- | ---- |
| Multiple Rule | $\displaystyle\lim_{ n \to \infty }({ca_{n})}=c\cdot\lim_{ n \to \infty }{a_{n}}$ |  |
| Sum Rule | $\displaystyle\lim_{n\to\infty} (a_n \pm b_n) =  \lim_{n\to\infty} a_n \pm \lim_{n\to\infty} b_n$ |  |
| Product Rule | $\displaystyle\lim_{n\to\infty} (a_n \cdot b_n) =  \left(\lim_{n\to\infty} a_n \right)\cdot \left( \lim_{n\to\infty} b_n \right)$ |  |
| Quotient Rule | $\displaystyle\lim_{n\to\infty} \left(\frac{a_n}{b_n}\right) = \frac{\lim\limits_{n\to\infty} a_n}{\lim\limits_{n\to\infty} b_n}$  | (provided $\displaystyle\lim_{n\to\infty} b_n \ne 0$) |
| ---- Reciprocal Rule | $\displaystyle\lim_{n\to\infty} \left(\frac{1}{a_n}\right) = \frac{1}{\lim\limits_{n\to\infty} a_n}$ |  |
|  | $\displaystyle\lim_{n\to\infty} a_n^k =  \left( \lim_{n\to\infty} a_n \right)^k$ | $\forall k\in \mathbb{N}$ |
|  | $(\forall{n},a_{n}>0)\implies\displaystyle\lim_{n\to\infty} \sqrt{ a_{n} } =  \sqrt{    \lim_{n\to\infty} a_n}$ |  |

## Theorems

- (2.29) **Shift Rule** Let $N$ be a natural number. Let $(a_{n})$ be a sequence. Then $a_{n} → a$ if and only if the *shifted* sequence $a_{N+n}→a$.

- Let $(a_n)$ be a convergent sequence
	- (2.12) **Limit Uniqueness** $((a_n) \underset{n \to \infty}{\longrightarrow} L\land{(a_n) \underset{n \to \infty}{\longrightarrow} M})\implies{L=M}$
	- (2.16) $(a_n)$ is bounded
	- (2.17) A sequence $(b_{n})$ that obtained by changing a finite number of terms of $(a_{n})$, has the same limit as $(a_{n})$ 
	- (2.25) if $\forall n,a_{n}\neq 0$ and $\displaystyle\lim_{ n \to \infty }{a_{n}}\neq 0$, then $(1/a_{n})$ is bounded
	- (2.26) if $\displaystyle\lim_{ n \to \infty }{a_{n}}\neq 0$ then for almost all $n$, we have $a_{n}\neq 0$
	- (q3.73) $\displaystyle\lim_{ n \to \infty }(a_{n+k}-a_{n})=0$  (for all $k\in\mathbb{N}$)


- Let $(a_n)$ and $(b_n)$ be two convergent sequences:
	- (2.30) if $\displaystyle\lim_{n \to \infty} a_n <\lim_{n \to \infty} b_n$ then, for almost all $n$, we have $a_n < b_n$
	- (2.31) if $a_n \leq b_n$ for each $n$, then $\displaystyle\lim_{n \to \infty} a_n \leq\lim_{n \to \infty} b_n$
	- (2.32) **Squeeze theorem**  - Let $(x_n)$ be a sequence, where $a_{n}\leq x_{n}\leq b_{n}$ for almost all $n$, then, $\displaystyle\lim_{n \to \infty} a_n =\lim_{n \to \infty} b_n=L\implies\displaystyle\lim_{n \to \infty} x_n=L$

## Null Sequence 

- (d2.21) $(a_{n})$ is **null sequence** 
- $\displaystyle \lim_{n \mathop \to \infty} {a}_n=0$
- (q2.20a) $(|a_{n}|)$ is null sequence
- $\forall \varepsilon > 0,\exists N \in \mathbb{N}: \forall n \in\mathbb{N},(n \geq N \implies |a_n| < \varepsilon)$

- A null sequence is bounded sequence
- (2.22) A product of **null** and **bounded** sequences is **null** sequence
- **Squeeze theorem** - if $(b_{n})$ is null sequence and $|a_{n}|<b_{n}$ for all $n$, then, $(a_{n})$ is null sequence

> [!Strategy] Strategy for using the definition of null sequence 
> - To show that $(a_{n})$ is **null**, solve the inequality $|a_{n}|<\varepsilon$ to find a number $N$ (generally depending on $\varepsilon$) such that $|a_{n}|<\varepsilon$ for all $n > N$.
> - To show that $(a_{n})$ is **not null**, find ONE value of $\varepsilon$ for which there is NO number $N$ such that $|a_{n}|<\varepsilon$, for all $n > N$.

# Infinite Limits

- **Infinity**
	- $\displaystyle\lim_{n\to \infty }a_{n}=\infty$
	- $a_{n}\to \infty$
	- $(a_{n})$ is **tend to infinity**
	- For every real number $K$, there is a natural number $N$ such that for every natural number $n\geq N$, we have  $a_{n}>K$; that is, the sequence terms are eventually larger than any fixed $K$.
	- $\forall K\in \mathbb {R} \left(\exists N\in \mathbb {N} \left(\forall n\in \mathbb {N} \left(n\geq N\implies a_{n}>K\right)\right)\right)$
	- (2.39) $\displaystyle\lim_{n\to\infty}(-a_{n})=-\infty$
- **Minus Infinity**
	- $\displaystyle\lim_{n\to \infty }a_{n}=-\infty$
	- $a_{n}\to -\infty$
	- $(a_{n})$ is **tend to minus infinity**
	- $\forall K\in \mathbb {R} \left(\exists N\in \mathbb {N} \left(\forall n\in \mathbb {N} \left(n\geq N\implies a_{n}<K\right)\right)\right)$

## Theorems

- If a sequence tends to infinity or minus infinity, then:
	- (2.40) it is unbounded
	- (2.41 it is divergent

- (2.44) #todo like 2.29 but for infinite limit 
- **Squeeze Theorem** for infinite limit 
	- (2.45) if $a_{n}\to \infty$ and $b_{n}\geq a_{n}$ for almost all $n$, then $b_{n}\to \infty$
	- (q2.40) if $a_{n}\to -\infty$ and $b_{n}\leq a_{n}$ for almost all $n$, then $b_{n}\to -\infty$

## Arithmetics

- (2.43, q2.39) **arithmetics of infinite limits**

| $a_{n}$   | $b_{n}$          | $\implies$ | $a_{n}+b_{n}$ | $a_{n}b_{n}$ | $a_{n}/b_{n}$ |
| --------- | ---------------- | ---------- | ------------- | ------------ | ------------- |
| $\infty$  | $\infty$         |            | $\infty$      | $\infty$     |               |
| $-\infty$ | $-\infty$        |            | $-\infty$     | $\infty$     |               |
| $-\infty$ | $\infty$         |            |               | $-\infty$    |               |
| $\infty$  | $L\in\mathbb{R}$ |            | $\infty$      |              |               |
| $\infty$  | $L>0$            |            |               | $\infty$     |               |
| $0$       | $\infty$         |            | $\infty$      |              | $0$           |

- ${a_{n}\to \infty}\implies 1/a_{n}\to0$
- (q2.57a) ${|a_{n}|\to \infty}\implies 1/a_{n}\to0$
- ${a_{n}\to 0}\land{a_{n}>0} \implies 1/a_{n}\to{\infty}$
- ${a_{n}\to 0}\land{a_{n}<0} \implies 1/a_{n}\to{(-\infty)}$

- ${a_{n}\to \infty}$ and ${b_{n}}$ is bounded $\implies a_{n}+b_{n}\to \infty$
- $\displaystyle\frac{a_n}{b_n} \to 1\land a_{n}\to 0\implies b_{n}\to 0$

# Examples 
	
- (2.37) $\displaystyle\lim_{ n \to \infty }n=\infty$
- (e2.11) $\displaystyle\lim_{ n \to \infty } \frac{n}{n+1}=1$
- (e2.12) $\displaystyle\lim_{ n \to \infty } \frac{1}{\sqrt{ n }}=0$
- $\displaystyle\lim_{ n \to \infty }\sqrt[n]{ n }=1$


- $c\in{\mathbb{R}}$
	- $\displaystyle\lim_{ n \to \infty }{\frac{c^n}{n!}}=0$


- $-1<c<1\equiv|c|<1$
	- (q2.54) $\displaystyle\lim_{ n \to \infty }(1+c+\dots+c^n)=\frac{1}{1+c}$
	- (2.33) $\displaystyle\lim_{ n \to \infty }c^n=0$
- $c>0$
	- (2.34) $\displaystyle\lim_{ n \to \infty }\sqrt[n]{c}=1$
	- $\displaystyle\lim_{ n \to \infty }{\frac{n^c}{n!}}=0$
	- $\displaystyle\lim_{ n \to \infty } \frac{1}{n^c}=0$
		- (2.10) $\displaystyle\lim_{ n \to \infty } \frac{1}{n}=0$
- $c>1$
	- (q2.41) $\displaystyle\lim_{ n \to \infty }c^n=\infty$
- $|c|>1$
	- $\displaystyle\lim_{ n \to \infty }\frac{1}{c^n}=0$ (by 2.33,q2.20)



- (q3.20) $\displaystyle\lim_{ n \to \infty }\left( 1+\frac{1}{n} \right)=1$

- (6.19) $\displaystyle\lim_{ n \to \infty }\left( \frac{n+c}{n}  \right)^n=e^c$
	- (special case c=1) $\displaystyle\lim_{ n \to \infty }\left( 1+\frac{1}{n} \right)^n=\lim_{ n \to \infty }\left( \frac{n+1}{n} \right)^n=e$
	- (q3.20d, special case c=2) $\displaystyle\lim_{ n \to \infty }\left( 1+\frac{2}{n} \right)^n=\lim_{ n \to \infty }\left( \frac{n+2}{n} \right)^n=e^2$
	- (q3.20b) $\displaystyle\lim_{ n \to \infty }\left( 1+\frac{1}{n+1} \right)^n=e$
	- (q3.20a) $\displaystyle\lim_{ n \to \infty }\left( 1+\frac{1}{n} \right)^{n+1}=e$





- (6.15) $\displaystyle\lim_{ n \to \infty }\left(a_{n}^{b_{n}}\right)=\left(\lim_{ n \to \infty }a_{n}\right)^{\left(\displaystyle\lim_{ n \to \infty }b_{n}\right)}$ (assuming $\lim a_{n}>0$, and $\lim b_{n}\in\mathbb{R}$)


- (2.49) assuming $k\in\mathbb{N}$, and $1<r\in\mathbb{R}$ 
	- $\displaystyle\lim_{ n \to \infty }\left( \frac{n^k}{r^n} \right)=0$

- (6.4) if $(q_{n})^{\infty}_{n=1}$ is a sequence of rationals that tends to 0, and $a>0$, then $\displaystyle\lim_{ n \to \infty }a^{q_{n}}=1$
- (q2.29) Let $a_{1},\dots ,a_{k}\geq 0$, then $\displaystyle\lim_{n\to\infty} \sqrt[n]{\sum_{i=1}^k a_{i}^n}=\max\{ {a_{1},\dots ,a_{k}} \}$
- #todo For any continuous function $f$, if $\lim_{n\to \infty }a_{n}$ exists, then $\lim_{n\to \infty }f\left(a_{n}\right)$ exists too.

- (some exam) given $(a_{n})$ is positive
	- $\displaystyle\lim_{ n \to \infty }(a_{n})>0\implies \lim_{ n \to \infty }\sqrt{ a_{n} }=1$
	- $\displaystyle\lim_{ n \to \infty }(a_{n})=\infty\implies \lim_{ n \to \infty }\sqrt{ a_{n} }>1$
	- $\displaystyle\lim_{ n \to \infty }(a_{n})=\infty\implies\sqrt{ a_{n} }>1$ for almost all $n$

# Ratio test

- $(a_{n})$ is sequence (all are nonzero)
	- (2.47) (given $0<r<1$) if $\displaystyle\left|{\frac {a_{n+1}}{a_{n}}}\right|\leq r$ for almost all $n$ then $\displaystyle\lim_{ n \to \infty }(a_{n})=0$
	- (2.48) $\displaystyle\lim_{n\to \infty }\left|{\frac {a_{n+1}}{a_{n}}}\right|<1\implies\lim_{ n \to \infty }(a_{n})=0$
		- if $\displaystyle\lim_{n\to \infty }{\frac {a_{n+1}}{a_{n}}}>1$ (or $=\infty$) and $a_{n}>0$, then $\displaystyle\lim_{ n \to \infty }(a_{n})=\infty$

# Cantor's Lemma

- (3.22) **Cantor's intersection** theorem (Cantor's Lemma, Nested Intervals Theorem (Property))
	- A **sequence of nested intervals** is a sequence $(I_{n})^\infty_{n=1}$ of non-empty, closed intervals, $I_{n}=[a_{n},b_{n}]$, satisfying:
		- $I_{1}\supseteq I_{2}\supseteq I_{3}\supseteq\dots$ 
		- $\displaystyle\lim_{ n \to \infty }(b_{n}-a_{n})=0$
	- The intersection of a sequence $(I_{n})^{\infty}_{n=1}$ of nested intervals is $\bigcap_{n=1}^{\infty}I_{n}=\{ x \}$, and $\displaystyle x=\lim_{ n \to \infty }(a_{n})=\lim_{ n \to \infty }(b_{n})$

> Other form of **Cantor's intersection** theorem: Let $(a_{n})^{\infty}_{n=1}$ and $(b_{n})^{\infty}_{n=1}$ be two sequence of real numbers that satisfy: $a_{n}\leq a_{n+1} < b_{n+1}\leq b_{n}$ for every $n\in\mathbb{N}$, and $\lim(b_{n}-a_{n})=0$. Then there exists a real number $c$ such that $\lim a_{n}=\lim b_{n}=c$. The number $c$ is the unique real number that satisfies $a_{n} \leq c\leq b_{n}$
