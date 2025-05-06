ממ"ן 12 
הסתברות
2025ב
___
## שאלה 1

- The distribution of the height of a certain plant species is normal with a mean of 30.
- $P(19.15\leq X\leq 40.85)=0.97$

- (a) what is the SD of the distribution?
- (b) find $P(X>33.89)$
- (c) find $P(X>33\mid X>25)$
- (d) what is the height such that with probability 5%, a plant of this species will be shorter than it?

note: make linear interpolation where necessary.

(בשאלה זו נעבוד בעיקר לפי פרק 5.4, בפרט לפי הטבלה של $\Phi$. השתמשתי בנוסחה 5.4.3 $\Phi(-x)=1-\Phi(x)$)
#### א.

נעביר להתפלגות נורמלית סטנדרטית:

נגדיר משתנה $Z=\frac{X-\mu}{\sigma}$

$$P(19.15\leq X\leq 40.85)=0.97\implies$$
$$P(\mu-a\leq X\leq \mu+a)=0.97$$

( כאשר $\mu-a=19.15,\mu+a=40.85$, ולכן $a=10.85$ )

$$\begin{align*}
P\left( -\frac{10.85}{\sigma}\leq Z\leq \frac{10.85}{\sigma} \right) &= \Phi\left( \frac{10.85}{\sigma} \right)-\Phi\left( -\frac{10.85}{\sigma} \right) \\
  &= \Phi\left( \frac{10.85}{\sigma} \right)-\left( 1-\Phi\left( \frac{10.85}{\sigma} \right) \right) \\
  &= 2\cdot\Phi\left( \frac{10.85}{\sigma} \right)-1 = 0.97 \\
  \\
&\implies \Phi\left( \frac{10.85}{\sigma} \right)  = 0.985 \\ 
&\implies2.17=\frac{10.85}{\sigma} \\
&\implies\sigma=\frac{10.85}{2.17}=5 \\
&\implies \boxed{\sigma^2=25}

\end{align*}$$ 
#### ב.

$$\begin{align*}
P(X>33.89) &= P\left( \frac{33.89-50}{5}<\frac{X-30}{5} \right) \\
&= P(0.778<Z) \\
&= 1-P(Z<0.778) \\
&= 1-\Phi(0.778) \\
&\approx 1-0.7823 \\
&= 0.2177
\end{align*}$$

(ביצעתי אינטרפולציה $y=0.7794+(0.78-0.77)\cdot \frac{0.7823-0.7794}{0.78-0.77}=0.7823$)
#### ג.

$$\begin{align*}
P(X>30|X>25) &= \frac{P(X>30\cap X>25)}{P(X>25)} \\
&= \frac{P(X>30)}{P(X>25)} \\
&= \frac{1-P(X<30)}{1-P(X<25)} \\
&= \frac{1-P(Z<\frac{30-30}{5})}{1-P(Z<\frac{25-30}{5})} \\
&= \frac{1-P(Z<0)}{1-P(Z<-1)} \\
&= \frac{1-\Phi(0)}{1-\Phi(-1)} \\
&= \frac{1-\Phi(0)}{\Phi(1))} \\
&= \frac{0.5}{0.8413}\approx \boxed{0.594} \\

\end{align*}$$

#### ד.
$$\displaystyle P(X<h)=P\left( Z<\frac{h-30}{5} \right)=0.05$$
$$\displaystyle \Phi\left( \frac{h-30}{5} \right)=0.05$$
$$\displaystyle h=30+5\cdot \Phi^{-1}(0.05)$$
$$\displaystyle h=30+5\cdot (-\Phi^{-1}(0.95))$$

נערוך אינטרפולציה:
$\Phi(1.64)=0.9495$
$\Phi(1.65)=0.9505$
$1.64+\frac{0.95-0.9495}{0.9505-0.9495}(1.65-1.64)=1.645$ 

לכן
$$\displaystyle h=30+5\cdot (-1.645)=21.775$$



# שאלה 2
פונק' הצפיפות של $X$ היא:   
$f(x)=ke^{-x}$ for $-1<x<0$.
#### א. מצא את $k$.

