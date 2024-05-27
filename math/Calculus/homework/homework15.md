

# Unit 5 

-  An **(infinite) series** is an expression that can be written in the form $\displaystyle\sum _{n=1}^{\infty}a_n=a_{1}+a_{2}+\dots+ a_{n}+\dots$ where $(a_{n})$ is a sequence

	- The numbers $a_{1},a_{2},\dots$ are called the **terms** of the series. The number $a_n$ is called the $n$-th **term** of the series.
	- The sequence $(s_n)$ defined by $s_n=\sum_{k=1}^{n}a_k$ is called the **sequence of partial sums** of the series. The number $s_n$ is called the **$n$-th partial sum** of the series.
	- If $(s_n)$ converges to $L$, we say that the series **converges** and that its **sum** is $L$ and write $$a_1+a_2+a_3+\cdots=\sum_{n=1}^{\infty}a_n=\lim_{ n \to \infty }\underbrace{\sum _{k=1}^{n}a_k}_{s_{n}}=L$$
	- If the sequence of partial sums $(s_n)$ diverges, then we say that the series **diverges**.  
		- If $\displaystyle\lim_{n\to\infty}s_n=\infty$, then we say that the series **diverges to infinity**. And denote its sum by $\sum_{n=1}^{\infty}a_n=\infty$. 
		- If $\displaystyle\lim_{n\to\infty}s_n=-\infty$, then we say that the series **diverges to negative infinity**. And denote its sum by $\sum_{n=1}^{\infty}a_n=-\infty$.


#### Convergence Absolutely

- (d5.7) A series $\sum_{n=1}^{\infty}a_n$ is said to **converge absolutely** if the series of absolute values $\sum_{n=1}^{\infty}|a_n|$ converges.
- (d5.8) A series $\sum_{n=1}^{\infty}a_n$ is said to **converge conditionally** if it converges but does not converge absolutely.

# Well-known Series

## Telescoping series

- A **telescoping series** is a series of the form $\displaystyle\sum_{n=1}^{\infty}(b_n-b_{n+1})$.
- A **telescoping sum** is a sum of the form $\displaystyle\sum_{n=1}^{N}(b_n-b_{n+1})=b_1-b_{N+1}$.

## Geometric series

- A **geomorphic series** is a series of the form $\sum_{n=0}^{\infty}ar^n$ where $a\neq0$ and the **common ratio** $r$ are constants.
	- Finite series
		- ${\displaystyle\sum _{k=1}^{n}ar^{k-1}={\begin{cases}a\left({\frac {1-r^{n}}{1-r}}\right)&r\neq 1\\an&{\text{otherwise}}\end{cases}}}$
	- Infinite series
		- if $|r|<1$, $\sum_{n=0}^{\infty}ar^n=\frac{a}{1-r}$.
		- if $|r|\geq1$, $\sum_{n=0}^{\infty}ar^n$ diverges.
			- if $r=1$, $\sum_{n=0}^{\infty}ar^n$ diverges to $\infty$ if $a>0$ (or $-\infty$ if $a<0$).

## p-series & harmonic series

- A series of the form $\sum_{n=1}^{\infty}\frac{1}{n^p}$ is called a **p-series**. 
	- (e5.8) The p-series converges if $p>1$ and diverges if $p\leq1$.
	- When $p=1$, the series is called the **harmonic series** $\sum_{n=1}^{\infty}\frac{1}{n}$, which diverges.

- The **alternating harmonic series** is the series $\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}=\ln 2$.

# Arithmetic

- Additivity (5.9) - If $\sum_{k=1}^{\infty}a_k$ and $\sum_{k=1}^{\infty}b_k$ converge, then $\sum_{k=1}^{\infty}(a_k\pm b_k)$ converges and $\sum_{k=1}^{\infty}(a_k\pm b_k)=\sum_{k=1}^{\infty}a_k\pm\sum_{k=1}^{\infty}b_k$.
- (5.10) If $c\neq0$, then $\sum_{k=1}^{\infty}a_k$ converges if and only if $\sum_{k=1}^{\infty}ca_k$ converges and $\sum_{k=1}^{\infty}ca_k=c\sum_{k=1}^{\infty}a_k$.
- If $\sum_{k=1}^{\infty}a_k$ converges, then $\sum_{k=1}^{\infty}ca_k$ converges and $\sum_{k=1}^{\infty}ca_k=c\sum_{k=1}^{\infty}a_k$.
- (q5.12) If $\sum_{k=1}^{\infty}a_k=\infty$, and $c>0$, then $\sum_{k=1}^{\infty}ca_k=\infty$.  

