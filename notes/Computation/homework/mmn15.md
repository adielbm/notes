`= date(today)`
<h4 style="text-align: center;">מודלים חישוביים: ממ"ן 15</h4>
<p style="text-align: center;">עדיאל בן משה</p>

# שאלה 1 

הוכיחו שהשפות הבאות כריעות:

#### א. $\{\langle N,w\rangle : N \text{ is a NFA and }w\in L(N)\}$

- $\text{``On input }\langle N,w\rangle$
	1. If $N$ is not a NFA, _reject_.
	2. Convert $N$ to an equivalent DFA $N'$. (משפט 1.39)
	3. Run TM $M$ (משפט 4.1) that decides $A_{\textsf{DFA}}$ on $\langle N',w\rangle$.
	4. If $M$ accepts, _accept_. If it rejects, _reject_. $\text{''}$
#### ב. $\{\langle P,w\rangle : P \text{ is a PDA and }w\in L(P)\}$

- $\text{``On input }\langle P,w\rangle$
	1. If $P$ is not a PDA, _reject_.
	2. Convert $P$ to an equivalent CFG $G$. (למה 2.27)
	3. Run TM $S$ (משפט 4.7) that decides $A_{\textsf{CFG}}$ on $\langle G,w\rangle$.
	4. If $S$ accepts, _accept_. If it rejects, _reject_. $\text{''}$


#### ג. $\{\langle D,Q\rangle : D \text{ and }Q\text{ are DFAs and }L(D)\cap L(Q)=\emptyset\}$

השפה $L(D)\cap L(Q)$ היא רגולרית (שפות רגולריות סגורות תחת חיתוך), ולכן קיים DFA $A$ שמקבל את החיתוך. 
נשתמש במ"ט $T$ ממשפט 4.4 שמכריע את $E_{\text{DFA}}$.

- $\text{``On input }\langle D,Q\rangle$
	1. If $D$ or $Q$ is not a DFA, _reject_.
	2. Construct a DFA $A$ for $L(D)\cap L(Q)$. 
	3. Run $T$ on $\langle A\rangle$.
	4. If $T$ accepts, _accept_. If it rejects, _reject_. $\text{''}$

כעת נצדיק את שלב 2, נראה איך לבנות את ה- DFA $A$, (לפי עמ' 47 בספר, ובפרט ההערה שם):
- נתון:
	- $D=(Q_D,\Sigma_{D},\delta_D,q_{0,D},F_D)$
	- $Q=(Q_Q,\Sigma_{Q},\delta_Q,q_{0,Q},F_Q)$
	- נסמן: $A=(Q_A,\Sigma_{A},\delta_A,q_{0,A},F_A)$, כאשר:
		- $Q_A=Q_D\times Q_Q$ 
		- $\Sigma_{A}=\Sigma_D \cup\Sigma_Q$ 
		- לכל $(r_1,r_2)\in Q_A$: 
		- $\delta_A((r_1,r_2),a)=(\delta_D(r_1,a),\delta_Q(r_2,a))$. 
		- $q_{0,A}=(q_{0,D},q_{0,Q})$ 
		- $F_A=F_D\times F_Q$.

לפי זה $A$ מקבל מילה אם ורק אם היא מתקבלת על ידי שני ה- DFA $D$ ו- $Q$.

#### ד. $\{\langle D,w\rangle : D \text{ is a DFA and }w\notin L(D)\}$

מאחר ו- $A_{\textsf{DFA}}$ היא כריעה, אז גם המשלים שלה $\overline{A_{\textsf{DFA}}}$ היא כריעה. (תרגיל 3.15d).
ולכן קיימת מ"ט שמכריעה את השפה הזו.

<div class="page-break"></div>

# שאלה 2

הוכיחו שהשפה הבאה היא שפה כריעה: 
$A_{\varepsilon \text{CFG}}=\{\langle G\rangle : G \text{ is a CFG that generates } \varepsilon\}$

נשתמש במ"ט $S$ שמכריעה את $A_{\textsf{CFG}}$. (משפט 4.7)

- $\text{``On input }\langle G\rangle$
	1. Run $S$ on $\langle G,\varepsilon\rangle$.
	2. If $S$ accepts, _accept_. If it rejects, _reject_. $\text{''}$



# שאלה 3

נתונה השפה L הבאה:

$L=\{\langle M\rangle : M \text{ is a TM and }M\text{ accepts the empty string}\}$
#### א. הוכיחו ש-L היא שפה מזוהה-טיורינג.

תיאור של מ"ט $M_{\varepsilon}$ שמזהה את $L$: 

- $M_{\varepsilon}=\text{``On input }\langle M\rangle$
	1. Run $M$ on $\varepsilon$.
	2. If $M$ accepts, _accept_. If it rejects, _reject_. $\text{''}$

מאחר ש- $M$ היא מקבלת תמיד אם המילה הריקה בשפה, אז גם $M_{\varepsilon}$ תקבל ותעצור.


#### ב. הוכיחו ש-L איננה כריעה. 

נניח בשלילה ש $L$ היא שפה כריעה על ידי מ"ט $D_L$. 

כעת נבנה מ"ט $D_A$ שמכריעה את השפה $A_{\textsf{TM}}$:

-  $D_A=\text{``On input }\langle M,w\rangle$
	1. construct TM $M_{w}=\text{``On input }\langle x\rangle$
		1. If $x\neq \varepsilon$, _reject_.
		2. Run $M$ on $w$, and _accept_ if $M$ accepts. $\text{''}$
	2. Run $D_L$ on $\langle M_{w}\rangle$ and then _accept_ if $D_L$ accepts, and _reject_ if it rejects. $\text{''}$


מאחר ש: השפה $D_L$ מקבלת אםם $M_{w}$ מקבלת את המילה הריקה אםם $M$ מקבלת את המילה $w$.
אז $D_A$ מקבלת אםם $M$ מקבלת את המילה $w$.

כלומר בנינו מ"ט $D_A$ שמכריעה את השפה $A_{\textsf{TM}}$, **בסתירה** למשפט 4.11. 

מסקנה: $L$ איננה כריעה.

<div class="page-break"></div>

# שאלה 4

נתונה השפה הבאה:
$E_{\text{TM}}=\{\langle M \rangle : M \text{ is a TM with }L(M)=\emptyset\}$ 

הוכיחו שהשפה היא co-Turing-recognizable. 
#### תשובה

(***נעזרתי בפתרון בספר הלימוד תרגיל 4.5***)


נסמן $s_1,s_2,s_3,\ldots$ את סדרת המילים ב $\Sigma^*$. 

- לכל קלט $\langle M\rangle$ כאשר $M$ היא מ"ט:
	- לכל $i=1,2,\ldots$:
		- נריץ את $M$ על כל אחד מ- $s_1,s_2,\ldots,s_i$, **לכל היותר** $i$ צעדים. 
		- אם $M$ מקבלת מילה כלשהי, נקבל.

אם אכן $L(M)\neq\emptyset$, בסופו של דבר $M$ תסיים את הריצה כי אינה יכולה להכנס ללופ אינסופי. שהרי הגבלנו את מספר הצעדים על כל מילה.


