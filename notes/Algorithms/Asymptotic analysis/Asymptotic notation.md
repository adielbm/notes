## Asymptotic Bounds

- **asymptotic upper bound** (strict)
	- $f(n)=o(g(n))$
	- $\forall c>0,\exists\, n_{0}>0 : \forall n>n_{0},\, 0\leq{f(n)}<c\cdot g(n)$ 
	- $\displaystyle\lim_{n\to \infty }{\frac {f(n)}{g(n)}}=0$ 
	- $g(n)=\omega(f(n))$
- **asymptotic upper bound** 
	- $f(n)=O(g(n))$
	- $\forall{c>0},\exists\, n_{0}>0 : \forall n>n_{0},\, 0\leq{f(n)}\leq c\cdot g(n)\,$
	- $g(n)=\Omega(f(n))$
- **asymptotically tight bounds** 
	- $f(x)=\Theta({g(n)})$
	- ${{f(n)=O(g(n))}\land{f(n)=\Omega{(g(n))}}}$
- **asymptotic lower bound** 
	- $f(n)=\Omega(g(n))$
	- $\forall{c>0},\,\exists\, n_{0}>0:\forall n>n_{0},\,0\leq c\cdot g(n)\leq{f(n)}$
	- $g(n)=O(f(n))$
- **asymptotic lower bound** (strict)
	- $f(n)=\omega(g(n))$
	- $\forall{c>0},\exists\, n_{0}>0:\forall n>n_{0},\,0\leq c\cdot g(n)<{f(n)}$
	- $\displaystyle\lim_{ n \to \infty }{\frac{f(n)}{g(n)}=\infty}$
	- $g(n)=o(f(n))$

- The **running time** of an algorithm is the number of primitive operations or steps executed.
	- The **worst-case running time** (denoted by $T(n)$) is the maximum number of steps taken on any instance of size $n$.



- $f=O(h)\land g=O(h)\implies f+g=O(h)$ (In general, $\forall{i},f_{i}=O(h)\implies\sum{f_{i}}=O(h)$)
- If $\displaystyle\lim_{n\to \infty }{\frac{f(n)}{g(n)}}=c>0$ exists, then $f(n)=\Theta(g(n))$
- 
- Transitivity
	- $f(n)=\Theta(g(n))\land g(n)=\Theta(h(n))\implies f(n)=\Theta(h(n))$
	- $f(n)=O(g(n))\land g(n)=O(h(n))\implies f(n)=O(h(n))$
	- the same for $\Omega ,o,\omega$
- Reflexivity
	- $f(n)=\Theta(f(n))$
	- $f(n)=O(f(n))$
	- $f(n)=\Omega(f(n))$
	- $n!=o(n^n)$
	- $\log(n!)=\Theta(n\log n)$
	- $\log^kn=o(n)$ for $k>0$
	- $P_{d}(n)=\sum_{k=0}^da_{k}n^{k}=\Theta(n^d)$
- see also [[Calculus/Sequences/Order]] of sequences





- $cf(n)=O(f(n))$. (where $c>0$)
- $c\cdot O(f(n))=O(f(n))$ (where $c>0$)
- $c\cdot g(n)=O(f(n))\iff g(n)=O(f(n))$  (where $c>0$)

- $O(f_{1}(n))+\dots+O(f_{k}(n))=O(f_{1}(n)+\dots+f_{k}(n))$
- $O(f_{1}(n))+\dots+O(f_{k}(n))=O(\max\set{f_{1}(n),\dots ,f_{k}(n)})$
- $O(f_{1}(n))\cdots O(f_{k}(n))=O(f_{1}(n)\cdots f_{k}(n))$

- $f(n)=O(g(n))\implies{g(n)=\Omega{(f(n))}}$

- If $g=O(f)$ then $f+g=\Theta(f)$ (given $f$ and $g$ are non-negative)
- $f(n)=o(g(n))\iff g(n)=\omega(g(n))$
- $f(n)=o(g(n))\implies{\log f(n)=O(\log g(n))}$

- $(n+a)^b=\Theta(n^b)$ ($b>0$) (e3.1-2)
- $o(g(n))\cap \omega(g(n))=\emptyset$ (e3.1-7)

- $2^{n+1}=O(2^n)$ (e3.1-4)

- If $f(n)$ is a polynomial of degree $d$, in which the leading coefficient $a_{d}$ is positive, then $f(n)=\Theta(n^d)$
- $\forall b>1,\forall x>0, \log_b n = O(n^x)$
- $\forall r>1,\forall d>0, n^d = O(r^n)$ (In particular, every exponential grows faster than every polynomial)


#### Common Running Times

| Name                 | Running Time            | $T(n)$     |
| -------------------- | ----------------------- | ------------------- |
| constant time        | $O(1)$                  | $T(n)=c$           |
| log-logarithmic      | $O(\log{\log n})$       |                     |
| logarithmic time     | $O(\log{n})$            | $\log n, \log(n^2)$ |
| polylogarithmic time | $O((\log n)^k),\,\,k>1$ | $(\log n)^2$        |
| fractional power     | $O(n^k),\,\,0<k<1$      |                     |
| linear time          | $O({n})$                | $T(n)\leq c\cdot n$ |
| linearithmic time    | $O(n\log n)$            | $T(n)\leq c\cdot n\log n$ |
| quasilinear time     |                         |                     |
| quadratic time       | $O({n^2})$              | $T(n)\leq c\cdot n^2$ |
| cubic time           | $O({n^3})$              | $T(n)\leq c\cdot n^3$ |
| polynomial time      | $O(n^k),\,\,k>1$        | $T(n)\leq c\cdot n^k$ |
| exponential time     | $O(k^n),\,\, k>1$       |                     |
| factorial time       | $O(n!)$                 |                     |

# Chapter 2: Algorithm Analysis

## 2.1: Computational Tractability

- Proposed Definition of Efficiency:
	1. An algorithm is **efficient** if it performs well on real input instances.
	2. An algorithm is **efficient** if it performs _quantitatively better_ than brute-force search in worst-case scenarios.
	3. An algorithm is **efficient** if it runs in _polynomial time_.

- A **Brute-force search** is a straightforward but typically inefficient approach involving the examination of all possible solutions


# Polynomial Time

#todo 

- **Polynomial Algorithm**        
- **Pseudo-Polynomial Algorithm**   
- **Weakly Polynomial Algorithm**   
- **Strongly Polynomial Algorithm** 


|                                   |                                                                            | input size            |                                               |
| --------------------------------- | -------------------------------------------------------------------------- | --------------------- | --------------------------------------------- |
| **Polynomial Algorithm**          | with numbers represented in binary.                                        | polynomial input size |                                               |
| **Pseudo-Polynomial Algorithm**   | depends on the numerical values of the input, which are in unary notation. | polynomial input size |                                               |
| **Weakly Polynomial Algorithm**   |                                                                            |                       | depend on **input numerical values**          |
| **Strongly Polynomial Algorithm** |                                                                            |                       | does not depend on **input numerical values** |
