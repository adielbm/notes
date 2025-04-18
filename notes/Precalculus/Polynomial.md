

- A **(univariate) polynomial** (over $R$) is an expression of the form $a_{n}x^{n}+a_{n-1}x^{n-1}+\cdots +a_{1}x+a_{0}$, where:
	- $x$ is the **variable** (or **indeterminate**) of the polynomial
	- $R$ is a commutative ring
	- $a_0,a_1,\dots,a_n \in R$ are the **coefficients** (or **constants**
	- $n$ is a nonnegative integer called the **degree** of the polynomial
	- $a_ix^i$ (for $i=0,1,\dots,n$) are called the **terms** (or **monomials**) of the polynomial
	- $a_n$ is the **leading coefficient**
	- $a_nx^n$ is the **leading term**
	- $a_0$ is the **constant term**
- $0$ is the **zero polynomial** (its degree may be defined as $-\infty$ or undefined depending on the context)
- A **non-zero** polynomial is a polynomial that is not the zero polynomial. 
- A **monic** polynomial is a non-zero polynomial in which the leading coefficient is equal to 1.
	- $\displaystyle  x^{n}+c_{n-1}x^{n-1}+\cdots +c_{2}x^{2}+c_{1}x+c_{0},$
- A polynomial of degree $0,1,2,3$ is called a **constant, linear, quadratic, cubic** polynomial respectively.
- (number of monomials) 
	- A **binomial** is a polynomial consisting of two monomials: $ax^{n}-bx^{m}$
	- A **trinomial** is a polynomial consisting of three monomials: $ax^{n}+bx^{m}+cx^{k}$
- A **real polynomial** is a polynomial with real coefficients. (Similarly, a **complex polynomial** and **integer polynomial** are defined)
- A **real polynomial function** is a function $f:\mathbb{R}\to \mathbb{R}$ defined by a real polynomial $f(x)=a_{n}x^{n}+a_{n-1}x^{n-1}+\cdots +a_{1}x+a_{0}$.
- A function $f(x)$ is a **polynomial function** (or **polynomial**) if there exists a polynomial $a_nx^n+\cdots +a_1x+a_0$ such that for all $x$ in the domain of $f$, $f(x)=a_nx^n+\cdots +a_1x+a_0$.
	- _Remarks_: 
		- Generally, unless otherwise specified, a polynomial function $f(x)$ is a function $f:\mathbb{C}\to \mathbb{C}$ defined by a polynomial $a_nx^n+\cdots +a_1x+a_0$ over $\mathbb{C}$. 
		- Polynomial functions are often called **polynomials**
		- In finite fields, distinct polynomials may define the same polynomial function. (e.g. $x^2-x$ and $0$ are distinct polynomials over $\mathbb{F}_2$, but they define the same polynomial function $p:\mathbb{F}_2\to \mathbb{F}_2$ as $p(x)=0$)  
		- There are expressions that are not polynomials, but are polynomial functions. (e.g. $\left(\sqrt{1-x^2}\right)^2$ is not a polynomial, but is a polynomial function since $\forall x\in[-1,1],\left(\sqrt{1-x^2}\right)^2=1-x^2$)
		- The **evaluation** of a polynomial is the computation of the corresponding polynomial function by substituting a numeric value to each variable in the polynomial, and calculating carrying out the indicated multiplications and additions.
- A **polynomial equation** is an equation that its left-hand side is a polynomial and its right-hand side is $0$. (e.g. $ax^2+bx+c=0$ (**quadratic equation**))
- The following are equivalent for any non-zero polynomials:
	- $r(x)$ and $q(x)$ are **factors** of $p(x)$
	- $p(x)$ is **divisible** by $r(x)$ and $q(x)$
	- $r(x)$ and $q(x)$ **divide** $p(x)$
	- $p(x)=r(x)q(x)$
	- $q\mid{p}$ and $r\mid{p}$
- A _linear factor_ is a factor that is a linear polynomial: $ax+b$. (similar for quadratic, cubic, etc.)
- A _monic factor_ is a factor that is a monic polynomial.
- A _monic linear factor_ is a factor that is a monic linear polynomial, $(x-\alpha)$
- A polynomial $p(x)\in R [x]$ is said to be **reducible** over $R$ if it can be factored into two non-constant polynomials in $R[x]$
- A polynomial $p(x)\in R [x]$ is said to be **irreducible** over $R$ if it is not reducible over $R$.
	- _Examples_: 
		- $x^2-2$ is irreducible over $\mathbb{Q}$ since $\sqrt{2}\notin\mathbb{Q}$, but it is reducible over $\mathbb{R}$, since $x^2-2=(x-\sqrt{2})(x+\sqrt{2})$. 
		- $x^2+1$ is irreducible over $\mathbb{R}$, but it is reducible over $\mathbb{C}$, since $x^2+1=(x-i)(x+i)$. 
		- Every linear polynomial is irreducible
		- Every quadratic polynomial is irreducible if and only if it has no roots in the field over which it is defined.
		- A polynomial of degree 2 or 3 is irreducible if and only if it has no roots in the field over which it is defined.
		- A polynomial of degree 4 or higher may be irreducible even if it has roots in the field over which it is defined.
- (**Multiplying Polynomials**) The product of two polynomials $p(x)=\displaystyle \sum _{i=0}^{n}a_{i}x^{i}$ and $q(x)=\displaystyle \sum _{i=0}^{m}b_{i}x^{i}$ is defined as $p(x)q(x)=\displaystyle \sum _{k=0}^{n+m}\left(\sum _{i=0}^{k}a_{i}b_{k-i}\right)x^{k}$
	- The coefficients of the product polynomial can be calculated using the **convolution** of the coefficients of the two polynomials.
	- See also [[Polynomial Multiplication|algorithms for polynomial multiplication]]  

# Theorems

- Let $p(x)\in \mathbb{C}[x]$ be a polynomial of degree $n>0$. Then:
	- (**Fundamental Theorem of Algebra**) 
		- $\exists c\in{\mathbb{C}}:p(c)=0$ (i.e. $p$ has at least one complex root)
		- $p$ has, counted with multiplicity, exactly $n$ complex roots
	- $p$ can be factored as $p(x)=a_{n}(x-r_{1})(x-r_{2})\cdots(x-r_{n})$ where $r_{1},r_{2},\dots,r_{n}\in\mathbb{C}$ are the roots of $p$ (counted with multiplicity).
	- (**Polynomial Remainder Theorem** or **little Bézout's theorem**) For every $c\in{\mathbb{C}}$, there exists a unique polynomial $q(x)$ such that $p(x)=q(x)(x-c)+p(c)$ and $\deg{q}=\deg{p}-1$
	- (**Factor theorem**) For every $c\in{\mathbb{C}}$, $p(c)=0$ ($c$ is a root of $p$) if and only if there exists a polynomial $q(x)$ such that $p(x)=(x-c)q(x)$, (i.e. $(x-c)$ is a factor of $p$), in such case, $\deg{q}=\deg{p}-1$
	- (**Polynomial Long Division**) If $d(x)\in\mathbb{C}[x]$ is a non-zero polynomial of degree $\deg{d}\leq\deg{p}$, then there exists a unique polynomials $q(x),r(x)\in\mathbb{C}[x]$ such that $p(x)=d(x)q(x)+r(x)$ and $\deg{r}<\deg{d}$
	- $\deg{pq}=\deg{p}+\deg{q}$ 
	- $\deg{(p+q)}\leq \max\{ {\deg{p},\deg{q}} \}$
- Let $p(x)\in \mathbb{R}[x]$ be a polynomial of degree $n>0$ with real coefficients and $a_{n}\neq 0$. Then:
	- (_All the statements above for complex polynomials hold, since $\mathbb{R}\subset\mathbb{C}$_)
	- (Product of $n$ monic linear factors) $p$ can be factored (uniquely, up to the order of the factors) into $p(x)=a(x-r_{1})\cdots(x-r_{k})(x^{2}+b_{1}x+c_{1})\cdots(x^{2}+b_{m}x+c_{m})$ where:
		- $a\in\mathbb{R}\setminus\{0\}$
		- $r_{1},r_{2},\dots,r_{k}\in\mathbb{R}$ are the real roots of $p$ (counted with multiplicity)
		- $x^{2}+b_{i}x+c_{i}$ are irreducible (over $\mathbb{R}$) monic quadratic factors (i.e. $b_{i}^2-4c_{i}<0$), for $i=1,\dots,m$
		- $(x-r_i)$ are monic linear factors, for $i=1,\dots,k$
	- (**Descartes' rule of signs**) The number of strictly positive roots (counting multiplicity) of $p$ is equal to the number of sign changes in the coefficients of $p$, minus a nonnegative even number
		- The number of negative roots is the number of sign changes after multiplying the coefficients of odd-power terms by $−1$, or fewer than it by an even number
	- If $p$ has $n$ distinct roots, then $p'$ has at least $n-1$ roots
	- if $\deg p$ is even and $p$ has a root $c$ and $p'(c)\neq 0$ then $p$ has at least two roots
	- $p$ is continuous on $\mathbb{R}$
	- If $\deg{p}$ is odd, then $\exists c\in{\mathbb{R}}:p(c)=0$ and $p$ is surjective (as function $p:\mathbb{R}\to\mathbb{R}$) 
	- Conjugate Root Theorem #todo
	- #todo  A quadratic polynomial with no real roots is called **irreducible** over the real numbers. Such a polynomial cannot be factored without using complex numbers.
-  The function $f(x)=(x-x_1)(x-x_2)\cdots(x-x_n)$ (where $x_1,x_2,\dots,x_n\in\mathbb{R}$) is a polynomial of degree $n$ whose roots are $x_1,x_2,\dots,x_n$.
- Let $f(x)=a_{n}x^{n}+a_{n-1}x^{n-1}+\cdots +a_{1}x+a_{0}\in\mathbb{Z}[x]$ be a polynomial of degree $n>0$, then:
	- (**Rational root theorem**) If $f$ has a rational root $r=\frac{p}{q}\in\mathbb{Q}$ and $\gcd(p,q)=1$, then $p\mid{a_{0}}$ and $q\mid{a_{n}}$.

#### Polynomial Root-Finding

- The process of finding the roots of a polynomial is called **root-finding**. There are many methods for finding the roots of a polynomial, including:
	- Factoring
	- Closed-form formulae: (radical expressions)
		- Quadratic formula for quadratic polynomials
		- Cubic formula (Cardano's formula) for cubic polynomials
		- Quartic formula (Ferrari's formula) for quartic polynomials
		- Abel-Ruffini theorem shows that there is no general solution in radicals for polynomial equations of degree five or higher.
	- Rational root theorem (for integer polynomials)
	- Numerical methods
	- using polynomial long division to factor the polynomial into lower degree polynomials

#### Polynomial Long Division

- ${\text{divisor}})\overline{\text{dividend}}$
- If $f(x)$ (**dividend**) and $d(x)$ (**divisor**) are polynomials such that $d(x)\neq 0$ and $\deg{d(x)}\leq\deg f(x)$, then there exist unique polynomials $q(x)$ (**quotient**) and $r(x)$ (**remainder**) such that: 
	- $f(x)=d(x)q(x)+r(x)$ (or $\displaystyle\frac{f(x)}{d(x)}=q(x)+\frac{r(x)}{d(x)}$)
	- where $r(x)=0$ or $\deg{r(x)} <\deg{d(x)}$ (if $r=0$ then $d(x)$ **divides evenly** into $f(x)$)

###### Division Algorithm 

- initialize $q(x)$ as $0$ (written above the bar line)
- initialize $r(x)$ as $f(x)$ (written in the bottom)

while $r\neq0$ and $\deg(r) \geq \deg(d)$ do

1. Divide $\text{lead}(r(x))$ by $\text{lead}(d(x))$, and add the result to the $q(x)$
2. Multiply $d(x)$ by the result just obtained, and write the product result under the first two terms of the dividend.
3. Subtract the product just obtained from $r(x)$
4. Bring down the next term from $f(x)$



- #todo Euclidean algorithm, Ruffini's rule, Synthetic division

# Multivariate Polynomials

## Bivariate Polynomial

- A **bivariate polynomial** is a multivariate polynomial in two variables, which is an expression of the form $$\displaystyle\sum _{i=0}^{n}\sum _{j=0}^{m}a_{ij}x^{i}y^{j}$$
	- where $a_{ij}$ are the coefficients, $x$ and $y$ are the variables, and $n,m\in\mathbb{N}$ 
- The total degree of a monomial $a_{ij}x^{i}y^{j}$ is $i+j$.
- The degree of a bivariate polynomial is the maximum total degree of its monomials.
