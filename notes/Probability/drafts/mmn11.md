ממ"ן 11 
הסתברות
2025ב
___
# שאלה 1

- $P(A)=0.85$, $P(B)=0.85$, $P(C)=0.7$, $P(ABC)=0.6$, $P(A\mid C)=1$, $P(\overline{A}\,\overline{B})=0$
- $P(A \cup B)=1$
- $P(A \cup B)=P(A)+P(B)-P(AB)=0.85+0.85-P(AB)=1$ 
- $P(AB)=0.7$
- $C\subseteq A \implies P(CA)=P(C)=0.7$
- $P(AC)=P(ABC)+P(A\overline{B}C)\implies 0.7=0.6+P(A\overline{B}C)\implies P(A\overline{B}C)=0.1$
- $P(A)=P(AB)+P(A\overline{B})\implies 0.85=0.7+P(A\overline{B})\implies P(A\overline{B})=0.15$
- $P(A\overline{B})=P(A\overline{B}C)+P(A\overline{B}\overline{C})\implies 0.15=0.1+P(A\overline{B}\overline{C})\implies\boxed{P(A\overline{B}\overline{C})=0.05}$ 
- $P(A\overline{B}C)+P(ABC)=P(AC)\implies P(A\overline{B}C)=P(AC)-P(ABC)=0.7-0.6=0.1\implies\boxed{P(A\overline{B}C)=0.1}$
- $P(AB)=P(ABC)+P(AB\overline{C})\implies 0.7=0.6+P(AB\overline{C})\implies \boxed{P(AB\overline{C})=0.1}$
- $0.7=P(C)=P(ABC)+P(\overline{A}BC)+P(A\overline{B}C)+P(\overline{A}\overline{B}C)=0.6+P(\overline{A}BC)+0.1+0\implies P(\overline{A}BC)=0.7-0.6-0.1=0\implies\boxed{P(\overline{A}BC)=0}$
- $P(\overline{A}\,\overline{B})=0\implies \boxed{P(\overline{A}\,\overline{B}C)=0}$
- $0.85=P(B)=0.6+0.1+0+P(\overline{A}BC)\implies P(\overline{A}B\overline{C})=0.85-0.6-0.1=0.15\implies\boxed{P(\overline{A}B\overline{C})=0.15}$ 

### סעיף א

![[IMG_0772 1.jpeg]]


### סעיף ב
כפי שראינו בסעיף א
$$P(A\overline{B}\overline{C})=0.05$$
### סעיף ג
If Joseph answered Question B correctly, what is the probability that he answers at least two questions correctly in  test?
- $P(A\cup C\mid B)=$

### סעיף ד

If Joseph answered at least two questions correctly, what is the probability that he answered Question B correctly?


---

# שאלה 2

Consider the following circuit where the switches are independent of each other, and each switch is closed with probability 0.6 (allowing current to flow):

#### (a) (10 points)
What is the probability that current flows from A to B?

#### (b) (7 points)
If Switch 5 is open, what is the probability that no current flows from A to B?

#### (c) (8 points)
Are the events "Switch 4 is open" and "Current flows in the circuit" independent? Prove your claim.


# שאלה 3

- $N=\displaystyle\frac{16!}{(2!)^8 \cdot 8!}=2,027,025$      (דרכים לחלק 16 תלמידים ל-8 זוגות)
- $\displaystyle N(T)=\binom{8}{2}^2\cdot 2!\cdot \left(\frac{6!}{(2!)^3\cdot 3!}\right)^2=352800$       (דרכים בהן נוצרות בדיוק שתי קבוצות מעורבות)
- $N(E)=\displaystyle\frac{14!}{(2!)^7 \cdot 7!}=135135$        (דרכים לחלק 14 תלמידים ל-7 זוגות, שזה כל הדרכים בהן אהוד ואפרת באותו זוג)
- $N(E\cap T)=\left( \displaystyle\left(\frac{6!}{(2!)^3*3!}\right)^2\cdot{7}^2 \right)=11025$      (דרכים בהן נוצרות בדיוק שתי קבוצות מעורבות ואהוד ואפרת באותו זוג)