- Convergence or divergence is unaffected by deleting a finite number of terms from a series; in particular, for any positive integer $K$, the series $\sum_{k=1}^{\infty}a_k$ converges if and only if the series $\sum_{k=K}^{\infty}a_k$ converges.

# Rearranging Series

- If $\sum a_n$ absolutely converges, then every series obtained by reordering the terms of $\sum a_n$ absolutely converges to the same sum. (Known as Riemann's theorem, or the Riemann rearrangement theorem or Riemann's theorem on rearrangement of series.)
- If $\sum a_n$ converges conditionally, then there exists a permutation of the terms of $\sum a_n$ that converges to any real number or diverges. (Known as the Riemann series theorem)
- If $\sum a_n$ converges, then every series obtained by inserting parentheses, converges to the same sum. (Known as the associative law for series.)


- (5.25) If $\sum a_n$ is a series of nonnegative terms, and $\sum b_n$ that obtains by rearranging the terms of $\sum a_n$, then $\sum b_n$ converges if and only if $\sum a_n$ converges. In this case, $\sum a_n=\sum b_n$. (Riemann's theorem)

- (5.26) If $\sum a_n$ is a series, and $\sum b_n$ that obtains by rearranging the terms of $\sum a_n$, then $\sum b_n$ absolutely converges if and only if $\sum a_n$ absolutely converges. In this case, $\sum a_n=\sum b_n$. (Riemann's theorem)

- (5.27) Riemann series theorem for conditional convergence - If $\sum a_n$ converges conditionally, then: 
	- for every $S\in\mathbb{R}$, there exists a series that obtains by rearranging the terms of $\sum a_n$ such that $S$ is its sum. 
	- Also there exists series that obtains by rearranging the terms of $\sum a_n$ that diverges to $\infty$ and $-\infty$.
	- Also, there exists a series that obtains by rearranging the terms of $\sum a_n$ that diverges. (not to $\infty$ or $-\infty$)


# Unit 5 - Tests


Strategy for Series https://eddieguo.ca/assets/downloads/notes/math101.pdf

- (q5.16) Given a convergent series $\sum_{k=1}^{\infty}a_k$, then $\displaystyle\lim_{n\to\infty}{\sum_{k=n+1}^{\infty}a_k}=0$.
## Cauchy's Convergence Test

- (5.4) The series $\sum a_n$ converges if and only if for every $\varepsilon>0$ there exists $N_{\varepsilon}$ such that if $\forall n>N_{\varepsilon}$, and $\forall p \in \mathbb{N}$ we have $\left|s_{n+p}-s_{n}\right|=\left|a_{n+1}+a_{n+2}+\cdots+a_{n+p}\right|<\varepsilon$.
## Divergence Test

- (5.5) If $\sum_{n=1}^{\infty}a_n$ converges, then $\displaystyle\lim_{n\to\infty}a_n=0$.
- (The Divergence Test) If $\displaystyle\lim_{n\to\infty}a_n\neq0$, then $\sum_{n=1}^{\infty}a_n$ diverges.
## Absolute Convergence Test

- (5.6) If the seires $\sum \left|a_n\right|$ converges, then $\sum a_n$ converges as well.

## todo 

- (5.11) #todo 
- (5.12) Let $k$ be a natural number. The series $\sum_{n=1}^{\infty}a_n$ converges if and only if the series $\sum_{n=1}^{\infty}a_{n+k}$ converges.
	- In which case, $\sum_{n=1}^{\infty}a_n=(a_1+a_2+\cdots+a_k)+\sum_{n=1}^{\infty}a_{n+k}$.
	- (q5.14) Let $m$ be a natural number. $\sum_{k=1}^{\infty}a_k=\infty$ if and only if $\sum_{k=m}^{\infty}a_{k}=\infty$.

## Monotone conv. thrm for Series  

- (5.13) If $\forall n,a_n\geq0$, then $(s_n)$ is increasing. And:
	- The series $\sum_{n=1}^{\infty}a_n$ converges if and only if $(s_n)$ is bounded
		- In this case, $\sum_{n=1}^{\infty}a_n=\lim(s_n)=\sup\{s_n:n\in\mathbb{N}\}$ 
	- The series $\sum_{n=1}^{\infty}a_n$ diverges to infinity if and only if $(s_n)$ is unbounded. 

## Comparison test

Given series $\sum a_n$ and $\sum b_n$.
#### Direct Comparison test

- The Comparison Test (5.14, "first") If $0\leq a_n\leq b_n$ for all $n>N$, then
	- If $\sum b_n$ converges, then $\sum a_n$ converges.
	- If $\sum a_n$ diverges, then $\sum b_n$ diverges. (they both diverge to infinity)

#### Limit Comparison Test

Given $a_n\geq0$ and $b_n\geq0$ for all $n>N$.

- (5.15, "second") If $\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n}=c$, where $c$ is a positive real number, then
	- The series $\sum a_n$ converges, if and only if the series $\sum b_n$ converges.
- (q5.21) 
	- If $\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n}=0$, and $\sum b_n$ converges, then $\sum a_n$ converges.
	- If $\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n}=\infty$, and $\sum b_n$ diverges, then $\sum a_n$ diverges.