$$\displaystyle \int_{-1}^{0} e^{-x}dx=e^{-x}\bigg|_{-1}^{0}=e^{-0}-e^{1}=1-e$$ ($u=-x,\quad  du=-dx,\quad x=0\Rightarrow u=0,\quad x=-1\Rightarrow u=1$) 
$$\displaystyle k\int_{-1}^{0} e^{-x}dx=k(e-1)=1$$
$$\displaystyle k=\frac{1}{e-1}$$ 
#### ב. מצא את $E[X]$.
לפי א', $f(x)=\frac{1}{e-1}e^{-x}$ 

$$\displaystyle E[X]=\int_{-1}^{0} x\cdot f(x)dx=\frac{1}{e-1}\int_{-1}^{0} x\cdot e^{-x}dx=-\frac{1}{e-1}$$ #todo
#### ג. יהי $Y=X^2$. מצא את פונ' הצפיפות של $Y$. 
(נעבוד לפי משפט 5.7.1)
$x=y^2,\quad x\in [-1, 0]\implies  x=-\sqrt{y}$ 
$$f_{Y}(y)=f_{X}(-\sqrt{y})\cdot\left| \frac{d}{dy}(-\sqrt{ y })  \right|=\frac{e^{\sqrt{y}}}{e-1}\cdot\frac{1}{2\sqrt{y}}$$   
#### ד. מצא את $F_X(a)$.  


$\displaystyle\int_{-1}^{a} e^{-x}dx=\int_{1}^{-a} -e^{u}du=\int_{-a}^{1} e^{u}du=\left[ e^{u} \right]_{-a}^{1} = e^{1}-e^{-a}$ 

($u=-x,\quad du=-dx,\quad x=a\Rightarrow u=-a,\quad x=-1\Rightarrow u=1$) 

$\displaystyle F_X(a)=\int_{-1}^{a} f(x)dx=\frac{1}{e-1}\int_{-1}^{a} e^{-x}dx=\frac{1}{e-1}\left( e^{1}-e^{-a} \right)$ 
# שאלה 3

נתון:
$$f_X(x)=\begin{cases} 0.5\cdot x & \text{if } 0\leq x < 1 \\ 0.5 & \text{if } 1\leq x < 2 \\ 0.5\cdot (3-x) & \text{if } 2\leq x < 3 \\ 0 & \text{otherwise} \end{cases}$$

צריך לחשב את:
$$P(X<2.5\mid X\geq 1)$$
נחשב קודם,
$$
\begin{align*}
P(X<2.5\cap X\geq 1) 
&= \int _{1}^{2.5} f(x) dx \\
&= \int _{1}^{2} 0.5  \,dx + \int _{2}^{2.5} 0.5\cdot (3-x)\, dx \\
&=  0.5  + \int _{2}^{2.5} \left( 1.5 -\frac{x}{2} \right) \, dx \\
&=  0.5  + 0.75 - \frac{1}{2}\cdot 1.125 \\
&= 0.6875
\end{align*}
$$

כמו כן, 
$$
P(X< 1)= \int _{0}^{1} f(x) dx = \int _{0}^{1} 0.5\cdot x \,dx = \frac{1}{2}\cdot \frac{1}{2} = \frac{1}{4}
$$

ולכן:

$$
\begin{align*}
P(X<1.5\mid X\geq 1)
&= \frac{P(X<2.5\cap X> 1)}{P(X> 1)} \\
&= \frac{0.6875}{1-P(X< 1)} \\
&= \frac{0.6875}{\frac{3}{4}} \\
&= \frac{11}{12}
\end{align*} 
$$

נתון:  $Y=\frac{1}{X}$
נחשב את $E[Y]$
לפי טענה 2.1
$$
\begin{align*}
E[Y]=E\left[\frac{1}{X}\right]
&= \int_{0}^{1} \frac{1}{x} f(x) dx + \int_{1}^{2} \frac{1}{x} f(x) dx + \int_{2}^{3} \frac{1}{x} f(x) dx \\
&= 0.5 + 0.5\int_{1}^{2} \frac{1}{x}  \,dx + 0.5\int_{2}^{3} \frac{1}{x} \cdot (3-x) \,dx \\
&= 0.5 + 0.5\left( \ln(2) - \ln(1) \right) + 1.5\int_{2}^{3}  \frac{1}{x}  \,dx- 0.5 \int_{2}^{3}  1  \,dx \\
&= \frac{3}{2}\ln(3)-\frac{1}{2}\ln(2)  
\end{align*} 
$$
# שאלה 4
