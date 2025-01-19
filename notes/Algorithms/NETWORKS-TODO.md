rest of network flow material 

____

## Project Selection Problem

**Input**: A directed graph $G = \left( V, E \right)$ (precedence graph) and a value $p_i$ (which can be negative) for each node $i \in V$.

**Output**: A set of nodes $S \subseteq V$ with no outgoing edges, such that the value $p(S) = \sum_{i \in S} p_i$ is maximized.

**Note**: In the project selection problem, the input graph $G$ is not required to be acyclic. A cycle $C$ in the precedence graph represents a group of projects such that if one is selected, all must be selected. Thus, such a cycle $C$ can be contracted into a single node $v_C$ with a value $p(v_C) = p(C)$ representing all nodes (projects) in $C$. This process can be repeated until a directed acyclic graph is obtained.

---

## Algorithm for the Project Selection Problem

1. Construct a flow network:
   - Add a source $s$ and an edge $s \to i$ with capacity $c(s \to i) = p_i$ for each node $i$ with $p_i > 0$.
   - Add a sink $t$ and an edge $i \to t$ with capacity $c(i \to t) = -p_i$ for each node $i$ with $p_i < 0$.
   - Edges of the precedence graph are given infinite capacity.

2. Compute a minimum cut $R$ in the resulting network, and return the set of nodes $S = R \setminus \{s\}$.

---

## Correctness of the Algorithm

Let $R$ be a cut in the constructed flow network. Then $S = R \setminus \{s\}$ is a valid solution to the project selection problem if and only if there is no edge of the precedence graph (an edge with infinite capacity) leaving $R$, i.e., if and only if $R$ has finite capacity. 

Let $V^+ = \{i \in V : p_i > 0\}$ and assume the value of $s$ is zero. The set $\{s\}$ is a cut with finite capacity $c(\text{out}(s)) = p(V^+)$, so if $R$ is a minimum cut, then $R$ has finite capacity.

We now prove that for any cut $R$, it holds that:
$p(R) = p(V^+) - c(\text{out}(R))$

Thus, the problem of maximizing the value $p(R)$ of $R$ is equivalent to minimizing the capacity $c(\text{out}(R))$ of $R$.

### Proof:
1. $p(V^+) = p(V^+ \setminus R) + p(V^+ \cap R)$.
2. It is also evident that:
   $c(\text{out}(R)) = p(V^+ \setminus R) - p(R \setminus V^+)$.

3. Subtracting the second equation from the first eliminates the term $p(V^+ \setminus R)$, yielding:
   $p(V^+) - c(\text{out}(R)) = p(V^+ \cap R) + p(R \setminus V^+)$.

4. Hence:
   $p(V^+) - c(\text{out}(R)) = p(R)$, as required.

---

## Distribution Problem

**Input**: A directed graph with capacities $G = (V, E, c)$ and a demand $d_v$ (which can be negative) for each node $v \in V$.

**Question**: Is there a distribution—a function $f$ on the edges—satisfying:
- Capacity constraints: $0 \leq f(e) \leq c(e)$ for all $e \in E$.
- Demand conditions: $f(\text{in}(v)) - f(\text{out}(v)) = d_v$ for all $v \in V$.

**Definition**: Nodes with negative demand are called sources, and nodes with positive demand are called sinks.

Let $S = \{v \in V : d_v < 0\}$ be the set of sources, and $T = \{v \in V : d_v > 0\}$ the set of sinks.

---

## Algorithm for the Distribution Problem

1. Construct a flow network $(G', c', s, t)$:
   - Add a super-source $s$ and an edge $s \to v$ with capacity $c(s \to v) = -d_v$ for all $v \in S$.
   - Add a super-sink $t$ and an edge $v \to t$ with capacity $c(v \to t) = d_v$ for all $v \in T$.

2. Compute a maximum flow $f'$ from $s$ to $t$ in the resulting network.

3. If $\text{val}(f') = -d(S) = d(T)$, return "There exists a distribution" (the restriction of $f'$ to edges in $G$ is a distribution). Otherwise, return "No distribution exists."

---

## Correctness of the Algorithm

Suppose a distribution $f$ exists. Extend $f$ to a flow $f'$ in the network $(G', c', s, t)$ as follows:
- $f'(s \to v) = -d_v$ for all $v \in S$,
- $f'(v \to t) = d_v$ for all $v \in T$,
- $f'(e) = f(e)$ otherwise.

Since $f$ satisfies the demand conditions, $f'$ is a flow of value $-d(S) = f'(s) = f'(t) = d(T)$.

Conversely, suppose there is a flow $f'$ in $(G', c', s, t)$ of value $\text{val}(f') = -d(S) = d(T)$. Then all edges leaving $s$ or entering $t$ are saturated. From this, it is easy to deduce that the restriction of $f'$ to edges in $G$ is a distribution.

**Note**: From the proof of correctness, it follows that a necessary condition for the existence of a distribution is $-d(S) = d(T)$.

**Theorem**: A distribution exists in the network if and only if $-d(S) = d(T)$ and for all $R \subseteq V$, it holds that:
$c(\text{out}(R)) \geq -d(S \cap R) - d(T \cap R)$.
(The proof is left as an exercise.)
