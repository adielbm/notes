
- $a_{0}=1,a_{n+1}=1+\frac{1}{a_{n}}$
- $a_{0}=1,a_{n+1}=\frac{1}{2+a_{n}}$
- $a_{1}=1,a_{n+1}=\frac{3}{a_{n}}+1$


- does $(a_{n})$ convergence, if so what is its limit, if not find the set of all its subsequntial limits.


# Exmaples

| $a_{1}=1,a_{n+1}=1+\frac{1}{a_{n}}$                                                  | solution way                                                                                                                                                      |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| prove that $a_{n}$ well-defiend                                                      | induction: $a_{n}>0$                                                                                                                                              |
| prove that $a_{n+2}=2-\frac{1}{1+a_{n}}$ for all $n$                                 | algebra                                                                                                                                                           |
| $x_{n}=a_{2n}$ <br>$y_{n}=a_{2n-1}$<br>prove that $(x_{n})$ and $(y_{n})$ convergent | induction: $1\leq x_{n}< 2$ (bound.)<br>induction: $1 < y_{n}\leq 2$ (bound.)<br>induction: $x_{n}<x_{n+1}$ (increase.)<br>induction: $y_{n}>y_{n+1}$ (decrease.) |
| check if $(a_{n})$ convergent                                                        | by calculate the limits of $(y_n)$ and $(x_n)$ (using shfit-rule & quadratic-formula) <br>if lim y=lim x then by 3.31 a_n conver. to it.<br>if not a_n divergent. |


85 2020a

| $\displaystyle a_{1}=1,a_{n+1}=a_{n}+\frac{(-1)^{n}}{n+1}$      | solution way                                                                                                |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| $x_{n}=a_{2n}$ <br>$y_{n}=a_{2n-1}$<br>prove that $y_{n}<x_{n}$ | (algarba)<br>$y_{n}=x_{n}-1$<br>$x_{n+1}=y_{n}+\frac{1}{2n}$                                                |
| $a_{n+2}=a_{n}+\frac{{(-1)^n}}{(n+1)(n+2)}$                     | algebra                                                                                                     |
| prove that $(x_{n})$ and $(y_{n})$ convergent                   | induction: $x_{n}>x_{n+1}$ (decrease.)<br>induction: $y_{n}<y_{n+1}$ (increase.)<br>and both bounded by (a) |
| prove that $(a_{n})$ convergent                                 |                                                                                                             |

# Q3d

> given that $(x_{n})$ and $(y_{n})$ convergent. **prove/disprove** if $(a_{n})$ convergent!

- chekc if $\lim y_{n}=\lim x_{n}$:
	- (Way 1) using shfit-rule (& quadratic-formula) $x=\frac{{-b}\pm \sqrt{ b^2-4ac }}{2a}$
	- (Way 2) using arithmetic (if we can express y as (x terms + null-seq) then are equal)
- if indeed $\lim y_{n}=\lim x_{n}$ then by 3.31 $a_{n}$ convergent
- if not $a_n$ divergent



