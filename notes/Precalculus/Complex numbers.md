## Representation

### Cartesian Form
$$z=a+bi$$
- $a$ is the **real part** of $z$
- $b$ is the **imaginary part** of $z$
### Polar Form
$$z=r(\cos\theta+i\sin\theta)$$
- $r=\sqrt{ a^{2}+b^{2}}$
- $\displaystyle\tan\theta=\frac{b}{a}$ 
- $\displaystyle\theta=\arctan\left( \frac{b}{a} \right)$
- $a=r\cos \theta$
- $b=r\sin \theta$
### Exponential Form
$$z=re^{i\theta}$$

## Operations


- **Addition:** $(a+bi)+(c+di)=(a+c)+(b+d)i$
- **Subtraction:**  $(a+bi)-(c+di)=(a-c)+(b-d)i$


- **Multiplication:** 
	- (*FOIL*) $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$
		- $(a+ib)^2=a^2-b^2+i(2ab)$
- **Dividing:** To simplify the quotient $\frac{a+bi}{c+di}$ multiply the numerator and the denominator by the complex **conjugate of the denominator**: $$\frac{a+bi}{c+di}=\frac{(a+bi)(c-di)}{(c+di)(c-di)}=\frac{(ac+bd)+(bc-ad)i}{c^2+d^2}$$
- (Power of integer) $z^n=r^n\left(\cos n\theta+i\sin n\theta\right)$

- **Inverse** $\large\frac{1}{z}=z^{-1}=\frac{\bar{z}}{|z|^2}$
- **Absolute value** $|{z}|=\sqrt{a^2+b^2}$
	- $|w||z|=|wz|$
	- $|w+z|\leq|w|+|z|$
	- $|z^{-1}|=|z|^{-1}$ where ($z\neq 0$)

- **Complex conjugate** $\overline{z}=a-bi$
	- $\overline{z + w}=\overline{z}+\overline{w}$
	- $\overline{z - w}=\overline{z}-\overline{w}$
	- $\overline{zw}=\overline{z}\cdot\overline{w}$
	- $\overline{\left(\frac{z}{w}\right)}=\frac{\overline{z}}{\overline{w}}$ if $w\neq 0$
	- $0\leq z\overline{z} = {\left| z \right|}^2\in \mathbb{R}$
	- $|z|= {\left|  \overline{z} \right|}$
	- $z+\overline{z}=2a$
	- $z-\overline{z}=2ib$
	- $z=\overline{z}\iff z\in\mathbb{R}$

- **De Moivre's formula** - $(\cos x + i \sin x)^n = \cos nx + i \sin nx$

- $\mathbb{S}^1=\{z\in\mathbb{C} \mid |z|=1\}= \{e^{i\theta} \mid \theta\in[0,2\pi)\}$ is the **unit circle** in $\mathbb{C}$
	- Multiplication by a complex number $e^{i\theta}$ is a rotation by $\theta$ radians about the origin
- An $n$th **root of unity**, where $n\in\mathbb{N}$, is a complex number $z$ such that $z^n=1$ 
	- The $n$th roots of unity are: 
		- $1,\omega,\omega^2,\dots,\omega^{n-1}$ where $\omega=e^{i\frac{2\pi}{n}}$, or equivalently 
		- $\{\cos\left(\frac{2\pi k}{n}\right)+i\sin\left(\frac{2\pi k}{n}\right) \mid k\in\{0,1,\dots,n-1\}\}$
	- An $n$th root of unity $z$ is **primitive** if $\forall k\in\{1,\dots,n-1\}, z^k\neq 1$
	- If $z$ is a primitive $n$th root of unity, then $\{z^k \mid k\in\{0,1,\dots,n-1\}\}$ are the $n$th roots of unity
	- $z^k$ is a primitive $n$th root of unity if and only if $\gcd(k,n)=1$







