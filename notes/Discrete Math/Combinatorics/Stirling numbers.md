### Second kind (Stirling partition number)

$$\left\{ {n \atop k}\right\} = \frac{1}{k!}\sum_{i=0}^{k} (-1)^{i} \binom{k}{i} (k-i)^n.
$$

The Stirling numbers of the second kind, written $S(n,k)$ or $\lbrace\textstyle{n\atop k}\rbrace$ or with other notations, count the number of ways to partition a set of $n$ labelled objects into $k$ nonempty unlabelled subsets. 

Equivalently, they count the number of different **equivalence relations** with precisely $k$ equivalence classes that can be defined on an $n$ element set.

<table style="text-align:right;" class="wikitable">

<tbody><tr>
<th style="background:#EAECF0;background:linear-gradient(to top right,#EAECF0 49%,#AAA 49.5%,#AAA 50.5%,#EAECF0 51%);line-height:1.2;padding:0.1em 0.4em;"><div style="margin-left:2em;text-align:right"><i>k</i></div><div style="margin-right:2em;text-align:left"><i>n</i></div>
</th>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">0
</th>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">1
</th>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">2
</th>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">3
</th>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">4
</th>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">5
</th>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">6
</th>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">7
</th>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">8
</th>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">9
</th>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">10
</th></tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">0
</th>
<td>1
</td></tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">1
</th>
<td>0
</td>
<td>1
</td></tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">2
</th>
<td>0
</td>
<td>1
</td>
<td>1
</td></tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">3
</th>
<td>0
</td>
<td>1
</td>
<td>3
</td>
<td>1
</td></tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">4
</th>
<td>0
</td>
<td>1
</td>
<td>7
</td>
<td>6
</td>
<td>1
</td></tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">5
</th>
<td>0
</td>
<td>1
</td>
<td>15
</td>
<td>25
</td>
<td>10
</td>
<td>1
</td></tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">6
</th>
<td>0
</td>
<td>1
</td>
<td>31
</td>
<td>90
</td>
<td>65
</td>
<td>15
</td>
<td>1
</td></tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">7
</th>
<td>0
</td>
<td>1
</td>
<td>63
</td>
<td>301
</td>
<td>350
</td>
<td>140
</td>
<td>21
</td>
<td>1
</td></tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">8
</th>
<td>0
</td>
<td>1
</td>
<td>127
</td>
<td>966
</td>
<td>1701
</td>
<td>1050
</td>
<td>266
</td>
<td>28
</td>
<td>1
</td></tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">9
</th>
<td>0
</td>
<td>1
</td>
<td>255
</td>
<td>3025
</td>
<td>7770
</td>
<td>6951
</td>
<td>2646
</td>
<td>462
</td>
<td>36
</td>
<td>1
</td></tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: right;" class="table-rh">10
</th>
<td>0
</td>
<td>1
</td>
<td>511
</td>
<td>9330
</td>
<td>34105
</td>
<td>42525
</td>
<td>22827
</td>
<td>5880
</td>
<td>750
</td>
<td>45
</td>
<td>1
</td></tr>
</tbody></table>

### Relation to [[Bell numbers]]
Since the Stirling number $\lbrace\textstyle{n\atop k}\rbrace$ counts set partitions of an $n$-element set into $k$ parts, the sum $$B_n=\sum_{k=0}^n \left\{ {n \atop k} \right\}$$ over all values of $k$ is the total number of partitions of a set with $n$ members. 