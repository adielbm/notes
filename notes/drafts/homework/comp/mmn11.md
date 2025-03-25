##### מודלים חישוביים, ממן 11, 2025ב

עדיאל בן משה `208969378`
___
# שאלה 1
$\Sigma = \{a,b\}$

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

# שאלה 2

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

# שאלה 3

בניית DFA

$\Sigma=\{0,1\}$
#### 1. כל המילים שבהן אחרי כל `0` מופיע `111`.  

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
#### 2. כל המילים שבהן ההפרש בין מספר ה-`0`ים לבין מספר ה-`1`ים הוא אי-זוגי.  

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
#### 3. כל המילים באורך זוגי שאינן מכילות את המחרוזת `00`

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

#### 4. הקבוצה $\{w \in \Sigma^* \mid w \text{ does not end with } 1, \text{ and } |w| \mod 3 = 2\}$

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
# שאלה 4א

בניית NFA עם $\Sigma=\{0,1\}$ 
##### $L=\{w\mid w\text{ ends with 00\}}$ 

- $|Q|\leq 3$ 

```tikz
% Generated by https://adielbm.github.io/fsm/?states=q1%2C+q2%2C+q3&initialState=q1&acceptingStates=q3&transitions=q1%2C+0%2C+1%2C+q1%3B%0Aq1%2C+0%2C+q2%3B%0Aq2%2C+0%2C+q3%3B%0Aq3%2C+1%2C+q1%3B++++%0A
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
	\node[state, accepting] (q3) [right of=q2] {$q_{3}$};
    \draw (q1) edge[loop above, ->]node[auto]{\texttt{0}, \texttt{1}} (q1);
    \draw (q1) edge [above, ->] node[auto]{\texttt{0}} (q2);
    \draw (q2) edge [above, ->] node[auto]{\texttt{0}} (q3);
    \draw (q3) edge[bend right, right, ->] node[above]{\texttt{1}} (q1);
\end{tikzpicture}
\end{document}
```

##### $L=\{w\mid w\text{ contains the substring 0101\}}$ 

- $|Q|\leq 5$ 


```tikz
% Generated by https://adielbm.github.io/fsm/?states=q1%2C+q2%2C+q3%2C+q4%2Cq5&initialState=q1&acceptingStates=q5&transitions=q1%2C+0%2C1%2C+q1%3B%0Aq1%2C+0%2C+q2%3B%0Aq2%2C+1%2C+q3%3B%0Aq3%2C+0%2C+q4%3B++++%0Aq4%2C+1%2C+q5%3B%0Aq5%2C+0%2C1%2C+q5%3B++++
\usepackage{tikz}
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[
      shorten >=3pt,
      bend angle=30,
      inner sep=4pt,
      thick,
      node distance=60pt,
      >={Stealth[round]},
      initial text=start,
accepting by double/.style={double, double distance=1.5pt},
on grid]
	\node[state, initial left] (q1) {$q_{1}$};
	\node[state] (q2) [right of=q1] {$q_{2}$};
	\node[state] (q3) [right of=q2] {$q_{3}$};
	\node[state] (q4) [right of=q3] {$q_{4}$};
	\node[state, accepting] (q5) [right of=q4] {$q_{5}$};
    \draw (q1) edge[loop above, ->]node[auto]{\texttt{0}, \texttt{1}} (q1);
    \draw (q1) edge [above, ->] node[auto]{\texttt{0}} (q2);
    \draw (q2) edge [above, ->] node[auto]{\texttt{1}} (q3);
    \draw (q3) edge [above, ->] node[auto]{\texttt{0}} (q4);
    \draw (q4) edge [above, ->] node[auto]{\texttt{1}} (q5);
    \draw (q5) edge[loop above, ->]node[auto]{\texttt{0}, \texttt{1}} (q5);
\end{tikzpicture}
\end{document}
```

# שאלה 4ב

יהי NFA $M$ המזהה שפה $C$. אם נהפוך כל מצב סופי ב-$M$ למצב לא סופי ולהפך, האם בהכרח נקבל אוטומט שמזהה את השפה המשלימה של $C$?

ניקח למשל את ה-NFA משאלה 4א.1 שהוא שקול לשפה $C=\{w\mid w\text{ ends with 00}\}$.

אם נהפוך את המצבים. נקבל את ה-NFA הבא:


