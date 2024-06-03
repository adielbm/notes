# Definitions

| $f$ is defined on | $f$ is integrable on every interval | The **improper integral** of $f$                                                           |
| ----------------- | ----------------------------------- | ------------------------------------------------------------------------------------------ |
| $(a,b]$           | $[a,t]$ where $a<t<b$               | $\displaystyle\int _{a}^{b}f(x) \, dx=\lim_{ t \to b^- }\int _{a}^{t}f(x) \, dx$           |
| $[a,b)$           | $[t,b]$ where $a<t<b$               | $\displaystyle\int _{a}^{b}f(x) \, dx=\lim_{ t \to a^+ }\int _{t}^{b}f(x) \, dx$           |
| $[a,\infty)$      | $[a,t]$ where $a<t$                 | $\displaystyle\int _{a}^{\infty}f(x) \, dx=\lim_{ t \to\infty }\int _{a}^{t}f(x) \, dx$    |
| $(−\infty, b]$    | $[t,b]$ where $t<b$                 | $\displaystyle\int _{-\infty}^{b}f(x) \, dx=\lim_{ t \to -\infty }\int _{t}^{b}f(x) \, dx$ |

- If the limit exists (finite), then the improper integral **converges**; otherwise, it **diverges**.
- Given two improper integrals on intervals with a common endpoint (i.e. $[a,c)$ and $(c,b]$, or $(a,c]$ and $[c,b)$, or $(-\infty,c]$ and $[c,\infty)$, or $[a,c]$ and $[c,\infty)$, etc..) 
	- The sum of the two improper integrals is the **improper integral** of $f$ on the union of the two intervals, and it **converges** if both of the two improper integrals converge; otherwise, it **diverges**.
	- If the sum converges, then it is equal to the sum of the two integrals, and it is denoted as $\displaystyle\int _{a}^{b}f(x) \, dx=\displaystyle\int _{a}^{c}f(x) \, dx+\displaystyle\int _{c}^{b}f(x) \, dx$. (similar for other cases)
	- The convergence of the sum and its value are independent of the choice of $c$. (see 3.8, 3.13)
# Theorems

- (3.3) if $f$ is integrable on $[a,b]$ then the improper integral over $(a,b]$ (or $[a,b)$ or $(a,b)$) is equal to the integral over $[a,b]$ 
- (q3.22) 
	- $f$ is defined on $[a,\infty)$ and integrable on every finite subinterval of $[a,\infty)$, and $F'=f$, then: $\displaystyle\int^\infty_{a} f(x) \, dx$ converges iff $\displaystyle\lim_{ x \to \infty }F(x)$ exists. 
		- in such case $\int^\infty_{a} f(x) \, dx=\displaystyle\lim_{ x \to \infty }(F(x))-F(a)$
	- $f$ is defined on $\mathbb{R}$, and $F'=f$, then: $\displaystyle\int^\infty_{-\infty} f(x) \, dx$ converges iff $\displaystyle\lim_{ x \to \infty }F(x)$ and $\displaystyle\lim_{ x \to -\infty }F(x)$ exist. 
		- in such case $\int^\infty_{-\infty} f(x) \, dx=\displaystyle\lim_{ x \to \infty }F(x)-\lim_{ x \to -\infty }F(x)$
- (q3.33) If $\displaystyle\int ^\infty_{a}f(x) \, dx$ converges and $\displaystyle\lim_{ x \to \infty }f(x)$ exists then $\displaystyle\lim_{ x \to \infty }f(x)=0$
# Convergence Tests

### p-test

- (3.2,q3.5) The integrals $\displaystyle\int _{0}^b\frac{dx}{x^p}$  and $\displaystyle\int _{a}^b\frac{dx}{(x-a)^p}$ and $\displaystyle\int _{a}^b\frac{dx}{(b-a)^p}$ converges iff $p<1$
- (3.12) if $a>0$ then $\displaystyle\int ^\infty_{a} \frac{dx}{x^p}$ converges iff $p>1$
- $\displaystyle\int ^\infty_{1}\frac{dx}{x^{p}} \, dx=\begin{cases} \frac{1}{p-1} &  p>1 \\ \text{diverges} & {p\leq 1}\end{cases}$

### Cauchy's Criterion

- (3.4) Let $f(x)$ be defined on $(a,b]$ and integrable on every interval $[t,b]$ (where $a<t<b$). Then:
	- The improper integral $\displaystyle\int ^b_{a}f(x) \, dx$ converges iff $\forall\varepsilon>0,\exists \delta>0:\forall r,s\in[a,a+\delta],\,\displaystyle\left|\int ^s_{r}f(x) \, dx\right|<\varepsilon$
