# Q1

given the following languages over the alphabet $\Sigma = \{a,b\}$

- $L_1=\{\varepsilon\}$
- $L_2=\emptyset$
- $L_3=\{abb,b,aaa\}$
- $L_4=\{bb,\varepsilon\}$
- $L_5=\{bbb,aa,b\}$

1. $L_1 L_5 = \{ bbb, aa, b \}$
2. $L_2 L_3 = \emptyset$
3. $L_5 L_4 = \{ bbb, bbbbb, aa, aabb, b \}$
4. $L_3 - L_5 = \{ abb, aaa \}$
5. $(L_3 \cup L_5)^{\mathcal{R}} = \{ bba, b, aaa, bbb, aa \}$


# Q2

given languages $L_{1},L_{2},L_{3}$ over the alphabet $\Sigma$. Prove or disprove the following:

- (a) $(L_{1}\cup L_{2})L_{3}= L_{1}L_{3}\cup L_{2}L_{3}$ ?
	- Let $w\in (L_{1}\cup L_{2})L_{3}$
		- $\implies \exists x\in L_{1}\cup L_{2}, y\in L_{3} : w=xy$
		- $\implies x\in L_{1}\lor x\in L_{2}$ and $y\in L_{3}$
		- $\implies w\in L_{1}L_{3}\lor w\in L_{2}L_{3}$
		- $\implies w\in L_{1}L_{3}\cup L_{2}L_{3}$
		- $\implies (L_{1}\cup L_{2})L_{3}\subseteq L_{1}L_{3}\cup L_{2}L_{3}$
	- Let $w\in L_{1}L_{3}\cup L_{2}L_{3}$
		- $\implies w\in L_{1}L_{3}\lor w\in L_{2}L_{3}$
		- $\implies (\exists x\in L_{1}, y\in L_{3} : w=xy)\lor (\exists x\in L_{2}, y\in L_{3} : w=xy)$
		- $\implies \exists x\in L_{1}\cup L_{2}, y\in L_{3} : w=xy$
		- $\implies w\in (L_{1}\cup L_{2})L_{3}$
		- $\implies L_{1}L_{3}\cup L_{2}L_{3}\subseteq (L_{1}\cup L_{2})L_{3}$
	- Therefore, the statement, $(L_{1}\cup L_{2})L_{3}= L_{1}L_{3}\cup L_{2}L_{3}$, is **true**.
- (b) $(L_{1}\cap L_{2})L_{3}=L_{1}L_{3}\cap L_{2}L_{3}$ ?
	- Let $w\in (L_{1}\cap L_{2})L_{3}$
		- $\implies \exists x\in L_{1}\cap L_{2}, y\in L_{3} : w=xy$
		- $\implies x\in L_{1}\land x\in L_{2}$ and $y\in L_{3}$
		- $\implies w\in L_{1}L_{3}\land w\in L_{2}L_{3}$
		- $\implies w\in L_{1}L_{3}\cap L_{2}L_{3}$
		- $\implies (L_{1}\cap L_{2})L_{3}\subseteq L_{1}L_{3}\cap L_{2}L_{3}$
	- But, if $L_{1}=\{\texttt{a}\},L_{2}=\{\texttt{aa}\}, L_{3}=\{\texttt{a},\texttt{aa}\}$  
		- $L_{1}\cap L_{2}=\emptyset$
		- $(L_{1}\cap L_{2})L_{3}=\emptyset$
		- $L_{1}L_{3} = \{\texttt{aa},\texttt{aaa}\}, L_{2}L_{3}=\{\texttt{aaa},\texttt{aaaa}\}$
		- $L_{1}L_{3}\cap L_{2}L_{3}=\{\texttt{aaa}\}$ 
		- $\implies (L_{1}\cap L_{2})L_{3}\neq L_{1}L_{3}\cap L_{2}L_{3}$
	- Therefore, the statement, $(L_{1}\cap L_{2})L_{3}=L_{1}L_{3}\cap L_{2}L_{3}$, is **false**.

# Q3

construct DFAs for the following languages over the alphabet $\Sigma=\{0,1\}$. 
###### 1. All strings in which every `0` is immediately followed by `111`.  

