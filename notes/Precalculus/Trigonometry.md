```tex
\usepackage{tikz}
\usepackage{amsmath}
\begin{document}
\begin{tikzpicture}[scale=1.2] 
	\draw[very thick] (0,0) circle (2cm);
	\draw[-stealth, very thick] (-2.5,0) -- (2.5,0); % x-axis
	\draw[-stealth, very thick] (0,-2.5) -- (0,2.5); % y-axis
	\def\angle{65}
	\coordinate (P) at ({2*cos(\angle)}, {2*sin(\angle)});
	\draw[very thick] (0,0) -- (P) node[midway, left] {$1$};
	\draw[red, very thick] (P) -- (P |- 0,0) node[midway, right] {$\sin(\theta)$};
	\draw[blue, very thick] (P |-0,0) -- (0,0) node[midway, below] {$\cos(\theta)$};
	\draw (0.5,0) arc (0:\angle:0.5cm) node at (\angle/2:0.35) {$\theta$};
    \fill (P) circle (0.07);
\end{tikzpicture}
\end{document}
```
 
| $\displaystyle\sin\theta=\cos\left(\frac{\pi}{2} - \theta \right)$ | $\displaystyle\cos\theta = \sin\left(\frac{\pi}{2} - \theta \right)$ | $\displaystyle\tan\theta = \frac{\sin \theta}{\cos \theta}$ |
| ------------------------------------------------------------------ | -------------------------------------------------------------------- | ----------------------------------------------------------- |
| $\displaystyle\csc\theta=\frac{1}{\sin \theta}$                    | $\displaystyle\sec\theta=\frac{1}{\cos \theta}$                      | $\displaystyle\cot\theta = \frac{\cos \theta}{\sin \theta}$ |

### Pythagorean identities
$$
\begin{align}
\sin^2 \alpha + \cos^2 \alpha = 1 \\
1+\tan^2\alpha=\sec^2\alpha \\
1+\cot^2\alpha=\csc^2\alpha \\
\end{align}
$$

### Angle sum and difference identities
$$\begin{align}
\sin(\alpha \pm \beta) &= \sin \alpha \cos \beta \pm \cos \alpha \sin \beta \\
\cos(\alpha \pm \beta) &= \cos \alpha \cos \beta \mp \sin \alpha \sin \beta \\  
\tan(\alpha\pm \beta) &=\frac{\tan \alpha \pm \tan \beta}{1 \mp \tan \alpha \tan \beta}
\end{align}$$
### Law of sines
$$\frac{a}{\sin{\alpha}} \,=\, \frac{b}{\sin{\beta}} \,=\, \frac{c}{\sin{\gamma}} \,=\, 2R$$

### Law of cosines
$$a^2=b^2+c^2-2bc\cos\alpha$$

### Even/Odd Identities 
$$
\begin{align}
\sin(-\alpha)&=-\sin(\alpha) \\ 
\cos(-\alpha)&=\cos(\alpha) \\
\tan(-\alpha)&=-\tan(\alpha) \\
\end{align}
$$

### Power-Reducing Formulas
$$
\begin{align}
\sin^2\alpha=\frac{1-\cos{2}\alpha}{2} \\
\cos^2\alpha=\frac{1+\cos{2}\alpha}{2} \\
\tan^2\alpha=\frac{1-\cos{2}\alpha}{1+\cos{2}\alpha} \\
\end{align}
$$

- Multiple-angle formula
	- Double-angle formula
		- $\sin(2\alpha)=2\sin\alpha\cos\alpha=(\sin \alpha+\cos \alpha)^2-1$
		- $\cos(2\alpha)=\cos^2\alpha-\sin^2\alpha-1=1-2\sin^2\alpha$
	- Triple-angle formula #todo 
	- Half-angle formula #todo 
- Product-to-sum and sum-to-product identities #todo 

## Common Trigonometric Values

![410](https://upload.wikimedia.org/wikipedia/commons/4/4c/Unit_circle_angles_color.svg)


___


___


|      | $\sin$                | $\cos$                                         |
| ---- | --------------------- | ---------------------------------------------- |
| $1$  | $2k\pi+\frac{\pi}{2}$ | $2k\pi$                                        |
| $0$  | $k\pi$                | $(2k\pm 1)\frac{\pi}{2}=\pi k\pm\frac{\pi}{2}$ |
| $-1$ | $2k\pi-\frac{\pi}{2}$ | $(2k + 1)\pi$                                  |
### Inverse trigonometric functions

- $\arcsin(x),~ \arccos(x), ~\arctan(x)$

