
- showing that a piecewise function is differentiable continuously
	- 2019b.82

# Existence of an Unique Solution of an Equation given by two differentiable functions

- Given functions $g_1(x), g_2(x)$ that are differentiable on $\mathbb{R}$. Prove that there is only one solution of the equation $g_1(x)=g_2(x)$
	- define $f(x)=g_2(x)-g_1(x)$ i.e. we need to prove these's only one root of $f$
	- $f$ is differentiable (and continuous) on $\mathbb{R}$
	- we need to find $[a,b]$ such that $f(a)<0<f(b)$ (or $f(b)<0<f(a)$)
	- by IVT $\exists c \in[a,b]:f(c)=0$, so $c$ is a root of $f$
	- showing that the root is **unique** by showing that $f$ is (strictly) monotonic by the derivative $f'$. (if for example $f'(x)\neq 0$ then $f$ is monotonic by 8.18; otherwise use in q8.29 or ) 
	- if so $f$ is (strictly) monotonic therefore is one-to-one therefore $c$ is unique root


___

- show that $f(x)\geq 0$ for all $x \in (a,b)$


- find $f'$
	- if $f'>0$ for all $x \in (a,b)$ then $f$ is increaing on $(a,b)$
	- else, if $f'$ is sometimes positive and sometimes negative, then find $f''$.



- $f''>0$ for all $x \in(a,b)$, then by (8.18) $f'$ increaing on $(a,b)$ and if also $f'(0)=0$ then $f$ increasing on $(a,b)$ and if $f(0)=0$ then $f>0$ for all $x \in(a,b)$


___


- we need to show that: $f(x)> 0$ for all $x \in(0,\infty)$
	- if we show that:
		- 1. $\forall x>0,f'(x)> 0$. (if so, then $f$ is strictly increasing for $x>0$)
		- 2. $\displaystyle\lim_{ x \to 0^+ }f(x)=0$ or $f(0)=0$
	- if we show 1 and 2, then we get $\forall x>0,f(x)> 0$




___

- show that continuous function $f$ is **one-to-one** (or equivalently, **monotonic**)


___

- show that continuous function $f>0$



___

The Closed Interval Method 

To find the absolute maximum and minimum values of a continuous function f on a closed interval $[a,b]$:
1. Find the values of f at the critical numbers of f in a, a.
2. Find the values of f at the endpoints of the interval.
3. The largest of the values from Steps 1 and 2 is the absolute maximum value;
the smallest of these values is the absolute minimum value.

another version 

A Procedure for Finding the Absolute Extrema of a Continuous Function f on a
Finite Closed Interval $[a, b]$
Step 1. Find the critical points of f in $(a, b)$.
Step 2. Evaluate f at all the critical points and at the endpoints a and b.
Step 3. The largest of the values in Step 2 is the absolute maximum value of f on $[a, b]$
and the smallest value is the absolute minimu


___

