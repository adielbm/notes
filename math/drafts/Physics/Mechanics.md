# Motion

## Newton's Laws of Motion

### 1st Law

A body remains at rest, or in motion at a constant speed in a straight line, except insofar as it is acted upon by a force.

### 2nd Law

The acceleration of a body is directly proportional to the net force acting on it, and inversely proportional to its mass. 

- $F=ma$
- $\vec{\mathbf{F}} = m\vec{\mathbf{a}}$
- $\displaystyle\vec{\mathbf{F}} = \frac{d\vec{\mathbf{p}}}{dt}$
- (rotational form) $\tau=I\alpha=\frac{dL}{dt}$
    - $\tau$ is the torque
    - $I$ is the moment of inertia
    - $\alpha$ is the angular acceleration
    - $L$ is the angular momentum

### 3rd Law

For every action force $\vec{F}_{1 \to 2}$ exerted by object 1 on object 2, there is an equal in magnitude and opposite in direction reaction force $\vec{F}_{2 \to 1}$ exerted by object 2 on object 1. $$\vec{F}_{1 \to 2} = -\vec{F}_{2 \to 1}$$

## Linear/Translational quantities

### Momentum

- $\vec{p} = m\vec{v}$
  - $\vec{p}$ is the **(linear) momentum** vector (in $\mathsf{kg\cdot m/s}$)
  - $m$ is the mass (in $\mathsf{kg}$)
  - $\vec{v}$ is the velocity vector (in $\mathsf{m/s}$)

#### Impulse 

- If a constant force $\vec{\mathbf{F}}$ acts on an object, the **impulse** $\vec{\mathbf{J}}$ delivered to the object over a time interval $\Delta t$ is given by $$\vec{\mathbf{J}} = \vec{\mathbf{F}}\Delta t$$
- (Impulse-Momentum Theorem) $$\vec{\mathbf{J}} = \Delta \vec{\mathbf{p}}$$ (the impulse is equal to the change in momentum)

### Motion in One Dimension

#### Constant Acceleration

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

#### Motion in Multiple Dimensions

#todo  Ballistic coefficient


