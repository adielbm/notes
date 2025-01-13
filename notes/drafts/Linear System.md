- A **linear system** is a system where the output is directly proportional to the input. 
	- **Additivity (Superposition)**: If $x(t)=x_1(t)+x_2(t)$, then $y(t)=y_1(t)+y_2(t)$
	- **Homogeneity**: If $x(t)=ax_1(t)$, then $y(t)=ay_1(t)$
- A **linear time-invariant system (LTI system)** is a system that is:
	- **Linear**: Satisfies the properties of additivity and homogeneity
	- **Time-invariant**: If an input $x(t)$ produces an output $y(t)$, then a time-shifted input $x(t-t_0)$ produces a time-shifted output $y(t-t_0)$
- Convolution
	- A **discrete convolution** is a mathematical operation on two functions $f,g:\mathbb{Z}\to \mathbb{C}$ that produces a third function $f*g:\mathbb{Z}\to \mathbb{C}$ and is defined as $(f*g)(n)=\displaystyle \sum _{m\in \mathbb{Z}}f(m)g(n-m)$
	- A **continuous convolution** is a mathematical operation on two functions $f,g:\mathbb{R}\to \mathbb{C}$ that produces a third function $f*g:\mathbb{R}\to \mathbb{C}$ and is defined as $(f*g)(t)=\displaystyle \int _{-\infty}^{\infty}f(\tau)g(t-\tau)d\tau$


- Example:
	- $s(t)$ is an analog signal (air pressure that created by a speaker)
	- $a(t)$ is a discrete sample of $s(t)$ (a digital signal)
	- $b(t)$ is the impulse response of the system
	- $\delta(t)$ is the Dirac delta function
	- $c=a*b$ is the convolution of the discrete signal $a$ and the impulse response $b$, which represents the air pressure $c(t)$ at point $A$
		- $c(t)=\displaystyle \sum _{m\in \mathbb{Z}}a(m)b(t-m)$
	- From the discrete sampling of the signal $s(t)$, the signal $a(t)$ is obtained, which we wish to process to obtain the signal $c(t)$, representing the air pressure at point $A$ (which is placed at some distance from the speaker)
		- The time it takes for the sound to travel from the speaker to the point $A$ is $\textsf{1 ms}$, and the air pressure is $\textsf{3/4}$ of the original pressure
		- In addition, there is a wall that reflects an echo such that:
			- After $\textsf{2 ms}$, we get an echo $\textsf{1/2}$ of the original pressure 
			- After $\textsf{3 ms}$, we get an echo $\textsf{1/4}$ of the original pressure
	- $S$ is a system that processes the singal $c$ from the singal $a$
	- If $S(\delta)=b$, then $S(a)=a*b$