```tikz
\usepackage{tikz}
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[
      shorten >=3pt,
      bend angle=30,
      inner sep=4pt,
      thick,
      node distance=80pt,
      >={Stealth[round]},
      initial text=start,
accepting by double/.style={double, double distance=1.5pt},
on grid]
	\node[state, initial left] (q1) {$q_{1}$};
	\node[state] (q3) [right of=q1] {$q_{3}$};
	\node[state, accepting] (q6) [right of=q3] {$q_{6}$};
	\node[state] (q2) [below of=q1] {$q_{2}$};
	\node[state] (q4) [right of=q2] {$q_{4}$};
	\node[state] (q5) [right of=q4] {$q_{5}$};
    \draw (q1) edge[loop above, ->] node[auto]{1} (q1);
    \draw (q1) edge [above, ->] node[auto]{0} (q3);
    \draw (q2) edge[loop below, ->] node[auto]{0,1} (q2);
    \draw (q3) edge [above, ->] node[auto]{0} (q2);
    \draw (q3) edge [above, ->] node[auto]{1} (q4);
    \draw (q4) edge [above, ->] node[auto]{0} (q2);
    \draw (q4) edge [above, ->] node[auto]{1} (q5);
    \draw (q6) edge [above, ->] node[auto]{0} (q3);
    \draw (q6) edge[loop above, ->] node[auto]{1} (q6);
    \draw (q5) edge[bend left, above, ->] node[auto]{0} (q2);
    \draw (q5) edge [above, ->] node[auto]{1} (q6);
\end{tikzpicture}
\end{document}
```

###### 2. All strings where the difference between the number of `0`s and the number of `1`s is odd.  


```tikz
\usepackage{tikz}
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[
      shorten >=3pt,
      bend angle=30,
      inner sep=4pt,
      thick,
      node distance=120pt,
      >={Stealth[round]},
      initial text=start,
accepting by double/.style={double, double distance=1.5pt},
on grid]
	\node[state, initial left] (q1) {$q_{1}$};
	\node[state, accepting] (q2) [right of=q1] {$q_{2}$};
    \draw (q1) edge[bend left, below, ->] node[auto]{0,1} (q2);
    \draw (q2) edge[bend left, above, ->] node[auto]{0,1} (q1);
\end{tikzpicture}
\end{document}
```
###### 3. All strings of even length that do not contain the substring `00`


```tikz
\usepackage{tikz}
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[
      shorten >=3pt,
      bend angle=30,
      inner sep=5pt,
      thick,
      node distance=120pt,
      >={Stealth[round]},
      initial text=start,
accepting by double/.style={double, double distance=1.5pt},
on grid]
	\node[state, initial left, accepting] (q1) {$q_{1}$};
	\node[state] (q2) [right of=q1] {$q_{2}$};
	\node[state] (q3) [right of=q2] {$q_{3}$};
	\node[state] (q4) [below of=q1] {$q_{4}$};
	\node[state, accepting] (q5) [right of=q4] {$q_{5}$};
    \draw (q1) edge[bend left, right, ->] node[above]{0} (q2);
    \draw (q1) edge[bend right, right, ->] node[right]{1} (q4);
    \draw (q2) edge[bend left, right, ->] node[above]{1} (q1);
    \draw (q2) edge [above, ->] node[auto]{0} (q3);
    \draw (q3) edge[loop above, ->] node[auto]{0,1} (q3);
    \draw (q4) edge[bend right, right, ->] node[left]{1} (q1);
    \draw (q4) edge[bend right, right, ->] node[below]{0} (q5);
    \draw (q5) edge [above, ->] node[auto]{0} (q3);
    \draw (q5) edge[bend right, right, ->] node[below]{1} (q4);
\end{tikzpicture}
\end{document}
```

###### 4. $\{w \in \Sigma^* \mid w \text{ does not end with } 1, \text{ and } |w| \mod 3 = 2\}$

```tikz
\usepackage{tikz}
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[
      shorten >=3pt,
      bend angle=30,
      inner sep=5pt,
      thick,
      node distance=120pt,
      >={Stealth[round]},
      initial text=start,
accepting by double/.style={double, double distance=1.5pt},
on grid]
	\node[state, initial left] (q1) {$q_{1}$};
	\node[state] (q4) [right of=q1] {$q_{4}$};
	\node[state, accepting] (q6) [right of=q4] {$q_{6}$};
	\node[state] (q2) [below of=q1] {$q_{2}$};
	\node[state] (q3) [right of=q2] {$q_{3}$};
	\node[state] (q5) [right of=q3] {$q_{5}$};
    \draw (q1) edge [above, ->] node[auto]{0,1} (q2);
    \draw (q2) edge [above, ->] node[auto]{0,1} (q3);
    \draw (q3) edge [above, ->] node[auto]{0,1} (q4);
    \draw (q4) edge [above, ->] node[auto]{0,1} (q5);
    \draw (q5) edge [above, ->] node[auto]{1} (q3);
    \draw (q5) edge [above, ->] node[auto]{0} (q6);
    \draw (q6) edge [above, ->] node[auto]{0,1} (q4);
\end{tikzpicture}
\end{document}
```
# Q4a

