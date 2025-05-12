

```tikz
\usepackage{tikz}
\usepackage{amsmath}
\begin{document}
\begin{tikzpicture}[scale=1.2] 
	\draw[very thick] (0,0) circle (2cm);
	\draw[-stealth, very thick] (-3.5,0) -- (3.5,0); % extended x-axis
	\draw[-stealth, very thick] (0,-2.5) -- (0,3.5); % extended y-axis
	\def\angle{41}
	\coordinate (P) at ({2*cos(\angle)}, {2*sin(\angle)});
	
	% Line from origin to point P (radius)
	\draw[very thick] (0,0) -- (P) node[midway, left] {$1$};
	
	% Sine and Cosine
	\draw[red, -stealth, very thick] (0,0) -- (0,0 |- P)   node[midway, left] {$\sin(\theta)$};
	\draw[blue, dashed] (0,0 |- P) -- (P) node[midway, left] {};
	
	\draw[blue, -stealth, very thick] (0,0) -- (P |-0,0) node[midway, below] {$\cos(\theta)$};
	\draw[red, dashed] (P |-0,0) -- (P) node[midway, left] {};
	
	% Tangent
	\draw[green!60!black, very thick] (2,0) -- (2,{2*tan(\angle)}) node[right] {$\tan(\theta)$};
	\draw[dashed] (P) -- (2,{2*tan(\angle)});

	
	% Angle marking
	\draw (0.5,0) arc (0:\angle:0.5cm) node at (\angle/2:0.35) {$\theta$};
	% Point P
    \fill (P) circle (0.07);
    \node[above right] at (P) {$P$};
    
    % Label for x and y axes
    \node[below right] at (3.5,0) {$x$};
    \node[above right] at (0,3.5) {$y$};
    

\end{tikzpicture}
\end{document}
```


