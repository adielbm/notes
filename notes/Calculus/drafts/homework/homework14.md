
# Exercise 1

Show that $1+\frac{x-1}{2}-\frac{(x-1)^2}{8}$ approachs $\sqrt{x}$ in $[\frac{1}{2},\frac{3}{2}]$ in approximation of one digit after the decimal point. (i.e. in apporx of 0.5 * 10^(-1)).


## Answer 1

We have to show that $\displaystyle\left|\sqrt{x}-(1+\frac{x-1}{2}-\frac{(x-1)^2}{8})\right|< 0.5 \cdot 10^{-1}=\frac{1}{20}$ for all $x\in[\frac{1}{2},\frac{3}{2}]$.


The taylor polynomial of $\sqrt{x}$ is at $a$ of order 2 is:

$$P_{2}( x) =\sum _{k=0}^{2}\frac{\sqrt{a}^{( k)}}{k!}( x-a)^{k} =\sqrt{a}^{( 0)} +\frac{1}{2\sqrt{a}}( x-a) \ -\frac{1}{8a^{3/2}}( x-a){^{2}}$$

where $a=1$ then: 

$$P_{2}(x)=1+\frac{x-1}{2}-\frac{( x-1)^{2}}{8}$$


Lagrange’s Form is given by:

$$\displaystyle R_{n}(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$$

so in our case,  

$$R_{2}(x)=\frac{f^{(3)}(c)}{3!}(x-1)^{3}$$

where $c\in(1,x)$ or $c\in(x,1)$, and $\vert x - 1 \vert \leq \frac{1}{2}$.

now the third derivative of $\sqrt{x}$ is:

$$f^{(3)}(x)=\frac{3}{8}x^{-5/2}\leq f^{(3)}(\frac{1}{2})=\frac{3}{8}2^{5/2}=\frac{3\sqrt{2}}{2}$$ 

(f is decreasing)

consequently,



$$
\left|\sqrt{x}-(1+\frac{x-1}{2}-\frac{(x-1)^2}{8})\right|=\left|R_{2}(x)\right|=

\\

=\left|\frac{f^{(3)}(c)}{3!}(x-1)^{3}\right|\leq \frac{3\sqrt{2}}{2 \cdot !3}\cdot \left(\frac{1}{2}\right)^{3}=\frac{3\sqrt{2}}{96}=\frac{\sqrt{2}}{32}<\frac{1}{20}$$



# Exercise 2

Given $f(x)=xe^{x}$.


- (A.) Find the Taylor polynomial of $f$ of order n centered at $x=a$.
- (B.) Find the Maclaurin polynomial of $f$ of order n. And prove that for all x the remainder is approaching 0 as $n\to\infty$.
	- Remark: The point c of lagrange's form is dependent on n.
- (C.) Calculate f(1/3) with an error of at most 0.5 * 10^(-2).

## Answer 2a

The $n$th order Taylor polynomial of $f$ centered at $x=a$ is:

$$P_{n}(x)=\sum _{k=0}^{n}{\frac {f^{(k)}(a)}{k!}}(x-a)^{k}$$

where $f(x)=xe^{x}$, then:

$$f^{(k)}(x)=\begin{cases}
xe^{x} & k=0\\
e^{x}+xe^{x} & k=1\\
2e^{x}+xe^{x} & k=2\\
\vdots & \vdots\\
ne^{x}+xe^{x} & k=n
\end{cases}$$

then 

$$P_{n}(x)=\sum _{k=0}^{n}{\frac {f^{(k)}(a)}{k!}}(x-a)^{k}=ae^{a}+({e^a + ae^a}){(x-a)}+\dots+\frac{n e^a + a e^a}{n!}(x-a)^{n}$$

$P_{n}(x)=\sum _{k=0}^{n}{\frac {(a+k)e^{a}}{k!}}(x-a)^{k}$


## Answer 2b

> Find the Maclaurin polynomial of $f$ of order n. 

let's substitute $a=0$ in the previous result:

$P_{n}(x)=\sum _{k=0}^{n}{\frac {k}{k!}}x^{k}=\sum _{k=1}^{n}{\frac{1}{(k-1)!}}x^{k}$

> And prove that for all x the remainder is approaching 0 as $n\to\infty$.


The remainder of $f$ at $a$ is:

$$R_{n}(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x)^{n+1}$$

where $\vert c \vert < \vert x \vert$ therfore $|e^{c}|\leq e^{|c|}\leq e^{|x|}$

$$\vert R_{n}(x) \vert = \frac{\vert f^{(n+1)}(c) \vert}{(n+1)!}\vert x \vert^{n+1}= \\ = \frac{\vert (n+1)e^{c}+ce^{c} \vert}{(n+1)!}\vert x \vert^{n+1}<\frac{(n+1)e^{|x|}+|x|e^{|x|}}{(n+1)!}\vert x \vert^{n+1}= \\ = e^{|x|}\frac{n+1+|x|}{(n+1)!}\vert x \vert^{n+1}=e^{|x|}\left(\frac{ n+1}{(n+1)!}+\frac{|x|}{(n+1)!}\right)\vert x \vert^{n+1}= \\ = e^{|x|}\left(\frac{\vert x \vert^{n+1}}{n!}+\frac{\vert x \vert^{n+2}}{(n+1)!}\right)\underset{n\to\infty}{\longrightarrow}0$$

therefore $\lim_{n\to\infty}R_{n}(x)=0$. (by the squeeze theorem)

## Answer 2c

> (C.) Calculate f(1/3) with an error of at most 0.5 * 10^(-2).

We have to find $P_{n}(1/3)$ and $R_{n}(1/3)$, where $P_{n}(1/3)$ is the Maclaurin polynomial of $f$ of order $n$.

by B, we have: $\forall x, \lim_{n\to\infty}R_{n}(x)=0$, then $\lim_{n\to\infty}R_{n}(1/3)=0$.

when $n=3$, we have:

$P_{3}(x)=\sum _{k=1}^{3}{\frac{1}{(k-1)!}}x^{k}=\frac{1}{0!}x^{1}+\frac{1}{1!}x^{2}+\frac{1}{2!}x^{3}=x+x^{2}+\frac{1}{2}x^{3}$

then $P_{3}(1/3)=1/3+(1/3)^{2}+\frac{1}{2}(1/3)^{3}=1/3+1/9+1/54=25/54$.

also, there exists $c$, s.t. $|c|<1/3$ therfore $|e^{c}|\leq e^{|c|}\leq e^{|1/3|}$



$|R_{3}(1/3)|=\frac{f^{(4)}(c)}{4!}(\frac{1}{3})^{4}=\frac{e^{c}(4+c)}{24}(\frac{1}{3})^{4}<\frac{e^{1/3}(4+1/3)}{24}(\frac{1}{3})^{4}<$

(we can use the fact that $e^{1/3}<3^{1/3}<3/2$)

$<\frac{3/2(4+1/3)}{24}(\frac{1}{3})^{4}=\frac{13/2}{24}(\frac{1}{3})^{4}=\frac{13}{3888}<\frac{1}{200}=0.5 \cdot 10^{-2}$

**conculsion**: $f(1/3)=(1/3)e^{1/3}=25/54$ with an error of at most $0.5 \cdot 10^{(-2)}$.

# Exercise 3

for all $x>-1$, $x\neq 0$, show that

- if $\alpha>1$ or $\alpha<0$, then $(1+x)^{\alpha}>1+\alpha x$.
- if $0<\alpha<1$, then $(1+x)^{\alpha}<1+\alpha x$.

## Answer 3

### Case 1: $\alpha>1$ or $\alpha<0$

The maclaur	in expansion of $f(x)=(1+x)^{\alpha}$ (in order 1) is:

$$f(x)=P_{1}(x)+R_{1}(x)=1+\alpha x+R_{1}(x)$$

where: 
- $P_{1}(x)=\sum _{k=0}^{1}{\frac {f^{(k)}(0)}{k!}}x^{k}=1+\alpha x$.
- $R_{1}(x)=\frac{f^{(2)}(c)}{2!}x^{2}=\frac{\alpha(\alpha-1)}{2}x^{2}$ where $c\in(0,x)$ or $c\in(x,0)$.

therefore $$f(x)=1+\alpha x+\frac{\alpha(\alpha-1)}{2}x^{2}$$

also $\alpha>1\implies \alpha-1>0\implies \alpha(\alpha-1)>0$ 

or $\alpha<0\implies \alpha-1<0\implies \alpha(\alpha-1)>0$.

then $\alpha(\alpha-1)>0$.

therefore $\frac{\alpha(\alpha-1)}{2}>0$.

then $f(x)=(1+x)^{\alpha}>1+\alpha x$.

### Case 2: $0<\alpha<1$

as in the previous case, we have:

$$f(x)=1+\alpha x+\frac{\alpha(\alpha-1)}{2}x^{2}$$

and $\alpha(\alpha-1)<0$.

then $\frac{\alpha(\alpha-1)}{2}<0$.

then $\frac{\alpha(\alpha-1)}{2}x^{2}<0$.

then $f(x)=(1+x)^{\alpha}<1+\alpha x$.

# Exercise 4

given $f(x)$ is a function that is $3$ times differentiable at $x=0$, and $f(0)=0$.

prove that $\displaystyle\lim_{x\to 0}\frac{f(x)-f'(0)\sin x-\frac{1}{2}f''(0)\sin^2 x}{x^{3}}=\frac{f^{(3)}(0)+f'(0)}{6}$.

note: it is not imply from the given that $f^{(3)}$ is defined at $x\neq 0$.

hint: using Maclaurin expansion of $f(x)$ and substituting.

## Answer 4

by Maclaurin expansion of $f(x)$, we have:

$$f(x)=f(0)+f'(0)x+\frac{f''(0)}{2}x^{2}+\frac{f^{(3)}(0)}{6}x^{3}+R_{3}(x)$$

now we substitute in the numerator:

$$f(x)-f'(0)\sin x-\frac{1}{2}f''(0)\sin^2 x = \\ = f'(0)x+\frac{f''(0)}{2}x^{2}+\frac{f^{(3)}(0)}{6}x^{3}+R_{3}(x)-f'(0)\sin x-\frac{1}{2}f''(0)\sin^2 x = \\ = f'(0)(x-\sin x)+\frac{f''(0)}{2}(x^{2}-\sin^2 x)+\frac{f^{(3)}(0)}{6}(x^{3})+R_{3}(x)$$ 

by Maclaurin expansion of $\sin x$, we have:

$$\sin x=x-\frac{x^{3}}{3!}+S_{3}(x)\implies x-\sin x=\frac{x^{3}}{3!}-S_{3}(x)$$

and also $x^{2}-\sin^2 x=(x-\sin x)(x+\sin x)=\left(\frac{x^{3}}{3!}-S_{3}(x)\right)(x+\sin x)$.

then

$$f(x)-f'(0)\sin x-\frac{1}{2}f''(0)\sin^2 x = \\ = f'(0)\left(\frac{x^{3}}{3!}-S_{3}(x)\right)+\frac{f''(0)}{2}\left( \left(\frac{x^{3}}{3!}-S_{3}(x)\right)(x+\sin x)\right)+\frac{f^{(3)}(0)}{6}(x^{3})+R_{3}(x)$$

now divide by $x^{3}$:

- $\displaystyle\lim_{x\to 0}f'(0)\left(\frac{1}{3!}-\frac{S_{3}(x)}{x^{3}}\right)=\frac{f'(0)}{3!}$
- $\displaystyle\lim_{x\to 0}\frac{f''(0)}{2}\left(\frac{1}{3!}-\frac{S_{3}(x)}{x^{3}}\right)\left(x+\sin x\right)=0$ (by 4.7)
- $\displaystyle\lim_{x\to 0}\frac{f^{(3)}(0)}{6}=\frac{f^{(3)}(0)}{6}$
- $\displaystyle\lim_{x\to 0}\frac{R_{3}(x)}{x^{3}}=0$ (by 4.7)

