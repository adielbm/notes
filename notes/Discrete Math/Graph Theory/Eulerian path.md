- **Eulerian path** is a path in a finite graph that visits every edge exactly once. 
- Similarly, an **Eulerian circuit** or **Eulerian cycle** is an Eulerian path that starts and ends on the same vertex.
- A graph that contains a Eulerian cycle is called a **Eulerian graph**.

### Theorems
- A connected graph is eulerian if and only if it is **even**^[every vertex of G has positive **even degree**].
- Let $G$ be a graph, and let $v$ and $u$ be two distinct vertices of G. There is an **Eulerian path** from $v$ to $u$ if, and only if, $G$ is connected, $v$ and $u$ have odd degree, and all other vertices of $G$ have positive even degree.^[question 1]

___

- *Proposition*: in graph that has a **Eulerian cycle** that is also **Hamiltonian cycle**, is 2-regular.  
  *Proof:* $e_1=(v_0v_1),e_2=(v_1v_2),e_n=(v_{n-1}v_n), e_{n+1}=(v_{n}v_0)$. is Eulerian and Hamiltonian cycle, and $e_1,\ldots,{e_{n+1}}$ are all the graph edges, and each one appear once time, therefore $|E|=|V|=n+1$. now because Eulerian cycle all degere are even, and because hamiltonian cycle, there's no vertex with 0 degree, therefore, $2|E|=2|V|\le{\sum_{v\in{V}}\text{deg}_G{(v)}=2|E|}\Longrightarrow{2|V|=\sum_{v\in{V}}\text{deg}_G{(v)}}$, therefore  is 2-regular.
- *Proposition*: in graph that has a **Eulerian cycle** that is also **Hamiltonian cycle**, is cycle graph.
  *Proof:* there is hamiltonian cycle, thus is connected, therefore, according to the previous proposition and question 1.2, it follows that is cycle graph.
