> clockwise is negative by convention 

### Angular Velocity & Acceleration

- $\displaystyle\vec{\omega} = \frac{d\vec{\theta}}{dt}$ is the **angular velocity** (in $\mathsf{rad/s}$)
- $\displaystyle\vec{\alpha} = \frac{d\vec{\omega}}{dt}$ is the **angular acceleration** (in $\mathsf{rad/s^2}$)
- For a point $P$ at a distance $r$ from the axis of rotation
	- $\vec{\mathbf{a}}=\vec{\mathbf{a}_\text{t}}+\vec{\mathbf{a}_\text{c}}$
	- $\displaystyle a = \sqrt{a_\text{t}^2 + a_\text{c}^2}$ 
		- $\displaystyle a_\text{t} = r\alpha$ is the **tangential acceleration** (in $\mathsf{m/s^2}$)
		- $\displaystyle a_\text{c} = \frac{v^2}{r} = \frac{r\omega^2}{r} = r\omega^2$ is the **centripetal acceleration** (in $\mathsf{m/s^2}$)
		- $\displaystyle v = r\omega$ is the **tangential velocity** (in $\mathsf{m/s}$)
- For constant angular acceleration
  - $\theta = \theta_{0} + \omega_{0}t + \frac{1}{2}\alpha t^2$ is the angular position
  - $\omega = \omega_{0} + \alpha t$ is the angular velocity
  - $\omega^2 = \omega_{0}^2 + 2\alpha(\theta - \theta_{0})$ is the angular velocity as a function of position

### Moment of Inertia

- The **moment of inertia** (more accurately _rotational inertia_) of a rigid body relative to a given axis of rotation is defined as: 
	- The ratio of the torque applied to the body to the resulting angular acceleration about the axis of rotation: $$I = \frac{\tau}{\alpha}$$
	- moment of inertia I = angular momentum L / angular velocity ω

### Angular Momentum

- $\vec{\mathbf{L}} = \vec{\mathbf{r}} \times \vec{\mathbf{p}}$ is the **angular momentum** (or **moment of momentum**) vector (in $\mathsf{kg\cdot m^2/s}$)
	- $\vec{\mathbf{r}}$ is the position vector (from the pivot point to the point of application of the force) (in $\mathsf{m}$)
	- $\vec{\mathbf{p}}$ is the momentum vector (in $\mathsf{kg\cdot m/s}$)
- $\vec{\mathbf{L}} = I\vec{\mathbf{\omega}}$ is the angular momentum (in $\mathsf{kg\cdot m^2/s}$)
	- $I$ is the moment of inertia (in $\mathsf{kg\cdot m^2}$)
	- $\vec{\mathbf{\omega}}$ is the angular velocity (in $\mathsf{rad/s}$)
- #todo 
	- [(Bozeman Science) Angular Momentum](https://www.youtube.com/watch?v=MULe4xv3lVk&list=PLllVwaZQkS2rxqMXTH-cdE0LIX9Zi_oS1&index=54)
	- [(Bozeman Science) Conservation of Angular Momentum](https://www.youtube.com/watch?v=hgcudPr73LU)
	- Giancoli, 8–8 Angular Momentum and Its Conservation

### Torque (Moment of Force)

![[Torque.svg|200]]

- The **axis of rotation** (or **pivot point**) $O$ is the point about which the object rotates
- $\vec{\mathbf{\tau}} = \vec{\mathbf{r}} \times \vec{\mathbf{F}}$ is the **torque** or **moment of force** vector (in $\mathsf{N\cdot m}$) (cross product)
- $\vec{\mathbf{r}}$ is the position vector (from the pivot point to the point of application of the force) (in $\mathsf{m}$)
- $\vec{\mathbf{F}}$ is the force vector (in $\mathsf{N}$)
- $\theta$ is the angle between $\vec{\mathbf{r}}$ and $\vec{\mathbf{F}}$
- $\tau,r,F$ are the magnitudes of the vectors
- $\tau = rF\sin\theta=rF_{\perp}=r_{\perp}F$ is the magnitude of the torque
	- $F_{\perp}=F\sin\theta$ is the component of the force perpendicular to the position vector
	- The **lever arm** (or **moment arm**) $r_{\perp}=r\sin\theta=\frac{|\mathbf{r} \times \mathbf{F}|}{|\mathbf{F}|}$ is the perpendicular distance from the axis of rotation to the line along which the force acts
- $\alpha = \frac{\tau}{I}$ is the angular acceleration (in $\mathsf{rad/s^2}$)



- #todo  https://youtu.be/5Zrphnd_0VI?list=PLllVwaZQkS2rxqMXTH-cdE0LIX9Zi_oS1
	- 

### Power


- $\displaystyle P = \tau \times \omega$ is the **power** (in $\mathsf{W}$)
	- $\tau$ is the torque (in $\mathsf{N\cdot m}$)
	- $\omega$ is the angular velocity (in $\mathsf{rad/s}$) 


