# תרגיל 1

הוכח כי  $1+\frac{x-1}{2}-\frac{(x-1)^2}{8}$ מתקרב ל $\sqrt{x}$ בקטע  $[\frac{1}{2},\frac{3}{2}]$ בקירוב של ספרה אחת אחרי הנקודה העשרונית (כלומר, בקירוב של  $0.5 \cdot 10^{-1}$).


## פתרון 1

 עלינו להוכיח כי $\displaystyle\left|\sqrt{x}-(1+\frac{x-1}{2}-\frac{(x-1)^2}{8})\right|< 0.5 \cdot 10^{-1}=\frac{1}{20}$ לכל $x\in[\frac{1}{2},\frac{3}{2}]$.


פולינום טיילור של $\sqrt{x}$  ב- $a$ מסדר 2 הוא:

$$P_{2}( x) =\sum _{k=0}^{2}\frac{\sqrt{a}^{( k)}}{k!}( x-a)^{k} =\sqrt{a}^{( 0)} +\frac{1}{2\sqrt{a}}( x-a) \ -\frac{1}{8a^{3/2}}( x-a){^{2}}$$

כאשר $a=1$ אז: 

$$P_{2}(x)=1+\frac{x-1}{2}-\frac{( x-1)^{2}}{8}$$


צורת לגראנז' ניתנת על ידי:

