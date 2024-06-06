- Unit: 5 
- Due date: 2024-06-08
- Points: 4
- Course: CALCULUS II
- Questions: 5

## Q1

detemine for each of the following series if it absolutely converges, conditionally converges, or diverges.

- a. $\sum_{n=1}^{\infty}\left(\frac{\cos n}{\ln(n^{2n}+n^2)}+1-\cos\frac{1}{n}\right)$
- b. $\sum_{n=1}^{\infty}u_n$ where $u_1$ is a real number and $u_{n+1}=\frac{\sin(1/n)}{e^{u_n}}$ for all $n\in\mathbb{N}$.

### Answer 1a

> $$\sum_{n=1}^{\infty}\left(\frac{\cos n}{\ln(n^{2n}+n^2)}+1-\cos\frac{1}{n}\right)$$

- Let's show that $\sum \left( 1-\cos\left( \frac{1}{n} \right) \right)$ converges (absolutely).
	- $a_n=1-\cos\frac{1}{n}\geq0$
	- $b_n=\frac{1}{n^2}\geq0$
	- $\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n}=\lim_{n\to\infty}\frac{1-\cos\frac{1}{n}}{\frac{1}{n^2}}\underset{\text{L'Hopital}}{=}\lim_{n\to\infty}\frac{-\frac{1}{n^2}\sin\frac{1}{n}}{\frac{-2}{n^3}}=$
	  $\displaystyle=\displaystyle\lim_{n\to\infty}\frac{n}{2}\sin\frac{1}{n}=\frac{1}{2}\lim_{n\to\infty}\frac{\sin\frac{1}{n}}{\frac{1}{n}}\underset{\text{L'Hopital}}{=}\frac{1}{2}\lim_{n\to\infty}\frac{\cos\frac{1}{n}\cdot\frac{-1}{n^2}}{\frac{-1}{n^2}}=$
	  $\displaystyle=\frac{1}{2}\lim_{n\to\infty}\cos\frac{1}{n}=\frac{1}{2}>0$
	  - by limit comparison test (5.15), $a_n$ and $b_n$ have the same behavior, and since $\sum_{n=1}^{\infty}b_n=\sum_{n=1}^{\infty}\frac{1}{n^2}$ converges, then $\sum_{n=1}^{\infty}a_n=\sum_{n=1}^{\infty}\left(1-\cos\frac{1}{n}\right)$ converges. (absolutely because $a_n\geq0$ for all $n$).
- Let's show that $\sum \frac{\cos n}{\ln(n^{2n}+n^2)}$ converges.
	- First, $\displaystyle\frac{1}{\ln(n^{2n}+n^2)}\to0$ (since $0\leq\frac{1}{\ln(n^{2n}+n^2)}\leq\frac{1}{\ln(n^{2n})}=\frac{1}{2n\ln n}\leq \frac{1}{n}\to{0}$) and monotonic.
	- Also, $\sum \cos n$ is a bounded series. (by q5.33a)
	- by Dirichlet's test (5.22), the series $\sum\frac{\cos n}{\ln(n^{2n}+n^2)}$ converges.
- Let's show that $\sum \frac{\cos n}{\ln(n^{2n}+n^2)}$ conditionally converges.
	- #todo
- Since the series $\sum_{n=1}^{\infty}\left(\frac{\cos n}{\ln(n^{2n}+n^2)}+1-\cos\frac{1}{n}\right)$ is a sum of two convergent series, then it converges by the additivity of series (5.9). 
- Let's prove **in general** that the sum of an absolutely convergent series $\sum a_n$ and a conditionally convergent series $\sum b_n$ is conditionally convergent.
	- Assume for contradiction, $\sum |a_n+b_n|$.
	- Since $|b_n|-|a_n|\leq|a_n+b_n|$, then
	- $|b_n|\leq|a_n+b_n|+|a_n|$, then 
	- $\sum |b_n|\leq\sum |a_n+b_n|+\sum |a_n|$, then
	- $\sum |b_n|$ converges (by the comparison test (5.4))
	- then $\sum b_n$ converges absolutely, contradiction!
	- therefore, the series $\sum a_n+\sum b_n$ is conditionally convergent.
- **conclusion**: the series $\sum_{n=1}^{\infty}\left(\frac{\cos n}{\ln(n^{2n}+n^2)}+1-\cos\frac{1}{n}\right)$ **conditionally converges**.


### Answer 1b

> $\sum_{n=1}^{\infty}u_n$ where $u_1$ is a real number and $u_{n+1}=\frac{\sin(1/n)}{e^{u_n}}$ for all $n\in\mathbb{N}$.


- $u_{n+1}=\frac{\sin(1/n)}{e^{u_n}}>0$ for all $n\in\mathbb{N}$. therefore, $u_n>0$ for all $n>1$.
- if $u_n\to 0$ as $n\to\infty$, then $\frac{u_{n+1}}{\sin(1/n)}=e^{-u_n}\to1>0$, then $\sum u_{n+1}$ diverges by the divergence test (5.5), (since $\sum \sin(1/n)$ diverges (by limit comparison test with $\sum \frac{1}{n}$)), then $\sum u_n$ diverges.
- if $u_n$ does not converge to $0$, then $\sum u_n$ diverges by the divergence test (5.5).
- conclusion: the series $\sum_{n=1}^{\infty}u_n$ **diverges**.

## Q2

Prove or disprove the following statements:

- a. if $(a_n)$ is a convergent sequence where $a_n\neq0$ for all $n$, then the series $\sum_{n=1}^{\infty}\frac{a_{n+1}-a_n}{a_n\cdot a_{n+1}}$ converges if and only if $\lim_{n\to\infty}{a_n}\neq0$.
- b. If $a_n>0$ for all $n$, then the series $\sum_{n=1}^{\infty}{a_n}$ converges if and only if the series $\sum_{n=1}^{\infty}(a_n+a_{2n})$ converges.


### Answer 2a

> if $(a_n)$ is a convergent sequence where $a_n\neq0$ for all $n$, then the series $\sum_{n=1}^{\infty}\frac{a_{n+1}-a_n}{a_n\cdot a_{n+1}}$ converges if and only if $\displaystyle\lim_{n\to\infty}{a_n}\neq0$.

- The statement is true.
- (given) $(a_n)$ is a convergent sequence where $a_n\neq0$ for all $n$.
- let's denote: $S_n=\sum_{k=1}^{n}\frac{a_{k+1}-a_k}{a_k\cdot a_{k+1}}$.
- $S_n=\sum_{k=1}^{n}\frac{a_{k+1}-a_k}{a_k\cdot a_{k+1}}=\sum_{k=1}^{n}\left(\frac{1}{a_k}-\frac{1}{a_{k+1}}\right)=\frac{1}{a_1}-\frac{1}{a_{n+1}}$. (by telescoping sum).
- Case 1: $\displaystyle\lim_{n\to\infty}{a_n}\neq 0$
	- $\displaystyle\lim_{n\to\infty}{S_n}=\frac{1}{a_1}-\frac{1}{\displaystyle\lim_{n\to\infty}{a_{n+1}}}=\frac{1}{a_1}-\frac{1}{\displaystyle\lim_{n\to\infty}{a_{n}}}$. (since $\displaystyle\lim_{n\to\infty}{a_{n+1}}=\displaystyle\lim_{n\to\infty}{a_{n}}$, and $\displaystyle\lim_{n\to\infty}{a_n}\neq 0$, and given that $a_n\neq0$ for all $n$ and $(a_n)$ is convergent so the limit exists and is finite).
	- therefore, the series $\sum_{n=1}^{\infty}\frac{a_{n+1}-a_n}{a_n\cdot a_{n+1}}$ converges.
- Case 2: $\displaystyle\lim_{n\to\infty}{a_n}=0$
	- $\displaystyle\lim_{n\to\infty}\frac{1}{a_n}$ diverges.
	- $\displaystyle\lim_{n\to\infty}S_n=\frac{1}{a_1}-\frac{1}{\displaystyle\lim_{n\to\infty}{a_{n+1}}}$ diverges.
	- therefore, the series $\sum_{n=1}^{\infty}\frac{a_{n+1}-a_n}{a_n\cdot a_{n+1}}$ diverges.

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

> Prove that if the series $\sum_{n+1}^{\infty}(a_n+b_n)$ converges, and $\lim a_n=0$, then the series $a_1+b_1+a_2+b_2+\cdots$ converges.

#TODO


### Answer 4b

> - b. Show that if $\lim a_n$ not necessarily equal to $0$, then the series $a_1+b_1+a_2+b_2+\cdots$ diverges, even if the series $\sum_{n+1}^{\infty}(a_n+b_n)$ converges.

- Let's take $a_n=-1$ and $b_n=1$ for all $n$.
- then $\sum_{n+1}^{\infty}(a_n+b_n)=\sum_{n+1}^{\infty}0$ converges. (since $\lim \sum_{k=1}^{n}0=0$)
- but the series $a_1+b_1+a_2+b_2+\cdots=-1+1-1+1-\cdots$ diverges. (since $\lim (-1)^k \neq 0$. (by 5.5))

### Answer 4c

> - c. if $\sum_{n=1}^{\infty}a_n$ diverges, and $(a_n)$ is a null sequence of positive terms. prove that the series $a_1-a_1+a_2-a_2+\cdots$ converges conditionally.

- if we'll take $b_n=-a_n$ for all $n$, then by (4a) since the series $\sum_{n+1}^{\infty}(a_n-a_n)=\sum_{n+1}^{\infty}0=0$ converges, then the series $a_1-a_1+a_2-a_2+\cdots$ converges. and since $\sum_{n=1}^{\infty}a_n$ diverges, then by 5.24, it converges conditionally.

> find its sum. 

#TODO

> can we rearrange the terms such that the series diverges?

#TODO

## Q5 

Given a series $\sum a_n$ that diverges, and $a_n>0$ for all $n\in\mathbb{N}$. and $S_n=\sum_{k=1}^{n}a_k$. Prove that the series $\sum_{n=1}^{\infty}\frac{a_n}{S_n}$ diverges.

### Answer 5

- by 5.13, since the series $\sum a_n$ diverges and $a_n>0$ for all $n$, then the sequence of partial sums $(S_n)$ is unbounded.

#TODO
