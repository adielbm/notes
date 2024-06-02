- $A$ is an $m\times n$ matrix. $T_{A}:V\to W$, $\dim V=n, \dim W=m$

| Matrix view                       | System view                                                 | Transformation view  |                 |
| --------------------------------- | ----------------------------------------------------------- | -------------------- | --------------- |
| $\text{row-space}({A})$           |                                                             |                      |                 |
| $\text{null}({A})$                | $\{ \mathbf{v} \in V :A\mathbf{v}=\mathbf{0} \}$            | $\text{Ker}(T)$      | subspace of $V$ |
|                                   |  $A\mathbf{v}=\mathbf{0}$                                                            | $v\in\text{Ker}(T)$  |                 |
| $\text{column-space}({A})$        | $\{\mathbf{b}:A\mathbf{x}=\mathbf{b}, \mathbf{x} \in V  \}$ | $\text{Im}({T})$     | subspace of $W$ |
| $\text{rank}(A)$                  |                                                             | $\dim(\text{Im}(T))$ |                 |
| zero matrix                       |                                                             | zero transformation  |                 |
| $\rho([A\mid\mathbf{b}])=\rho(A)$ | $A\mathbf{x}=\mathbf{b}$ is **consistent**                  |                      |                 |


- $A$ and $B$ are an $m\times n$ matrix that represent $T_{A},T_{B}:V\to W$

| Matrix view                               | Transformation view                                             |
| ----------------------------------------- | --------------------------------------------------------------- |
| $A$ and $B$ are equivalent | $T_{A}$ and $T_{B}$ are the same transformation (in diff bases) |
| $A$ and $B$ are row equivalent            |                                                                 |

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