```tex
% Author: Izaak Neutelings (April 2021)
\usepackage{tikz}
\usepackage{amsmath}
\usepackage{physics}
\usepackage{siunitx}
\usepackage{xcolor}
\usepackage{etoolbox} %ifthen
\usepackage[outline]{contour} % glow around text
\tikzset{>=latex} % for LaTeX arrow head
\usetikzlibrary{angles,quotes,arrows.meta} % for pic
\contourlength{1.0pt}
\colorlet{myblue}{blue!70!black}
\colorlet{mydarkblue}{blue!40!black}
\colorlet{mygreen}{green!50!black}
\colorlet{myred}{red!65!black}
\colorlet{xcol}{blue!85!black}
\colorlet{vcol}{green!70!black}
\colorlet{projcol}{vcol!90!black!60}
\tikzstyle{wave}=[myblue,thick]
\tikzstyle{xline}=[very thick,myblue]
\tikzstyle{vline}=[very thick,mygreen]
\tikzstyle{vector}=[->,very thick,vcol,line cap=round]
\tikzstyle{mydashed}=[green!30!black!90,dash pattern=on 2pt off 2pt,very thin]
\tikzstyle{mymeas}=[{Latex[length=3,width=2]}-{Latex[length=3,width=2]},thin]
\def\tick#1#2{\draw[thick] (#1) ++ (#2:0.05*\ymax) --++ (#2-180:0.1*\ymax)}


\begin{document}

\def\xmax{3.8}
\def\ymax{2.4}
\def\v{1.0}
\def\ang{30}
\def\d{(0.9*\xmax)} % distance landing point
\def\b{tan(30)} % slope at x=0
\def\h{0.6*\ymax} % height h
\def\a{-((\b*\d+\h)/\d^2)} % coefficient
\def\nsamples{100}



% TRAJECTORY - PARABOLA + breakdown
\begin{tikzpicture}
  \def\v{1.4}
  \def\ang{35}
  \def\h{0.5*\ymax} % height h
  \def\vx{{\v*cos(\ang)}}
  \def\vy{{\v*sin(\ang)}}
  \coordinate (O) at (0,\h);
  \coordinate (Vx) at ({\v*cos(\ang)},\h);
  \coordinate (Vy) at (0,{\h+\v*sin(\ang)});
  \coordinate (V) at ({\v*cos(\ang)},{\h+\v*sin(\ang)});
  
  % AXES & TRAJECTORY
  \draw[->,thick]
    (-0.1*\ymax,0) -- (1.06*\xmax,0) node[right=4,below=-1] {$x$};
  \draw[->,thick]
    (0,-0.1*\ymax) -- (0,\ymax) node[below=4,left=0] {$y$};
  \draw[xline,variable=\t,samples=\nsamples,smooth,domain=0:\d+0.1]
    plot(\t,{\a*\t^2+\b*\t+\h}); %node[right=7,above=-2] {$x=x(t)$};
  
  % VELOCITY VECTOR
  \draw pic["\contour{white}{$\theta$}",draw=white,double=black,double distance=0.4,
            angle radius=13,angle eccentricity=1.4] {angle = Vx--O--V};
  \draw[mydashed]
    (Vx) |- (Vy);
  \draw[<->,projcol,thick]
    (Vy) -- (O) node[scale=0.9,midway,left=-1] {$v_{0y}$}
      -- (Vx) node[scale=0.9,midway,below=-1] {$v_{0x}$};
  \draw[->,vcol,very thick,line cap=round]
    (O) --++ ({\ang}:\v) node[above right=-4] {$\vec{v}_0$};
  \tick{O}{0} node[left] {$y_0$};
  \tick{{\d},0}{90} node[below] {$R$};
  
\end{tikzpicture}



\end{document}


```

##### Projectile Motion 


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



## Angular/Rotational quantities

> clockwise is negative by convention 

### Angular Velocity & Acceleration

- $\displaystyle\vec{\omega} = \frac{d\vec{\theta}}{dt}$ is the **angular velocity** (in $\mathsf{rad/s}$)
- $\displaystyle\vec{\alpha} = \frac{d\vec{\omega}}{dt}$ is the **angular acceleration** (in $\mathsf{rad/s^2}$)
- For a point $P$ at a distance $r$ from the axis of rotation
	- $\vec{\mathbf{a}}=\vec{\mathbf{a}_\text{tan}}+\vec{\mathbf{a}_\text{cent}}$
	- $\displaystyle a = \sqrt{a_\text{tan}^2 + a_\text{cent}^2}$ 
		- $\displaystyle a_\text{tan} = r\alpha$ is the **tangential acceleration** (in $\mathsf{m/s^2}$)
		- $\displaystyle a_\text{cent} = \frac{v^2}{r} = \frac{r\omega^2}{r} = r\omega^2$ is the **centripetal acceleration** (in $\mathsf{m/s^2}$)
		- $\displaystyle v = r\omega$ is the **tangential velocity** (in $\mathsf{m/s}$)

#todo

### Moment of Inertia

moment of inertia I = angular momentum L / angular velocity ω


### Angular Momentum

#todo

https://www.youtube.com/watch?v=MULe4xv3lVk&list=PLllVwaZQkS2rxqMXTH-cdE0LIX9Zi_oS1&index=54
https://www.youtube.com/watch?v=hgcudPr73LU



Angular Momentum and Its Conservation from **Giancoli**

- $\vec{\mathbf{L}} = \vec{\mathbf{r}} \times \vec{\mathbf{p}}$ is the **angular momentum** (or **moment of momentum**) vector (in $\mathsf{kg\cdot m^2/s}$)
  - $\vec{\mathbf{r}}$ is the position vector (from the pivot point to the point of application of the force) (in $\mathsf{m}$)
  - $\vec{\mathbf{p}}$ is the momentum vector (in $\mathsf{kg\cdot m/s}$)


