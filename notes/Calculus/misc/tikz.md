




```tikz
\begin{document}
\begin{tikzpicture}
 \draw (-6,0) -- (6,0) (0,0.2) -- (0,-0.2) node[below]{$0$}
  foreach \X in {-,} {(\X5.5,0.2) -- (\X5.5,-0.2) node[below] {$\X M$}} ;
 \draw[only marks,mark=*] 
  plot[samples at={1,...,15}] ({-1+5*(1+5*pow(-1,\x)/(2+\x))/\x},0)
  plot[samples at={1,...,5}] ({-\x},0);
 \draw (-5.5,0.4) -- node[above=1ex](I1){$I_1$} (0,0.4);
 \draw (0,-0.8) -- node[below=1ex]{$I_2$} (I1|-0,-0.8);
 \draw[->] (-4,-0.1) --++ (0,-1) node[below]{$a_{n_1}$};
 \draw[->] (-1,0.1) --++ (0,1) node[above]{$a_{n_2}$};
\end{tikzpicture}
\end{document}
```



```tikz
\begin{document}
\tikzset{every picture/.style={line width=0.75pt}} %set default line width to 0.75pt        

\begin{tikzpicture}[x=0.75pt,y=0.75pt,yscale=-1,xscale=1]
%uncomment if require: \path (0,300); %set diagram left start at 0, and has height of 300

%Straight Lines [id:da11172587969770209] 
\draw    (514.13,138) -- (51,138) ;
%Straight Lines [id:da7430416367103458] 
\draw [color={rgb, 255:red, 33; green, 67; blue, 255 }  ,draw opacity=1 ][line width=0.75]    (379.01,88.12) -- (178.01,88.12) ;
\draw [shift={(178.01,88.12)}, rotate = 360] [color={rgb, 255:red, 33; green, 67; blue, 255 }  ,draw opacity=1 ][line width=0.75]    (0,5.59) -- (0,-5.59)   ;
\draw [shift={(379.01,88.12)}, rotate = 360] [color={rgb, 255:red, 33; green, 67; blue, 255 }  ,draw opacity=1 ][line width=0.75]    (0,5.59) -- (0,-5.59)   ;
%Straight Lines [id:da23250560173014767] 
\draw [color={rgb, 255:red, 89; green, 181; blue, 17 }  ,draw opacity=1 ][line width=0.75]    (379.51,55.12) -- (178.51,55.12) ;
\draw [shift={(178.51,55.12)}, rotate = 180] [color={rgb, 255:red, 89; green, 181; blue, 17 }  ,draw opacity=1 ][fill={rgb, 255:red, 89; green, 181; blue, 17 }  ,fill opacity=1 ][line width=0.75]      (0, 0) circle [x radius= 3.35, y radius= 3.35]   ;
\draw [shift={(379.51,55.12)}, rotate = 180] [color={rgb, 255:red, 89; green, 181; blue, 17 }  ,draw opacity=1 ][fill={rgb, 255:red, 89; green, 181; blue, 17 }  ,fill opacity=1 ][line width=0.75]      (0, 0) circle [x radius= 3.35, y radius= 3.35]   ;

% Text Node
\draw (101,113.5) node [anchor=north west][inner sep=0.75pt]  [font=\Huge]  {$[$};
% Text Node
\draw (101,158.5) node [anchor=north west][inner sep=0.75pt]    {$a_{1}$};
% Text Node
\draw (119,113) node [anchor=north west][inner sep=0.75pt]  [font=\Huge]  {$[$};
% Text Node
\draw (119,158.5) node [anchor=north west][inner sep=0.75pt]    {$a_{2}$};
% Text Node
\draw (137,113.5) node [anchor=north west][inner sep=0.75pt]  [font=\Huge]  {$[$};
% Text Node
\draw (138,158.5) node [anchor=north west][inner sep=0.75pt]    {$a_{3}$};
% Text Node
\draw (408,113.5) node [anchor=north west][inner sep=0.75pt]  [font=\Huge]  {$]$};
% Text Node
\draw (404,158.5) node [anchor=north west][inner sep=0.75pt]    {$b_{3}$};
% Text Node
\draw (425,113.5) node [anchor=north west][inner sep=0.75pt]  [font=\Huge]  {$]$};
% Text Node
\draw (423,158.5) node [anchor=north west][inner sep=0.75pt]    {$b_{2}$};
% Text Node
\draw (442,113.5) node [anchor=north west][inner sep=0.75pt]  [font=\Huge]  {$]$};
% Text Node
\draw (442,158.5) node [anchor=north west][inner sep=0.75pt]    {$b_{1}$};
% Text Node
\draw (149,158.5) node [anchor=north west][inner sep=0.75pt]  [font=\large]  {$\cdots $};
% Text Node
\draw (381,157.5) node [anchor=north west][inner sep=0.75pt]  [font=\large]  {$\cdots $};
% Text Node
\draw (278.48,125) node  [font=\footnotesize,color={rgb, 255:red, 0; green, 0; blue, 0 }  ,opacity=1 ]  {$\lim _{n\rightarrow \infty } a_{n} ={\displaystyle \textcolor[rgb]{0.78,0,0}{x}} =\lim _{n\rightarrow \infty } b_{n}$};
% Text Node
\draw (170.5,114) node [anchor=north west][inner sep=0.75pt]  [font=\Huge]  {$[$};
% Text Node
\draw (171.5,158) node [anchor=north west][inner sep=0.75pt]    {$a_{n}$};
% Text Node
\draw (181.5,158) node [anchor=north west][inner sep=0.75pt]  [font=\large]  {$\cdots $};
% Text Node
\draw (374.5,112) node [anchor=north west][inner sep=0.75pt]  [font=\Huge]  {$]$};
% Text Node
\draw (373.5,159) node [anchor=north west][inner sep=0.75pt]    {$b_{n}$};
% Text Node
\draw (352.5,158) node [anchor=north west][inner sep=0.75pt]  [font=\large]  {$\cdots $};
% Text Node
\draw (250,67.5) node [anchor=north west][inner sep=0.75pt]  [font=\large]  {{$\textcolor[rgb]{0.13,0.26,1}{b_{n} -a_{n}}\underset{n\rightarrow \infty }{\longrightarrow } 0$}};
% Text Node
\draw (285.5,91.67) node [anchor=north west][inner sep=0.75pt]  [rotate=-90]  {$\Longrightarrow $};
% Text Node
\draw (241,138) node [anchor=north west][inner sep=0.75pt]  [font=\large,rotate=-90]  {$=$};
% Text Node
\draw (328.5,137) node [anchor=north west][inner sep=0.75pt]  [font=\large,rotate=-90]  {$=$};
% Text Node
\draw (251,145.17) node [anchor=north west][inner sep=0.75pt]  [font=\tiny]  {$ \begin{array}{l}
(\mathrm{Monotone\ }\\
\mathrm{Convergence\ T} .)
\end{array}$};
% Text Node
\draw (277.98,172) node  [font=\footnotesize,color={rgb, 255:red, 0; green, 0; blue, 0 }  ,opacity=1 ]  {$\underset{n\in \mathbb{N}}{\sup }\{a_{n}\} \ \ \ \ \ \ \ \ \ \underset{n\in \mathbb{N}}{\inf}\{b_{n}\}$};
% Text Node
\draw (282,162.17) node [anchor=north west][inner sep=0.75pt]  [rotate=-90]  {$\Longrightarrow $};
% Text Node
\draw (238,193.67) node [anchor=north west][inner sep=0.75pt]  [font=\scriptsize]  {$\forall n,a_{n} \leqslant n\leqslant b_{n}$};
% Text Node
\draw (282,200.17) node [anchor=north west][inner sep=0.75pt]  [rotate=-90]  {$\Longrightarrow $};
% Text Node
\draw (215.5,210.67) node [anchor=north west][inner sep=0.75pt]  [font=\small]  {$x\in \bigcap _{n=1}^{\infty }\textcolor[rgb]{0.35,0.71,0.07}{I_{n}\underset{\mathrm{( squeeze)}}{=}\{x\}}$};
% Text Node
\draw (227.5,33) node [anchor=north west][inner sep=0.75pt]  [font=\large,color={rgb, 255:red, 105; green, 255; blue, 0 }  ,opacity=1 ]  {$\textcolor[rgb]{0.35,0.71,0.07}{I_{n} =[ a_{n} ,b_{n}]}$};


\end{tikzpicture}


\end{document}
```