construct NFAs for the following languages over the alphabet $\Sigma=\{0,1\}$. 
### $L=\{w\mid w\text{ ends with 00\}}$ 

(NFA with at most 3 states) 

```tikz
\usepackage{tikz}
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[
      shorten >=3pt,
      bend angle=30,
      inner sep=4pt,
      thick,
      node distance=120pt,
      >={Stealth[round]},
      initial text=start,
accepting by double/.style={double, double distance=1.5pt},
on grid]
	\node[state, initial left] (q1) {$q_{1}$};
	\node[state] (q2) [right of=q1] {$q_{2}$};
	\node[state, accepting] (q3) [below of=q1] {$q_{3}$};
    \draw (q1) edge[loop above, ->] node[auto]{1} (q1);
    \draw (q1) edge[bend left, right, ->] node[above]{0} (q2);
    \draw (q2) edge[bend left, right, ->] node[above]{1} (q1);
    \draw (q2) edge [above, ->] node[auto]{0} (q3);
    \draw (q3) edge [above, ->] node[auto]{1} (q1);
    \draw (q3) edge[loop below, ->] node[auto]{0} (q3);
\end{tikzpicture}
\end{document}
```

### $L=\{w\mid w\text{ contains the substring 0101\}}$ 

(NFA with at most 5 states)

```tikz
\usepackage{tikz}
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[
      shorten >=3pt,
      bend angle=30,
      inner sep=4pt,
      thick,
      node distance=120pt,
      >={Stealth[round]},
      initial text=start,
accepting by double/.style={double, double distance=1.5pt},
on grid]
	\node[state, initial left] (q1) {$q_{1}$};
	\node[state] (q4) [right of=q1] {$q_{4}$};
	\node[state, accepting] (q5) [right of=q4] {$q_{5}$};
	\node[state] (q2) [below of=q1] {$q_{2}$};
	\node[state] (q3) [right of=q2] {$q_{3}$};
    \draw (q1) edge[loop above, ->] node[auto]{0,1} (q1);
    \draw (q1) edge[bend right, right, ->] node[right]{0} (q2);
    \draw (q2) edge[bend right, right, ->] node[left]{0} (q1);
    \draw (q2) edge [above, ->] node[auto]{1} (q3);
    \draw (q3) edge [above, ->] node[auto]{1} (q1);
    \draw (q3) edge [above, ->] node[auto]{0} (q4);
    \draw (q4) edge [above, ->] node[auto]{0} (q1);
    \draw (q4) edge [above, ->] node[auto]{1} (q5);
    \draw (q5) edge[loop above, ->] node[auto]{0,1} (q5);
\end{tikzpicture}
\end{document}
```

# Q4b


let $M$ be a NFA for the language $C$. if we transform every accept state to a non-accept state and vice versa, will the new NFA accept the complement of $C$?


# Q5

יש להמיר את ה- NFA הבא ל-DFA שקול: 

```tikz
\usepackage{tikz}
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[
      shorten >=3pt,
      bend angle=25,
      inner sep=2pt,
      thick,
      node distance=80pt,
      >={Stealth[round]},
      initial text=start,
accepting by double/.style={double, double distance=1.5pt},
on grid]
	\node[state, initial left] (1) {$1$};
	\node[state, accepting] (2) [right of=1] {$2$};
	\node[state] (3) [below of=1] {$3$};
    \draw (1) edge[bend right, below, ->] node[auto]{$\varepsilon$} (2);
    \draw (1) edge [above, ->] node[auto]{$\texttt{a}$} (3);
    \draw (2) edge[bend right, above, ->] node[auto]{$\texttt{a}$} (1);
    \draw (3) edge [above, ->] node[auto]{$\texttt{a}$,$\texttt{b}$} (2);
    \draw (3) edge[loop below, ->] node[auto]{$\texttt{b}$} (3);
\end{tikzpicture}
\end{document}
```

נעבוד לפי הוכחת משפט 1.39.

