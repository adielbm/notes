- $\displaystyle I=\frac{dq}{dt}$ is the **electric current** (in $\mathrm{A}$) of a circuit in which a charge $q$ (in $\mathrm{C}$) passes through some surface in the circuit in an interval of time $t$ (in $\mathrm{s}$)
	- The SI unit of current is the **ampere** (abbreviated $\mathrm{amp}$ or $\mathrm{A}$), defined as $\mathrm{1\ A = 1\ C/s}$

- $\displaystyle\mathbf{\vec{J}}=\frac{I}{A}\hat{n}$ is the **current density** (in $\mathrm{A/m^2}$)
	- $A$ is the cross-sectional area (in $\mathrm{m^2}$)
	- $\hat{n}$ is a unit vector normal to the cross-sectional area

- A current is **positive** if it flows from the positive terminal of a voltage source to the negative terminal

## Conventional current

- The conventional direction of (possitve) current, also known as **conventional current**, is arbitrarily defined to be the direction in which positive charges would flow

## Alternating current (AC)

$$v(t) = V_m \cos(\omega t + \phi), \quad i(t) = I_m \cos(\omega t)$$
- $v(t)$ and $i(t)$ are the instantaneous voltage and current at time $t$
- $V_m$ and $I_m$ are the **peak** voltage and current
- $\omega$ is the angular frequency (in radians per second)
- $\phi$ is the phase angle between the voltage and current
- $I_{\text{rms}}=\frac{I_m}{\sqrt{2}}$ and $V_{\text{rms}}=\frac{V_m}{\sqrt{2}}$ are the [[Means#Continuous Functions|rms]] values of the current and voltage
- The phasor representation of the voltage and current are given by:
	- $\tilde{V}=V_m \angle \phi_v$
	- $\tilde{I}=I_m \angle \phi_i$
- $I_{\text{rav}}=\frac{2}{\pi}I_m$ is the **rectified average** current
- $V_m=I_m Z$


### RLC series circuit


- (**inductive circuit**) $X_L>X_C$, then $\phi>0$ and the circuit is inductive
	- (**pure inductor**) $R=0$, $X_C=0$, then $Z=X_L$ and $\phi=\frac{\pi}{2}$
- (**capacitive circuit**) $X_L<X_C$, then $\phi<0$ and the circuit is capacitive
	- (**pure capacitor**) $R=0$, $X_L=0$, then $Z=X_C$ and $\phi=-\frac{\pi}{2}$
- (**resistive circuit**) $X_L=X_C$, then $\phi=0$ and the circuit is resistive
	- (**pure resistor**) $X_L=0$, $X_C=0$, then $Z=R$ and $\phi=0$
#### Resonance 

- When $X_L\approx X_C$, which is also $\omega \approx \omega_0$, the circuit is said to be in **resonance**
	- $\omega_0 = \frac{1}{\sqrt{LC}}$ is the **resonant angular frequency**
	- $f_0= \frac{\omega_0}{2\pi}$ is the **resonant frequency**
	- At resonance, $Z$ is minimum and equal to $R$, and the current is maximum and in phase with the voltage
### Power 

- $p(t)=v(t)i(t)$
- $P_{avg}=\overline{p(t)}=\frac{1}{2}V_m I_m \cos \phi = V_{\text{rms}} I_{\text{rms}} \cos \phi$ is the average power delivered to the circuit
	- $\cos \phi$ is the **power factor**
	- If $\phi=0$, then $P_{avg}=V_{\text{rms}} I_{\text{rms}}$ (maximum power transfer)
	- If $\phi=\pm \frac{\pi}{2}$, then $P_{avg}=0$ (no power transfer)

### Transformers 

- $\frac{V_2}{V_1}=\frac{N_2}{N_1}$
	- $V_1$ is the **primary voltage** (the supply voltage) 
	- $V_2$ is the **secondary voltage** (the output voltage)
	- $N_1$ and $N_2$ are the number of turns in the primary and secondary coils
- $V_1I_1=V_2I_2$
	- $I_1$ is the **primary current**
	- $I_2$ is the **secondary current**