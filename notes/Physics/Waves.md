$$\displaystyle f=\frac{1}{T}=\frac{\omega}{2\pi}= \frac{v}{\lambda}$$
- $f$ the **[[Units#frequency|frequency]]** of the wave (in $\mathrm{Hz}$)
- $\omega$ is the **angular frequency** of the wave (in $\mathrm{rad/s}$)
- $T$ is the **period** of the wave (in $\mathrm{s}$)
- $v$ is the **wave speed** of the wave (in $\mathrm{m/s}$)
- $\lambda$ is the **wavelength** of the wave (in $\mathrm{m}$)
- $k=\frac{2\pi}{\lambda}$ is the **wavenumber** (in $\mathrm{rad/m}$)

##### Energy Transport

- ($I$ is the wave intensity, the power transported per unit area perpendicular to the direction of wave propagation)
- $I\propto A^2$ (i.e. the intensity is proportional to the square of the amplitude)
- $\displaystyle I\propto \frac{1}{r^2}$



# Waveform
### Sine wave

- A **sine wave** (or **sinusoidal wave** or **sinusoid**) (symbol: ∿) is any function of the form $y(t)=A\sin(\omega t + \phi)$
	- A sine wave is a [[Periodic Function|periodic function]] with period $T=\frac{2\pi}{\omega}$, amplitude $A$, and phase shift $\phi$.
	- $\displaystyle y(x,t)=A\sin\left(\frac{2\pi}{\lambda}x-\omega t+\phi\right)=A\sin\left(\frac{2\pi}{\lambda}(x-vt)+\phi\right)$ is the equation of a traveling wave (to the right. if it is to the left, the minus sign is replaced by a plus sign)
		- $x$ is the position of the wave we are considering
		- $vt$ is the distance the wave has traveled from the origin at time $t$

- A **harmonic** is a sine wave whose frequency is an integer multiple of the fundamental frequency of a periodic wave. 
- The **phasor** of a sinusoid $y(t)=A \cos (\omega t + \phi)=\Re\{A e^{i(\omega t + \phi)}\}$ is a complex number $A e^{i\phi}$ (also denoted as $A \angle \phi$)
# Transverse and longitudinal waves

### Transverse wave 

![250](https://upload.wikimedia.org/wikipedia/commons/6/6d/Onde_cisaillement_impulsion_1d_30_petit.gif)

- $v=\sqrt{\frac{T}{\mu}}$ is the wave speed of a transverse wave traveling along a stretched string of tension $T$ (in $\mathrm{N}$) and linear mass density $\mu$ (in $\mathrm{kg/m}$)

### Longitudinal wave

![250](https://upload.wikimedia.org/wikipedia/commons/6/62/Onde_compression_impulsion_1d_30_petit.gif)

- $v=\sqrt{\frac{E}{\rho}}$ 
- $v=\sqrt{\frac{B}{\rho}}$



# Standing and traveling waves

### Standing wave
$$y(x,t) = 2 A \sin\!\left(kx\right)\cos(\omega t)$$



- $\displaystyle v=\sqrt{\frac{F_\text{T}}{\mu}}$
- $\displaystyle\mu=\frac{m}{\ell}$ 
- $\displaystyle f_n=n\frac{v}{2\ell}=\frac{v}{\lambda_n}=nf_1$ is the frequency of the $n$th harmonic
	- $n$ is the harmonic number
	- $\ell$ is the length of the string
	- $\lambda_n$ is the wavelength of the $n$th harmonic


![[String.svg|200]]

### Traveling wave

- (right-moving) $y(x,t) = A \sin(kx - \omega t + \varphi)$ 
- (left-moving) $y(x,t) = A \sin(kx + \omega t + \varphi)$


# Oscillations
 




- The **natural frequency** $f_{0}$ of an oscillating system is the frequency at which the system oscillates when it is set in motion and left undisturbed.
- When the natural frequency and the driving frequency are the same or very close, the system exhibits **resonance**, which results in large amplitude oscillations. (which also depends on the damping)
	- At resonance, relatively small forces are required to obtain and maintain large amplitude oscillations.




- In the presence of a sinusoidal external force, a system may exhibit resonance.
- Resonance occurs when an external force is exerted at the natural frequency of an oscillating system.



##### draft

https://www.youtube.com/watch?v=-j8PzkZ70Lg

- $e^{st} = e^{(\sigma + i\omega)t} = e^{\sigma t} e^{i\omega t}$
	- $s=\sigma + i\omega$
	- $e^{\sigma t}$
		- $\sigma$ is representing exponential growth/decay rate
			- $\sigma > 0$ (exponential growth)
			- $\sigma < 0$ (exponential decay)
			- $\sigma = 0$ (constant amplitude)
	- $e^{i\omega t}$
		- $\omega = 2\pi f$ is representing oscillation (angular frequency)
		- $\omega t$
	- $\zeta=\frac{\sigma}{\omega}$ is the damping ratio
		- $\zeta < 1$ (underdamped)
		- $\zeta = 1$ (critically damped)
		- $\zeta > 1$ (overdamped)
		- $\zeta = 0$ (undamped)
	- $\Re \{e^{st}\} = e^{\sigma t} \cos(\omega t)$


# Mechanical waves

- [[sound|acoustic waves]]