### Torque (Moment of Force)

```tex
\usepackage{tikz}
\usepackage[outline]{contour} % Glow around text
\usetikzlibrary{calc,angles,quotes} % For pic and angle
\tikzset{>=latex} % LaTeX arrow head
\contourlength{1.1pt}

\newcommand{\vb}[1]{\vec{\mathbf{#1}}}

% Color definitions
\colorlet{xcol}{blue!98!black}
\colorlet{xcoldark}{blue!50!black}
\colorlet{vcol}{green!70!black}
\colorlet{myred}{red!80!black}
\colorlet{mypurple}{blue!60!red!80}
\colorlet{acol}{red!50!blue!80!black!80}

% TikZ styles
\tikzstyle{rvec}=[->,xcol,very thick]
\tikzstyle{force}=[->,myred,very thick]
\tikzstyle{mass}=[line width=0.6,red!30!black,fill=red!40!black!10,rounded corners=1,
                  top color=red!40!black!20,bottom color=red!40!black!10]

% TikZ pictures
\tikzset{
  pics/Tin/.style={
    code={
      \def\R{0.12}
      \draw[pic actions,line width=0.6,#1,fill=white] (0,0) circle (\R) 
        (-135:.75*\R) -- (45:.75*\R) (-45:.75*\R) -- (135:.75*\R);
  }},
  pics/Tout/.style={
    code={
      \def\R{0.12}
      \draw[pic actions,line width=0.6,#1,fill=white] (0,0) circle (\R);
      \fill[pic actions,#1] (0,0) circle (0.3*\R);
  }},
  pics/Tin/.default=mypurple,
  pics/Tout/.default=mypurple,
}

\newcommand\rightAngle[4]{
  \pgfmathanglebetweenpoints{\pgfpointanchor{#2}{center}}{\pgfpointanchor{#3}{center}}
  \coordinate (tmpRA) at ($(#2)+(\pgfmathresult+45:#4)$);
  \draw[white,line width=0.7] ($(#2)!(tmpRA)!(#1)$) -- (tmpRA) -- ($(#2)!(tmpRA)!(#3)$);
  \draw[xcoldark] ($(#2)!(tmpRA)!(#1)$) -- (tmpRA) -- ($(#2)!(tmpRA)!(#3)$);
}

% BICYCLE WHEEL
\def\r{0.16} % Axis radius
\def\Ri{1.18} % Wheel rims inside
\def\Rr{1.30} % Wheel rims outside
\def\Rt{1.45} % Wheel tire

% TORQUE perpendicular and angle
\begin{document}
\def\R{1.6} % Wheel rims inside

\begin{tikzpicture}
  \def\ang{43} % Angle position
  \def\angF{8} % Angle force
  \def\F{1.1}  % Force size
  \coordinate (O) at (0,0);
  \coordinate (R) at (\ang:\R);
  \coordinate (RT) at (90+\angF:{\R*sin(\ang-\angF)});
  \coordinate (R') at (2*\ang-180-\angF:\R);
  \coordinate (F) at ($(R)+(\angF:\F)$);
  \coordinate (FT) at ($(R)+(\ang-90:{\F*sin(\ang-\angF)})$);
  \clip (-1.2*\Rr,-1.17*\Rr) rectangle (2.04*\Rr,1.54*\Rr);
  
  \rightAngle{R}{RT}{O}{0.40}
  \rightAngle{R}{FT}{F}{0.35}
  
  \draw[line width=0.8,dashed,white] (R) -- (RT) (R) --++ (\ang:0.4*\R) coordinate (RE);
  \draw[line width=0.5,dashed,xcol] (R) -- (RT) --++ (180+\angF:0.3) (R) --++ (\ang:0.5*\R);
  \draw[force] (R) -- (F) node[right=-2] {$\vb{F}$};
  \draw[force,myred!80!black!60] (R) -- (FT) node[below right=-3] {$\vb{F}_{\perp}$};
  \pic[scale=1] at (R) {Tin};
  \draw[dashed,red!20!black] (F) -- (FT);
  \node[mypurple,above=2] at (R) {$\vb{\tau}$};
  \draw[rvec,xcol!90!black!50] (O) -- (RT) node[midway,above=3,left=-2] {\contour{white}{$\vb{r}_{\perp}$}};
  \draw[rvec] (O) -- (\ang:0.95*\R) node[midway,below=2,right=1] {\contour{white}{$\vb{r}$}};
  \draw pic["$\theta$",xcoldark,draw=xcoldark,angle radius=14,angle eccentricity=1.4] {angle=F--R--RE};
  \draw pic[thick,draw=white,angle radius=14,angle eccentricity=1.4] {angle=RT--R--O};
  \draw pic["$\theta$",xcoldark,draw=xcoldark,angle radius=14,angle eccentricity=1.4] {angle=RT--R--O};
\end{tikzpicture}







% CENTER OF MASS 1D
\begin{tikzpicture}
  \def\L{4.2} % length
  \def\w{1.3} % base width
  \def\h{1.0} % base height
  \def\F{0.8} % force magnitude
  \coordinate (O) at (0,0);
  \coordinate (M1) at (-0.55*\L,0.04*\h);
  \coordinate (M2) at ( 0.45*\L,0.04*\h);
  \coordinate (T1) at (-0.60*\L,0.1*\h);
  \coordinate (T2) at ( 0.50*\L,0.1*\h);
  \draw[thin,brown!40!black,fill=brown!80!black,rounded corners=0.5] (M1) --++ (\L,0) |-++ (-\L,-0.10*\h) -- cycle;
  \draw[mass] (M1) rectangle++ (0.7,0.5) node[midway] {$m_1$};
  \draw[mass] (M2) rectangle++ (-0.8,0.6) node[midway] {$m_2$};
  \draw[rvec] (O)++(-0.03,0.06) --++ (-0.55*\L+0.6,0) node[midway,above=-2] {$\vb{r}_1$};
  \draw[rvec] (O)++(0.03,0.06) --++ (0.45*\L-0.7,0) node[midway,above=-2] {$\vb{r}_2$};
  \draw[force] (M1)++(0.35,0.08*\h) --++ (0,-0.8*\F) node[above=2,left=0] {$m_1\vb{g}$};
  \draw[force] (M2)++(-0.4,0.08*\h) --++ (0,-\F) node[above=2,right=0] {$m_2\vb{g}$};
  \draw[force] (O) --++ (0,1.7*\F) node[above=-2] {$\vb{F}_\mathrm{N}$}; %$-(m_1+m_2)\vb{g}$
  \pic[scale=1] at (T1) {Tout};
  \node[mypurple,left=1] at (T1) {$\vb*{\tau}_1$};
  \pic[scale=1] at (T2) {Tin};
  \node[mypurple,right=2] at (T2) {$\vb*{\tau}_2$};
  \draw[thick,rounded corners=4,blue!20!black,
        top color=blue!40!black!50,bottom color=blue!40!black!15,shading angle=20]
    (-\w/2,-\h) -- (O) -- (\w/2,-\h) -- cycle;
  \draw[->] (M2)++(45:0.25*\L) arc(-10:80:0.12*\L) node[left=-1,scale=0.8] {$+\theta$};
\end{tikzpicture}




\end{document}
```

