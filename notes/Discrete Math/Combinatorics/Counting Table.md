| Cells $n$                       | distinct                                 | distinct           | identical    | identical                                                                                  |
| ------------------------------- | ---------------------------------------- | ------------------ | ------------ | ------------------------------------------------------------------------------------------ |
| **Balls** $k$                   | **distinct**                             | **identical**      | **distinct** | **identical**                                                                              |
| $0\leq{x_i}\leq{1}$, $n\geq{k}$ | $\frac{n!}{(n-k)!}=(n)_{k}$              | $\binom{n}{k}$     | 1            | 1                                                                                          |
| $x_i\geq{0}$                    | $n^k$                                    | $\binom{n+k-1}{k}$ |              | $p(k)$     ^[[[Partition#Partition]]]                                                      |
| $x_i\geq{1}$                    | $n!{\lbrace\textstyle{k\atop n}\rbrace}$ | $\binom{k-1}{n-1}$ |              | $p_{n}(k)$ ^[ [[Partition#Partition into _k_]]. Note, there, n is balls, and k is cells  ] |


Shahriari, _An Invitation to Combinatorics_, 349.



| #   | $k$ Balls | $n$ Cells | Order in Cell | Empty Cells | Additional Restrictions | Formula / Notation                                              |
| --- | --------- | --------- | ------------- | ----------- | ----------------------- | --------------------------------------------------------------- |
| 1   | Identical | Distinct  | No            | allowed     | At most 1 per cell      | $\binom{n}{k}$ if $k \leq n$                                    |
| 2   | Distinct  | Distinct  | No            | allowed     | At most 1 per cell      | $\binom{n}{k} \cdot k!$ if $k \leq n$                           |
| 3   | Distinct  | Distinct  | No            | allowed     | None                    | $n^k$                                                           |
| 4   | Identical | Distinct  | No            | allowed     | None                    | $\binom{n + k - 1}{k}$                                          |
| 5   | Distinct  | Distinct  | Yes           | allowed     | None                    | $n^k$                                                           |
| 6   | Distinct  | Distinct  | No            | Not allowed | None                    | $S(k, n) \cdot n!$                                              |
| 7   | Distinct  | Identical | No            | Not allowed | None                    | $S(k, n)$                                                       |
| 8   | Distinct  | Distinct  | No            | Not allowed | Any number of cells     | $\sum_{i=1}^{n} S(k, i) \cdot \binom{n}{i} \cdot i!$            |
| 9   | Distinct  | Identical | No            | Not allowed | Any number of cells     | $\sum_{i=1}^{n} S(k, i)$                                        |
| 10  | Identical | Identical | No            | Not allowed | None                    | $p_n(k)$ (partitions of $k$ into exactly $n$ positive integers) |
| 11  | Identical | Identical | No            | Not allowed | Any number of cells     | $p(k)$ (all integer partitions of $k$)                          |

