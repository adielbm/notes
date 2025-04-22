**2025ב, מודלים חישוביים, ממ"ן 13** 
עדיאל בן משה

___

# שאלה 1 

מהי השפה של כל אחד מהדקדוקים הבאים. הסבירו.
## א.

- $S \to A1B$
- $A\to 0A\mid \varepsilon$
- $B\to 0B\mid 1B\mid \varepsilon$

השפה היא קבוצת כל המילים שמכילות לפחות פעם אחת את $\texttt{1}$.

## ב.

- $S\to 0S1S\mid 1S0S \mid \varepsilon$

קבוצת כל המילים ב- $\Sigma^*=\{ \texttt{0},\texttt{1} \}$ שמכילות מספר זהה של 1 ו-0.

# שאלה 2

בנו CFG עבור כל אחת משלוש השפות הבאות, תנו הסבר קצר.

### $\{\texttt{a}^i\texttt{b}^j\mid i\neq j\}$

- $S\to AE\mid  EB$
- $A\to A\texttt{a}\mid \texttt{a}$
- $B\to B\texttt{b}\mid \texttt{b}$
- $E\to \texttt{a}E\texttt{b}\mid \varepsilon$

_הסבר: כל מילה ב-L מורכבת מתת מילה E של מספר שווה של a,b מכל צד... ואז צריך לבחור צד שבו נוסיף, b אחד או יותר מימין, או, a אחד או יותר משמאל, בשביל שיתקיים אי שויון_.

### $\{ \texttt{a}^i\texttt{b}^j\texttt{c}^k\mid i\leq j\text{ or }j\leq k \}$

- $S\to S_{1}C\mid AS_{2}$
- $S_{1}\to \texttt{a}S_{1}\texttt{b}\mid S_{1}\texttt{b}\mid \varepsilon$
- $S_{2}\to \texttt{b}S_{2}\texttt{c}\mid S_{2}\texttt{c}\mid \varepsilon$
- $A\to A\texttt{a}\mid \varepsilon$
- $C\to C\texttt{c}\mid \varepsilon$

### $\{ x \in \{ \texttt{0},\texttt{1} \}^*\mid x \text{ is not of the form }ww \}$

- $S\to A\mid B\mid AB\mid BA$
- $A\to CAC\mid \texttt{0}$
- $B\to CBC\mid \texttt{1}$
- $C\to \texttt{0}\mid \texttt{1}$

# שאלה 3

בעזרת משפט 2.9, הפכו את הדקדקוק הבא לצורה נורמלית של חומסקי.

- $S\to BSB \mid B \mid \varepsilon$
- $B\to \texttt{00}\mid \varepsilon$

נוסיף start variable חדש:

- $S_{0}\to S$
- $S\to BSB \mid B \mid \varepsilon$
- $B\to \texttt{00}\mid \varepsilon$

נסיר rules-$\varepsilon$:


- $S_{0}\to S\mid \varepsilon$
- $S\to BSB \mid B \mid BS \mid SB \mid BB$
- $B\to \texttt{00}$

נסיר unit-rules. ונקבל CNF:

- $S_{0}\to BC \mid ZZ \mid BS \mid SB \mid BB\mid \varepsilon$
- $S\to BC \mid ZZ \mid BS \mid SB \mid BB$
- $B\to ZZ$
- $C\to SB$
- $Z\to \texttt{0}$



```old
- $S_{0} \to BC\mid BS\mid SB\mid ZZ\mid \varepsilon$  
- $S\to BC\mid BS\mid SB\mid ZZ$  
- $B\to ZZ$  
- $C \to SB$  
- $Z \to 0$
```



# שאלה 4

בנו PDA עבור:

## א. $L=\{ \texttt{1}^{2m}\texttt{0}^{3m} \mid m\geq 0 \}$


```tikz
\usepackage{tikz}
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[
      shorten >=6pt,
      bend angle=40,
      inner sep=6pt,
      thick,
      node distance=110pt,
      >={Stealth[round]},
      initial text=start,
accepting by double/.style={double, double distance=1.5pt},
on grid]

	\node[state, accepting, initial left] (qs) {$q_{s}$};
	\node[state] (q1) [right of=qs] {$q_{1}$};
	\node[state] (q2) [right of=q1] {$q_{2}$};
	\node[state] (q4) [below of=q1] {$q_{4}$};
	\node[state] (q5) [left of=q4] {$q_{5}$};
	\node[state] (q6) [left of=q5] {$q_{6}$};
	\node[state, accepting] (qa) [below of=q4] {$q_{a}$};
	
	\draw (qs) edge [above, ->] node[auto]{$\varepsilon,\varepsilon\to\$$} (q1);
	
    \draw (q1) edge [bend right,below,->] node[auto]{$\texttt{1},\varepsilon\to\varepsilon$} (q2);
    \draw (q2) edge[bend right,above,->] node[above]{$\texttt{1},\varepsilon\to\#$} (q1);
	
    \draw (q1) edge[above, ->] node[auto]{$\varepsilon,\varepsilon\to\varepsilon$} (q4);
    
    \draw (q4) edge [above, ->] node[auto]{$\texttt{0},\varepsilon\to\varepsilon$} (q5);
	\draw (q5) edge [above, ->] node[auto]{$\texttt{0},\varepsilon\to\varepsilon$} (q6);
	\draw (q6) edge [bend right,above,->] node[auto]{$\texttt{0},\# \to\varepsilon$} (q4);


    \draw (q4) edge [above, ->] node[auto]{$\varepsilon,\$\to\varepsilon$} (qa);

\end{tikzpicture}
\end{document}
```





