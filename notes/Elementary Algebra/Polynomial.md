## Definitions 

- A **polynomial function of degree** $n$ is a function of the form $p(x)=\displaystyle  {\displaystyle \sum _{i=0}^{n}a_{i}x^{i}}$ where $n$ is a nonnegative integer and and $a_{n}\neq 0$,
- $a_{0},a_{1},\dots,a_{n}$ are called the **coefficients** of the polynomial
	- $a_{0}$ is the **constant coefficient** or **constant term**
	- $a_{n}$ is the **leading coefficient**, and $a_{n}x^n$ is the **leading term**
- $n=\deg{p}$ is the polynomial degree 
- A number $c$ is called **a root of** $p(x)$ if $p(c)=0$
- $p(x)=0$ is the zero polynomial. (its degree is $-1$, $-\infty$ or undefined)
- $p_{2}\mid{p_{1}}$ ($p_{2}$ **divides** $p_{1}$, or $p_{1}$ **is divided by** $p_{2}$) if there exists polynomial $q$ such that $p_{1}=p_{2}q$
- A **monic polynomial** is a non-zero polynomial in which the leading coefficient is equal to 1.
	- $\displaystyle  x^{n}+c_{n-1}x^{n-1}+\cdots +c_{2}x^{2}+c_{1}x+c_{0},$
- A **trinomial** is a polynomial consisting of three terms or monomials

## Theorems 

- **Fundamental Theorem of Algebra** (Equivalent statements)
	- Every univariate polynomial of positive degree with real coefficients has at least one complex root.
	- every non-zero, single-variable, degree $n$ polynomial with complex coefficients has, counted with multiplicity, exactly $n$ complex roots
	- Every univariate polynomial of positive degree $n$ with complex coefficients can be factorized as $c(x−r_{1})⋯(x−r_{n})$, where $c,r1,…,r_{n}$ are complex numbers.
- every non-zero, degree $n$ polynomial has at most $n$ real roots
- every polynomial is a [[Continuity|continuous]] function on $\mathbb{R}$
- **Factor theorem:** $p(c)=0\iff p(x)=(x-c)q(x)$. (where $\deg{q}=(n-1)$
	- In words: $c$ is a root of the polynomial $p$ (of degree n) if and only if $(x−c)$ is a factor of $p$
- Let $p:\mathbb{R}\to \mathbb{R}$ be a polynomial of odd degree
	- $\exists c\in{\mathbb{R}}:p(c)=0$ (in words, $p$ has at least one real root)
	- $p$ is surjective
- **Remainder Theorem** - If a polynomial $p(x)$ is divided by $x − k$, then the remainder is $r = p(k)$. 
- **Factors of a Polynomial** - Every polynomial of degree $n > 0$ with real coefficients can be written as the product of linear and quadratic factors with real coefficients, where the quadratic factors have no real zeros. #todo 
- **Descartes' rule of signs** - The number of strictly positive roots (counting multiplicity) of $p$ is equal to the number of sign changes in the coefficients of $p$, minus a nonnegative even number
	- The number of negative roots is the number of sign changes after multiplying the coefficients of odd-power terms by $−1$, or fewer than it by an even number
- $\deg{pq}=\deg{p}+\deg{q}$ (where $p,q$ are not zero polynomial)
- $\deg{(p+q)}\leq \max\{ {\deg{p},\deg{q}} \}$ (where $p,q$ are not zero polynomial)
- If $p$ has $n$ distinct roots, then $p'$ has at least $n-1$ roots
- if even degree polynomial $p$ has a root $c$ and $p'(c)\neq 0$ then $p$ has at least two roots



- A non-constant polynomial is **irreducible** over a field $F$ if its coefficients belong to $F$ and it cannot be factored into the product of two non-constant polynomials with coefficients in $F$.

- A polynomial $D$ can be factored as a product of linear factors (of the form $ax + b$) and irreducible quadratic factors (of the form $ax^2 + bx + c$, where $b^2 - 4ac <0$)


- A quadratic polynomial with no real roots is called **irreducible** over the real numbers. Such a polynomial cannot be factored without using complex numbers.
- Every polynomial with real coefficients can be factored into a product of linear and irreducible quadratic factors with real coefficients
- A polynomial $Q$ can be factored as a product of linear factors (of the form ax + b) and irreducible quadratic factors (of the form $ax^2 + bx + c$, where $b^2 - 4ac <0$)