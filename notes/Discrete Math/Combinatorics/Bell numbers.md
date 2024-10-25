The Bell number^[https://oeis.org/A000110] $B_{n}$ counts **the number of different ways to partition a set** that has exactly $n$ elements, or equivalently, **the number of [[Binary Relation#Equivalence relation|Equivalence relation]]** on it.

$$1, 1, 2, 5, 15, 52, 203, 877, 4140, ...$$

>For the number of different equivalence relations with **precisely** $k$ equivalence classes, see [[Stirling numbers#Second kind (Stirling partition number)]]


#### Bell numbers computed using recursive formula
$${B_{n + 1}} = \sum\limits_{k = 0}^n {\left( {\begin{array}{*{20}{c}}
n\\
k
\end{array}} \right){B_k}},$$

