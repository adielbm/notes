|         | Proof by Contradiction                                        | Implied By              |
| ------- | ------------------------------------------------------------- | ----------------------- |
| Given-1 | $f$ is continuous on $I=[a,b]$                                |                         |
|         | $f$ is **not bounded** above on $I=[a,b]$                     | Assume by contradiction |
|         | $\forall n \in \mathbb{N}, \exists x_{n} \in(a,b):f(x_{n})>n$ |                         |
| 1       | $\displaystyle\lim_{ n \to \infty }f(x_{n})=\infty$           |                         |
|         | let's define a sequence $(x_{n})$                             |                         |
|         | there exists convergent subsequece $(x_{n_{k}})\to c$         | by BW                   |
|         | $\displaystyle\lim_{ k \to \infty }f(x_{n_{k}})=f(c)$         | by 5.27                 |
|         | $\displaystyle\lim_{ n \to \infty }f(x_{n_{l}})=\infty$       | by 1                    |
|         | **Contradiction!**                                            |                         |
