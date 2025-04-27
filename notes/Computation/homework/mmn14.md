**2025ב, מודלים חישוביים, ממ"ן 14** 
 
___
# שאלה 1 

בנו מ"ט, עבור:
$$B=\{ \texttt{0}^n\texttt{1}^n\texttt{2}^n\mid n \geq 0 \}$$
תארו את המכונה בעזרת אלגוריתם, כמו בדוגמה 3.12 בספר הלימוד.
הסבירו היטב את פעולת המכונה, ומדוע היא מכריעה את השפה $B$.
#### תשובה

(אני מניח ש: $\Sigma=\{\texttt{0},\texttt{1},\texttt{2}\}$, ו- $\Gamma=\{\texttt{0},\texttt{1},\texttt{2},\overset{\bullet}{\texttt{0}},\overset{\bullet}{\texttt{1}},\overset{\bullet}{\texttt{2}},\sqcup\}$)

רעיון: לכל 0 נסמן אותו, ואז נסמן עבורו 1, ו-2. (אם נמצאים כאלו.. אם לא, נדחה, כי זה אומר שיש יותר 0 מ-1, או 1 מ-2) ואז נחזור על התהליך שוב. אם כל ה-0 מסומנים, נבדוק אם כל ה-1 מסומנים, (לוודא שאין יותר 1 מאשר 0), ואז נבדוק אם כל ה-2 מסומנים (לוודא שאין יותר 2 מאשר 1), נקבל את המילה, כי מספר ה-0,1,2 שווה.

מתחילים עם קלט $w$ על הסרט כאשר הראש נמצא על התו הראשון של $w$.
- if the symbol is blank, _accept_.
- if the symbol is not $\texttt{0}$, _reject_.
- (**A**) write $\overset{\bullet}{\texttt{0}}$, and move right.
- if the symbol is 0, then move right, and repeat. if the symbol is 1, continue. if the symbol is $\overset{\bullet}{\texttt{1}}$ move right and repeat. otherwise _reject_.
- write $\overset{\bullet}{\texttt{1}}$, and move right.
- if the symbol is 1, then move right, and repeat this step. if the symbol is 2, continue. if the symbol is $\overset{\bullet}{\texttt{2}}$ move right and repeat. otherwise _reject_.
- write $\overset{\bullet}{\texttt{2}}$, move left until find $\overset{\bullet}{\texttt{0}}$, move right.
- if the symbol $\texttt{0}$, go to stage (**A**)
- if the symbol is $\overset{\bullet}{\texttt{1}}$, move right and repeat. if the symbol is $\overset{\bullet}{\texttt{2}}$, move right and continue. otherwise _reject_.
- if the symbol is $\overset{\bullet}{\texttt{2}}$, move right and repeat. if the symbol is blank, then **accept**. otherwise _reject_.

# שאלה 2

בשאלה זו נשתמש במ"ט $M_2$. (דוגמה 3.7 בספר הקורס).

רשמו סדרת קונפיגורציות חישוב של $M_2$ על הקלטים הבאים:

- 000
- 00
#### תשובה
###### $w=\texttt{000}$

- $q_{1}\texttt{000}$
- $\sqcup q_2 \texttt{00}$
- $\sqcup  \texttt{x} q_3 \texttt{0}$
- $\sqcup \texttt{x0}   q_4 \sqcup$
- $\sqcup  \texttt{x0}  \sqcup q_{\text{reject}}$
###### $w=\texttt{00}$

- $q_{1}\texttt{00}$
- $\sqcup q_{2}\texttt{0}$
- $\sqcup \texttt{x}q_{3}\sqcup$
- $\sqcup q_{5}\texttt{x}\sqcup$
- $q_{5}\sqcup \texttt{x}\sqcup$
- $\sqcup q_{2}\texttt{x}\sqcup$
- $\sqcup \texttt{x}q_{2}\sqcup$
- $\sqcup \texttt{x}\sqcup q_{\text{accept}}$


# שאלה 3

מודל חדש של מ"ט:
- סרט אינסופי לשני הכיוונים
- בהתחלה, הסרט מכיל קלט סופי, שאר ערכים הם רווחים, ראש בתחילת הקלט.
- צ"ל שמודל זה שקול למ"ט רגילה. (חסום משמאל).

#### תשובה



# שאלה 4

מונה (enumerator) יכול להדפיס יותר מפעם אחת מילים של השפה שהוא מפיק (עמ 180 בספר).
יהי E מונה עם א"ב $\Sigma$.
נגדיר שפה:
$$\text{TRIPLE}(E)=\{ w \in \Sigma^* \mid E \text{ prints } w \text{ at least 3 times} \}$$
האם לכל מונה $E$ השפה $\text{TRIPLE}(E)$ היא מזוהה-טיורינג? הוכיחו.

#### תשובה

# שאלה 5א

תהיינה $M_1$ ו-$M_2$ מ"ט, **המכריעות** את השפות $L_1$ ו-$L_2$ בהתאמה.
בנו מ"ט $M$ המזהה את השפה $L_1 \cdot L_2$. 

### תשובה

# שאלה 5ב

תהי $M_1$ מ"ט **המזהה** את השפה $L_1$.
בנו מ"ט $M$ שמזהה את $L_1^*$.

### תשובה