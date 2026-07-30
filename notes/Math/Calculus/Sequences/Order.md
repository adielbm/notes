

- $(a_{n})$ and $(b_{n})$ are **positive (!!!)**
	- definitions
		- $a_{n}=O(b_{n})\iff \exists{c>0}:{a_{n}\leq cb_{n}}$ (for all $n$) $\iff$ $(a_{n}/b_{n})$ is bounded (q2.44a)
		- $a_{n}=o(b_{n})\iff {\lim_{ n \to \infty }(a_{n}/b_{n})=0}\iff{\lim_{ n \to \infty }(b_{n}/a_{n})=\infty}$
	- theorems
		- (q2.45a) $\lim_{ n \to \infty }(a_{n}/b_{n})=c\in{\mathbb{R}}\implies a_{n}=O(b_{n})$
		- (q2.44b) $a_{n}=o(b_{n})\implies a_{n}=O(b_{n})$
		- (q2.44c) $a_{n}=O(1)\iff{(a_{n})}$ is bounded
		- (q2.45c) **Transitivity** - $a_{n}=o(b_{n})\land{b_{n}=o(c_{n})}\implies a_{n}=o(c_{n})$
		- (2.49) for each $k$ natural, and $r>1$ real: $\lim_{ n \to \infty }\left( \frac{n^k}{r^n} \right)=0$ (*i.e.* $n^k=o(r^n)$, 2.50) 

> see also [[Asymptotic notation]]