- NFA $N=(Q,\Sigma,\delta,q_{0}=1,F)$
	- $Q=\{1,2,3\}$
	- $\Sigma=\{\texttt{a},\texttt{b},\varepsilon\}$
	- $\delta(1,\texttt{a})=\{3\}$, $\delta(1,\varepsilon)=\{2\}$, $\delta(2,\texttt{a})=\{1\}$, $\delta(3,\texttt{a})=\{2\}$, $\delta(3,\texttt{b})=\{2,3\}$
	- $F=\{2\}$
- DFA $M=(Q',\Sigma,\delta',q_{0}',F')$
	- $Q'=\mathcal{P}(Q)=\{\emptyset,\{1\},\{2\},\{3\},\{1,2\},\{1,3\},\{2,3\},\{1,2,3\}\}$
	- For each $x\in\Sigma$ and $R\in Q'$ we define $\displaystyle\delta'(R,x):=\bigcup_{r\in R}\delta(r,x)$
		- $R=\emptyset$ 
			- $\displaystyle\delta'(\emptyset,\texttt{a})=\bigcup_{r\in\emptyset}\delta(r,\texttt{a})=\emptyset$
			- $\displaystyle\delta'(\emptyset,\texttt{b})=\bigcup_{r\in\emptyset}\delta(r,\texttt{b})=\emptyset$ 
			- $\displaystyle\delta'(\emptyset,\varepsilon)=\bigcup_{r\in\emptyset}\delta(r,\varepsilon)=\emptyset$
		- $R=\{1\}$ 
			- $\displaystyle\delta'(\{1\},\texttt{a})=\bigcup_{r\in\{1\}}\delta(r,\texttt{a})=\{3\}$
			- $\displaystyle\delta'(\{1\},\texttt{b})=\bigcup_{r\in\{1\}}\delta(r,\texttt{b})=\emptyset$
			- $\displaystyle\delta'(\{1\},\varepsilon)=\bigcup_{r\in\{1\}}\delta(r,\varepsilon)=\{2\}$
		- $R=\{2\}$
			- $\displaystyle\delta'(\{2\},\texttt{a})=\bigcup_{r\in\{2\}}\delta(r,\texttt{a})=\{1\}$
			- $\displaystyle\delta'(\{2\},\texttt{b})=\bigcup_{r\in\{2\}}\delta(r,\texttt{b})=\emptyset$
			- $\displaystyle\delta'(\{2\},\varepsilon)=\bigcup_{r\in\{2\}}\delta(r,\varepsilon)=\emptyset$
		- $R=\{3\}$ 
			- $\displaystyle\delta'(\{3\},\texttt{a})=\bigcup_{r\in\{3\}}\delta(r,\texttt{a})=\{2\}$
			- $\displaystyle\delta'(\{3\},\texttt{b})=\bigcup_{r\in\{3\}}\delta(r,\texttt{b})=\{2,3\}$
			- $\displaystyle\delta'(\{3\},\varepsilon)=\bigcup_{r\in\{3\}}\delta(r,\varepsilon)=\emptyset$
		- $R=\{1,2\}$
			- $\displaystyle\delta'(\{1,2\},\texttt{a})=\bigcup_{r\in\{1,2\}}\delta(r,\texttt{a})=\{1,3\}$
			- $\displaystyle\delta'(\{1,2\},\texttt{b})=\bigcup_{r\in\{1,2\}}\delta(r,\texttt{b})=\emptyset$
			- $\displaystyle\delta'(\{1,2\},\varepsilon)=\bigcup_{r\in\{1,2\}}\delta(r,\varepsilon)=\{2\}$
		- $R=\{1,3\}$
			- $\displaystyle\delta'(\{1,3\},\texttt{a})=\bigcup_{r\in\{1,3\}}\delta(r,\texttt{a})=\{2,3\}$
			- $\displaystyle\delta'(\{1,3\},\texttt{b})=\bigcup_{r\in\{1,3\}}\delta(r,\texttt{b})=\{2,3\}$
			- $\displaystyle\delta'(\{1,3\},\varepsilon)=\bigcup_{r\in\{1,3\}}\delta(r,\varepsilon)=\{2\}$
		- $R=\{2,3\}$
			- $\displaystyle\delta'(\{2,3\},\texttt{a})=\bigcup_{r\in\{2,3\}}\delta(r,\texttt{a})=\{1,2\}$
			- $\displaystyle\delta'(\{2,3\},\texttt{b})=\bigcup_{r\in\{2,3\}}\delta(r,\texttt{b})=\{2,3\}$
			- $\displaystyle\delta'(\{2,3\},\varepsilon)=\bigcup_{r\in\{2,3\}}\delta(r,\varepsilon)=\emptyset$
		- $R=\{1,2,3\}$
			- $\displaystyle\delta'(\{1,2,3\},\texttt{a})=\bigcup_{r\in\{1,2,3\}}\delta(r,\texttt{a})=\{1,2,3\}$
			- $\displaystyle\delta'(\{1,2,3\},\texttt{b})=\bigcup_{r\in\{1,2,3\}}\delta(r,\texttt{b})=\{2,3\}$
			- $\displaystyle\delta'(\{1,2,3\},\varepsilon)=\bigcup_{r\in\{1,2,3\}}\delta(r,\varepsilon)=\{2\}$


