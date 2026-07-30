### Second kind (Stirling partition number)

$$\left\{ {n \atop k}\right\} = \frac{1}{k!}\sum_{i=0}^{k} (-1)^{i} \binom{k}{i} (k-i)^n.
$$

The Stirling numbers of the second kind, written $S(n,k)$ or $\lbrace\textstyle{n\atop k}\rbrace$ or with other notations, count: 

- The number of ways to partition a set of $n$ labelled objects into $k$ nonempty unlabelled subsets. 
- The number of different equivalence relations with precisely $k$ equivalence classes that can be defined on an $n$ element set.

<table><tbody><tr><th style="line-height:1.2;padding:0.1em 0.4em;"><div style="margin-left:2em;text-align:right"><i>k</i></div><div style="margin-right:2em;text-align:left"><i>n</i></div></th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr><tr><th>0</th><td>1</td></tr><tr><th>1</th><td>0</td><td>1</td></tr><tr><th>2</th><td>0</td><td>1</td><td>1</td></tr><tr><th>3</th><td>0</td><td>1</td><td>3</td><td>1</td></tr><tr><th>4</th><td>0</td><td>1</td><td>7</td><td>6</td><td>1</td></tr><tr><th>5</th><td>0</td><td>1</td><td>15</td><td>25</td><td>10</td><td>1</td></tr><tr><th>6</th><td>0</td><td>1</td><td>31</td><td>90</td><td>65</td><td>15</td><td>1</td></tr><tr><th>7</th><td>0</td><td>1</td><td>63</td><td>301</td><td>350</td><td>140</td><td>21</td><td>1</td></tr><tr><th>8</th><td>0</td><td>1</td><td>127</td><td>966</td><td>1701</td><td>1050</td><td>266</td><td>28</td><td>1</td></tr><tr><th>9</th><td>0</td><td>1</td><td>255</td><td>3025</td><td>7770</td><td>6951</td><td>2646</td><td>462</td><td>36</td><td>1</td></tr><tr><th>10</th><td>0</td><td>1</td><td>511</td><td>9330</td><td>34105</td><td>42525</td><td>22827</td><td>5880</td><td>750</td><td>45</td><td>1</td></tr></tbody></table>

### Relation to [[Bell numbers]]
Since the Stirling number $\lbrace\textstyle{n\atop k}\rbrace$ counts set partitions of an $n$-element set into $k$ parts, the sum $$B_n=\sum_{k=0}^n \left\{ {n \atop k} \right\}$$ over all values of $k$ is the total number of partitions of a set with $n$ members. 