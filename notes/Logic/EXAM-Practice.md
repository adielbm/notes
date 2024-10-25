# Test 2

## Q5

Let $L$ be a FOL language, $L=\langle 0,1,+,\cdot,= \rangle$, and a model $R$.

> is the number $1/-3$ definable in $R$? if so, write the formula that defines it, if not explain why.

the number $1/-3$ is definable in $R$ 
example: $(1+1+1)\cdot x=1$

> is every rational positive number definable in $R$? if so, write the formula that defines it, if not explain why.

yes, 
example: $x\cdot 1=k$

> is the subtraction operation definable in $R$? if so, write the formula that defines it, if not explain why.

the subtraction operation is binary operation, but we can see it as 3-ary operation on $R$, which is the relation:

$\{ \langle a,b,c \rangle \in R^3 \mid a-b=c \}=\{ \langle a,b,c \rangle \in R^3 \mid a=c+b \}$

that is, the formula that defines the subtraction operation is:

$\varphi[x,y,z]=\left( x=z+y \right)$

# Test 3

## Q1

> (FOL) Let assume that the formula $A'$ is obtained from the formula $A$ by replacing the formulas $B_1,B_2,...,B_n$ with the formulas $B_1',B_2',...,B_n'$ respectively. 
> Prove ([[Structural Induction|structure induction]]) that if the formulas $B_1\leftrightarrow B_1',B_2\leftrightarrow B_2',...,B_n\leftrightarrow B_n'$ are [[Predicate Logic/Semantic#Logical Validity|logically valid]], then the formula $A\leftrightarrow A'$ is logically valid.



