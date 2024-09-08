# Newton's Laws of Motion

1. A body remains at rest, or in motion at a constant speed in a straight line, except insofar as it is acted upon by a force.
2. The acceleration of a body is directly proportional to the net force acting on it, and inversely proportional to its mass. $$F=ma$$
3. For every action, there is an equal and opposite reaction. $$F_{1} = -F_{2}$$

# Motion in One Dimension

### Constant Acceleration

- $t$ is the time duration
- $v_{0}$ is the initial velocity
- $x_{0}$ is the initial position
- $a$ is the acceleration
- $x = x_{0} + v_{0}t + \frac{1}{2}at^2$
- $\displaystyle v = \frac{dx}{dt} = v_{0} + at$ (velocity as a function of time)
- $\displaystyle t = \frac{v - v_{0}}{a}$
- $\displaystyle x -x_{0} = v_{0}t + \frac{1}{2}at^2=v_{0}\left[\frac{v - v_{0}}{a}\right] + \frac{1}{2}a\left[\frac{v - v_{0}}{a}\right]^2=\frac{v^2 - v_{0}^2}{2a}$
- $v^2 = v_{0}^2 + 2a(x - x_{0})$
- $v= \sqrt{v_{0}^2 + 2a(x - x_{0})}$ (velocity as a function of position)

# Motion in Multiple Dimensions

### Projectile Motion

- $\vec{F}_{\text{air}} = 0$ (neglecting air resistance)
- $\vec{F}_{\text{gravity}} = m\vec{g}$ (force due to gravity)
- $\theta$ is the angle of projection
- $\vec{v}_{0}$ is the initial velocity
	- $v_{0x} = v_{0}\cos(\theta)$ is the initial horizontal velocity
	- $v_{0y} = v_{0}\sin(\theta)$ is the initial vertical velocity
- $\vec{r}_{0}$ is the initial position
	- $x_{0}$ is the initial horizontal position (most often $0$)
	- $y_{0}$ is the initial vertical position
- $\vec{v}$ is the velocity
	- $v_{x}= v_{0}\cos(\theta)$ is the horizontal velocity (constant as the initial velocity, no horizontal acceleration)
	- $v_{y}= v_{0}\sin(\theta) - gt$ is the vertical velocity
- $\vec{r}$ is the position
	- $x = x_{0} + v_{0}\cos(\theta)t$ is the horizontal position
	- $y = y_{0} + v_{0}\sin(\theta)t - \frac{1}{2}gt^2$ is the vertical position
- $T=\frac{2v_{0}\sin(\theta)}{g}$ is the time of flight (time to reach the ground)
- $y_{\text{max}} = y_{0} + \frac{v_{0}^2\sin^2(\theta)}{2g}$ is the maximum height
- $R=x_{0} + v_{0}\cos(\theta)T=x_{0} + \frac{v_{0}^2\sin(2\theta)}{g}$ is the range (horizontal distance)

# Simple Harmonic Motion

- A displacement function $x(t)$ is said to describe **simple harmonic motion** iff it satisfies the differential equation $\displaystyle \frac{d^2x}{dt^2} = -\omega^2x$
- $x(t) = A\cos(\omega t + \phi)$ is the displacement from the equilibrium position
	- $\phi$ is the phase angle (in $\mathsf{rad}$) 
	- $A$ is the [[Periodic Functions|amplitude]] (the maximum displacement from the equilibrium)
	- $\omega$ is the angular frequency (in $\mathsf{s^{-1}}$)
- $F=-kx$ is the restoring force (Hooke's Law)
- $k$ is the spring constant (related to the stiffness of the spring) (in $\mathsf{N\cdot m^{-1}}$)
- $\displaystyle T = \frac{2\pi}{\omega}$ is the [[Periodic Functions|period]] (in $\mathsf{s}$)
- $v=\omega\sqrt{A^2 - x^2}$ is the velocity as a function of position
- $v_{\text{max}} = \omega A$ is the maximum velocity
- $m$ is the mass of the **oscillating body** (in $\mathsf{kg}$) 
- $E=\frac{1}{2}kx^2 + \frac{1}{2}mv^2$ is the total mechanical energy (in $\mathsf{J}$)
	- $\frac{1}{2}mv^2$ is the [[Energy#Kinetic Energy|kinetic energy]] (in $\mathsf{J}$) (it's total energy in the moment of equilibrium, $x=0$)
	- $\frac{1}{2}kx^2$ is the elastic potential energy (in $\mathsf{J}$) (it's total energy in the monent of turning point, $v=0$)

### Mass-Spring System

- $T=2\pi \sqrt{ \frac{m}{k}}$
- $v_{\text{max}} = A \sqrt{\frac{k}{m}}$
- $\displaystyle v_{\text{max}} = \pm A\sqrt{\frac{k}{m}}$ is the maximum velocity

### Pendulum 

- The oscillating body is the **pendulum bob**
- $T=2\pi \sqrt{ \frac{L}{g} }$
- $L$ is the length of the pendulum
- $g$ is the acceleration due to gravity
- $\frac{mg}{L}$ 