



# Recursively Defined Sets

A recursive definition of a set $S$ has the following parts:

- **Basis Step**: $s_0, s_1, \ldots, s_n\in S$ are specified.
- **Recursive Step**: If $x_0, x_1, \ldots, x_k\in S$, then $f(x_0, x_1, \ldots, x_k)\in S$. 
- **Exclusion Rule**: Every element of $S$ can be obtained from the basis and finitely many applications of the recursive step.

> [!EXAMPLE]
> - (_natural numbers_) Basis: $0 \in S$; Recursive: if $n \in S$, then $n+1 \in S$; ($f(x) = x+1$)
> - (_even numbers_) Basis: $0 \in S$; Recursive: if $n \in S$, then $n+2 \in S$; ($f(x) = x+2$)
> - (the set $\Sigma^*$ of all strings over an alphabet $\Sigma$) Basis: $\epsilon \in \Sigma^*$; Recursive: if $w \in \Sigma^*$ and $a \in \Sigma$, then $wa \in \Sigma^*$. ($f(x, y) = xy$)
> - (_palindromes_) Basis: $\epsilon \in S$ and $a \in S$ for all $a \in \Sigma$; Recursive: if $w \in S$, then $awa \in S$ for all $a \in \Sigma$. ($f(x, y) = xyx$)


# Recursivley Defined Functions

Informally, A recursive definition of a function defines values of the function for some inputs in terms of the values of the same function for other (usually smaller) inputs.

> [!EXAMPLE]
> - Factorial function: $n! = n\cdot (n-1)!$ for $n>0$ and $0! = 1$.
> - Fibonacci sequence: $F(n) = F(n-1) + F(n-2)$ for $n>1$ and $F(0) = 0, F(1) = 1$.

# Structural Induction

Given a recursively defined set $S$, and a property $P(x)$ that objects in S may or may not satisfy. we can prove that every object in $S$ satisfies $P(x)$ by structural induction. 

- **Basis Step**: Prove that $P(s_0), P(s_1), \ldots, P(s_n)$ are true.
- **Induction**: 
	- Assume that $P(x_0), P(x_1), \ldots, P(x_k)$ are true, for some $x_0, x_1, \ldots, x_k\in S$.
	- Prove that $P(f(x_0, x_1, \ldots, x_k))$ is true.
- **Exclusion Rule**: We can conclude that $\forall x\in S, P(x)$ is true.

> [!EXAMPLE]
> Prove that every $x\in S$ is divisible by 3, where $S$ is recursively defined with basis $6,15\in S$ and recursive step $x,y\in S \Rightarrow x+y\in S$.
> - **Basis**: $6$ and $15$ are divisible by 3.
> - **Inductive Hypothesis**: Assume that $x$ and $y$ are divisible by 3.
> - **Inductive Step**: $x+y$ is divisible by 3.
> - **Closure Rule**: Every $x\in S$ is divisible by 3.