- $A$ is a $m \times n$ matrix over a field $\mathbb{F}$ 
- $V=\mathbb{F}^n$, $W=\mathbb{F}^m$
- $T:V\to W$ is a linear transformation, defined by $T(\mathbf{v})=A\mathbf{v}$
- $\dim V=n$, $\dim W=m$


#todo T is surjective

$$
\begin{array}{| l c l c l c l c l | l |}
\hline
\text{System view} & | &  & &  \text{Matrix view} & & & | & \text{Transformation v.} & \text{Notes} \\
\hline
\text{Sol. set of }A\mathbf{x}=\mathbf{b} & & &= &  &=&\{ \mathbf{v} \in V : A\mathbf{v}=\mathbf{b} \} & = &   & \text{affine subspace }  \\
\text{Sol. set of }A\mathbf{x}=\mathbf{0} & &  &= & \text{null}({A})&=&\{ \mathbf{v} \in V : A\mathbf{v}=\mathbf{0} \} & = & \text{Ker}(T) & \text{subspace of } V  \\
& & & = & \text{row-space}({A}) & = &&=& \text{coimage}(T) & \text{subspace of } V \\
& & & & \text{col-space}({A})&=&\{\mathbf{b} : A\mathbf{x}=\mathbf{b}, \mathbf{x} \in V  \} & = & \text{Im}(T) & \text{subspace of } W \\
& & & & \text{rank}(A)&=&\dim(\text{row-space}(A)) & = & \dim(\text{Im}(T)) & \\
& & & &  \text{nullity}(A)&=&\dim(\text{null}(A)) & = & \dim(\text{Ker}(T)) & \\
 \mathbf{v} \text{ is a sol. of } A\mathbf{x}=\mathbf{0} & & &\iff & \mathbf{v}\in\text{null}(A) & \iff &  & \iff & \mathbf{v}\in\text{Ker}(T) & \\
A\mathbf{x}=\mathbf{b} \text{ is consis.} & & &  \iff &  \mathbf{b}\in \text{col-space}(A) & \iff & \text{rank}([A\mid\mathbf{b}])=\text{rank}(A) &  \iff & \mathbf{b} \in \text{Im}(T) & \\
A\mathbf{x}=\mathbf{b} \text{ is inconsis.} & &  & \iff &  \mathbf{b}\notin \text{col-space}(A) & \iff &   &  \iff & \mathbf{b} \notin \text{Im}(T) & \\
 \mathbf{0} \text{ is the only sol. of }Ax=0&\iff & \text{null}(A)=\{ \mathbf{0} \} &  \iff & \text{row-space}({A})=V &\iff& \text{rank}(A)=n & \iff & T \text{ is injective} &  \\
\forall \mathbf{b}\in{W},A\mathbf{x}=\mathbf{b} \text{ is consis.}  & \iff &  \text{null}(A^T)=\{ \mathbf{0} \} &\iff & \text{col-space}({A})=W &\iff& \text{rank}(A)=m & \iff & T \text{ is sur.  } (\text{Im}(T)=W) & \\
 & & A=\mathbf{0} &\iff& \text{rank}(A)=0 & & & \iff & T \text{ is the zero trans.} &   \\
 A\mathbf{x}=\mathbf{b} \text{ is homo.}  & \iff& &  \iff & \mathbf{b}=\mathbf{0} \\ \hline 
& & & &  A \text{ is square} & \iff & n=m & \iff& \dim(V) = \dim(W) & \\
 \forall \mathbf{b},A\mathbf{x}=\mathbf{b} \text{ has uni. sol.} & & & \iff & A \text{ is invertible} & \iff & & \iff& T \text{ is bijective (iso.)} &  \\
 A\mathbf{x}=\mathbf{0} \text{ has non-triv. sol.} & & & \iff & A \text{ is singular} & \iff & & \iff& T \text{ is not bijective} &  \\

\hline
\end{array}
$$


___


- $A$ and $B$ are an $m\times n$ matrix that represent $T_{A},T_{B}:V\to W$

| Matrix view                    | Transformation view                                             |
| ------------------------------ | --------------------------------------------------------------- |
| $A$ and $B$ are equivalent     | $T_{A}$ and $T_{B}$ are the same transformation (in diff bases) |
| $A$ and $B$ are row equivalent |                                                                 |

## Square matrix: $\dim{V}=\dim{W}=n$

- $A$ is an $n\times n$ matrix, $T:V\to W$

| Matrix view       | System view                                           | Transformation view          |
| ----------------- | ----------------------------------------------------- | ---------------------------- |
| invertible matrix | $A\mathbf{x}=\mathbf{0}\implies\mathbf{x}=\mathbf{0}$ | isomorphism (invertible map) |

- $A$ is an $n\times n$ matrix, $T:V\to V$ 

| Matrix view           | Transformation view |
| --------------------- | ------------------- |
| idintity metrix       | identity operator   |
| diagonalizable matrix |   **todo**                  |

### Relations 

- $A$ and $B$ are an $n\times n$ matrix that represent $T_{A},T_{B}:V\to W$

| Matrix view             | Transformation view                  |
| ----------------------- | ------------------------------------ |
| $A$ and $B$ are similar | the same transformation (diff bases) |

- $A$ and $B$ are an $n\times n$ matrix that represent $T_{A},T_{B}:V\to V$

| Matrix view | Transformation view |
| ----------- | ------------------- |
|             |                     |


___

