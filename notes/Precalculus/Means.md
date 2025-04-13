
Given:

- A sequence $x=(x_1,x_2,\dots,x_n)$ of $n$ real numbers
- A sequence $w=(w_1,w_2,\dots,w_n)$ of $n$ non-negative weights

| Mean                     | Formula                                                                                                                                                                                    |                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Arithmetic Mean          | $\overline{x}={\displaystyle {\frac {1}{n}}\sum \limits _{i=1}^{n}x_{i}}$                                                                                                                  |                                                                                                                                    |
| Geometric Mean           | ${\displaystyle \left(\prod \limits _{i=1}^{n}x_{i}\right)^{\frac {1}{n}}}$                                                                                                                |                                                                                                                                    |
| Harmonic Mean            | ${\displaystyle {\frac {n}{\displaystyle\sum \limits _{i=1}^{n}{\frac {1}{x_{i}}}}}}$                                                                                                      |                                                                                                                                    |
| Weighted Arithmetic Mean | ${\displaystyle {\frac {\displaystyle\sum \limits _{i=1}^{n}w_{i}x_{i}}{\displaystyle\sum \limits _{i=1}^{n}w_{i}}}}$                                                                      |                                                                                                                                    |
| Root-Mean Square (RMS)   | $\displaystyle \sqrt{\frac{1}{n}\sum \limits _{i=1}^{n}x_{i}^{2}}$                                                                                                                         |                                                                                                                                    |
| Mid-range                | $M=\displaystyle \frac{\max(x)+\min(x)}{2}$                                                                                                                                                |                                                                                                                                    |
| Median                   | $\tilde{x}=\displaystyle\text{median}(x)=\begin{cases}x_{\lfloor n/2\rfloor+1}&\text{if }n\text{ is odd}\\\frac{1}{2}\left(x_{n/2}+x_{n/2+1}\right)&\text{if }n\text{ is even}\end{cases}$ | given $x$ is non-decreasing                                                                                                        |
| Mode                     | $\displaystyle \mathrm{mode}(x) = \left\{ x_i \in x \,\mid\, w_i = \max (w) \right\}$ <br>                                                                                                 | the set of element(s) in $x$ with the maximum frequency, where $w\in \mathbb{N}^n$ are frequencies, and elements in x are distinct |
 
> _Arithmetic Mean_, _Geometric Mean_, and _Harmonic Mean_ are known collectively as the _Pythagorean Means_.
#### Inequalities





- **Mean Inequalities**: ($HM\leq GM\leq AM$). $x_{1},\dots ,x_{n}$ are positive reals $$\frac{n}{\sum^{n}_{i=1}{\frac{1}{x_{i}}}}\quad\leq\quad{\sqrt[n]{ \prod^{n}_{i=1}x_{i}}}\quad\leq\quad \frac{1}{n}\sum^{n}_{i=1}x_{i}$$
# Continuous Functions

Let $f(t)$ be a continuous function on the interval $[T_1,T_2]$.

| Mean                   | Formula                                                         |
| ---------------------- | --------------------------------------------------------------- |
| Root-Mean Square (RMS) | $\displaystyle\sqrt{\frac{1}{T_2-T_1}\int_{T_1}^{T_2}f(t)^2dt}$ |