| $R$         | $\delta'(R, \texttt{a})$ | $\delta'(R, \texttt{b})$ | $\delta'(R, \varepsilon)$ |
| ----------- | ------------------------ | ------------------------ | ------------------------- |
| $\emptyset$ | $\emptyset$              | $\emptyset$              | $\emptyset$               |
| $\{1\}$     | $\{3\}$                  | $\emptyset$              | $\{2\}$                   |
| $\{2\}$     | $\{1,2\}$                | $\emptyset$              | $\emptyset$               |
| $\{3\}$     | $\{2\}$                  | $\{2,3\}$                | $\emptyset$               |
| $\{1,2\}$   | $\{1,2,3\}$              | $\emptyset$              | $\{2\}$                   |
| $\{1,3\}$   | $\{2,3\}$                | $\{2,3\}$                | $\{2\}$                   |
| $\{2,3\}$   | $\{1,2,3\}$              | $\{2,3\}$                | $\emptyset$               |
| $\{1,2,3\}$ | $\{1,2,3\}$              | $\{2,3\}$                | $\{2\}$                   |

- $q_{0}'=\{q_{0}\}=\{1\}$
- $F'=\{R\in Q'\mid R\cap F\neq\emptyset\}=\{\{2\},\{1,2\},\{2,3\},\{1,2,3\}\}$
- For each $R\in Q'$, we define $E(R)=\{q\mid q\text{ can be reached from }R\text{ by traveling along 0 or more }\varepsilon\text{ transitions}\}$.
	- $E(\emptyset)=\emptyset$
	- $E(\{1\})=\{1,2\}$
	- $E(\{2\})=\{2\}$
	- $E(\{3\})=\{3\}$
	- $E(\{1,2\})=\{1,2,3\}$
	- $E(\{1,3\})=\{1,2,3\}$
	- $E(\{2,3\})=\{2,3\}$
	- $E(\{1,2,3\})=\{1,2,3\}$
- Now redefine $\delta'(R,x):=\{q\in Q\mid q\in E(\delta(r,x))\text{ for some }r\in R\}$
	- $\delta'(\emptyset,\texttt{a})=\emptyset$
	- 


#### DFA 

```tikz
% https://adielbm.github.io/fsm/?states=q12%2C+q32%2C+q13%2C+%5Cemptyset&initialState=q12&acceptingStates=q32%2Cq12&transitions=q12%2C+a%2C+q13%3B%0Aq12%2C+b%2C+%5Cemptyset%3B%0Aq32%2C+a%2C+q12%3B%0Aq32%2C+b%2C+q32%3B%0Aq13%2Ca%2C+b%2C+q32%3B%0A%5Cemptyset%2Ca%2Cb%2C%5Cemptyset%3B

\usepackage{tikz}
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[
      shorten >=3pt,
      bend angle=30,
      inner sep=4pt,
      thick,
      node distance=100pt,
      >={Stealth[round]},
      initial text=start,
accepting by double/.style={double, double distance=1.5pt},
on grid]
	\node[state, initial left, accepting] (q12) {$q_{12}$};
	\node[state, accepting] (q32) [right of=q12] {$q_{32}$};
	\node[state] (emptyset) [below of=q12] {$\emptyset$};
	\node[state] (q13) [right of=emptyset] {$q_{13}$};
    \draw (q12) edge [above, ->] node[auto]{\texttt{a}} (q13);
    \draw (q12) edge [above, ->] node[auto]{\texttt{b}} (emptyset);
    \draw (q32) edge [above, ->] node[auto]{\texttt{a}} (q12);
    \draw (q32) edge[loop above, ->]node[auto]{\texttt{b}} (q32);
    \draw (q13) edge [above, ->] node[auto]{\texttt{a}, \texttt{b}} (q32);
    \draw (emptyset) edge[loop below, ->]node[auto]{\texttt{a}, \texttt{b}} (emptyset);
\end{tikzpicture}
\end{document}


```