- The **lever arm** (or **moment arm**) #todo
- $\vec{\mathbf{\tau}} = \vec{\mathbf{r}} \times \vec{\mathbf{F}}$ is the **torque** or **moment of force** vector (in $\mathsf{N\cdot m}$) (cross product)
- $\vec{\mathbf{r}}$ is the position vector (from the pivot point to the point of application of the force) (in $\mathsf{m}$)
- $\vec{\mathbf{F}}$ is the force vector (in $\mathsf{N}$)
- $\theta$ is the angle between the position vector and the force vector (in $\mathsf{rad}$)
- $\tau,r,F$ are the magnitudes of the vectors
- $\tau = rF\sin\theta=rF_{\perp}=r_{\perp}F$ is the magnitude of the torque
  - $F_{\perp}=F\sin\theta$ is the component of the force perpendicular to the position vector
  - $r_{\perp}=r\sin\theta$ is the component of the position vector perpendicular to the force

- #todo  https://youtu.be/5Zrphnd_0VI?list=PLllVwaZQkS2rxqMXTH-cdE0LIX9Zi_oS1
	- 

### Simple Harmonic Motion

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

#### Mass-Spring System

- $T=2\pi \sqrt{ \frac{m}{k}}$
- $v_{\text{max}} = A \sqrt{\frac{k}{m}}$
- $\displaystyle v_{\text{max}} = \pm A\sqrt{\frac{k}{m}}$ is the maximum velocity

