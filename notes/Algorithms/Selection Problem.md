- The $i$th **order statistic** of a set $A$ of $n$ elements is the $i$th smallest element.
	- The **minimum** of a set is the first order statistic ($i=1$)
	- The **maximum** of a set is the $n$th order statistic ($i=n$)
	- The **median** is $i=\lfloor (n+1)/2 \rfloor$
- The **rank** $r$ of an element is its position in the linear order of the set

## Problem

- **Intput**: A set $A$ of $n$ (distinct) numbers and an integer $i$, with $1\leq i\leq n$.
- **Output**: The element $x\in A$ that is larger then exactly $i-1$ other elements of $A$.

## Algortihems 

- The **General case**:
	- $\text{Randomized-Select}$ takes $\Theta(n)$ in average case
	- $\text{Select}$ takes $\Theta(n)$ time in the worst case
	- Using in [[Data Structures#Order-statistic tree|Order-statistic tree]] (RB Tree with additional node field: *size*). $\text{OS-Select}$ takes $O(\lg{n})$ time in the worst case. 
- Speical cases:
	- (9.1) finding min and max simultaneously in $3\lfloor{n/2}\rfloor=O(n)$ comparisons 
	- (e9.1.1) finding the **second smallest** in $n+\lceil{\lg{n}}\rceil-2$ comparisons