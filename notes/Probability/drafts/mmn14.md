 `= date(today)`
<h5 style="text-align: center;">הסתברות: ממ"ן 14</h5>
<p style="text-align: center;">עדיאל בן משה</p>
# שאלה 1

נתון:
- מספר הקונים המגיעים ביום ראשון:  $N\sim \text{Poisson}(\lambda=1000)$  
- מספר הבקבוקים שממחזר הקונה ה- $i$ ביום ראשון:  $X_i=Y_i-1$ כאשר $Y_i\sim \text{Geo}(p=0.2)$.
- המשתנים המקריים $N$ ו- $X_i$ כולם בלתי תלויים.

אם כן מספר הבקבוקים הממוחזרים ביום ראשון: $\displaystyle X=\sum_{i=1}^{N}X_i$.

נשתמש בנוסחה מהדף נוסחאות של תוחלת/שונות של סכום מקרי:  
### א. חשבו את $E[X]$.
$$E[X]=E\left[\sum_{i=1}^{N}X_i\right]=E[N]E[X_1]=\lambda (E[Y_1]-1)=\lambda \left(\frac{1}{p}-1\right)=1000\left(\frac{1}{0.2}-1\right)=\boxed{ 4000 }$$
### ב. חשבו את $\text{Var}(X)$.

$$
\begin{align*} 
\text{Var}(X)=E[N]\text{Var}(X_1)+E[X_1]^2\text{Var}(N)&=1000\left(\frac{1-p}{p^2}\right)+\left( \frac{1}{p}-1 \right)^2 \cdot 1000 \\
&=1000\left(\frac{1-0.2}{0.2^2}\right)+\left( \frac{1}{0.2}-1 \right)^2 \cdot 1000 \\
&=1000\left(\frac{0.8}{0.04}\right)+\left( 5-1 \right)^2 \cdot 1000 \\
&=\boxed{ 36000 } 
\end{align*} 
$$

# שאלה 2

הפונקציה יוצרת המומנטים של המשתנה המקרי $X$ קיימת לכל $t$ ממשי ונתונה על ידי:

$$M_X(t)=\left( \frac{1+e^{t-\theta}}{1+e^{-\theta}} \right)^{3n},\quad\quad-\infty<\theta<\infty,\quad n=1,2,\ldots$$ 
### א. חשבו את $E[X]$ מתוך פונקציית יוצרת המומנטים. 

$$M_{X}^{(n)}(0)=E[X^n]$$


$$
\begin{align*} 
M_{X}'(t)=E[X^1]=\frac{d}{dt}M_X(t)&=\frac{d}{dt}\left( \frac{1+e^{t-\theta}}{1+e^{-\theta}} \right)^{3n} \\ 
&=3n\left( \frac{1+e^{t-\theta}}{1+e^{-\theta}} \right)^{3n-1} \cdot \frac{d}{dt}\left( \frac{1+e^{t-\theta}}{1+e^{-\theta}} \right) \\
&=3n\left( \frac{1+e^{t-\theta}}{1+e^{-\theta}} \right)^{3n-1} \cdot \frac{\frac{d}{dt}\left( 1+e^{t-\theta}\right) \cdot(1+e^{-\theta}) -  \left( 1+e^{t-\theta}\right) \cdot\frac{d}{dt}(1+e^{-\theta})}{(1+e^{\theta})^2} \\
\end{align*} 
$$


### ב. זהו את ההתפלגות של $X$, מהי $E[X]$ על סמך ההתפלגות? השוו לסעיף א.


# שאלה 3

בקופסה מונחים $6$ מטבעות הממוספרים מ-$1$ עד $6$. ההסתברות לקבל $\text{H}$ במטבע ה-$i$ היא $\frac{1}{i}$ לכל $i=1,2,\ldots,6$.

מטילים קובייה תקינה ומוציאים מהקופסה את המטבע שמספרו זהה לתוצאה שהתקבלה בקובייה.
מטילים את המטבע שהוצא מהקופסה עד שמתקבל ה- $\text{H}$ הראשון. 

נסמן ב- $X$ את התוצאה שהתקבלה בקובייה, וב- $Y$ את מספר הפעמים שהמטבע הוטל עד (כולל) ההטלה שהתקבל ה $\text{H}$ הראשון.

### א. חשבו את $\text{Var}[Y\mid X=i]$

### ב. חשבו את $E[Y]$ ו- $\text{Var}[Y]$

### ג. יהי $A$ המאורע: $X$ הוא זוגי. חשבו את $P(Y\ge 5 \mid A)$


