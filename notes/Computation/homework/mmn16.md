`= date(today)`
<h4 style="text-align: center;">מודלים חישוביים: ממ"ן 16</h4>
<p style="text-align: center;">עדיאל בן משה</p>

# שאלה 1 

נתונה השפה הבאה: 
$$S_\text{TM}=\{ \langle M\rangle \mid M \text{ is a TM that accepts }w^{\mathcal{R}}\text{ whenever it accepts }w\}$$
הוכיחו שהשפה איננה כריעה. 
רמז: השתמשו ברדקוציה ביחס ל- $A_{\textsf{TM}}$.

נניח ש- $M_{S}$ היא מ"ט שמכריעה את $S_{\text{TM}}$, ונראה רדוקציה $A_{\textsf{TM}}\leq_{\text{m}}S_{\text{TM}}$, בעזרת המ"ט הבאה שמכריעה את $A_{\text{TM}}$ באמצעות $S_{\text{TM}}$: 

-  $M_{A}=\text{``On input }\langle M,w\rangle$
	1. construct $D=\text{``On input }\langle x\rangle$
		1. If $x=\texttt{01}$, _accept_. 
		2. If $x=\texttt{10}$, run $M$ on $w$, and _accept_ if $M$ accepts, and _reject_ if it rejects. 
		3. Otherwise, _reject_. $\text{''}$ 
	2. Run $M_{S}$ on $\langle D\rangle$ and then _accept_ if $M_{S}$ accepts, and _reject_ if it rejects. $\text{''}$

- מקרה א:
	- נניח ש- $\langle M,w\rangle\in A_{\text{TM}}$, 
	- לכן: $L(D)=\{\texttt{01},\texttt{10}\}$, 
	- נובע ש: $\langle D\rangle \in S_{\text{TM}}$.
- מקרה ב: 
	- נניח ש- $\langle M,w\rangle\notin A_{\text{TM}}$, 
	- לכן: $L(D)=\{\texttt{01}\}$,
	- נובע ש: $\langle D\rangle \notin S_{\text{TM}}$.
- מסקנה: $$\langle M,w\rangle\in A_{\text{TM}}\iff \langle D\rangle\in S_{\text{TM}}$$
בזה הראינו ש- $A_{\text{TM}}\leq_{\text{m}}S_{\text{TM}}$.

כמו כן $A_{\text{TM}}$ אינה כריעה (משפט 4.11), לכן לפי משפט 5.23, $S_{\text{TM}}$ גם אינה כריעה.


<div class="page-break"></div>

# שאלה 2

נתונה השפה $\text{EQ}_{\text{CFG}}$ הבאה:
$$\text{EQ}_{\text{CFG}}=\{\langle G_1,G_2\rangle \mid G_1 \text{ and }G_2 \text{ are CFGs and }L(G_1)=L(G_2)\}$$

### א. הוכיחו שהשפה $\text{EQ}_{\text{CFG}}$ איננה כריעה. 

רמז: השתמשו ברדוקציה ביחס ל- $ALL_{\textsf{CFG}}$. (משפט 5.13).

