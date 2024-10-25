

- A **ring** $R$ is a set with two binary operations, addition and multiplication, such that for all $a,b,c\in R$:
    - $a+b=b+a$ (commutative property of addition)
    - $(a+b)+c=a+(b+c)$ (associative property of addition)
    - There exists an element $0\in R$ such that $a+0=a$ for all $a\in R$ (additive identity)
    - There exists an element $-a\in R$ such that $a+(-a)=0$ for all $a\in R$ (additive inverse)
    - $a(bc)=(ab)c$ (associative property of multiplication)
    - $a(b+c)=ab+ac$ and $(b+c)a=ba+ca$ (distributive property)

> A ring is actually an [[Group Theory#Abelian Group (Commutative Group)|Abelian Group]] under addition, also having an associative multiplication that is left and right distributive over addition

- A ring $R$ is called **commutative ring** if $ab=ba$ for all $a,b\in R$

- A **unity** (or **identity**) in a ring is a nonzero element that is an identity under multiplication. (i.e. $1a=a$ for all $a\in R$)
    - A nonzero element of a commutative ring with unity need not have a multiplicative inverse. When it does, we say that it is a **unit** of the ring
- We say that a ring $R$ has a **unity** if there exists an element $1\in R$ such that $1a=a1=a$ for all $a\in R$
- A subset $S$ of a ring $R$ is called a **subring** if $S$ is a ring under the same operations as $R$
    - Subring Test: #todo

- A **zero-divisor** in a commutative ring $R$ is a nonzero element $a\in R$ such that there exists a nonzero element $b\in R$ with $ab=0$
- An **integral domain** is a commutative ring with unity and no zero-divisors

# Properties

## Rules of Multiplication  

Let $a,b,c\in R$, then:

- $a0=0a=0$ 
- $(-a)b=a(-b)=-(ab)$
- $(-a)(-b)=ab$
- $a(b-c)=ab-ac$ and $(b-c)a=ba-ca$

Furthermore, if $R$ has a unity element $1$, then: 

- $(-1)a=-a$
- $(-1)(-1)=1$

## Theorems

- If a ring has a unity, it is unique
- If a ring element has a multiplicative inverse, it is unique