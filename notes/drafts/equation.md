some of my thoughts and material i found on a formal definition of _equation_, _formula_ and _expression_ in the context math.

> see also: https://math.stackexchange.com/questions/38155/what-is-the-difference-between-equation-and-formula

# Equation

How to define an equation? is _equation_ a statement that connects two expressions with an $=$ sign and asserts their equality?

## Suggested Definition

this is based on https://math.stackexchange.com/a/2739033/1043399

- An **equation** is a predicate $P(x): U \to \{\text{true}, \text{false}\}$ of the form $s(x) = t(x)$ where $x$ is a [[Logic/Predicate Logic/Syntax#Free & Bound Variables|free variable]] (or vector of free variables $x=(x_1, x_2, \dots,x_n)$) and $s(x), t(x)$ are [[Logic/Predicate Logic/Syntax#Terms|terms]] which evaluate to objects of the universe $U$ when other objects are substituted for variables.
	- To **solve** an equation is to determine the **solution set** $P^{-1}(\text{true})=\{c \in U : P(c) = \text{true}\}$, the set of all elements of the universe for which the equation is true.
	- An equation is **inconsistent** if $P^{-1}(\text{true}) = \emptyset$.
	- An equation is **conditional** if $P^{-1}(\text{true}) \neq U$.
	- An equation is **identity** if $P^{-1}(\text{true}) = U$.
	- A **solution** to an equation is an element of $P^{-1}(\text{true})$.

> In the context of equation-solving, a variable is an **unknown**

> [!EXAMPLE] Examples, given the universe $U = \mathbb{R}$:
> - $x\times y=y\times x$ (identity equation, the solution set is the whole universe $\mathbb{R}$)
> - $\log(xy) = \log(x) + \log(y)$ (identity equation, logarithmic identity, the solution set is the whole universe $\mathbb{R}$)
> - $2x=6$ (conditional equation)
> - $|2x|=x-1$ (inconsistent equation)
> - $y = 3x + 1$ (conditional equation, the solution set is a line in the plane)
> - $x^2 + y^2 = 1$ (conditional equation, the solution set is the unit circle in the plane)


> [!NOTE] 
> what about expressions like $1+2=3$ or $e^{i\pi}=-1$, they do not have any variable, is it an equation? https://math.stackexchange.com/questions/1809529/is-32-5-a-equation?noredirect=1&lq=1)

## Parameters

What about an expression like $(x-h)^2 + (y-k)^2 = r^2$ where $h,k,r$ are known as the parameters (or arbitrary constant?)...?

#todo 

# other expressions to consider


|                                                               |                                                                 |
| ------------------------------------------------------------- | --------------------------------------------------------------- |
| $MPG=\frac{\text{Miles Driven}}{\text{Gallons of Fuel Used}}$ | Miles per gallon calculation                                    |
| $a^2 + b^2 = c^2$                                             | Pythagorean Theorem                                             |
| $F=ma$                                                        |                                                                 |
| $y = 3x + 1$                                                  | Equation of a line                                              |
| $ax^2 + bx + c = 0$                                           | Quadratic equation                                              |
| $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$                      | Quadratic formula                                               |
| $\frac{9}{5}°C + 32 = °F$                                     | Celsius to Fahrenheit conversion                                |
| $2x = 10$                                                     | Simple linear equation                                          |
| $T = \frac{1}{2} mv^2$                                        | Kinetic energy formula                                          |
| $\log(xy) \equiv \log(x) + \log(y)$                           | Logarithmic identity                                            |
| $x^2 + ky^2 = 1$                                              | Conditional equation (ellipse, hyperbola, etc., depending on k) |
| $2x^2 + 3x = 5$                                               | Conditional quadratic equation                                  |
| $V = \pi r^2 h$                                               | Volume of a cylinder                                            |
| $\mid2x\mid = x - 1$                                          |                                                                 |
| $(a + b)^n$ or $(1 + x)^r$                                    | Binomial theorem                                                |
| $\ce{H2O}$                                                    | Chemical formula for water                                      |