בהינתן דקדוק חסר-הקשר $G=(V,\Sigma,R,S)$, נגדיר את הדקדוק $G_{ALL}=(\{ S \},\Sigma,R',S)$, עם הכללים $S\to aS\mid \varepsilon$, עבור כל $a\in \Sigma$. אם כן $L(G_{ALL})=\Sigma^*$. כלומר בעצם יש לנו פונקציה $f(\langle G\rangle)= \langle G_{ALL},G\rangle$. 

כעת נוכל לראות ש:

$$G\in ALL_{\text{CFG}}\iff L(G)=\Sigma^* \iff L(G_{ALL})=L(G)\iff \langle G_{ALL},G\rangle\in \text{EQ}_{\text{CFG}}$$

אם כן קיבלנו רדוקצית מיפוי $ALL_{\text{CFG}}\leq_{\text{m}}\text{EQ}_{\text{CFG}}$. כמו כן לפי משפט 5.13 $ALL_{\text{CFG}}$ אינה כריעה, ולכן לפי משפט 5.23, גם $\text{EQ}_{\text{CFG}}$ אינה כריעה.

### ב. הוכיחו שהשפה היא co-Turing-recognizable.

נראה שאפשר לזהות את השפה $\overline{\text{EQ}_{\text{CFG}}}$.
- בהינתן זוג $\langle G_1,G_2\rangle$, 
	- נעבור על כל המחרוזות ב- $\Sigma^*$, ונבדוק אם הן נוצרות על ידי $G_1$ או $G_2$. אם יש מחרוזת $w$ שנוצרות ב $G_1$ ולא ב $G_2$, או להיפך, אז נקבל. (הבדיקה אפשרית כי $A_{\text{CFG}}$ כריעה לפי משפט 4.7). 

ולכן $\overline{\text{EQ}_{\text{CFG}}}$ היא Turing-recognizable, ולכן $\text{EQ}_{\text{CFG}}$ היא co-Turing-recognizable. 


<div class="page-break"></div>


# שאלה 3 

הוכיחו שהשפה הבאה אינה ניתנת להכרעה: 
$$\text{HaltEmpty}=\{\langle M\rangle \mid M \text{ is a TM that halts on the empty string}\}$$
נראה רדוקציה $HALT\leq_{\text{m}}\text{HaltEmpty}$, 

נגדיר פונקציה $f(\langle M,w\rangle)=\langle M'\rangle$, כאשר $M'$ היא מ"ט:
$$M'=\text{``On input }x\text{, run }M\text{ on }w\text{, and if it halts, then accept. Otherwise, reject.}\text{''}$$ 
אם כן, 
אם $\langle M,w\rangle\in HALT$, אז $M$ עוצרת עבור $w$, ולכן $M'$ עוצרת עבור כל קלט, ובפרט עבור $\varepsilon$, ולכן $\langle M'\rangle\in \text{HaltEmpty}$.
אם $\langle M,w\rangle\notin HALT$, אז $M$ לא עוצר עבור $w$, ולכן $M'$ לא עוצר עבור כל קלט, ובפרט עבור $\varepsilon$, ולכן $\langle M'\rangle\notin \text{HaltEmpty}$.
מסקנה: 
$$\langle M,w\rangle\in HALT\iff f(\langle M,w\rangle)=\langle M'\rangle\in \text{HaltEmpty}$$
אם כך הראנו רדוקצית מיפוי $HALT\leq_{\text{m}}\text{HaltEmpty}$.

כעת מאחר ש- $HALT$ אינה כריעה (משפט 5.1), ואז לפי משפט 5.23, גם $\text{HaltEmpty}$ אינה כריעה.

<div class="page-break"></div>

# שאלה 4 

נתונות שתי השפות: 
- $A_\text{TM}=\{\langle M,w\rangle \mid M \text{ is a TM that accepts }w\}$
- $A_{\mathcal{R}}=\{ \langle M\rangle \mid L(M) = (L(M))^{\mathcal{R}}\}$ 

בנו שתי רדוקציות מיפוי כדי להראות ש: 
- $A_\text{TM}\leq_{\text{m}}A_{\mathcal{R}}$
- $\overline{ A_\text{TM} }\leq_{\text{m}}A_{\mathcal{R}}$ 


### א. $A_\text{TM}\leq_{\text{m}}A_{\mathcal{R}}$

נגדיר פונקציה $f(\langle M,w\rangle)=\langle M'\rangle$, כאשר $M'$ היא מ"ט, שעבור קלט $x$:
- אם $x=w$, אז נריץ את $M$ על $w$ ונקבל אם $M$ מקבל את $w$. ונדחה אם לא מקבלת.
- אם $x=w^{\mathcal{R}}$ נקבל.
- עבור כל קלט אחר, נדחה.

אם $\langle M,w\rangle\in A_{\text{TM}}$, אז $M'$ מקבל את $w$ ואת $w^{\mathcal{R}}$, ודוחה כל קלט אחר, ולכן $L(M')=(L(M'))^{\mathcal{R}}$, כלומר $\langle M'\rangle\in A_{\mathcal{R}}$.
אם $\langle M,w\rangle\notin A_{\text{TM}}$, אז $M'$ לא מקבל את $w$ אבל כן מקבל את $w^{\mathcal{R}}$, ולכן $L(M')\neq (L(M'))^{\mathcal{R}}$, כלומר $\langle M'\rangle\notin A_{\mathcal{R}}$.
קיבלנו ש-
$$\langle M,w\rangle\in A_{\text{TM}}\iff f(\langle M,w\rangle)=\langle M'\rangle\in A_{\mathcal{R}}$$
אם כן, הראינו רדוקצית מיפוי $A_{\text{TM}}\leq_{\text{m}}A_{\mathcal{R}}$.

### ב. $\overline{ A_\text{TM} }\leq_{\text{m}}A_{\mathcal{R}}$ 

באופן דומה נבנה רדוקציה מיפוי $\overline{A_{\text{TM}}}\leq_{\text{m}}A_{\mathcal{R}}$.

נגדיר פונקציה $f(\langle M,w\rangle)=\langle M'\rangle$, כאשר $M'$ היא מ"ט, שעבור קלט $x$:
- אם $x=w$, אז נריץ את $M$ על $w$ ונקבל אם $M$ דוחה את $w$. ונדחה אם $M$ מקבלת. 
- אם $x=w^{\mathcal{R}}$ נקבל.
- עבור כל קלט אחר, נדחה. 

אם $\langle M,w\rangle\in \overline{A_{\text{TM}}}$, אז $M$ דוחה את $w$, אז $M'$ מקבלת את $w$ וגם מקבלת את $w^{\mathcal{R}}$, ודוחה כל קלט אחר, ולכן $L(M')=(L(M'))^{\mathcal{R}}$, כלומר $\langle M'\rangle\in A_{\mathcal{R}}$.
אם $\langle M,w\rangle\notin \overline{A_{\text{TM}}}$, אז $M$ מקבלת את $w$, ואז $M'$ דוחה את $w$ אבל כן מקבלת את $w^{\mathcal{R}}$, ולכן $L(M')\neq (L(M'))^{\mathcal{R}}$, כלומר $\langle M'\rangle\notin A_{\mathcal{R}}$.

קיבלנו ש $$\langle M,w\rangle\in \overline{A_{\text{TM}}}\iff f(\langle M,w\rangle)=\langle M'\rangle\in A_{\mathcal{R}}$$
והראינו רדוקצית מיפוי $\overline{A_{\text{TM}}}\leq_{\text{m}}A_{\mathcal{R}}$.