- (3.15) Let $f(x)$ be defined on $[a,\infty)$ and integrable on every interval $[a,t]$ (where $a<t$). Then:
	- The improper integral $\displaystyle\int ^\infty_{a}f(x) \, dx$ converges iff $\forall\varepsilon>0,\exists M>a:\forall r,s\in[M,\infty),\,\,\displaystyle\left|\int ^s_{r}f(x) \, dx\right|<\varepsilon$
- (similar for $[a,b)$ and $(-\infty,b]$)

### Comparison Tests $(a,b]$

Let $f,g$ be non-negative functions defined on $(a,b]$ and integrable on every closed subinterval of $(a,b]$. 
#### Direct Comparison Test

- (3.5) If $\exists \delta>0:\forall x\in(a,a+\delta),\,0\leq f(x)\leq g(x)$ then:
	- if $\int ^b_{a} g$ converges, then $\int ^b_{a} f$ converges
	- if $\int ^b_{a} f$ diverges, then $\int ^b_{a} g$ diverges
- (similar test for $[a,b)$)

#### Limit Comparison Test

- (3.5\*) Given $\displaystyle\lim_{ x \to a^+ }\frac{f(x)}{g(x)}=L$ exists, then:
	- if $0<L<\infty$ then $\displaystyle\int ^b_{a}g$ converges iff $\displaystyle\int ^b_{a}f$ converges
	- if $L=0$ and $\displaystyle\int ^b_{a}g$ converges, then $\displaystyle\int ^b_{a}f$ converges
	- if $L=\infty$ and $\displaystyle\int ^b_{a}g$ diverge, then $\displaystyle\int ^b_{a}f$ diverge
	- (similar test for $[a,b)$)

### Comparison Tests $[a,∞)$

Let $f,g$ be non-negative functions defined on $[a,\infty)$ and integrable on every closed subinterval $[a,t]\subset [a,\infty)$.

#### Direct Comparison Test

- (3.16) If $\exists A\geq a:\forall x\in[A,\infty),\,0\leq f(x)\leq g(x)$ then:
	- if $\int ^\infty_{a} g$ converges, then $\int ^\infty_{a} f$ converges
	- if $\int ^\infty_{a} f$ diverges, then $\int ^\infty_{a} g$ diverges

#### Limit Comparison Test

- (3.16-\*) Given $\displaystyle\lim_{ x \to \infty }\frac{f(x)}{g(x)}=L$ exists (finite or infinite) then:
	- if $0<L<\infty$ then $\int ^b_{a}g(x) \, dx$ converges if and only if $\int ^b_{a}g(x) \, dx$ converges
	- if $L=0$ and $\int ^b_{a}g(x) \, dx$ converges then $\int ^b_{a}g(x) \, dx$ converges
	- if $L=\infty$ and $\int ^b_{a}g(x) \, dx$ diverge then $\int ^b_{a}g(x) \, dx$ diverge
### Dirichlet's Test

- (3.19) Let $f$ and $g$ be continuous on $[a,\infty)$
	- If the following conditions hold:
		- $f(x)$ is decreasing on $[a,\infty)$, and $\displaystyle\lim_{ x \to \infty }f(x)=0$
		- $f(x)$ continuously differentiable on $[a,\infty)$ 
		- The function $G(x)=\int ^x_{a}g(t) \, dt$ is bounded on $[a,\infty)$
	- Then $\int ^\infty_{a}f(x)g(x) \, dx$ converges

### Integral Test

![[Convergence Tests#Integral Test]]

# Absolutely Integrable Function

- (d3.6) Let $f(x)$ defined on $(a,b]$ and integrable in every closed subinterval, we say that $f(x)$ is **absolutely integrable** on $(a,b]$ if $\displaystyle\int ^b_{a}\left| f(x) \right| \, dx$ is integrable in that case we say that $\displaystyle\int ^b_{a}f(x) \, dx$ **absolutely converges** (similar for $[a,b)$
- (3.7) if $f$ is absolutely integrable on $(a,b]$ then $f$ is integrable on $(a,b]$. (similar for $[a,b)$)
- (d3.17) Let $f(x)$ defined on $[a,\infty)$ and integrable in every closed subinterval $[a,t]\subset [a,\infty)$, we say that $f(x)$ is **absolutely integrable** on $[a,\infty)$ if $\displaystyle\int ^\infty_{a}\left| f(x) \right| \, dx$ converges. 
	- In that case we say that $\displaystyle\int ^\infty_{a}f(x) \, dx$ **absolutely converges**.
	- Otherwise, (i.e., $\displaystyle\int ^\infty_{a}f(x)\, dx$ converges but $\displaystyle\int ^\infty_{a}\left| f(x) \right| \, dx$ diverges) we say that $\displaystyle\int ^\infty_{a}f(x) \, dx$ **conditionally converges**.
- (3.18) if $f$ is absolutely integrable on $[a,\infty)$ then $f$ is integrable on $[a,\infty)$