$$\displaystyle R_{n}(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$$

לכן במקרה שלנו, 

$$R_{2}(x)=\frac{f^{(3)}(c)}{3!}(x-1)^{3}$$

כאשר $c\in(1,x)$ או $c\in(x,1)$, ו $\vert x - 1 \vert \leq \frac{1}{2}$.

עתה, הנגזרת השלישית של $\sqrt{x}$ היא:

$$f^{(3)}(x)=\frac{3}{8}x^{-5/2}\leq f^{(3)}(\frac{1}{2})=\frac{3}{8}2^{5/2}=\frac{3\sqrt{2}}{2}$$ 

(f יורדת)

לכן,



$\left|\sqrt{x}-(1+\frac{x-1}{2}-\frac{(x-1)^2}{8})\right|=\left|R_{2}(x)\right|=\left|\frac{f^{(3)}(c)}{3!}(x-1)^{3}\right|\leq \frac{3\sqrt{2}}{2 \cdot !3}\cdot \left(\frac{1}{2}\right)^{3}=\frac{3\sqrt{2}}{96}=\frac{\sqrt{2}}{32}<\frac{1}{20}$



# תרגיל 2

נתון $f(x)=xe^{x}$.


- (א.) מצא את פולינום טיילור של $f$ מסדר $n$  סביב $x=a$.
- (ב.) מצא את פולינום מקלורן של $f$ מסדר $n$. והוכח כי לכל $x$ השארית שואפת ל- 0  כאשר $n\to\infty$.
	- הערה: הנקודה $c$ בצורת לגראנז' תלויה ב $n$.
- (ג.) חשב את $f(1/3)$ עם שגיאה של לכל היותר $0.5 \cdot 10^{-2}$.

## פתרון 2א

פולינום טיילור מסדר $n$ של $f$ סביב $x=a$  הוא:

$$P_{n}(x)=\sum _{k=0}^{n}{\frac {f^{(k)}(a)}{k!}}(x-a)^{k}$$

כאשר $f(x)=xe^{x}$, אז:

$$f^{(k)}(x)=\begin{cases}
xe^{x} & k=0\\
e^{x}+xe^{x} & k=1\\
2e^{x}+xe^{x} & k=2\\
\vdots & \vdots\\
ne^{x}+xe^{x} & k=n
\end{cases}$$

אז 

$$P_{n}(x)=\sum _{k=0}^{n}{\frac {f^{(k)}(a)}{k!}}(x-a)^{k}=ae^{a}+({e^a + ae^a}){(x-a)}+\dots+\frac{n e^a + a e^a}{n!}(x-a)^{n}$$

$P_{n}(x)=\sum _{k=0}^{n}{\frac {(a+k)e^{a}}{k!}}(x-a)^{k}$


## פתרון 2ב

> מצא את פולינום מקלורן של $f$ מסדר $n$. 

נציב $a=0$  בתוצאה הקודמת:

$P_{n}(x)=\sum _{k=0}^{n}{\frac {k}{k!}}x^{k}=\sum _{k=1}^{n}{\frac{1}{(k-1)!}}x^{k}$

> והוכח כי לכל $x$ השארית שואפת ל- 0  כאשר $n\to\infty$.


השארית של $f$ ב- $a$  היא:

$$R_{n}(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x)^{n+1}$$

כאשר $\vert c \vert < \vert x \vert$ לכן $|e^{c}|\leq e^{|c|}\leq e^{|x|}$

$\vert R_{n}(x) \vert = \frac{\vert f^{(n+1)}(c) \vert}{(n+1)!}\vert x \vert^{n+1}=  \frac{\vert (n+1)e^{c}+ce^{c} \vert}{(n+1)!}\vert x \vert^{n+1}<\frac{(n+1)e^{|x|}+|x|e^{|x|}}{(n+1)!}\vert x \vert^{n+1}= e^{|x|}\frac{n+1+|x|}{(n+1)!}\vert x \vert^{n+1}=e^{|x|}\left(\frac{ n+1}{(n+1)!}+\frac{|x|}{(n+1)!}\right)\vert x \vert^{n+1}=  e^{|x|}\left(\frac{\vert x \vert^{n+1}}{n!}+\frac{\vert x \vert^{n+2}}{(n+1)!}\right)\underset{n\to\infty}{\longrightarrow}0$

לכן $\lim_{n\to\infty}R_{n}(x)=0$. (על פי משפט הסנדוויץ')

## פתרון 2ג

> (ג.) חשב את $f(1/3)$ עם שגיאה של לכל היותר $0.5 \cdot 10^{-2}$.

עלינו למצוא $P_{n}(1/3)$  ו $R_{n}(1/3)$, כאשר $P_{n}(1/3)$  הוא פולינום מקלורן של $f$ מסדר $n$.

מ- ב, יש לנו: $\forall x, \lim_{n\to\infty}R_{n}(x)=0$, אז  $\lim_{n\to\infty}R_{n}(1/3)=0$.

כאשר $n=3$, יש לנו:

$P_{3}(x)=\sum _{k=1}^{3}{\frac{1}{(k-1)!}}x^{k}=\frac{1}{0!}x^{1}+\frac{1}{1!}x^{2}+\frac{1}{2!}x^{3}=x+x^{2}+\frac{1}{2}x^{3}$

אז $P_{3}(1/3)=1/3+(1/3)^{2}+\frac{1}{2}(1/3)^{3}=1/3+1/9+1/54=25/54$.

כמו כן, קיימת $c$, כך ש $|c|<1/3$ לכן $|e^{c}|\leq e^{|c|}\leq e^{|1/3|}$



$|R_{3}(1/3)|=\frac{f^{(4)}(c)}{4!}(\frac{1}{3})^{4}=\frac{e^{c}(4+c)}{24}(\frac{1}{3})^{4}<\frac{e^{1/3}(4+1/3)}{24}(\frac{1}{3})^{4}<$

(אנו יכולים להשתמש בעובדה ש $e^{1/3}<3^{1/3}<3/2$)

$<\frac{3/2(4+1/3)}{24}(\frac{1}{3})^{4}=\frac{13/2}{24}(\frac{1}{3})^{4}=\frac{13}{3888}<\frac{1}{200}=0.5 \cdot 10^{-2}$

**סיכום**: $f(1/3)=(1/3)e^{1/3}=25/54$ עם שגיאה של לכל היותר $0.5 \cdot 10^{(-2)}$.

# תרגיל 3

לכל $x>-1$, $x\neq 0$, הוכח כי

- אם $\alpha>1$ או $\alpha<0$, אז $(1+x)^{\alpha}>1+\alpha x$.
- אם $0<\alpha<1$, אז $(1+x)^{\alpha}<1+\alpha x$.

## פתרון 3

### מקרה 1: $\alpha>1$ או $\alpha<0$

פיתוח מקלורן של  $f(x)=(1+x)^{\alpha}$ (מסדר 1) הוא:

$$f(x)=P_{1}(x)+R_{1}(x)=1+\alpha x+R_{1}(x)$$

כאשר: 
- $P_{1}(x)=\sum _{k=0}^{1}{\frac {f^{(k)}(0)}{k!}}x^{k}=1+\alpha x$.
- $R_{1}(x)=\frac{f^{(2)}(c)}{2!}x^{2}=\frac{\alpha(\alpha-1)}{2}x^{2}$ כאשר $c\in(0,x)$ או $c\in(x,0)$.

לכן $$f(x)=1+\alpha x+\frac{\alpha(\alpha-1)}{2}x^{2}$$

כמו כן $\alpha>1\implies \alpha-1>0\implies \alpha(\alpha-1)>0$ 

או $\alpha<0\implies \alpha-1<0\implies \alpha(\alpha-1)>0$.

אז $\alpha(\alpha-1)>0$.

לכן $\frac{\alpha(\alpha-1)}{2}>0$.

אז $f(x)=(1+x)^{\alpha}>1+\alpha x$.

### מקרה 2: $0<\alpha<1$

כמו במקרה הקודם, יש לנו:

$$f(x)=1+\alpha x+\frac{\alpha(\alpha-1)}{2}x^{2}$$

ו $\alpha(\alpha-1)<0$.

אז $\frac{\alpha(\alpha-1)}{2}<0$.

אז $\frac{\alpha(\alpha-1)}{2}x^{2}<0$.

אז $f(x)=(1+x)^{\alpha}<1+\alpha x$.

# תרגיל 4

נתון $f(x)$ היא פונקציה שהיא גזירה 3 פעמים ב $x=0$, ו $f(0)=0$.

הוכח כי $\displaystyle\lim_{x\to 0}\frac{f(x)-f'(0)\sin x-\frac{1}{2}f''(0)\sin^2 x}{x^{3}}=\frac{f^{(3)}(0)+f'(0)}{6}$.

לא נובע מהנתון ש $f^{(3)}$ מוגדרת ב $x\neq 0$.

## פתרון 4

על פי פיתוח מקלורן של $f(x)$, יש לנו:

$$f(x)=f(0)+f'(0)x+\frac{f''(0)}{2}x^{2}+\frac{f^{(3)}(0)}{6}x^{3}+R_{3}(x)$$

נציב במונה

$f(x)-f'(0)\sin x-\frac{1}{2}f''(0)\sin^2 x=$
$=f'(0)x+\frac{f''(0)}{2}x^{2}+\frac{f^{(3)}(0)}{6}x^{3}+R_{3}(x)-f'(0)\sin x-\frac{1}{2}f''(0)\sin^2 x=$
$=f'(0)(x-\sin x)+\frac{f''(0)}{2}(x^{2}-\sin^2 x)+\frac{f^{(3)}(0)}{6}(x^{3})+R_{3}(x)$ 

על פי פיתוח מקלורן של $\sin x$,  :

$$\sin x=x-\frac{x^{3}}{3!}+S_{3}(x)\implies x-\sin x=\frac{x^{3}}{3!}-S_{3}(x)$$

וכמו כן $x^{2}-\sin^2 x=(x-\sin x)(x+\sin x)=\left(\frac{x^{3}}{3!}-S_{3}(x)\right)(x+\sin x)$.

אז

$$f(x)-f'(0)\sin x-\frac{1}{2}f''(0)\sin^2 x = f'(0)\left(\frac{x^{3}}{3!}-S_{3}(x)\right)+\frac{f''(0)}{2}\left( \left(\frac{x^{3}}{3!}-S_{3}(x)\right)(x+\sin x)\right)+\frac{f^{(3)}(0)}{6}(x^{3})+R_{3}(x)$$

עתה נחלק ב $x^{3}$:

- $\displaystyle\lim_{x\to 0}f'(0)\left(\frac{1}{3!}-\frac{S_{3}(x)}{x^{3}}\right)=\frac{f'(0)}{3!}$
- $\displaystyle\lim_{x\to 0}\frac{f''(0)}{2}\left(\frac{1}{3!}-\frac{S_{3}(x)}{x^{3}}\right)\left(x+\sin x\right)=0$ (על פי 4.7)
- $\displaystyle\lim_{x\to 0}\frac{f^{(3)}(0)}{6}=\frac{f^{(3)}(0)}{6}$
- $\displaystyle\lim_{x\to 0}\frac{R_{3}(x)}{x^{3}}=0$ (על פי 4.7)

לכן

$$\displaystyle\lim_{x\to 0}\frac{f(x)-f'(0)\sin x-\frac{1}{2}f''(0)\sin^2 x}{x^{3}}=\frac{f^{(3)}(0)+f'(0)}{6}$$





# תרגיל 5

השתמש בפיתוח מקלורן מסדר מתאים כדי לחשב את הגבולות הבאים:

- (א.) $\displaystyle\lim_{x\to 0}\left(\frac{1}{\ln(1+x^2)}-\frac{x^2+x^4}{(x^2-2x^4)^2}\right)$.
- (ב.) $\displaystyle\lim_{n \to \infty}\left(n^3 \tan\left(\frac{1}{n}\right)-n^2 \exp\left(\frac{1}{n^2}\right)\right)$. (שים לב: זה גבול של סדרה).


## פתרון 5א

#todo

## פתרון 5ב

#todo