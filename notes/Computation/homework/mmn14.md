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

<div class="page-break"></div>

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

<div class="page-break"></div>

# שאלה 3

מודל חדש של מ"ט:
- סרט אינסופי לשני הכיוונים
- בהתחלה, הסרט מכיל קלט סופי, שאר ערכים הם רווחים, ראש בתחילת הקלט.
- צ"ל שמודל זה שקול למ"ט רגילה (שחסומה משמאל).

#### תשובה

נסמן: $M$ מ"ט רגילה. (אינוסופי בכיוון ימין). ו- $M_d$ מ"ט אינסופית בשני הכיוונים.

יש להראות שאפשר לעשות סימולציה בין $M$ ל- $M_d$, ולהיפך.
######  סימוצלציה ל- $M$ בעזרת $M_{d}$.

- בהתחלה, הקלט יהיה בצד ימין של הסרט (כפי שהיה ב- M)
- כעת, נוסיף סימן מיוחד ל-$\Gamma$, שיסומן $\#$, שישמש כ"מחסום" לצד שמאל של הסרט.
- ב- M, כאשר הראש היה מנסה ללכת שמאלה בקצה הסרט, הוא היה נשאר במקומו, בלי ללכת, להתמודד עם המצב הזה, נוסיף, לכל מצב $q\in Q$, מעבר, $\delta(q,\#)=(q,\#,\text{R})$, כך שנחזור חזרה לריבוע הראשון, בלי שום שינוי.

######  סימוצלציה ל- $M_d$ בעזרת $M$.

- נמיר את $M_d$ למ"ט עם שני סרטים, צד ימין יהיה הסרט הראשון, וצד שמאל יהיה הסרט השני (כלומר בסדר הפוך).
- לפי משפט 3.13 בספר, נוכל להמיר כל מ"ט עם מספר סרטים, למ"ט עם סרט אחד.
- #todo 
###### old way draft


```
- את הקלט בצד ימין של הסרט $M_d$ נמקם על הסרט של $M$ במקומות האי זוגיים, ואת הקלט בצד שמאל של $M_d$ נמקם על הסרט של $M$ במקומות האי זוגיים, (כאשר צד מקומות צד ימין של $M_d$ ממוספרים לצורך זה 1,2,3... וצד שמאל של $M_d$ כ- -1,-2,-3..., אמנם ב- M כן יהיה מקום 0, שיהיה שמור לצורך שנראה בהמשך). כלומר:
$$f(n)=\begin{cases}
2n+1 & \text{if } n >0 \\
-2n & \text{if } n <0
\end{cases}$$
- for all $q_{1},q_{2}\in Q$, and $a,b,c \in \Gamma$, 
	- if $\delta(q_{1},a)=(q_{2},b,\text{R})$, then replace it with $\delta(q_{1},a)=(q_{\text{R}},b,\text{R})$ and $\delta(q_{\text{R}},c)=(q_{2},c,\text{R})$. 
	- if $\delta(q_{1},a)=(q_{2},b,\text{L})$, then replace it with $\delta(q_{1},a)=(q_{\text{L}},b,\text{L})$ and $\delta(q_{\text{L}},c)=(q_{2},c,\text{L})$.
- add special symbol $\#$ to the first square of the tape (place 0)
- for any state $q\in Q$, add state $\overset{\bullet}{q}$, indicating we are in the left side of the tape.
- for any state $q\in Q$, add transition $\delta(q,\#)=(q_{\text{R}},\#,\text{R})$, and 
```


<div class="page-break"></div>

# שאלה 4

מונה (enumerator) יכול להדפיס יותר מפעם אחת מילים של השפה שהוא מפיק (עמ 180 בספר).
יהי E מונה עם א"ב של הפלט $\Sigma$.
נגדיר שפה:
$$\text{TRIPLE}(E)=\{ w \in \Sigma^* \mid E \text{ prints } w \text{ at least 3 times} \}$$
האם לכל מונה $E$ השפה $\text{TRIPLE}(E)$ היא מזוהה-טיורינג? הוכיחו.

#### תשובה

הטענה **נכונה**. 
ניתן לראות בעזרת תיאור של TM (בסגנון של הוכחת משפט 3.21 בספר):
> $M=\text{``On input }w$
> 	1. Initialize a counter $q_{0}$.
> 	2. Run $E$. Every time $E$ prints a string $x$, check if $x=w$, if so, increment a counter (using $q_{i}\to q_{i+1}$). If $E$ halts and the counter is not $q_{3}$, _reject_.
> 	3. If $q_{3}$ is reached, _accept_. otherwise go to step 2. $\text{''}$


<div class="page-break"></div>


# שאלה 5א

תהיינה $M_1$ ו-$M_2$ מ"ט, **המכריעות** את השפות $L_1$ ו-$L_2$ בהתאמה.
בנו מ"ט $M$ המזהה את השפה $L_1 \cdot L_2$. 

### תשובה

נבנה מ"ט לא-דטרמיניסטית (NTM) $M$ שמזהה את השפה $L_1 \cdot L_2$.
המכונה $M$ תעבור על כל האפשרויות לחלק את הקלט $w$ שאורכו $n$ לשני חלקים. (אפשרי כי היא לא-דטרמיניסטית..), ואז תריץ את $M_1$ על החלק הראשון, ואת $M_2$ על החלק השני.

התיאור יהיה משהו כזה:

> $M=\text{``On input }w$
>	1. Split $w$ into two parts $w[1:i]$ and $w[i+1:n]$ for all $i=0,1,\ldots,n$.
>	2. Run $M_1$ on $w[1:i]$. If $M_1$ accepts, then run $M_2$ on $w[i+1:n]$, if $M_2$ accepts, _accept_.
>	3. If all iterations of $i$ ended without accepting, _reject_. $\text{''}$

(אמנם השאלה הייתה על שפות שמכריעות. אבל לפי ההוכחה פה, בתקווה שנכונה, הטענה תהיה נכונה גם עבור שפות שמזהות..) 

# שאלה 5ב

תהי $M_1$ מ"ט **המזהה** את השפה $L_1$.
בנו מ"ט $M$ שמזהה את $L_1^*$.

### תשובה

באופן דומה לשאלה הקודמת, נבנה מ"ט לא-דטרמיניסטית (NTM) $M$ שמזהה את השפה $L_1^*$. 
המכונה $M$ תעבור על כל האפשרויות לחלק את הקלט $w$ שאורכו $n$ ל-$k$ חלקים. (כנל כאן, אפשרי בגלל אי-דטרמיניזם.. דרך אגב, יש בסה"כ $2^{n-1}$ אפשרויות כאלה, זה נקרא _composition_ של n). ואז תריץ את $M_1$ על כל חלק בנפרד, אם $M_1$ מקבלת את כולם, אז $M$ מקבלת. אחרת, כלומר אם יש חלק אחד שלא מקבל, אז $M$ לא מקבלת (את אותה חלוקה כמובן).

___

$${\textbf{THE END}}$$
