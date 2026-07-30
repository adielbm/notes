# Discrete Fourier Transform (DFT)

**Discrete Fourier Transform (DFT)** is a mathematical transformation that transforms a sequence of complex numbers into another sequence of complex numbers.

The DFT of a sequence $(a_0, a_1, \ldots, a_{n-1})$ is defined as: 

$\begin{bmatrix} a_0 + a_1\omega ^0 + \ldots + a_{n-1}\omega ^{0(n-1)} \\ a_0 + a_1\omega ^1 + \ldots + a_{n-1}\omega ^{1(n-1)}\\ \vdots \\ a_0 + a_1\omega ^{n-1} + \ldots + a_{n-1}\omega ^{(n-1)(n-1)} \end{bmatrix}= \begin{bmatrix} 1 & 1 & 1 & \ldots & 1 & 1 \\ 1 & \omega & \omega^2 & \ldots & \omega^{n-2} & \omega^{n-1} \\ 1 & \omega^2 & \omega^4 & \ldots & \omega^{2(n-2)} & \omega^{2(n-1)} \\ \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\ 1 & \omega^{n-2} & \omega^{2(n-2)} & \ldots & \omega^{(n-2)(n-2)} & \omega^{(n-2)(n-1)} \\ 1 & \omega^{n-1} & \omega^{2(n-1)} & \ldots & \omega^{(n-1)(n-2)} & \omega^{(n-1)(n-1)} \end{bmatrix} \begin{bmatrix} a_0 \\ a_1 \\ a_2 \\ \vdots \\ a_{n-2} \\ a_{n-1} \end{bmatrix}$ 

- $\omega$ is an $n$th primitive root of unity, $\displaystyle\omega=e^{\frac{2\pi i}{n}}$
- DFT is a linear transformation that can be represented by a matrix multiplication of the **DFT matrix** and the sequence
- The DFT matrix with $\omega$ is defined as: $D(\omega)_{ij}=\omega^{ij}$ for $i,j=0,1,\ldots,n-1$
- Inverse DFT (IDFT):
	- The DFT matrix is invertible and its inverse is the **Inverse DFT (IDFT)** matrix: $D(\omega)^{-1}=\frac{1}{n}D(1/\omega)$
	- Since $\omega$ is a primitive $n$th root of unity, then $1/\omega$ is also a primitive $n$th root of unity


# Fast Fourier Transform (FFT)

- A polynomial $f(x)$ can be written as $f(x)=f_e(x^2)+xf_o(x^2)$ where: 
	- $f_e$ and $f_o$ are the even and odd parts of $f$ and their degrees are $\frac{n}{2}$
- **Fast Fourier Transform (FFT)** is an algorithm that computes the Discrete Fourier Transform (DFT) of a sequence, or its inverse (IDFT).

- Input: 
	- Coefficients $(a_0, a_1, \ldots, a_{n-1})$ of a polynomial $f$ of degree $n-1$
		- $n$ must be a power of $2$
	- $\omega$ is an $n$th primitive root of unity
		- $\omega=e^{\frac{2\pi i}{n}}$ 
- Algorithm:
	- Evaluate $f_e(x)=a_0+a_2x+a_4x^2+\ldots+a_{n-2}x^{\frac{n}{2}-1}$ at the even powers of $\omega$
	- Evaluate $f_o(x)=a_1+a_3x+a_5x^2+\ldots+a_{n-1}x^{\frac{n}{2}-1}$ at the even powers of $\omega$
	- Compute $f(\omega^k)=f_e((\omega^2)^k)+\omega^k f_o((\omega^2)^k)$ for $k=0,1,\ldots,n-1$
	- Return the values $f(\omega^0), f(\omega^1), \ldots, f(\omega^{n-1})$
- Time Complexity: $T(n)=2T(n/2)+O(n)\implies T(n)=O(n\log n)$


## Inverse FFT (IFFT)

- To perform inverse DFT (IDFT), we can perform $\frac{1}{2n}\mathrm{FFT}(a,1/\omega)$
 












- DFT
- $\displaystyle X_{k}=\sum _{n=0}^{N-1}x_{n}\cdot e^{-i2\pi {\tfrac {k}{N}}n}$


>using in FFT for set of sums of elements in A and in B https://stackoverflow.com/questions/58345813/how-to-find-all-sums-of-two-sets-in-onlogn-time-arithmetic-and-comparisons