## Root test (Cauchy)

- (5.16) Root test (Cauchy)
	- (a.) If there exists $q<1$ such that $\sqrt[n]{|a_n|}\leq q$ for almost all $n$, then the series $\sum a_n$ converges absolutely. 
	- (b.) If $\sqrt[n]{|a_n|}\geq 1$ for infinitely many $n$, then the series $\sum a_n$ diverges.

- (5.16*) Given $c=\displaystyle\limsup_{n\to\infty}\sqrt[n]{|a_n|}$. or ($c=\displaystyle\lim_{n\to\infty}\sqrt[n]{|a_n|}$ exists (5.16**))
	- If $c<1$, then the series $\sum a_n$ converges absolutely.
	- If $c>1$, then the series $\sum a_n$ diverges.
	- If $c=1$, then the test is inconclusive.

## Ratio test (d'Alembert)

- Ratio test (d'Alembert) (given $a_n\neq0$ for all $n$)
	- (5.17) 
		- (a.) If there exists $q<1$ such that $\left|\frac{a_{n+1}}{a_n}\right|\leq q$ for almost all $n$, then the series $\sum a_n$ converges absolutely.
		- (b.) If $\left|\frac{a_{n+1}}{a_n}\right|\geq 1$ for almost all $n$, then the series $\sum a_n$ diverges.
	- (5.17**) Given $c=\displaystyle\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|$.
		- If $c<1$, then the series $\sum a_n$ converges absolutely.
		- If $c>1$, then the series $\sum a_n$ diverges.
		- If $c=1$, then the test is inconclusive.
	(q5.26) If there exists $q<1$ such that $\left|\frac{a_{n+1}}{a_n}\right|\leq q<1$ for almost all $n$, then there exists $q\leq q'<1$ such that $\sqrt[n]{|a_n|}\leq q'$ for almost all $n$.

> If we found that $\sum a_n$ diverges by either ratio test or root test, then $\lim_{n\to\infty}a_n\neq0$.

## Cauchy Condensation Test

- (5.18) Cauchy condensation test - Let $(a_n)$ be a [[Sequences/Monotonicity|decreasing]] sequence of nonnegative terms. The series $\sum_{n=1}^{\infty}a_n$ converges if and only if the series $\sum_{n=1}^{\infty}2^na_{2^n}$ converges.

## Integral Test

(5.19) 

- Given a series $\sum a_k$ of nonnegative terms, where $a_k$ is decreasing. 
- Given $f(x)$ is decreasing (weakly), nonnegative on $[1,\infty)$, and integrable every fintie interval. And $a_n=f(n)$ for all $n\in\mathbb{N}$.

The series $\sum a_k$ converges if and only if the improper integral $\int_{1}^{\infty}f(x)dx$ converges.

> We can use integral test also when $f$ is decreasing and nonnegative on $[k_0,\infty)$ for some $k_0\in\mathbb{N}$. In this case, the series $\sum_{k=k_0}^{\infty}a_k$ converges if and only if the improper integral $\int_{k_0}^{\infty}f(x)dx$ converges. Hence, the series $\sum_{k=1}^{\infty}a_k$ converges if and only if the series $\sum_{k=k_0}^{\infty}a_k$ converges.

## Alternating Series Test (Leibniz)

- (5.20) Let $(a_n)$ be a decreasing, null, (thus nonnegative) sequence. Then:
	- (A.) The series $\sum_{n=1}^{\infty}(-1)^{n+1}a_n$ converges. (This is a special case of [[#Dirichlet's test]]. see q5.32)
	- Alternating Series Estimation Theorem - If $S=\sum (-1)^{n+1}a_n$, and $S_n$ is the $n$-th partial sum, then for all $n$ we have:
		- (B.) $S$ is between $S_n$ and $S_{n+1}$.
		- (C.) The error $|S-S_n|$ is less than $a_{n+1}$.

> A seires of the form $\sum (-1)^{n+1}a_n$ is called an **alternating series**

> These conclusions hold also for the series $\sum (-1)^{n}a_n$.

## Dirichlet's test

- (5.22) Let $\sum a_k$ be a bounded series (i.e., the sequence of partial sums is bounded). Let $(b_k)$ be a monotone sequence that converges to $0$. Then the series $\sum a_kb_k$ converges.


## Abel's test

- (5.23) Let $\sum a_k$ be a convergent series, and let $(b_k)$ be a sequence that is bounded and monotone. Then the series $\sum a_kb_k$ converges.


___

# HOMEWORK #15 

- Unit: 5 
- Due date: 2024-06-08
- Points: 4
- Semester: Spring 2024
- Course: MATH CALCULUS II (MATH 102)
- Questions: 5

## Q1

detemine for each of the following series if it absolutely converges, conditionally converges, or diverges.

- a. $\sum_{n=1}^{\infty}\left(\frac{\cos n}{\ln(n^{2n}+n^2)}+1-\cos\frac{1}{n}\right)$
- b. $\sum_{n=1}^{\infty}u_n$ where $u_1$ is a real number and $u_{n+1}=\frac{\sin(1/n)}{e^{u_n}}$ for all $n\in\mathbb{N}$.


### Answer 1a


$a_n=1-\cos\frac{1}{n}\geq0$

$b_n=\frac{1}{n^2}\geq0$


$\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n}=\lim_{n\to\infty}\frac{1-\cos\frac{1}{n}}{\frac{1}{n^2}}\underset{\text{L'Hopital}}{=}\lim_{n\to\infty}\frac{-\frac{1}{n^2}\sin\frac{1}{n}}{\frac{-2}{n^3}}=\lim_{n\to\infty}\frac{n}{2}\sin\frac{1}{n}=\frac{1}{2}\lim_{n\to\infty}\frac{\sin\frac{1}{n}}{\frac{1}{n}}\underset{\text{L'Hopital}}{=}\frac{1}{2}\lim_{n\to\infty}\frac{\cos\frac{1}{n}\cdot\frac{-1}{n^2}}{\frac{-1}{n^2}}=\frac{1}{2}\lim_{n\to\infty}\cos\frac{1}{n}=\frac{1}{2}>0$

- by limit comparison test (5.15), $a_n$ and $b_n$ have the same behavior, and since $\sum_{n=1}^{\infty}b_n=\sum_{n=1}^{\infty}\frac{1}{n^2}$ converges, then $\sum_{n=1}^{\infty}a_n=\sum_{n=1}^{\infty}\left(1-\cos\frac{1}{n}\right)$ converges. (absolutely because $a_n\geq0$ for all $n$).
- $\displaystyle\lim\frac{1}{\ln(n^{2n}+n^2)}=0$ (by $\frac{1}{\ln(n^{2n}+n^2)}\leq\frac{1}{\ln(n^{2n})}=\frac{1}{2n\ln n}$)
- and $\sum \cos n$ is a bounded series. (by q5.33a)
- by Dirichlet's test (5.22), the series $\sum_{n=1}^{\infty}\left(\frac{\cos n}{\ln(n^{2n}+n^2)}\right)$ converges. but not absolutely, if we assume #TODO❓


now, since the series $\sum_{n=1}^{\infty}\left(\frac{\cos n}{\ln(n^{2n}+n^2)}+1-\cos\frac{1}{n}\right)$ is a sum of two convergent series, then it converges by the additivity of series (5.9). but not absolutely, #todo






### Answer 1b

> - b. $\sum_{n=1}^{\infty}u_n$ where $u_1$ is a real number and $u_{n+1}=\frac{\sin(1/n)}{e^{u_n}}$ for all $n\in\mathbb{N}$.


- $u_{n+1}=\frac{\sin(1/n)}{e^{u_n}}>0$ for all $n\in\mathbb{N}$. therefore, $u_n>0$ for all $n>1$.
- if $u_n\to 0$ as $n\to\infty$, then $\frac{u_{n+1}}{\sin(1/n)}=e^{-u_n}\to1>0$, then $\sum u_{n+1}$ diverges by the divergence test (5.5), (since $\sum \sin(1/n)$ diverges (by limit comparison test with $\sum \frac{1}{n}$)), then $\sum u_n$ diverges.
- if $u_n$ does not converge to $0$, then $\sum u_n$ diverges by the divergence test (5.5).
- conclusion: the series $\sum_{n=1}^{\infty}u_n$ **diverges**.

## Q2

Prove or disprove the following statements:

- a. if $(a_n)$ is a convergent sequence where $a_n\neq0$ for all $n$, then the series $\sum_{n=1}^{\infty}\frac{a_{n+1}-a_n}{a_n\cdot a_{n+1}}$ converges if and only if $\lim_{n\to\infty}{a_n}\neq0$.
- b. If $a_n>0$ for all $n$, then the series $\sum_{n=1}^{\infty}{a_n}$ converges if and only if the series $\sum_{n=1}^{\infty}(a_n+a_{2n})$ converges.


### Answer 2a

### Answer 2b

> - b. If $a_n>0$ for all $n$, then the series $\sum_{n=1}^{\infty}{a_n}$ converges if and only if the series $\sum_{n=1}^{\infty}(a_n+a_{2n})$ converges.

- by 5.14, since $0\leq a_n\leq a_n+a_{2n}$ for all $n$, then if $\sum (a_n+a_{2n})$ converges, then $\sum a_n$  converges.
- if $\sum (a_n)$ converges, then $s_n=\sum_{k=1}^{n}a_k$ converges, and therefore bounded. and since $a_{n}\geq0$ for all $n$, then $a_{2n}\geq0$ for all $n$, and $s_{2n}=\sum_{k=1}^{2n}a_k>\sum_{k=1}^{n}a_{2k}$, therefore $\sum_{k=1}^{n}a_{2k}$ is bounded, therefore $\sum a_{2n}$ converges. (by 5.13), by additivity of series (5.9), $\sum (a_n+a_{2n})$ converges.

## Q3

Given a series $\sum a_n$ of positive where $\frac{n-1}{n}\leq\frac{a_{n+1}}{a_n}\leq\frac{n}{n+1}$ for all $n\in\mathbb{N}$.

- a. prove that the series $\sum_{n=1}^{\infty}(-1)^na_n$ converges.
- b. prove that the series $\sum_{n=1}^{\infty}a_n$ diverges.

### Answer 3a

> - a. prove that the series $\sum_{n=1}^{\infty}(-1)^na_n$ converges.

- for all n, since $\frac{a_{n+1}}{a_n}\leq\frac{n}{n+1}$, then $\frac{a_{n+1}}{a_n}<1$, then $a_{n+1}<a_n$. therefore, $(a_n)$ is a decreasing sequence of positive terms. (i.e. null sequence). by 5.20, the series $\sum_{n=1}^{\infty}(-1)^na_n$ converges.

### Answer 3b

> - b. prove that the series $\sum_{n=1}^{\infty}a_n$ diverges.

the sequence $(a_n (n-1))$ is increasing (since $\frac{a_{n+1}}{a_n}\geq\frac{n-1}{n}\implies a_{n+1}n \geq a_n(n-1)$), and since $a_n>0$ for all $n$. therefore $(a_n (n-1))$ converges (or diverges to infinity), i.e. $a_{n}(n-1)=\frac{a_n}{\frac{1}{n-1}}$ converges (or diverges to infinity), then by 5.15 (or q5.21), since the series $\sum \frac{1}{n-1}$ diverges, then the series $\sum a_n$ diverges.

## Q4

- a. Prove that if the series $\sum_{n+1}^{\infty}(a_n+b_n)$ converges, and $\lim a_n=0$, then the series $a_1+b_1+a_2+b_2+\cdots$ converges.
- b. Show that if $\lim a_n$ not necessarily equal to $0$, then the series $a_1+b_1+a_2+b_2+\cdots$ diverges, even if the series $\sum_{n+1}^{\infty}(a_n+b_n)$ converges.
- c. if $\sum_{n=1}^{\infty}a_n$ diverges, and $(a_n)$ is a null sequence of positive terms. prove that the series $a_1-a_1+a_2-a_2+\cdots$ converges, and find its sum. can we rearrange the terms such that the series diverges? 

### Answer 4a

> - a. Prove that if the series $\sum_{n+1}^{\infty}(a_n+b_n)$ converges, and $\lim a_n=0$, then the series $a_1+b_1+a_2+b_2+\cdots$ converges.




## Q5 

Given a series $\sum a_n$ that diverges, and $a_n>0$ for all $n\in\mathbb{N}$. and $(S_n)=\sum_{k=1}^{n}a_k$.

Prove that the series $\sum_{n=1}^{\infty}\frac{a_n}{S_n}$ diverges.