# Partition into _k_

$p_{k}(n)$ is number of partitions of _n_ into exactly _k_ parts.
$${p_{k}(n)=p_{k-1}(n-1)+p_{k}(n-k)}$$
$$\eqalign{
&1\cr &1 \ 1\cr &1 \ 1 \ 1 \cr &1 \ 2 \ 1 \ 1 \cr &1 \ 2 \ 2 \ 1 \ 1 \cr &1 \ 3 \ 3 \ 2 \ 1 \ 1 \cr &1 \ 3 \ 4 \ 3 \ 2 \ 1 \ 1 \cr &1 \ 4 \ 5 \ 5 \ 3 \ 2 \ 1 \ 1 \cr &1 \ 4 \ 7 \ 6 \ 5 \ 3 \ 2 \ 1 \ 1 \cr
}$$

>https://en.wikipedia.org/wiki/Triangle_of_partition_numbers

# Partition 
**Partition** ^[question 7.19] of a positive integer $n$, also called an **integer partition**, is a way of writing $n$ as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. 

The partition function $p(n)$ equals the number of possible partitions of a non-negative integer $n$.

The values of this function for $0,1,2,3,\ldots$ are: (A000041)
$$1, 1, 2, 3, 5, 7, 11, 15, 22, 30, 42, 56,\ldots$$

$${\displaystyle p(n)=\sum _{k=0}^{n}p_{k}(n)}$$
>https://en.wikipedia.org/wiki/Partition_(number_theory)

# Partition with distinct parts
$Q(n)$, also denoted $q(n)$, ^[question 7.20] gives the number of ways of writing the integer $n$ as a sum of positive integers without regard to order with the constraint that **all integers in a given partition are distinct**. (A000009)
$$1, 1, 2, 2, 3, 4, 5, 6, 8, 10,\ldots$$

>https://en.wikipedia.org/wiki/Partition_(number_theory)#Odd_parts_and_distinct_parts