therefore

$$\displaystyle\lim_{x\to 0}\frac{f(x)-f'(0)\sin x-\frac{1}{2}f''(0)\sin^2 x}{x^{3}}=\frac{f^{(3)}(0)+f'(0)}{6}$$





# Exercise 5

use in MacLaurin expansion in appropriate n-order to calculate the following limits:

- (A.) $\displaystyle\lim_{x\to 0}\left(\frac{1}{\ln(1+x^2)}-\frac{x^2+x^4}{(x^2-2x^4)^2}\right)$.
- (B.) $\displaystyle\lim_{n \to \infty}\left(n^3 \tan\left(\frac{1}{n}\right)-n^2 \exp\left(\frac{1}{n^2}\right)\right)$. (note: it's a limit of a sequence).


## Answer 5a

- $\displaystyle\lim_{x\to 0}\left(\frac{1}{\ln(1+x^2)}-\frac{x^2+x^4}{(x^2-2x^4)^2}\right)$.

- lets substitute $t=x^2$:

- $\displaystyle\lim_{t\to 0}\left(\frac{1}{\ln(1+t)}-\frac{t+t^2}{(t-2t^2)^2}\right)=\lim_{t\to 0}\left( \frac{1}{\ln(1+t)}-\frac{1+t}{t(1-2t)^2}\right)=\lim_{t\to 0}\left( \frac{t(1-2t)^2-\ln(1+t)(1+t)}{t(1-2t)^2\ln(1+t)}\right)$

then the Maclaurin expansion of $\ln(1+t)$ of order 2 is  $\ln(1+t)=t-\frac{t^{2}}{2}+R_{2}(t)$. and of order 1 is $\ln(1+t)=t+R_{1}(t)$.

then $\displaystyle\lim_{t\to 0}\left( \frac{t(1-2t)^2-(t-\frac{t^{2}}{2}+R_{2}(t))(1+t)}{t(1-2t)^2 (t+R_{1}(t))}\right)=$

$\displaystyle\lim_{t\to 0}\left( \frac{t-4t^{2}+4t^{3}-t+\frac{t^{2}}{2}-t^{2}+\frac{t^{3}}{2}-t(R_{2}(t)+\frac{R_{1}(t)}{t})}{t^2 (1+\frac{R_{1}(t)}{t})}\cdot \frac{1}{(1-2t)^2}\right)=$

let's mult by $t$ both the numerator and the denominator:

$\displaystyle\lim_{t\to 0}\left( \frac{1-4t+4t^{2}-1+\frac{t}{2}-t+\frac{t^{2}}{2}-t^{2}(R_{2}(t)+\frac{R_{1}(t)}{t})}{t (1+\frac{R_{1}(t)}{t})}\cdot \frac{1}{t(1-2t)^2}\right)=$






## Answer 5b

- $\displaystyle\lim_{n \to \infty}\left(n^3 \tan\left(\frac{1}{n}\right)-n^2 \exp\left(\frac{1}{n^2}\right)\right)$.

- $\displaystyle\lim_{n \to 0}\frac{1}{n^3}\tan n - \frac{1}{n^2}\exp\left({n^2}\right)$.

by Maclaurin expansion of $\tan x$ and $e^{x^{2}}$:

$\tan n=n+\frac{1}{3}n^{3}+R_{3}(n)$

$e^{n^{2}}=1+n^{2}+R_{2}(n)$

$\displaystyle\lim_{n \to 0}\left(\frac{1}{n^3}\tan n - \frac{1}{n^2}\exp\left({n^2}\right)\right)=$

$\displaystyle\lim_{n \to 0}\left(\frac{1}{n^3}(n+\frac{1}{3}n^{3}+R_{3}(n)) - \frac{1}{n^2}(1+n^{2}+R_{2}(n))\right)=$

$\displaystyle\lim_{n \to 0}\left(\frac{1}{n^2}+\frac{1}{3}+\frac{R_{3}(n)}{n^3} - \frac{1}{n^2}-1-\frac{R_{2}(n)}{n^2}\right)=$

$\displaystyle\lim_{n \to 0}\left(\frac{1}{3}+\frac{R_{3}(n)}{n^3}-\frac{R_{2}(n)}{n^2}-1\right)=\frac{1}{3}-1=1/3-1=-2/3$.