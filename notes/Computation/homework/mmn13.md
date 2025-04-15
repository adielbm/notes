

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

# שאלה 4

בנו PDA עבור:

- $L=\{ \texttt{1}^{2m}\texttt{0}^{3m} \mid m\geq 0 \}$
- $L=\{ w\in\{ \texttt{)},\texttt{(} \}^* \mid  w \text{ is a valid string of parentheses}\}$
- $L=\{ \texttt{x}^i\texttt{y}^j\texttt{z}^k \mid i,j,k\geq 0\text{ and }i+j=k \}$

# שאלה 5 

הוכיחו שהשפות הבאות אינן CFL.

- $\Sigma=\{ \texttt{a},\texttt{b},\texttt{c} \}$
- $L=\{ ww^{\mathcal{R}}w \mid w\in\{ \texttt{0},\texttt{1} \}^*\}$
- $L=\{ \texttt{a}^i\texttt{b}^{j}\texttt{c}^{\max(i,j)} \mid i,j\geq 0\}$

