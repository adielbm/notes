`= date(today)`
<h5 style="text-align: center;">הסתברות: ממ"ן 13</h5>
<p style="text-align: center;">עדיאל בן משה</p>


## שאלה 1

### א.

$$\begin{align*} 
P(X_1+\cdots+X_{5}\geq 2)&=1-P(X_1+\cdots+X_{5}< 2) \\
&=1-\left( e^{-5}{5}^0\cdot \frac{1}{0!}+e^{-5}{5}^1\cdot \frac{1}{1!} +e^{-5}{5}^2\cdot \frac{1}{2!} \right) \\ 
&=1-\frac{37}{2e^5} \\ 
&\approx \boxed{ 0.875 }
\end{align*}$$
### ב.

$$\begin{align*}
P(X_1+\cdots+X_{5} = 1)\cdot P(X_{6}\geq 1)+\,\\\,+\,P(X_1+\cdots+X_{5} = 0)\cdot P(X_{6}\geq 2)&= e^{-5}{5}^1\frac{1}{1!}\cdot \left( 1-\left( e^{-1}1^1\cdot \frac{1}{0!} \right) \right)+ e^{-5}\frac{5^0}{0!}\cdot\left( 1-e^{-1}\frac{1^1}{0!} -e^{-1}\frac{1^0}{1!} \right) \\
&= e^{-5}{5}^1\cdot \left( 1-\left( e^{-1}\right) \right)+ e^{-5}\cdot\left( 1-e^{-1}-e^{-1} \right) \\
&= \frac{6e - 7}{e^6} \\ 
&\approx \boxed{ 0.023 }
\end{align*}$$

### ג. 
$$\begin{align*}
P(X_{1},\dots,X_{10}=1\mid \forall i , X_i\geq 1) &= \frac{P(X_{1},\dots,X_{10}=1)}{P(X_1,\dots,X_{10}\geq 1)} \\
&= \frac{\left( e^{-1}\frac{1^1}{1!} \right)^{10}}{\left( 1-e^{-1}\frac{1^0}{0!} \right)^{10}} \\
&= \frac{\left( e^{-1} \right)^{10}}{\left( 1-e^{-1} \right)^{10}} \\
&\approx \boxed{ 0.004 } \\
\end{align*}$$ 
### ד. 

$$\begin{align*}
P(X_{1}=2\mid X_{1}+\dots+X_{5}=7) &= \frac{P(X_{1}=2\cap X_{1}+\dots +X_{5}=7)}{P(X_{1}+\dots+X_{5}=7)}\\ 
&= \frac{P(X_{1}=2)\cdot P(X_{2}+\dots+X_{5}=5)}{P(X_{1}+\dots+X_{5}=7)}\\ 
&= \frac{e^{-4}\frac{4^5}{5!}\cdot e^{-1}\cdot \frac{1^2}{2!}}{e^{-5}\cdot \frac{5^7}{7!}}\\
&=\frac{21504}{78125}\\ 
&\approx \boxed{ 0.275 } \\
\end{align*}$$

### ה.


$$\begin{align*} 
P(X_{1}+\dots+X_{5}=4 \cap X_{3}=0)&=P(X_{1}+X_{2}+X_{4}+X_{5}=4)\cdot P(X_{3}=0)\\ 
&= e^{-4}\cdot \frac{4^4}{4!}\cdot e^{-1}\cdot \frac{1^0}{0!}\\
&= \frac{32}{3e^5} \\
&\approx \boxed{ 0.072 }
\end{align*} 
$$

<div class="page-break"></div>


## שאלה 2

- $X_1\sim \text{Bernoulli}\left( \frac{1}{2} \right)$
- $X_2\sim \text{Bernoulli}\left( \frac{2}{3} \right)$ 
- $X_1,X_2$ בלתי תלויים
### א. פונקציית ההסתברות המשותפת של $Y_1=X_1+X_2$, ו- $Y_2=X_1-X_2$.

$$
\begin{align*} 
Y_1=X_1+X_2,\quad Y_2=X_1-X_2&\implies\\
X_{1}=Y_{1}-X_{2} ,\quad X_{2}=X_{1}-Y_{2}&\implies\\ 
X_{1}=\frac{Y_{1}+Y_{2}}{2},\quad X_{2}=\frac{Y_{1}-Y_{2}}{2}&\implies\\
\end{align*} 
$$ 
כעת הערך של $Y_1$ ו- $Y_2$ תלוי ב- $X_1$ ו- $X_2$. 

