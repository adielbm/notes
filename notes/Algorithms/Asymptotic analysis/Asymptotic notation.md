## Definitions

- $f(n)=o(g(n))$
	- $\forall{(c>0)}\,\exists(n_{0}>0)\,\text{ s.t. }(0\leq{f(n)}<cg(n))\,\forall n>n_{0}$
	- $\displaystyle\lim_{n\to \infty }{\frac {f(n)}{g(n)}}=0$ 
- ***asymptotic upper bound*** $f(n)=O(g(n))$
	- $\forall{(c>0)}\,\exists(n_{0}>0)\,\text{ s.t. }(0\leq{f(n)}\leq{cg(n)})\,\forall n>n_{0}$
- ***asymptotically tight bounds*** $f(x)=\Theta({g(n)})$
	- ${{f(n)=O(g(n))}\land{f(n)=\Omega{(g(n))}}}$
- ***asymptotic lower bound*** $f(n)=\Omega(g(n))$
	- $\forall{(c>0)}\,\exists(n_{0}>0)\,\text{ s.t. }(0\leq{cg(n)}\leq{f(n)})\,\forall n>n_{0}$
- $f(n)=\omega(g(n))$
	- $g(n)=o(f(n))$
	- ${\lim_{ n \to \infty }{\frac{f(n)}{g(n)}=\infty}}$

> see also [[Calculus/Sequences/Order]] of sequences
## Theorems 

### Transitivity

- $f(n)=\Theta(g(n))\land g(n)=\Theta(h(n))\implies f(n)=\Theta(h(n))$
- $f(n)=O(g(n))\land g(n)=O(h(n))\implies f(n)=O(h(n))$
- the same for $\Omega ,o,\omega$

### Reflexivity

- $f(n)=\Theta(f(n))$
- $f(n)=O(f(n))$
- $f(n)=\Omega(f(n))$


- $n!=o(n^n)$
- $\log(n!)=\Theta(n\log n)$
- $\log^kn=o(n)$ for $k>0$
- $P_{d}(n)=\sum_{k=0}^da_{k}n^{k}=\Theta(n^d)$


| Name                 | examples            | Running Time           |
| -------------------- | ------------------- | ---------------------- |
| constant time        | $c$                 | $O(1)$                 |
| log-logarithmic      |                     | $O(\log{\log n})$      |
| logarithmic time     | $\log n, \log(n^2)$ | $O(\log{n})$           |
| polylogarithmic time | $(\log n)^2$        | $O((\log n)^c)$, $c>1$ |
| fractional power     |                     | $O(n^c)$, $0<c<1$      |
| linear time          |                     | $O({n})$               |
| linearithmic time    |                     |                        |
| quasilinear time     |                     |                        |
| quadratic time       |                     | $O({n^2})$             |
| cubic time           |                     | $O({n^3})$             |
| exponential time     |                     | $O(c^n), c>1$          |


- $cf(n)=O(f(n))$. (where $c>0$)
- $c\cdot O(f(n))=O(f(n))$ (where $c>0$)
- $c\cdot g(n)=O(f(n))\iff g(n)=O(f(n))$  (where $c>0$)

- $O(f_{1}(n))+\dots+O(f_{k}(n))=O(f_{1}(n)+\dots+f_{k}(n))$
- $O(f_{1}(n))+\dots+O(f_{k}(n))=O(\max\set{f_{1}(n),\dots ,f_{k}(n)})$
- $O(f_{1}(n))\cdots O(f_{k}(n))=O(f_{1}(n)\cdots f_{k}(n))$

- $f(n)=O(g(n))\implies{g(n)=\Omega{(f(n))}}$


- $f(n)=o(g(n))\iff g(n)=\omega(g(n))$
- $f(n)=o(g(n))\implies{\log f(n)=O(\log g(n))}$

- $(n+a)^b=\Theta(n^b)$ ($b>0$) (e3.1-2)
- $o(g(n))\cap \omega(g(n))=\emptyset$ (e3.1-7)

- $2^{n+1}=O(2^n)$ (e3.1-4)

