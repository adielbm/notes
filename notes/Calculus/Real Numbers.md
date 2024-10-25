# Construction

## Axiomatic Definition

- The real numbers form the unique (up to an isomorphism) [[#Completeness of R|complete]] [[Field#Ordered Field|totally ordered field]]

## Other Constructions

Other common definitions of real numbers include equivalence classes of Cauchy sequences (of rational numbers), Dedekind cuts, and infinite decimal representations. All these definitions satisfy the axiomatic definition and are thus equivalent

https://en.wikipedia.org/wiki/Construction_of_the_real_numbers

# Completeness of R

- Forms of Completeness
	- [[#Supremum (Least-upper-bound)|Least upper bound property]]
	- (a1.52) if $\emptyset\neq A,B\subseteq\mathbb{R}$ such that $\forall{a}\in{A}$ and $\forall{b}\in{B}$ we have $a\leq b$. then there exists $x\in\mathbb{R}$ such that:
		- $\forall{a}\in{A}$, $a\leq{x}$
		- $\forall{b}\in{B}$, $x\leq{b}$


> [!info] The rational numbers $\mathbb{Q}$ does not satisfy the completeness axiom, therefore, the theorems that follow from this axiom do not hold in $\mathbb{Q}$. 
> - Cauchy theorem - In $\mathbb{Q}$ a cauchy sequence doesn't necessarily converge (to rational number).
> - Least-upper-bound property - in $\mathbb{Q}$ can be non-empty upper-bounded set **without** **supremum**. (e.g. the set of rationals less than $\sqrt{ 2 }$)
> - Monotone convergence theorem - There can be monotone bounded sequence of rationals that does not converge to a rational number.
> - Cantor's Lemma - The **intersection** of a sequence of nested intervals (with rational endpoints) in which the endpoints differences tend to zero **is not necessarily rational**.


# Theorems & Properties


- (1.25) Cancellation law (addition) $a+c=b+c\implies a+b$
- (1.26) Cancellation law (multiplication) $c\neq 0$ and $ac=bc\implies ab$
- (1.27) additive inverse uniqueness 
- (1.28) Multiplicative inverse uniqueness 

- Theorems
	- #todo 1.36 etc...


- (q1.61a) sum of rational & irrational is irrational
	- $x\in\mathbb{R\setminus{Q}}\land q\in\mathbb{Q}\implies{x+q\in{\mathbb{R\setminus{Q}}}}$
- (q1.61c) product of nonzero rational & irrational is irrational
	- $x\in\mathbb{R\setminus{Q}}\land 0\neq{q}\in\mathbb{Q}\implies{xq\in{\mathbb{R\setminus{Q}}}}$
## Roots

- (1.55) For every real $c>0$ and every natural $n$ there is **one and only one** real positive $x\geq 0$ such that $x^n=c$. 
	- (d1.56) $x$ is called the $n$th root of $c$. and noted $x=\sqrt[n]{c}$

## Archimedean property

- (1.60, 1.61) $\forall{a}\in\mathbb{R^{+}},\;\forall{b}\in\mathbb{R},\;\exists n\in\mathbb{N}\;:\;na>b$

## Absolut Value 

- **Definition**:  $\displaystyle  {\displaystyle |a|={\begin{cases}a &  a\geq 0\\-a & a<0\end{cases}}}=\max\set{a,-a}$

- Non-negativity $|a|\geq 0$
- Positive-definiteness $|a|=0\iff a=0$
	- Identity of indiscernibles (equivalent to positive-definiteness) $\displaystyle  |a-b|=0\iff a=b$
- Multiplicativity $|ab|=|a||b|$
	- Preservation of division $\displaystyle  \left|{\frac {a}{b}}\right|={\frac {|a|}{|b|}}$ if $b\neq 0$
	- Power Rule $|a^n|=|a|^n$
- Subadditivity (specifically the triangle inequality) $|a+b|\leq|a|+|b|$
	- Reverse triangle inequality $\displaystyle  |a-b|\geq {\bigl |}\left|a\right|-\left|b\right|{\bigr |}$
	- $|a-b|\leq|a|+|b|$
	- $|a-b|\geq|a|-|b|$
	- $|a-b|\geq|b|-|a|$
	- Triangle inequality $\displaystyle  |a-b|\leq |a-c|+|c-b|$
	- $(|a+b|=|a|+|b|)\iff{(a\geq 0 \land{b\geq 0})\lor(a\leq 0 \land{b\leq 0})}$
	- $\displaystyle{\left|\sum_{i=1}^n{x_{i}}\right|\leq \sum_{i=1}^n |x_{i}|}$
- Idempotence ${\bigl|}{\left|a\right|}{\bigr |}=|a|$
- Evenness $\displaystyle  \left|-a\right|=|a|$
- Inequities
	- $\displaystyle  |a|\leq b\iff -b\leq a\leq b$
	- $\displaystyle  |a|\geq b\iff a\leq -b \lor a\geq b$
	- $-|a|\leq{a}\leq{|a|}$

- $0<|x-a|<b\implies x\in(a-b,a+b)\setminus\set{a}$
- $|x-a|<b\implies x\in(a-b,a+b)$
## Density

- (d1.65) $A\subseteq\mathbb{R}$ **is dense in** $\mathbb{R}$ if for every reals $x<y$ there exists $a\in{A}$ such that $a\in(x,y)$
	- (1.66) $\mathbb{Q}$ is dense in $\mathbb{R}$ (between any two distinct real numbers there is a rational number. )
	- (q1.62) $\mathbb{R\setminus{Q}}$ is dense in $\mathbb{R}$. (between any two distinct real numbers there is an irrational number. )

- (q1.57) there exist infinite rationals between any two reals

## Inequalities

- (1.43) **Bernoulli's Inequality** If $x>-1$ then $({1 + x})^n \ge 1 + n x$ for all $n \in \mathbb{N}$
- (1.49) **Triangle inequality** - $|{a+b}|\leq{|{a}|+|b|}$
- (1.59) **Mean Inequalities** $HM\leq GM\leq AM$. $x_{1},\dots ,x_{n}$ are positive reals
  $$\frac{n}{\sum^{n}_{i=1}{\frac{1}{x_{i}}}}\quad\leq\quad{\sqrt[n]{ \prod^{n}_{i=1}x_{i}}}\quad\leq\quad \frac{1}{n}\sum^{n}_{i=1}x_{i}$$


- $\forall x,y\in \mathbb{R}\quad  |\sqrt{|x|}-\sqrt{|y|}|\leq\sqrt{|x-y|}\leq\sqrt{|x|}+\sqrt{|y|}$
- $x>0\implies \frac{1}{x}>0$
- $a>b>0\implies{0<\frac{1}{a}<\frac{1}{b}}$
- $x>0\implies x+\frac{1}{x}\geq 2$
- $a,b>0\implies \frac{a}{b}>0$
- $a,b\geq 0\implies{(a>b\iff{a^n>b^n})}$

## Floor & Ceiling

- $\text{floor}(x)=\displaystyle  \lfloor x\rfloor :=\max\{m\in \mathbb {Z} \mid m\leq x\}$ (also called *integral part* or *integer part*)
	- (1.64) $x-1<\lfloor x\rfloor\leq{x}< \lfloor x\rfloor+1$
	- $n<x<n+1\implies n=\lfloor x \rfloor$ for $n\in\mathbb{N}$
- $\text{ceil}(x)=\displaystyle  \lceil x\rceil :=\min\{n\in \mathbb {Z} \mid n\geq x\}$

## Sets of Reals
$$\large A\subset\mathbb{R}$$
### Greatest Element & Least Element

- A set $A\subset\mathbb{R}$ **admits a maximum** if an element $\exists x_{M} \in A:\forall x \in A,x\leq x_{M}$
	- $x_M$ (necessarily unique) is the **maximum** of the set $A$ and one denotes it by $x_{M} = \max A$. 
- The **minimum** of a set A, denoted by $x_m = \min A$, is defined in a similar way
### Upper & Lower Bounds

#### Upper bound

- (d3.1) real number $c$ is called **upper bound** of $A$, if $\forall a\in{A}: c\geq a$ 
#### Lower bound 

- (d3.1) $c \in \mathbb{R}$ is called a **lower bound** of $A$, if $\forall a\in{A}: c\leq a$

### Supremum & Infimum
#### Supremum (Least-upper-bound)

- $b=\sup{A}$ ($b$ is the **supremum** of $A$)
- (d3.7) $b$ is the minimal upper bound of $A$
- (3.9) (1.) $b$ is an upper bound of $A$ (2.) $\forall\varepsilon>0 \;\exists{x\in{A}}:x>b-\varepsilon$
- (3.9) (1.) $b$ is an upper bound of $A$ (2.) $b\leq d$ for all upper bounds $d$ of $A$
- (q3.9) (1.) $b$ is an upper bound of $A$ (2.) There exists a sequence $(a_{n})$ consists of elements in $A$, such that $\displaystyle\lim_{ n \to \infty }a_{n}=b$
###### Theorems

- (3.8) if $A$ has maximum, then $\sup{A}=\max{A}$
- $a<b\implies \sup(a,b)=b$
- Let $A$ (and $B$) is non-empty and bounded above:
	- (3.6) **Least-upper-bound property**: $A$ has supremum
	- (q3.60) $A$ has maximum, if and only if, $\sup{A}\in{A}$
	- (q3.61a) $\forall x \in A,x\leq a\implies \sup{A}\leq a$
	- (q3.61c) $\forall x \in A,x> a\implies \sup{A}> a$
	- (3.10) $\sup{(A+B)}=\sup{A}+\sup{B}$
	- (3.14) $\inf{(-A)}=-\sup{A}$
	- (q3.62) $\sup(A \cup B)=\max\{ \sup{A},\sup{B} \}$


> Least-upper-bound property is equivalence to the [[#Completeness Axiom]] (a1.52). A lot of books called to Least-upper-bound property *completeness axiom*. (see q3.14)

#### Infimum (Greatest-lower-bound)

- $a=\inf{A}$. ($a$ is the **infimum** of $A$)
- (d3.12) $a$ is the maximal lower bound of $A$
- (q3.11a) (1.) $a$ is a lower bound of $A$ (2.) $\forall\varepsilon>0 \;\exists{x\in{A}}:x<a+\varepsilon$
- (q3.11a) (1.) $a$ is a lower bound of $A$ (2.) $d\leq a$ for all lower bounds $d$ of $A$
- (q3.11b) (1.) $a$ is a lower bound of $A$ (2.) There exists a sequence $(a_{n})$ consisting of elements in $A$, such that $\displaystyle\lim_{ n \to \infty }a_{n}=a$
###### Theorems

- (3.13b) if $A$ has minimum, then $\inf{A}=\min{A}$
- (3.13a) $a<b\implies \inf(a,b)=a$
- Let $A$ (and $B$) is non-empty and bounded below:
	- (3.11) **Greatest-lower-bound property**: $A$ has infimum
	- (q3.60) $A$ has minimum, if and only if, $\inf{A}\in{A}$
	- (q3.61a) $\forall x \in A,x\leq a\implies \sup{A}\leq a$
	- (q3.61c) $\forall x \in A,x> a\implies \sup{A}> a$
	- (3.10) ${\displaystyle \inf(A+B)=(\inf A)+(\inf B)}$
	- (q3.62) $\inf(A \cup B)=\min\{ \inf{A},\inf{B} \}$
#### Theorems

- (q3.13) if $A$ is non-empty and bounded
	- $\inf{A}\leq\sup{A}$ 
		- $A=\{ a \}\iff\inf{A}=\sup{A}$
- (INF2.1.9) if $\sup{A}\leq\inf{B}$ then $\sup{A}=\inf{B}\iff \forall \varepsilon>0,\exists a\in A,b\in B:b-a<\varepsilon$

### Closed & Open Sets

- open set
	- equivalent **definitions** 
		- $\forall{a\in{A}},{\exists{\varepsilon>0}}:(a-\varepsilon,a+\varepsilon)\subseteq{A}$
		- $A\subseteq\mathbb{R}$ is **open set** 
	- theorems 
		- d

- closed set
	- equivalent definitions
		- $A\subseteq\mathbb{R}$ is **closed set** 
		- if given convergent sequence $(x_{n})$ of $A$ elements, we have also $\lim_{ n \to \infty }x_{n}\in{A}$
		- $A^{\complement}=\mathbb{R}\setminus{A}$ is open set
	- theorems 
		- The set of subsequential limits is closed
		- $[a,b]$ is closed