### א. ההסתברות שיווצרו בדיוק שתי זוגות מעורבים
- $\displaystyle P(T)=\frac{N(T)}{N}=\frac{352800}{2027025}=\boxed{\frac{224}{1287}}$

### ב. אם נוצרו בדיוק שני זוגות מעורבים (המורכבים מבן ובת) מהי ההסתברות שאהוד ואפרת לא יהיו באותו הזוג

- $\displaystyle P(E|T)=\frac{N(E\cap T)}{N(T)}=\frac{11025}{352800}=\frac{1}{32}$
- $\displaystyle P(E^{\complement}\mid T)=1-P(E\mid T)=1-\frac{1}{32}=\boxed{\frac{31}{32}}$
### ג. חמישה נבחרים באקראי מתוך 16
- $A$ = אהוד נבחר
- $B$ = אפרת נבחרת
- $N(A)=N(B)=\displaystyle\binom{15}{4}=1365$
- $N(A\cap B)=\displaystyle\binom{14}{3}=364$
- $\displaystyle P(A\mid B)=\frac{N(A\cap B)}{N(B)}=\frac{364}{1365}=\boxed{\frac{4}{15}}$     ההסתברות שאהוד נבחר בהנחה שאפרת נבחרת.
- $\displaystyle P(A^{\complement}\mid B)=1-P(A\mid B)=1-\frac{4}{15}=\boxed{\frac{11}{15}}$  ההסתברות שאהוד לא נבחר בהנחה שאפרת נבחרת.


# שאלה 4
#### א. עץ הסתברות

![[IMG_0776.jpeg]]

#### ב. הסתברות שבסוף הניסוי תבחר הקופסה עם 2 יהלומים אמיתיים
#todo

- $P(G_1)= \frac{1}{2}$ (ההסתברות לבחור בקופסה הטובה בהתחלה)
- $P(G_1^{\complement})= \frac{1}{2}$ (ההסתברות לבחור בקופסה הרעה בהתחלה)
- $P(R\mid G_1)= \frac{2}{3}$ (ההסתברות לבחור יהלום אמיתי מהקופסה הטובה)
- $P(R\mid G_1^{\complement})= \frac{1}{3}$ (ההסתברות לבחור יהלום אמיתי מהקופסה הרעה)
- $P(R^{\complement}\mid G_1)=\frac{1}{3}$ (ההסתברות לבחור יהלום מזויף מהקופסה הטובה)
- $P(R^{\complement}\mid G_1^{\complement})=\frac{2}{3}$ (ההסתברות לבחור יהלום מזויף מהקופסה הרעה)
- $P(G_2)=P(G_1)P(R\mid G_1)+P(G_1^{\complement})P(R^{\complement}\mid G_1^{\complement})=\frac{1}{2}\cdot \frac{2}{3}+\frac{1}{2}\cdot \frac{2}{3}=\frac{2}{3}$ (ההסתברות לבחור בקופסה הטובה בסוף)


#### ג.

If the son chose the other box (not the one he initially picked), what is the probability that the box contains 2 real diamonds?

ההסתברות שהייתה החלפה:
- $\displaystyle P(R^\complement)=P(R^{\complement}\mid G_1)P(G_1)+P(R^\complement\mid G_1^{\complement})P(G_1^{\complement})=\frac{1}{3}\cdot \frac{1}{2}+\frac{2}{3}\cdot \frac{1}{2}=\frac{3}{6}=\frac{1}{2}$


$\displaystyle P(G_1\mid R^{\complement})=\frac{P(R^{\complement}\mid G_1)P(G_1)}{P(R^{\complement})}=\frac{\frac{1}{3}\cdot \frac{1}{2}\cdot \frac{1}{2}}{\frac{1}{2}}=\frac{1}{6}$
