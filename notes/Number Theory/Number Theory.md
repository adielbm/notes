
- **Division Theorem** (or **Quotient-Remainder Theorem**)
	- $\forall a, b \in \mathbb{Z}, b \ne 0: \exists! q, r \in \mathbb{Z}: a = q b + r, 0 \le r <  |{s}|$
- The **greatest common divisor** of two integers $a$ and $b$, which are not both $0$, usually denoted by $\gcd(a,b)$, is the largest integer that divides both $a$ and $b$

- The **least common multiple** of two integers $a$ and $b$, usually denoted by $\text{lcm}(a, b)$, is the smallest positive integer that is divisible by both $a$ and $b$
	- $\text{lcm}(a, b)=\frac{|ab|}{\gcd(a,b)}$
- **Basis representation theorem** - Let $b$ be a positive integer with $b > 1$. Then every positive integer $n$ can be written uniquely in the form $n = a_kb^k + a_{k-1}b^{k-1} + \dots + a_1b + a_0$ where $k$ is a nonnegative integer, $a_j$ is an integer with $0 \leq a_j \leq b - 1$ for $j = 0, 1, \dots, k$, and the initial coefficient $a_k \neq 0$.
- **Fundamental theorem of arithmetic**
	- Every integer $n>1$ can be represented **uniquely** as a product of prime numbers (the **prime factorization** of $n$), up to the order of the factors. 

# Primes 

- An integer $p>1$ is a **prime** if its positive divisors are $1$ and $p$ itself. 
- A positive integer $n$ is **composite** if it has a **divisor** $d$ that satisfies $1<d<n$ 
- Any integer $n>1$ that is not a prime is composite
- $1$ is neither prime nor composite
- There are infinitely many primes.
- For each composite number $n$ there exists a prime factor $p$ such that $p<n$


- **GCD is a Linear Combination** - For any nonzero integers $a$ and $b$, there exist integers $s$ and $t$ such that $\gcd(a, b) = as + bt$. 
	- Moreover, $\gcd(a, b)$ is the smallest positive integer of the form $as + bt$.
- Euclid’s Lemma - $p|{ab} \implies p | a \lor p | b$
- The integers $a$ and $b$, with $a\neq 0$ and $b \neq 0$, are **relatively prime** if $\gcd(a,b)=1$
	- Integers $a$ and $b$ are relatively prime if and only if there exist integers $s$ and $t$ such that $as + bt = 1$


