
# Formal Power Series

- A **formal power series** (or **formal series**) is an expression of the form $\sum_{n=0}^{\infty} a_n x^n$, where $a_n$ are coefficients. 

> (Unlike a [[power series]], a formal power series is not necessarily convergent, and the variable $x$ is treated as an indeterminate, and is not assigned a value. The series is treated as an algebraic object, rather than a function to be evaluated.)

## Operations

- (Addition) $\left(\sum_{n=0}^{\infty} a_n x^n \right) + \left(\sum_{n=0}^{\infty} b_n x^n \right) =\sum_{n=0}^{\infty} (a_n+b_n) x^n$
- (Multiplication) $\left(\sum_{n=0}^{\infty} a_n x^n \right) \cdot \left(\sum_{n=0}^{\infty} b_n x^n \right) =\sum_{n=0}^{\infty} c_n x^n$ where $c_n = \sum_{k=0}^{n} a_k b_{n-k}$
- (Division) $\frac{\sum_{n=0}^{\infty} b_n x^n}{\sum_{n=0}^{\infty} a_n x^n} = \sum_{n=0}^{\infty} c_n x^n$ where $c_n=\frac{1}{a_0}(b_n-\sum_{k=1}^{n} a_k c_{n-k})$ (assuming $a_0 \neq 0$)
- Extracting coefficients #todo
- (Composition) #todo

# Generating Functions

- A **generating function** is a representation of an infinite sequence of numbers as the coefficients of a formal power series.
- The **(ordinary) generating function** for the sequence $(a_n)$ is the formal power series $G(x)$ defined by $G(x) = \sum_{n=0}^{\infty} a_n x^n$

> #todo read https://enumeration.ca/toolbox/generating-functions/

## Usage

### Usage for number of solutions

Generating function can also be used for **number of nonnegative solutions** of equation: $t_1+\cdots+t_n=k$. Then the coefficient of $x^k$ in the following generating function is the number of solutions.
$$f(x)=(1+x+x^2+\ldots)^n=\frac{1}{(1-x)^n}=\sum_{k=0}^{\infty}{\binom{n-k-1}{k}x^k}$$

#### Restrictions

##### **Restriction for all Addends**: 

Special case example: a number of solutions of equation: $t_1+\ldots+t_n=k$. **such that** $1 \leq t_i \leq 6$ for any $i \le n$. 
The coefficient of $x^k$ in the following generating function is the number of solutions.
$$f(x)=(x+x^2+\ldots+x^6)^n$$
Example generalization: a number of solutions of equation: $t_1+\ldots+t_n=k$. **such that** $p \leq t_i \leq q$ for any $i \le n$. 
The coefficient of $x^k$ in the following generating function is the number of solutions.
$$f(x)=(x^p+x^{p+1}+\ldots+x^{q-1}+x^q )^n$$

#### Equation with Coefficients Greater than 1

Number of solutions of equation $a_1 t_1+a_2 t_2+ \ldots + a_n t_n = k$. ^[question 7.13]
The coefficient of $x^k$ in the following generating function is the number of solutions.
$$f(x)=(1+x^{a_1}+x^{2a_1}+\ldots)(1+x^{a_2}+x^{2a_2}+\ldots)\cdots(1+x^{a_n}+x^{2a_n}+\ldots)$$
### Partition

> See [[Partition]]

## Useful Generating Functions

### Infinte Sum

| Closed-form         | GF   $\sum_{k=0}^\infty c_k x^k$  | Sequence $c_n$                                                                                     | $c_{0},c_{1},\dots$                   |
| ------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------- |
| $\frac{1}{1-x}$     | $\sum_{k=0}^\infty x^k$           | $c_n=1$                                                                                            | $1,1,1,\ldots$                        |
| $\frac{1}{1-x^r}$   | $\sum_{k=0}^\infty x^{kr}$        | $c_n=\begin{cases}1 & \text{if } r\vert n \\ 0 & \text{otherwise}\end{cases}$                      | depends on a const. $r$               |
| $\frac{1}{1-ax}$    | $\sum_{k=0}^\infty a^k x^k$       | $c_n=a^n$                                                                                          | $a,a^2,a^3,\ldots$  ($a$ is a const.) |
| $\frac{1}{1-x^2}$   | $\sum^{\infty}_{k=0}x^{2k}$       | $c_n=\begin{cases}1 & \text{if } n \text{ is even} \\ 0 & \text{if } n \text{ is odd}\end{cases}$  | $1,0,1,0,\ldots$                      |
| $\frac{x}{1-x^2}$   | $\sum^{\infty}_{k=0}x^{2k+1}$     | $c_n=\begin{cases}1 & \text{if } n \text{ is odd} \\ 0 & \text{if } n \text{ is even}\end{cases}$  | $0,1,0,1,\ldots$                      |
| $\frac{1}{1+x}$     | $\sum_{k=0}^{\infty}(-1)^k x^k$   | $c_n=\begin{cases}1 & \text{if } n \text{ is even} \\ -1 & \text{if } n \text{ is odd}\end{cases}$ | $1,-1,1,-1,\ldots$                    |
| $e^x$               | $\sum_{k=0}^\infty{x^k \over k!}$ | $c_n=\frac{1}{n!}$                                                                                 | $1,1/2,1/6,\ldots$                    |
| $\frac{1}{(1-x)^2}$ | $\sum_{k=0}^\infty {(k+1)}x^k$    | $c_n=n+1$                                                                                          | $1,2,3,\ldots$                        |
| $\frac{x}{(1-x)^2}$ | $\sum_{k=0}^\infty {k}x^k$        | $c_n=n$                                                                                            | $0,1,2,\ldots$                        |

