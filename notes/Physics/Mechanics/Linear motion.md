
### Momentum

- $\vec{p} = m\vec{v}$ is the **(linear) momentum** (in $\mathsf{kg\cdot m/s}$) of a body with mass $m$ (in $\mathsf{kg}$) and velocity $\vec{v}$ (in $\mathsf{m/s}$)


#### Impulse 

- $\vec{\mathbf{J}} = \vec{\mathbf{F}}\Delta t$ is the **impulse** (in $\mathsf{N\cdot s}$) delivered to an object by a constant force $\vec{\mathbf{F}}$ (in $\mathsf{N}$) over a time interval $\Delta t$ (in $\mathsf{s}$)
- $\displaystyle \vec{\mathbf{J}} = \int_{t_1}^{t_2} \vec{\mathbf{F}} dt$ is the impulse delivered to an object by a variable force $\vec{\mathbf{F}}$ over the time interval $[t_1, t_2]$ (in $\mathsf{N\cdot s}$)
- (**Impulse-Momentum Theorem**) $\vec{\mathbf{J}} = \Delta \vec{\mathbf{p}}$ (the impulse is equal to the change in momentum)

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



### Power

- $\displaystyle P = \vec{F} \cdot \vec{v}=\frac{dW}{dt}$ is the **power** (in $\mathsf{W}$)
	- $\vec{F}$ is the force vector (in $\mathsf{N}$)
	- $\vec{v}$ is the velocity vector (in $\mathsf{m/s}$)


