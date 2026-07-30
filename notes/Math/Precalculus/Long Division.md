$$\require{enclose} 
\begin{array}{rll} 
\text{quotient} && \\[-3pt] 
\text{divisor} \enclose{longdiv}{\text{dividend}}\kern-.2ex \\[-3pt] 
\underline{\phantom{0}\dots} && \\[-3pt] 
\phantom{0}\text{remainder} 
\end{array}\to\quad\frac{\text{dividend}}{\text{divisor}}\quad=\quad\text{quotient}+\frac{\text{remainder}}{\text{divisor}}
$$

1. Identify the shortest initial sequence of digits $d$ from the dividend (starting from the left) such that $d \geq \text{divisor}$.
2. Compute $q = \left\lfloor \dfrac{d}{\text{divisor}} \right\rfloor$ and write $q$ above the rightmost digit of $d$ (on the quotient line).
3. Write $r=d - \left( \text{divisor} \times q \right)$ below the rightmost digit of $d$. 
4. Bring down the next digit of the dividend (if any) to the right of $r$, forming a new number, which becomes the new $d$.
5. Repeat steps 2–4 until all digits of the dividend have been processed.
6. The final $r$ after the last step is the $\text{remainder}$, and the concatenation of all $q$ values forms the $\text{quotient}$.