#### Multiset coefficient

| Closed-form         | GF   $\sum_{k=0}^\infty c_k x^k$         | Sequence $c_n$      |
| ------------------- | ---------------------------------------- | ------------------- |
| $\frac{1}{(1-x)^n}$ | $\sum_{k=0}^\infty {n+k-1 \choose k}x^k$ | ${n+k-1 \choose k}$ |
| $\frac{1}{(1-x)^2}$ | $\sum_{k=0}^\infty {(k+1)}x^k$           | $k+1$               |

### Finte sum

| Closed-form | GF $\sum_{k=0}^{n} c_k x^k$                | Coefficients $c_{k}$                                                                      | $c_{0},c_{1},\dots,c_{k},\dots ,c_{n}$                                                 |
| ----------- | ------------------------------------------ | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| $(1+x)^n$   | $\sum_{k=0}^n {n \choose k}x^k$            | $c_k={n \choose k}$                                                                       | ${n \choose 0},{n \choose 1},\dots,{n \choose k},\dots,{n \choose n}$                  |
| $(1-x)^n$   | $\sum_{k=0}^{n}{(-1)^k}{n \choose k}x^k$   | $c_k={(-1)^k}{n \choose k}$                                                               | ${n \choose 0},{-n \choose 1},\dots,{n \choose k},\dots,{n \choose n}$                 |
| $(a+x)^n$   | $\sum_{k=0}^n {n \choose k}a^{n-k}x^k$     | $c_k={n \choose k}a^{n-k}$                                                                | ${n \choose 0}a^n,{n \choose 1}a^{n-1},\dots,{n \choose k}a^{n-k},\dots,{n \choose n}$ |
| $(1+x^r)^n$ | $\sum_{k=0}^n {n \choose k}x^{rk}$         | $c_k=\begin{cases}{n \choose k} & \text{if } r\vert k \\ 0 & \text{otherwise}\end{cases}$ | depends on a const. $r$                                                                |
| $(1-x^r)^n$ | $\sum_{k=0}^n (-1)^{k}{n \choose k}x^{rk}$ | $c_k=\begin{cases} (-1)^k {n \choose k} & \text{if } r\vert k \\ 0 & \text{otherwise}\end{cases}$ | depends on a const. $r$                                                                |







___

# OLD 


|                              | Generating function                                                                |                |                           |
| ---------------------------- | ---------------------------------------------------------------------------------- | -------------- | ------------------------- |
| basic                        | $\frac{1}{(1-x)^n}=\sum_{k=0}^\infty {n+k-1 \choose k}x^k=(1+x+x^2+...)^n$         |                | ${n+k-1 \choose k}$       |
| multiplied by $(-1)^k$       | $\frac{1}{(1+x)^n}=\sum_{k=0}^\infty (-1)^k{n+k-1 \choose k}x^k=(1-x+x^2-...)^n$   |                | $(-1)^k{n+k-1 \choose k}$ |
| $n=2$                        | $\frac{1}{(1-x)^2}=\sum_{k=0}^\infty {(k+1)}x^k=1+2x+3x^2+\ldots$                  | $1,2,3,\ldots$ | $k+1$                     |
| $n=2$, and multiplied by $x$ | $\frac{x}{(1-x)^2}=\sum_{k=0}^\infty {k}x^k=x+2x^2+3x^3+\ldots$                    | $0,1,2,\ldots$ | $k$                       |
| multiplied by $a^k$          | $\frac{1}{(1-ax)^n}=\sum_{k=0}^\infty a^k{n+k-1 \choose k}x^k=(1+ax+a^2x^2+...)^n$ |                | $a^k{n+k-1 \choose k}$    |

### useful identities of factoring out  

- $(x^3+x^4+\cdots)^n=(x^3)^n(1+x+x^2+\cdots)^n$
- $(x+x^2+x^4+x^5+x^7+\ldots)^n=(x+x^2)^n(1+x^3+x^6+\ldots)^n$
- $(1+x^2+x^3+\cdots)^n=(\frac{1}{1-x}-x)^n=(1-x(1-x))^n{\frac{1}{(1-x)^n}}=(1-x+x^2)^n\frac{1}{(1-x)^n}$
- $(1-x)^3=(1-x)(1+x+x^2)$