```tikz
% Generated by https://adielbm.github.io/fsm/?states=q1%2C+q2%2C+q3&initialState=q1&acceptingStates=q1%2Cq2&transitions=q1%2C+0%2C+1%2C+q1%3B%0Aq1%2C+0%2C+q2%3B%0Aq2%2C+0%2C+q3%3B%0Aq3%2C+1%2C+q1%3B++++%0A
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
	\node[state, initial left, accepting] (q1) {$q_{1}$};
	\node[state, accepting] (q2) [right of=q1] {$q_{2}$};
	\node[state] (q3) [right of=q2] {$q_{3}$};
    \draw (q1) edge[loop above, ->]node[auto]{\texttt{0}, \texttt{1}} (q1);
    \draw (q1) edge [above, ->] node[auto]{\texttt{0}} (q2);
    \draw (q2) edge [above, ->] node[auto]{\texttt{0}} (q3);
    \draw (q3) edge[bend right, right, ->] node[above]{\texttt{1}} (q1);
\end{tikzpicture}
\end{document}
```



השפה $\overline{C}=L=\{w\mid w\text{ does not end with 00}\}$ אינה מכילה את המילה `00`. אמנם ה-NFA המופיע מזהה את המילה `00`, כלומר הטענה אינה נכונה.

# שאלה 5

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
- $\delta'(R,x)=\{q\in Q\mid q\in E(\delta(r,x))\text{ for some }r\in R\}$
- $q_0':=E(\{q_0\})=\{1,2\}$


```tikz
% Generated by https://adielbm.github.io/fsm/?states=1%2C2%2C3%2C+12%2C+23%2C+13%2C+123%2C+E&initialState=12&acceptingStates=2%2C+12%2C+23%2C+123&transitions=1%2C+a%2C+3%3B%0A1%2C+b%2C+emptyset%3B%0A2%2C+a%2C+12%3B%0A2%2C+b%2C+E%3B%0A3%2C+a%2C+2%3B%0A3%2C+b%2C+23%3B%0A12%2C+a%2C+123%3B%0A12%2C+b%2C+E%3B%0A23%2C+a%2C+123%3B%0A23%2C+b%2C+23%3B%0A13%2C+a%2C+23%3B%0A13%2C+b%2C+23%3B%0A123%2C+a%2C+123%3B%0A123%2C+b%2C+23%3B%0A
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
	\node[state, initial left, accepting] (12) {$12$};
	\node[state, accepting] (123) [right of=12] {$123$};
	\node[state, accepting] (23) [right of=123] {$23$};
	\node[state] (13) [right of=23] {$13$};
	\node[state] (E) [below of=12] {$\emptyset$};
	\node[state, accepting] (2) [right of=E] {$2$};
	\node[state] (3) [right of=2] {$3$};
	\node[state] (1) [right of=3] {$1$};
    \draw (1) edge [above, ->] node[auto]{\texttt{a}} (3);
    \draw (2) edge [above, ->] node[auto]{\texttt{a}} (12);
    \draw (2) edge [above, ->] node[auto]{\texttt{b}} (E);
    \draw (3) edge [above, ->] node[auto]{\texttt{a}} (2);
    \draw (3) edge [above, ->] node[auto]{\texttt{b}} (23);
    \draw (12) edge [above, ->] node[auto]{\texttt{a}} (123);
    \draw (12) edge [above, ->] node[auto]{\texttt{b}} (E);
    \draw (23) edge[loop above, ->]node[auto]{\texttt{b}} (23);
    \draw (23) edge[bend right, right, ->] node[above]{\texttt{a}} (123);
    \draw (13) edge [above, ->] node[auto]{\texttt{a}, \texttt{b}} (23);
    \draw (123) edge[bend right, right, ->] node[above]{\texttt{b}} (23);
    \draw (123) edge[loop above, ->]node[auto]{\texttt{a}} (123);
\end{tikzpicture}
\end{document}
```


נפשט את ה-DFA על ידי הסרת מצבים שאינם נגישים:

```tikz
% Generated by https://adielbm.github.io/fsm/?states=12%2C+23%2C+123&initialState=12&acceptingStates=2%2C+12%2C+23%2C+123&transitions=%0A12%2C+a%2C+123%3B%0A%0A23%2C+a%2C+123%3B%0A23%2C+b%2C+23%3B%0A%0A123%2C+a%2C+123%3B%0A123%2C+b%2C+23%3B%0A
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
	\node[state, initial left, accepting] (12) {$12$};
	\node[state, accepting] (123) [right of=12] {$123$};
	\node[state, accepting] (23) [right of=123] {$23$};
    \draw (12) edge [above, ->] node[auto]{\texttt{a}} (123);
    \draw (23) edge[loop above, ->]node[auto]{\texttt{b}} (23);
    \draw (23) edge[bend right, right, ->] node[above]{\texttt{a}} (123);
    \draw (123) edge[bend right, right, ->] node[above]{\texttt{b}} (23);
    \draw (123) edge[loop above, ->]node[auto]{\texttt{a}} (123);
\end{tikzpicture}
\end{document}

```

___

תודה רבה 🙏


