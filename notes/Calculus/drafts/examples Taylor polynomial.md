



# Examples 

- $\displaystyle(1+x)^a=\sum^n_{k=0}\binom{a}{k}x^k+R_{n}(x)$
## Maclaurin polynomial ($a=0$)

- (e4.3) Maclaurin polynomial ($2n+1$ order) of $\sin x$
	- $\displaystyle\sin x=\sum^{n}_{k=0}(-1)^k\cdot \frac{x^{2k+1}}{(2k+1)!}+R_{2n+2}(x)$ (remark: $R_{2n+2}=R_{2n+1}$, therefore $2n+2$ order as well)
		- $\displaystyle\left|{R_{2n+2}(x)}\right|\leq \frac{\left|{x}\right|^{2n+3}}{(2n+3)!}$
- Maclaurin polynomial ($n$ order) of $e^x$ 
	- $\displaystyle e^x=\sum^n_{k=0}\frac{x^k}{k!}+R_{n}(x)$ 
	- (by 4.4) $R_{n}(x)=\displaystyle e^c\frac{x^{n+1}}{(n+1)!}$ (where $c$ is b/n $x$ and $a=0$). 
		- $\forall x\displaystyle\lim_{ n \to \infty }R_{n}(x)=0$ (see e4.2, q4.25), and therefore
		- $\forall x,e^x=\displaystyle\lim_{ n \to \infty }P_{n}(x)$


> Given a number $x$, we want to evaluate $f(x)$ using $P_{n}(x)$ such that the error is less then some nubmer, what $n$ we need for that?





# draft 

- definition lecture-4 - if $\lim_{x\to x_0}{\frac{f(x)}{{(x-x_0)}^n}}=0$ we denote $f(x)=o((x-x_0)^n)$

