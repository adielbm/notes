
- ${\text{divisor}})\overline{\text{dividend}}$
- If $f(x)$ (**dividend**) and $d(x)$ (**divisor**) are polynomials such that $d(x)\neq 0$ and $\deg{d(x)}\leq\deg f(x)$, then there exist unique polynomials $q(x)$ (**quotient**) and $r(x)$ (**remainder**) such that: 
	- $f(x)=d(x)q(x)+r(x)$ (or $\displaystyle\frac{f(x)}{d(x)}=q(x)+\frac{r(x)}{d(x)}$)
	- where $r(x)=0$ or $\deg{r(x)} <\deg{d(x)}$ (if $r=0$ then $d(x)$ **divides evenly** into $f(x)$)

### Division Algorithm 

- initialize $q(x)$ as $0$ (written above the bar line)
- initialize $r(x)$ as $f(x)$ (written in the bottom)

while $r\neq0$ and $\deg(r) \geq \deg(d)$ do

1. Divide $\text{lead}(r(x))$ by $\text{lead}(d(x))$, and add the result to the $q(x)$
2. Multiply $d(x)$ by the result just obtained, and write the product result under the first two terms of the dividend.
3. Subtract the product just obtained from $r(x)$
4. Bring down the next term from $f(x)$