## ב. $L=\{ w\in\{ \texttt{)},\texttt{(} \}^* \mid  w \text{ is a valid string of parentheses}\}$

```tikz
\usepackage{tikz}
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[
      shorten >=6pt,
      bend angle=40,
      inner sep=6pt,
      thick,
      node distance=110pt,
      >={Stealth[round]},
      initial text=start,
accepting by double/.style={double, double distance=1.5pt},
on grid]
	\node[state, initial left] (q1) {$q_{1}$};
	\node[state] (q2) [right of=q1] {$q_{2}$};
	\node[state, accepting] (q3) [right of=q2] {$q_{3}$};

	\draw (q1) edge [above, ->] node[auto]{$\varepsilon,\varepsilon\to\$$} (q2);
    \draw (q2) edge [loop above, ->] node[auto]{$\texttt{(},\varepsilon\to\texttt{X}$} (q2);
    \draw (q2) edge [loop below, ->] node[auto]{$\texttt{)},\texttt{X}\to\varepsilon$} (q2);
	\draw (q2) edge [above, ->] node[auto]{$\varepsilon,\$\to\varepsilon$} (q3);
    
\end{tikzpicture}
\end{document}
```

## ג. $L=\{ \texttt{x}^i\texttt{y}^j\texttt{z}^k \mid i,j,k\geq 0\text{ and }i+j=k \}$



```tikz
\usepackage{tikz}
\usetikzlibrary{automata, arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[
      shorten >=6pt,
      bend angle=40,
      inner sep=6pt,
      thick,
      node distance=110pt,
      >={Stealth[round]},
      initial text=start,
accepting by double/.style={double, double distance=1.5pt},
on grid]
	\node[state, initial left] (q1) {$q_{1}$};
	\node[state] (q2) [right of=q1] {$q_{2}$};
	\node[state] (q3) [right of=q2] {$q_{3}$};
	\node[state] (q4) [right of=q3] {$q_{4}$};
	\node[state, accepting] (q5) [right of=q4] {$q_{5}$};

	\draw (q1) edge [above, ->] node[auto]{$\varepsilon,\varepsilon\to\$$} (q2);
    \draw (q2) edge [loop above, ->] node[auto]{$\texttt{x},\varepsilon\to\texttt{1}$} (q2);
    \draw (q3) edge [loop above, ->] node[auto]{$\texttt{y},\varepsilon\to\texttt{1}$} (q3);
	\draw (q4) edge [loop above, ->] node[auto]{$\texttt{z},\texttt{1}\to\varepsilon$} (q4);
	\draw (q2) edge [above, ->] node[auto]{$\varepsilon,\varepsilon\to\varepsilon$} (q3);
	\draw (q3) edge [above, ->] node[auto]{$\varepsilon,\varepsilon\to\varepsilon$} (q4);

	\draw (q4) edge [above, ->] node[auto]{$\varepsilon,\$\to\varepsilon$} (q5);
    
\end{tikzpicture}
\end{document}
```



# שאלה 5 

הוכיחו שהשפות הבאות אינן CFL
### א. $L=\{ ww^{\mathcal{R}}w \mid w\in\{ \texttt{0},\texttt{1} \}^*\}$

- for the contradiction let's say $L$ is CFL
- let $p$ be the PL
- let's define a string $w=\texttt{0}^{p}\texttt{1}^{p}$.
- then $s=ww^{\mathcal{R}}w=\texttt{0}^{p}\texttt{1}^{2p}\texttt{0}^{2p}\texttt{1}^{p}$ in L and its length greater than $p$
- since $|vxy|\leq p$ then the substring $vxy$ must be either of the form:
	- $000\dots 000$, two cases possible (as substring (of $s$) of left 0's or right 0's)
		- (a) if we pump down, the string $\texttt{0}^{p-k}\texttt{1}^{2p}\texttt{0}^{2p}\texttt{1}^{p}=\texttt{0}^{p-k}\texttt{1}^{p}\cdot\texttt{1}^{p}\texttt{0}^{p+k}\cdot\texttt{0}^{p-k}\texttt{1}^{p}$ for some $k>0$ is suppoed to be in $L$ by the lemma, which is not true, $(\texttt{1}^{p}\texttt{0}^{p+k})^{\mathcal{R}}=\texttt{0}^{p+k}\texttt{1}^{p}\neq \texttt{0}^{p-k}\texttt{1}^{p}=w$.
		- (b) if we pump down, the string $\texttt{0}^{p}\texttt{1}^{2p}\texttt{0}^{2p-k}\texttt{1}^{p}=\texttt{0}^{p}\texttt{1}^{p}\cdot\texttt{1}^{p}\texttt{0}^{p-k}\cdot\texttt{0}^{p}\texttt{1}^{p}$ for some $k>0$ is suppoed to be in L by the lemma, which is not, because, $\texttt{1}^{p}\texttt{0}^{p-k}\neq(\texttt{0}^{p}\texttt{1}^{p})^{\mathcal{R}}$.
	- $111 \dots 111$
		- here too. we can prove in similar way..
	- $000\dots000111\dots 111$
	- $111\dots 111000\dots000$



### ב. $L=\{ \texttt{a}^i\texttt{b}^{j}\texttt{c}^{\max(i,j)} \mid i,j\geq 0\}$

 (מעל $\Sigma=\{ \texttt{a},\texttt{b},\texttt{c} \}$)