| $X_1$ | $X_2$ | $Y_1=X_{1}+X_{2}$ | $Y_2=X_1-X_2$ |
| ----- | ----- | ----------------- | ------------- |
| 1     | 1     | 2                 | 0             |
| 1     | 0     | 1                 | 1             |
| 0     | 1     | 1                 | -1            |
| 0     | 0     | 0                 | 0             |

נשים לב אם כן שרק עבור:
$(y_{1},y_{2})=(2,0),(1,1),(1,-1),(0,0)$

יש לפונקצית ההסתברות המשותפת של $Y_1,Y_2$ ערכים גדולים מ- 0. 

נחשב את הפונקציה: 

- $p_{Y_{1},Y_{2}}(2,0)=P(X_1=1\cap X_2=1)=P(X_1=1)P(X_2=1)=\frac{1}{2}\cdot \frac{2}{3}=\frac{1}{3}$
- $p_{Y_{1},Y_{2}}(1,1)=P(X_1=1\cap X_2=0)=P(X_1=1)P(X_2=0)=\frac{1}{2}\cdot \frac{1}{3}=\frac{1}{6}$
- $p_{Y_{1},Y_{2}}(1,-1)=P(X_1=0\cap X_2=1)=P(X_1=0)P(X_2=1)=\frac{1}{2}\cdot \frac{2}{3}=\frac{1}{3}$
- $p_{Y_{1},Y_{2}}(0,0)=P(X_1=0\cap X_2=0)=P(X_1=0)P(X_2=0)=\frac{1}{2}\cdot \frac{1}{3}=\frac{1}{6}$

אחרת, $p_{Y_{1},Y_{2}}(y_{1},y_{2})=0$. 

### ב. האם $Y_1,Y_2$ בלתי תלויים? 

לפי הגדרה, $Y_1$ ו- $Y_2$ בלתי תלויים אםם 
$$P(Y_1=y_1, Y_2=y_2)=P(Y_1=y_1)P(Y_2=y_2)$$
נחשב את ההסתברות של $P(Y_1=y_1)$

- $P(Y_1=2)=P(X_1=1\cap X_2=1)=P(X_1=1)P(X_2=1)=\frac{1}{2}\cdot \frac{2}{3}=\frac{1}{3}$
- $P(Y_1=1)=P(X_1=1\cap X_2=0)+P(X_1=0\cap X_2=1)=\frac{1}{2}\cdot \frac{1}{3}+\frac{1}{2}\cdot \frac{2}{3}=\frac{1}{6}+\frac{1}{3}=\frac{1}{2}$
- $P(Y_1=0)=P(X_1=0\cap X_2=0)=P(X_1=0)P(X_2=0)=\frac{1}{2}\cdot \frac{1}{3}=\frac{1}{6}$

נחשב את ההסתברות של $P(Y_2=y_2)$

- $P(Y_2=0)=P(X_1=1\cap X_2=1)+P(X_1=0\cap X_2=0)=P(X_1=1)P(X_2=1)+P(X_1=0)P(X_2=0)=$
	  $\frac{1}{2}\cdot \frac{2}{3}+\frac{1}{2}\cdot \frac{1}{3}=\frac{1}{3}+\frac{1}{6}=\frac{1}{2}$
- $P(Y_2=1)=P(X_1=1\cap X_2=0)=P(X_1=1)P(X_2=0)=\frac{1}{2}\cdot \frac{1}{3}=\frac{1}{6}$
- $P(Y_2=-1)=P(X_1=0\cap X_2=1)=P(X_1=0)P(X_2=1)=\frac{1}{2}\cdot \frac{2}{3}=\frac{1}{3}$

נשים לב כי $P(Y_1=1)P(Y_2=1)=\frac{1}{2}\cdot \frac{1}{6}=\frac{1}{12}$
אבל $p_{Y_1,Y_2}(1,1)=\frac{1}{6}$
ולכן $Y_1,Y_2$ **אינם בלתי תלויים**.
### ג. מקדם המתאם בין $Y_1,Y_2$.

נחשב את השונות של $Y_1$. נשתמש במשפט 7.3.1, ובהגדרות של שונות, שונות משותפת. ובשונות של סכום משתנים.
$$
\begin{align*} 
\text{Var}(Y_1)&=\text{Var}(X_{1}+X_{2}) \\
&=\text{Var}(X_{1})+\text{Var}(X_{2}) + 2\text{Cov}(X_{1},X_{2}) \\
&=\text{Var}(X_{1})+\text{Var}(X_{2}) +2(E(X_{1}X_{2})-E(X_{1})E(X_{2})) \\ 
&=\left( \frac{1}{2} \right)^2+\frac{2}{3}\cdot\frac{1}{3} + 2\cdot0 \\ 
&=\frac{17}{36} \\
\end{align*} 
$$

