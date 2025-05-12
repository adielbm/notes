
###### old way draft


- את הקלט בצד ימין של הסרט $M_d$ נמקם על הסרט של $M$ במקומות האי זוגיים, ואת הקלט בצד שמאל של $M_d$ נמקם על הסרט של $M$ במקומות האי זוגיים, (כאשר צד מקומות צד ימין של $M_d$ ממוספרים לצורך זה 1,2,3... וצד שמאל של $M_d$ כ- -1,-2,-3..., אמנם ב- M כן יהיה מקום 0, שיהיה שמור לצורך שנראה בהמשך). כלומר:
$$f(n)=\begin{cases}
2n+1 & \text{if } n >0 \\
-2n & \text{if } n <0
\end{cases}$$
- for all $q_{1},q_{2}\in Q$, and $a,b,c \in \Gamma$, 
	- if $\delta(q_{1},a)=(q_{2},b,\text{R})$, then replace it with $\delta(q_{1},a)=(q_{\text{R}},b,\text{R})$ and $\delta(q_{\text{R}},c)=(q_{2},c,\text{R})$. 
	- if $\delta(q_{1},a)=(q_{2},b,\text{L})$, then replace it with $\delta(q_{1},a)=(q_{\text{L}},b,\text{L})$ and $\delta(q_{\text{L}},c)=(q_{2},c,\text{L})$.
- add special symbol $\#$ to the first square of the tape (place 0)
- for any state $q\in Q$, add state $\overset{\bullet}{q}$, indicating we are in the left side of the tape.
- for any state $q\in Q$, add transition $\delta(q,\#)=(q_{\text{R}},\#,\text{R})$, and 
