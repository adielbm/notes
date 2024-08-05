## Norm of a Vector

- (d12.1.3) - $\| \textbf{a} \|:=\sqrt{\textbf{a} \cdot \textbf{a}}=\sqrt{ \sum_{i=1}^{n}a_{i}^2 }$
- (q12.1.4) $\|\textbf{a} \|=0 \iff \textbf{a}=\textbf{0}$
- Homogeneity (q12.1.5) $\|t \textbf{a} \|=|t|\cdot\| \textbf{a} \|$
- Cauchy–Schwarz inequality (12.1.4) $|\textbf{a}\cdot\textbf{b}| \leq  \| \textbf{a} \| \cdot{\| \textbf{b} \|}$
- (q12.1.7) $|\textbf{a}\cdot\textbf{b}| =  \| \textbf{a} \| \cdot{\| \textbf{b} \|} \iff \textbf{a},\textbf{b}$ are linearly inpendent 
- (q12.1.8) Triangle inequality for vectors $\| \textbf{a} + \textbf{b} \| \leq \| \textbf{a} \| +{\| \textbf{b} \|}$
- Parallelogram Equation for Vectors $\|\textbf{u}+\textbf{v} \|^2+\|\textbf{u}-\textbf{v} \|^2=2(\|\textbf{u}\|^2+\|\textbf{v}\|^2)$

## Coordinates Vector

- Suppose $\mathcal{B}=\{b_1,\ldots,b_n\}$ is a basis for a vector space $V$. 
    - The **coordinate vector** of $v\in V$ with respect to $\mathcal{B}$ is the unique vector $[v]_{\mathcal{B}}\in \mathbb{F}^n$ such that $v=\lambda_1b_1+\ldots+\lambda_nb_n$ where $\lambda_i$ are the components of $[v]_{\mathcal{B}}$.
    - (8.4.4) A set of vectors $\mathcal{K}=\{v_1,\ldots,v_n\}$ is linearly independent if and only the set of corresponding coordinate vectors $\{[v_1]_{\mathcal{B}},\ldots,[v_n]_{\mathcal{B}}\}$ is linearly independent
- (10.2.1) coordinate vector of image - $[T(v)]_{C}=[T]^{B}_{C}[v]_{B}$

# Orthogonality  

- (d12.2.1) orthogonality of two vectors - $\textbf{a}$ and $\textbf{b}$ are called orthogonal if $\textbf{a}\cdot\textbf{b}=0$ (This relationship is denoted $\textbf{a}\perp\textbf{b}$)
- (q12.2.3) Generalized Theorem of Pythagoras: $\textbf{a}\perp\textbf{b}\implies\| \textbf{a} + \textbf{b} \|^2 = \| \textbf{a} \|^2 +{\| \textbf{b} \|}^2$
- (d12.2.2) $\mathbf{v} \perp U$ if for all vectors $\mathbf{u} \in U$, $\mathbf{v} \cdot \mathbf{u} = 0$