נחשב את השונות של $Y_2$. (בצורה דומה, מאחר ש- $\text{Var}(X_{1})=\text{Var}(-X_{1})$ (תכונה של פונקציה לינארית). וגם כי $X_1$ ו- $X_2$ בלתי תלויים. ולכן גם $X_1$ ו- $-X_2$ בלתי תלויים).
$$ 
\begin{align*} 
\text{Var}(Y_2)&=\text{Var}(X_{1}-X_{2}) \\
&=\text{Var}(X_{1})+\text{Var}(X_{2}) - 2\text{Cov}(X_{1},X_{2}) \\
&=\frac{17}{36} \\
\end{align*}
$$
נחשב את השונות המשותפת של $Y_1,Y_2$.

$$ 
\begin{align*}
\text{Cov}(Y_1,Y_2)&=\text{Cov}(X_{1}+X_{2},X_{1}-X_{2}) \\
&=\text{Cov}(X_{1},X_{1})+\text{Cov}(X_{1},-X_{2})+\text{Cov}(X_{2},X_{1})+\text{Cov}(X_{2},-X_{2}) \\
&=\text{Cov}(X_{1},X_{1})-\text{Cov}(X_{1},X_{2})+\text{Cov}(X_{2},X_{1})-\text{Cov}(X_{2},X_{2}) \\
&=\text{Cov}(X_{1},X_{1})-\text{Cov}(X_{1},X_{2})+\text{Cov}(X_{1},X_{2})-\text{Cov}(X_{2},X_{2}) \\
&=\text{Cov}(X_{1},X_{1})-\text{Cov}(X_{2},X_{2}) \\
&=\text{Var}(X_{1})-\text{Var}(X_{2}) \\
&=\frac{1}{4}-\frac{2}{9} \\
&=\frac{1}{36} \\
\end{align*}
$$

ואז נקבל את מקדם המתאם של $Y_1,Y_2$:

$$ 
\begin{align*} 
\rho(Y_1,Y_2)&=\frac{\text{Cov}(Y_1,Y_2)}{\sqrt{\text{Var}(Y_1)\cdot\text{Var}(Y_2)}} \\
&=\frac{\frac{1}{36}}{\sqrt{\frac{17}{36}\cdot\frac{17}{36}}} \\
&=\boxed{ \frac{1}{17} } \\
\end{align*}
$$


<div class="page-break"></div>

## שאלה 3

- $n\geq 4$

#### א. חשבו את $P(X_1=2,X_2=1)$

למשתנים $X_1,\ldots,X_n$ יש התפלגות משותפת מולטינומית, כאשר $r=n$, עם פרמטרים $p_1,\ldots,p_n$ כולם שווים. כלומר:
- $(X_1,\ldots,X_n)\sim \text{Mult}(n,p_1,\ldots,p_n)$ 
- $p_1=\ldots=p_n=\frac{1}{n}$
כעת נוכל להסתכל על כל התאים $3,4,\ldots,n$ כעל תא אחד, כאשר $Y=X_3ּּ+\ldots+X_n$ ייצג את מספר הכדורים בתא הזה. 

נסמן $p=1/n$ את ההסתברות של כדור להיכנס לתא $1$ או $2$.
וגם $q=(n-2)/n$ את ההסתברות של כדור להיכנס לתא $3,\ldots,n$.

כעת
$$(X_1,X_2,Y)\sim \text{Mult}(n,p,p,q)=\text{Mult}(n,\frac{1}{n},\frac{1}{n},\frac{n-2}{n})$$ 
לכן נחשב:

$$
\begin{align*}
P(X_1=2,X_2=1)&=P(X_1=2,X_2=1,Y=n-3)\\
&=\binom{n}{2,1,n-3}\cdot p^2\cdot p^1\cdot q^{n-3}\\
&=\frac{n!}{2!1!(n-3)!}\cdot \left( \frac{1}{n} \right)^2\cdot \left( \frac{1}{n} \right)^1\cdot \left( \frac{n-2}{n} \right)^{n-3}\\
&=\frac{n!}{2!1!(n-3)!}\cdot \left( \frac{1}{n} \right)^3\cdot \left( \frac{n-2}{n} \right)^{n-3}\\
&=\boxed{ \frac{1}{2}(n-2)^{n-2}(n-1)n^{1-n} }
\end{align*} 
$$ 
#### ב. חשבו את $P(X_4=1\mid X_3=2)$

