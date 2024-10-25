## Number of Relations

Number of [[Binary Relation]]s on a **single set** $A$ (s.t. $|A|=n$ ). ^[https://en.wikipedia.org/wiki/Template:Number_of_relations] ^[https://math24.net/counting-relations.html].

| Relation type      | Number of relations on a **Single Set** of _n_-elemetns |
| ----------- | ----------- | 
| Any ^[it's the same as the **number of functions** from $A$ to $P(A)$ ]     | $2^{n^{2}}$  |
| Transitive   |          |
| Reflexive or Irreflexive  | $2^{n^{2}-n}$        |
| Symmetric   | $2^{\frac{n^2-1}{2}}$        |
| Antisymetric | ${2^n} \cdot {3^{\frac{{{n^2} - n}}{2}}} = {2^n}\sqrt {{3^{n\left( {n - 1} \right)}}} .$ |
| Asymmetric | $\sqrt {{3^{n\left( {n - 1} \right)}}}$ |
| [[Binary Relation#Equivalence relation\|Equivalence relation]]   | [[Bell numbers]] |
| Total Order | $n!$ |

#### Number of any Relations from A to B 
$$2^{\mid A \mid \cdot \mid B \mid} = {\mid}P(A\times B){\mid}$$  