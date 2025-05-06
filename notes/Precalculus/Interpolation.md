- The **linear interpolant** between two points $(x_0, y_0)$ and $(x_1, y_1)$ for a value $x \in(x_0, x_1)$ is the value $y$ on the straight line connecting these points, given either by: 
	- $y = y_0 + (x-x_0)\frac{y_1 - y_0}{x_1 - x_0}$ 
	- $y = y_0 \left(\frac{x_1 - x}{x_1 - x_0}\right) + y_1 \left(\frac{x - x_0}{x_1 - x_0}\right)=y_0w_0 + y_1w_1$ where $w_0$ and $w_1$ are the weights for $y_0$ and $y_1$, respectively. (These satisfy $w_0 + w_1 = 1$)
- **Linear interpolation on a data set** of points $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$ is defined as a piecewise linear function resulting from the concatenation of linear interpolants between each adjacent pair of data points. This function is continuous ($C^0$).
- The **error** of approximating a function $f(x)$ using linear interpolation with points $(x_0, f(x_0))$ and $(x_1, f(x_1))$ is defined as: $R_T = f(x) - p(x)$ where $p(x)$ is the linear interpolation polynomial $p(x) = f(x_0) + \frac{f(x_1) - f(x_0)}{x_1 - x_0}(x - x_0)$ 
- **Error Bound Theorem:** If a function $f$ has a continuous second derivative on the interval $[x_0, x_1]$, the error $|R_T|$ of linear interpolation for $x \in [x_0, x_1]$ is bounded by $|R_T| \leq \frac{(x_1 - x_0)^2}{8} \max_{x_0 \leq x \leq x_1} \left|f''(x)\right|$ 