בדרך דומה לסעיף א'.
$$
\begin{align*}
P(X_4=1\mid X_3=2)&=\frac{P(X_4=1,X_3=2)}{P(X_3=2)}\\ 
&=\frac{P(X_4=1,X_3=2,Y_{1}=n-3)}{P(X_3=2,Y_{2}=n-2)}\\
&=\frac{\frac{1}{2}(n-2)^{n-2}(n-1)n^{1-n}}{\binom{n}{2,n-2}\cdot \left( \frac{1}{n} \right)^2\cdot \left( \frac{n-1}{n} \right)^{n-2}}\\
&=\frac{\frac{1}{2}(n-2)^{n-2}(n-1)n^{1-n}}{\frac{1}{2}{n\cdot(n-1)}\cdot n^{-2}\cdot \left( \frac{n-1}{n} \right)^{n-2}}\\
&=\frac{(n-2)^{n-2}(n-1)n^{1-n}}{{n^{1-n}\cdot(n-1)^{n-1}}}\\
&=\frac{(n-2)^{n-2}}{{(n-1)^{n-2}}}\\
&=\boxed{ \left(\frac{n-2}{n-1}\right)^{n-2} }
\end{align*} 
$$

#### ג. חשבו את $\rho(X_1,X_2)$
 
$$X_1,X_{2}\sim \text{Bin}\left( n,\frac{1}{n} \right)$$
ולכן:
$$\text{Var}(X_{1})=\text{Var}(X_{2})=n\cdot\frac{1}{n}\cdot\left( 1-\frac{1}{n} \right)=1-\frac{1}{n}$$

כמו כן, לפי הנוסחה בדוגמה האחרונה בסוף פרק 7.3 בספר:
$$\text{Cov}(X_{1},X_{2})=-n\cdot\frac{1}{n}\cdot\frac{1}{n}=-\frac{1}{n}$$
לפי זה נקבל:
$$\rho(X_1,X_2)=\frac{\text{Cov}(X_1,X_2)}{\sqrt{\text{Var}(X_1)\cdot\text{Var}(X_2)}}=\frac{-\frac{1}{n}}{\sqrt{\left( 1-\frac{1}{n} \right)^2}}=\frac{-\frac{1}{n}}{1-\frac{1}{n}}=\boxed{ -\frac{1}{n-1} }$$



<div class="page-break"></div>

## שאלה 4

נתון:
- $X\sim \text{Geo}(p)$
- $Y\sim \text{Bin}(n,p)$ 
- $X,Y$ בלתי תלויים.
### א. מהי ההסתברות ש- $X+Y=3$

$$\begin{align*} 
P(X+Y=3)&=\sum_{k+m=3}P(X=k)P(Y=m)\\ 
&=\sum_{m=0}^{3}P(X=3-m)P(Y=m)\\ 
&=\sum_{m=0}^{2}P(X=3-m)P(Y=m)\\ 
&=\sum_{m=0}^{2}(1-p)^{3-m-1}p\cdot \binom{n}{m}p^m(1-p)^{n-m}\\
&=\sum_{m=0}^{2}\binom{n}{m}(1-p)^{2+n-2m}p^{m+1}\\
&=p(1-p)^{n+2}+p^2n(1-p)^{n}+p^3 \binom{n}{2} (1-p)^{n-2}\\
\end{align*}$$ 
(המעבר השלישי נובע מכך ש- $P(X=0)=0$).
### ב. מהי ההסתברות ש- $X-1=Y$ 

$$\begin{align*} 
P(X-1=Y)&=\sum_{k-1=m}P(X=k)P(Y=m) \\
&=\sum_{m=0}^{n}P(X=m+1)P(Y=m)\\
&=\sum_{m=0}^{n}(1-p)^{m}p\cdot \binom{n}{m}p^m(1-p)^{n-m}\\
&=(1-p)^{n}p\sum_{m=0}^{n}\binom{n}{m}p^m \\
&=(1-p)^{n}p(1+p)^{n}\\
&=p((1-p)(1+p))^{n}\\
&=p(1-p^2)^{n}\\ 
\end{align*}$$


(המעבר השני נובע מכך ש- $P(Y=m)=0$ עבור $m>n$. כמו כן השתמשתי בנוסחת הבינום $\sum_{k=0}^{n}\binom{n}{k}x^k=(1+x)^{n}$).  

