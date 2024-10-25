- $T(n)=2T(n/2+17)+n=O(n\lg{n})$



## Substitution method

- $T(n)=T(n-1)+n=O(n^2)$ (quick sort worst case (e7.2-1))
- $T(n)=T(n-1)+1=O(n)$ (worst-case of Random in Ramdomized-Quicksort (e7.3-2))
- $T(n)=2T(\lfloor\sqrt{  n }\rfloor)+\lg n=\Theta(\lg{n}\lg\lg n)$ (4.1)
- $T(n)=T(\lceil{n/2}\rceil)+1=\Theta(\lg{n})$ (e4.1-1)
- 
## Rucursion-tree method

- dsd

## Changing variables 

- Given $T(n)=aT(n^{1/2})+\lg^{q}{n}$
- Define: $m=\lg{n}\implies 2^m=n$
- Therefore, $T(2^m)=aT(2^{m/2})+{m^q}$



## Master Theorem

$${\large T(n)=aT(n/b)+f(n)} \quad( a\geq 1,\quad b>1)$$

|     |                                                                                                                                                         |                                    |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| 1.  | $f(n)=O(n^{\log_{b}a-\epsilon})$ for some constant $\epsilon>0$                                                                                         | $T(n)=\Theta(n^{\log _{b}a})$      |
| 2.  | $f(n)=\Theta(n^{\log_{b}a})$                                                                                                                            | $T(n)=\Theta(n^{\log_{b}a}\lg{n})$ |
| 3.  | $f(n)=\Omega(n^{\log_{b}a+\epsilon})$ for some constant $\epsilon>0$, and if $af(n/b)\leq cf(n)$ for some constant $c<1$ and all sufficiently large $n$ | $T(n)=\Theta(f(n))$                |


2  - 

$$\large T(n)=aT(n/b)+\Theta(n^k \log^p n)$$

- **Case 1.** if $\log_{b}{a}>k$ (i.e. $a>b^k$) then:
	- $T(n)=\Theta(n^{\log_{b}a})$
- **Case 2.** if $\log_{b}{a}=k$ (i.e. $a=b^k$) then:
	- **(2a)** if $p>-1$, then $T(n)=\Theta(n^k\log^{(p+1)}n)=\Theta(n^{\log_{b}a}\log^{(p+1)}n)$
	- **(2b)** if $p=-1$, then $T(n)=\Theta(n^k\log \log n)=\Theta(n^{\log_{b}a}\log \log n)$
	- **(2c)** if $p<-1$, then $T(n)=\Theta(n^k)=\Theta(n^{\log_{b}a})$
- **Case 3.** if $\log_{b}a<k$ (i.e. $a<b^k$) then:
	- **(3a)** if $p\geq 0$, then $T(n)=\Theta(n^k\log^pn)$
	- **(3b)** if $p<0$, then $T(n)=\Theta(n^k)$

### Exmaples

- **Case 1:**
	- ($a=4,b=2,k=1,p=0$) $T(n)=4T(n/2)+\Theta(n)=\Theta(n^{\log_{2}4})=\Theta(n^2)$
	- ($a=9,b=3,k=1,p=0$) $T(n)=9T(n/3)+n=\Theta(n^{\log_{3}9})=\Theta(n^2)$
	- $T(n)=4T({n/2})+\Theta(n)=\Theta(n^2)$
	- $T(n)=2T(n/2)+\Theta(1)=\Theta(n)$ (best-case of Random in Ramdomized-Quicksort (e7.3-2))
	- $T(n)=3T({n/2})+\Theta(n)=O(n^{\lg 3})$
- **Case 2:**
	- **(2a)**
		- ($a=1,b=\frac{2}{3},p=0>-1,k=0$)  $T(n)=T(2n/3)+\Theta(1)=\Theta(n^{\log _{2/3}1}\lg{n})=\Theta(n^{0}\lg{n})=\Theta(\lg{n})$ (max-heapify)
		- $T(n)=2T({n/2})+\Theta(n)=\Theta(n \lg n)$ (quick-sort best case; merge-sort)
		- $T(n)=T(n/2)+\Theta(1)=O(\lg{n})$
- **Case 3:**
	- **(3a)**
		- ($a=1,b=2,k=2,p=0$) $T(n)=T(n/2)+n^2=\Theta(n^2\log^0n)=\Theta(n^2)$
		- ($a=3,b=4,k=1,p=1\geq 0$) $T(n)=3T(n/4)+n\lg n=\Theta(n \lg  n)$
		- $T(n)=2T(n/3)+\Theta(n)=\Theta(n)$