```tikz
\begin{document}





\tikzset{every picture/.style={line width=0.75pt}} %set default line width to 0.75pt        

\begin{tikzpicture}[x=0.75pt,y=0.75pt,yscale=-1,xscale=1]
%uncomment if require: \path (0,300); %set diagram left start at 0, and has height of 300

%Straight Lines [id:da11172587969770209] 
\draw    (514.13,138) -- (51,138) ;

% Text Node
\draw (101,113.5) node [anchor=north west][inner sep=0.75pt]  [font=\Huge]  {$[$};
% Text Node
\draw (101,158.5) node [anchor=north west][inner sep=0.75pt]    {$a_{1}$};
% Text Node
\draw (131,113.5) node [anchor=north west][inner sep=0.75pt]  [font=\Huge]  {$[$};
% Text Node
\draw (132,158.5) node [anchor=north west][inner sep=0.75pt]    {$a_{2}$};
% Text Node
\draw (162,113.5) node [anchor=north west][inner sep=0.75pt]  [font=\Huge]  {$[$};
% Text Node
\draw (164,158.5) node [anchor=north west][inner sep=0.75pt]    {$a_{3}$};
% Text Node
\draw (383,113.5) node [anchor=north west][inner sep=0.75pt]  [font=\Huge]  {$]$};
% Text Node
\draw (381,158.5) node [anchor=north west][inner sep=0.75pt]    {$b_{3}$};
% Text Node
\draw (415,113.5) node [anchor=north west][inner sep=0.75pt]  [font=\Huge]  {$]$};
% Text Node
\draw (413,158.5) node [anchor=north west][inner sep=0.75pt]    {$b_{2}$};
% Text Node
\draw (442,113.5) node [anchor=north west][inner sep=0.75pt]  [font=\Huge]  {$]$};
% Text Node
\draw (442,158.5) node [anchor=north west][inner sep=0.75pt]    {$b_{1}$};
% Text Node
\draw (176,139.5) node [anchor=north west][inner sep=0.75pt]  [font=\LARGE]  {$\cdots $};
% Text Node
\draw (341,139.5) node [anchor=north west][inner sep=0.75pt]  [font=\LARGE]  {$\cdots $};
% Text Node
\draw (277.98,170.24) node  [font=\footnotesize]  {$\displaystyle\lim _{n\rightarrow \infty } a_{n} =\ \ \ \ \ \ \ \ =\lim _{n\rightarrow \infty } b_{n}$};
% Text Node
\draw (276.42,163) node  [font=\LARGE,color={rgb, 255:red, 208; green, 2; blue, 27 }  ,opacity=1 ]  {$x$};
% Text Node
\draw (276.63,131.62) node  [font=\huge,color={rgb, 255:red, 208; green, 2; blue, 27 }  ,opacity=1 ]  {$\mid $};


\end{tikzpicture}



\end{document}


```




```tikz

```

