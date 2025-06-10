`= date(today)`
<h4 style="text-align: center;">מודלים חישוביים: ממ"ן 17</h4>
<p style="text-align: center;">עדיאל בן משה</p>

# שאלה 1 

### א.

הוכיחו שהשפה הבאה שייכת ל- P.

$\text{TRIANGLE}=\{\langle G \rangle\mid G \text{ contain a triangle}\}$

נראה אלגוריתם פולינומיאלי עבור הבעיה:

- עבור כל שלשה של צמתים ב- $G$ (סיבוכיות $O(|V|^3)$):
	- בדוק אם יש קשת בין כל זוג של צמתי השלשה. (סיבוכיות $O(|E|^2)$). אם יש, נקבל.   
- אם סיימנו בלי למצוא משולש, נדחה.
- סיבוכיות: $O(|V|^3 \cdot |E|^2)$, שהיא פולינומיאלית, ולכן השפה שייכת למחלקה P.

### ב.

מספר נקרא מורכב אם הוא לא ראשוני. הוכיחו שהשפה הבאה שייכת למחלקה NP.

$\text{COMPOSITES}=\{\langle n \rangle\mid n \text{ is a composite integer}\}$

הערה: $n$ מיוצג בבסיס בינארי.

תשובה: מאמת (_verifier_) $V$ עבור השפה $\text{COMPOSITES}$ יהיה מ"ט אשר עבור קלט $\langle n, p \rangle$ בודק אם $p$ (שיהווה _certificate_) הוא מחלק של $n$ (כלומר $n \mod p = 0$) ושהוא לא 1 ולא $n$ עצמו. אם כן, $V$ מקבל, אחרת הוא דוחה. $V$ פועל בזמן פולינומיאלי (שכן פעולת חילוק של $n$ ב- $n>p$ היא פולינומיאלית $O(n^2)$.) לפי ההגדרה (7.19) של NP, נקבל ש- $\text{COMPOSITES}\in \text{NP}$.
# שאלה 2 

הוכיחו שהשפה הבאה היא NP שלמה.
$\text{DOUBLE-SAT}=\{\langle \phi \rangle\mid \phi \text{ is a Boolean formula with two satisfying assignments}\}$
נראה רדוקציה פולי' מ- $\text{SAT}$ ל- $\text{DOUBLE-SAT}$, כלומר: $\text{SAT} \leq_p \text{DOUBLE-SAT}$.	
-  נגדיר פונקציה כך: $f(\phi) = \phi \land (x \lor \neg x)$, כאשר $x$ הוא משתנה חדש שאינו מופיע ב- $\phi$.
- כיוון ראשון: אם $\phi\in \text{SAT}$, אז צד שמאל של $f(\phi) = \phi \land (x \lor  \overline{ x })$, כלומר $\phi$, מסופק, לכן גם $x=true$ וגם $x=false$ מספקים את $f(\phi)$, כלומר $f(\phi)\in \text{DOUBLE-SAT}$.
- כיוון שני: אם $\phi\notin \text{SAT}$, אזי $\phi$ אינה ספיקה, ולכן גם $f(\phi)$ אינה ספיקה, כלומר $f(\phi)\notin \text{DOUBLE-SAT}$.
- מסקנה: $\phi\in \text{SAT} \iff f(\phi)\in \text{DOUBLE-SAT}$.
- לכן, $\text{SAT} \leq_p \text{DOUBLE-SAT}$. (זמן חישוב של הפונקציה $f$ הוא פולינומיאלי כמובן)
- מכך, ובגלל שגם $\text{SAT}$ היא NP-שלמה (משפט 7.37), נובע לפי משפט 7.36 ש- $\text{DOUBLE-SAT}$ היא NP-שלמה.


# שאלה 3 

##### הוכיחו שהמחלקה NP סגורה תחת איחוד.

עבור שני שפות $L_1, L_2 \in \text{NP}$, עם מ"ט (NTM) $M_1, M_2$ בהתאמה, המכריעות אותן בזמן פולינומיאלי, נבנה מכונת טיורינג $M$ המכריעה את השפה $L_1 \cup L_2$ כך:

"עבור כל קלט $\langle w \rangle$:
- נריץ את $M_1$ על $w$. אם $M_1$ מקבלת, נקבל.
- נריץ את $M_2$ על $w$. אם $M_2$ מקבלת, נקבל.
- אם אף אחד מהם לא מקבל, נדחה."

##### הוכיחו שהמחלקה NP סגורה תחת שרשור.

עבור שני שפות $L_1, L_2 \in \text{NP}$, עם מ"ט (NTM) $M_1, M_2$ בהתאמה, המכריעות אותן בזמן פולינומיאלי, נבנה מכונת טיורינג $M$ המכריעה את השפה $L_1 \cdot L_2$ כך:

"עבור כל קלט $\langle w \rangle$:
- נעבור (לא דטרמיניסטית) על כל אפשרויות החלוקה של $w$ לשני תתי-מחרוזות $w=w_1 \cdot w_2$.
	- נריץ את $M_1$ על $w_1$. נריץ את $M_2$ על $w_2$. ואם שניהם מקבלים, נקבל. אחרת נמשיך לחלוקה הבאה.
- אם באף חלוקה לא קיבלנו. נדחה."

# שאלה 4 

הראו רדוקציה בזמן פולינומיאלי:
$$\text{VERTEX-COVER}\leq_{\text{p}}\text{CLIQUE}$$


# שאלה 5

- $\text{SPATH}=\{\langle G,a,b,k\rangle\mid G \text{ contains a simple path of length at most } k \text{ from } a \text{ to } b\}$
- $\text{LPATH}=\{\langle G,a,b,k\rangle\mid G \text{ contains a simple path of length at least } k \text{ from } a \text{ to } b\}$

### א. הוכיחו ש-SPATH שייכת ל-P.

### ב. הוכיחו ש-LPATH שייכת ל- NP.


# שאלה 6 

מלאו את הטבלה הבאה. בכל משבצת רשמו V אם תכונת הסגירות מתקיימת באותה מחלקה ביחס לפעולה המצויינת. תנו הסבר קצר בלבד.

| operation       | REG | CFL | Turing-decidable | Turing-recognizable |
| --------------- | --- | --- | ---------------- | ------------------- |
| union           | V   | V   |                  |                     |
| intersection    | V   |     |                  |                     |
| complementation | V   | V   |                  |                     |