#### Pendulum 

- The oscillating body is the **pendulum bob**
- $T=2\pi \sqrt{ \frac{L}{g} }$
- $L$ is the length of the pendulum
- $g$ is the acceleration due to gravity
- $\frac{mg}{L}$ 

# Force

- Non-contact Forces
	- Gravitational Force
	- Electromagnetism
		- electricity
		- magnetism
	- strong nuclear force
	- weak nuclear force
- Contact Forces
	- Normal Force


### Gravity

##### Newton's Law of Universal Gravitation

$$\displaystyle  F=G{\displaystyle\frac {m_{1}m_{2}}{r^{2}}}$$

- $\mathbf {F}_{12}=-F\hat{\mathbf {r}}_{12}=F\hat{\mathbf {r}}_{21}=-\mathbf {F}_{21}\quad \text{(vector form)}$
- $F=|\mathbf {F}_{12}|=|\mathbf {F}_{21}|$ is the [[Vectors#Norm of a Vector|magnitude]] of **gravitational force** ($\mathbf {F}_{12}$ is the force exerted by $m_{1}$ on $m_{2}$, and vice versa)
- $m_{1}$ and $m_{2}$ are the (center of) mass of the two objects
- $\mathbf {r}_{12}=-\mathbf {r}_{21}$ is the position vector from $m_{1}$ to $m_{2}$, 
	- $r=|\mathbf {r}_{12}|=|\mathbf {r}_{21}|$ the [[Vectors#Norm of a Vector|distance]] between the two objects
- $\displaystyle\hat {\mathbf {r}}_{12}= \frac {\mathbf {r}_{12}}{r}$ is the unit vector in the direction of $\mathbf {r}_{12}$ (and vice versa)
- $G=6.67430(15)\times 10^{-11}\ \mathrm {m^{3}kg^{-1}s^{-2}}$ is the **gravitational constant** (dim. ${\mathsf {M^{-1}L^{3}T^{-2}}}$)

## Mechanical Advantage

- The **mechanical advantage** of a machine is the ratio of the output force to the input force ${\displaystyle \mathrm {MA} ={F_{\text{out}} \over F_{\text{in}}}}$
- A **simple machine** is a mechanical device that changes the magnitude of a force (i.e. the $\mathrm{MA}$ is not $1$), or the direction of a force
- **Lever**
	- $F_{\text{effort}}d_{\text{effort}} = F_{\text{load}}d_{\text{load}}$ (Law of the Lever)
	- $F_{\text{effort}}$ and $F_{\text{load}}$ are the effort and load forces
	- $d_{\text{effort}}$ and $d_{\text{load}}$ are the effort and load distances from the fulcrum
	- Class 1 Lever: fulcrum between the effort and load
	- Class 2 Lever: load between the fulcrum and the effort
	- Class 3 Lever: effort between the fulcrum and the load






# Center of Mass (CM)

#todo super simple physics page 86




