

- A function $F(t)$ is said to be **periodic** if there exists a nonzero number $T$ such that $F(t+T)=F(t)$ for all $t$ in the domain of $F$.
	- A nonzero constant $T$ for which this is the case is called a **period** of the function
	- The smallest such $T$ (if it exists) is called the **fundamental period** (or **the period**) of the function
- If $F(t)$ is periodic with period $T$, then: 
	- $\forall n \in \mathbb{N}, F(t+nT)=F(t)$
	- The function $G(t)=F(at)$ is periodic with period $\frac{T}{a}$ (for any nonzero constant $a$)
	- The **amplitude** of $F$ is $A=\frac{1}{2}(\text{max}(F)-\text{min}(F))$ 
	- When $F$ is a function of time $t$, then:
		- The **period** $T$ is the time it takes to complete one full cycle
		- The **frequency** of $F$ is $f=\frac{1}{T}$ (in $\mathsf{s^{-1}}= \mathsf{Hz}$)
		- The **angular frequency** of $F$ is $\omega=2\pi f$ (in $\mathsf{rad\cdot s^{-1}}$)
	- $\displaystyle F(t)=\frac{A_{0}}{2}+\sum_{n=1}^{\infty} \left[ A_n \sin(2\pi nft) +  B_n \cos(2\pi nft)\right]$
		- $f$ is the **fundamental frequency** (or **fundamental harmonic**) of $F(t)$
			- $nf$ are the **harmonics** (or **overtones**) of $F(t)$
		- $A_n$ and $B_n$ are the sine and cosine amplitudes of the $n$th harmonic
			- $A_n=\frac{2}{T}\int_{0}^{T} F(t)\sin(2\pi nft) dt$
			- $B_n=\frac{2}{T}\int_{0}^{T} F(t)\cos(2\pi nft) dt$
		- $c=\frac{2}{T}\int_{0}^{T} F(t) dt$


- A **sine wave** (or **sinusoid**) (symbol: ∿) is any function of the form $y(t)=A\sin(\omega t + \phi)$
	- A sine wave is a periodic function with period $T=\frac{2\pi}{\omega}$, amplitude $A$, and phase shift $\phi$.
	- $\displaystyle y(x,t)=A\sin\left(\frac{2\pi}{\lambda}x-\omega t+\phi\right)=A\sin\left(\frac{2\pi}{\lambda}(x-vt)+\phi\right)$
	- is the equation of a traveling wave (to the right. if it is to the left, the minus sign is replaced by a plus sign)
		- $x$ is the position of the wave we are considering
		- $vt$ is the distance the wave has traveled from the origin at time $t$
