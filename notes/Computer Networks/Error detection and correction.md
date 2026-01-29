
- **error detection and correction** (**EDAC**) (or **error control**)
	- "The handling of errors in data transmission." [@Forouzan, 2012]
- Error-detection codes
- **forward error correction** (FEC)
	- "The process that enables a receiver, upon detecting an error in the arriving data, to correct the error without further information from the transmitter." [@West, 2021] 
	- "Correction of errors at the receiver without retransmission." [@Forouzan, 2012]
- **error-correction codes** (or **error-correcting codes**) (ECC)

- **data bits** (or **dataword** or **message** or **(data) block**) (סיביות מידע, מילת מידע) 
	- $M$ of length $m$.
- **redundant bits** (or **redundancy**) (סיביות ביקורת) 
	- $R=f(M)$ of length $r$ (where $r \ll m$). 
- sender: 
	- transmits the **codeword** (מילת קוד) $P = (M,R)$ of length $n=m+r$. 
- receiver: 
	- receives $(M',R')$
	- checks if $R' = f(M')$, 
		- if yes, assume no error with high probability, 
		- else, error detected.
- There can be $2^m$ possible datawords, and $2^n$ possible codewords.
	- Thus, there are $2^{n}-2^{m}$ **invalid** codewords that can be used to detect errors.
- (**code rate**) $R_{c}=\frac{m}{n}$
- (**overhead**, תקורה) $\frac{r}{n}$
- (**redundancy**, יתירות) $\frac{r}{m}$ 

- A **bit error** is when a bit is received incorrectly (0 instead of 1 or vice versa)
- A **burst error** (or **error burst**) is when a sequence of bits is received incorrectly
- (**bit error ratio**) $\displaystyle\text{BER} = \frac{\text{\# bit errors}}{\text{Total transmitted bits}}$
- (**bit error probability**) $p_{e}=\mathrm{E}[\text{BER}]$

- A **code** (of length $n$) over an alphabet $\Sigma$ is a subset $\mathcal{C}\subseteq \Sigma^n$.
- A **codeword** is an element $c = (c_1,c_2,\ldots,c_n) \in \mathcal{C}$.
- An **encoder** is a function that maps messages to codewords: $\mathcal{E}: \Sigma^m \to \mathcal{C} \subseteq \Sigma^n$.
- The **Hamming distance** between two codewords $c_1,c_2 \in \mathcal{C}$ is $\displaystyle d(c_1,c_2) = |\{i : c_{1,i} \neq c_{2,i}, 1 \leq i \leq n\}|$ (the number of positions where they differ).
- The **Hamming weight** of a codeword $c \in \mathcal{C}$ is $\displaystyle w(c) = d(c,0^n)$ (the number of non-zero positions).
- The **error-correction capability** $t$ of a code $\mathcal{C}$ is the maximum number of bit errors that can be corrected
	- $\displaystyle t = \left\lfloor \frac{d_{\min} - 1}{2} \right\rfloor$
- The **error-detecting capability** $s$ of a code $\mathcal{C}$ is the maximum number of bit errors that can be detected
	- $\displaystyle s = d_{\min} - 1$ 
- The **minimum Hamming distance** of a code $\mathcal{C}$ is $\displaystyle d_{\min} = \min_{c_1 \neq c_2 \in \mathcal{C}} d(c_1,c_2)$.


### parity checks 


- even parity: $R = 0$ if number of 1s in $M$ is even, else $R = 1$
- odd parity: $R = 0$ if number of 1s in $M$ is odd, else $R = 1$
- two-dimensional parity check: $$\begin{array}{ccc|c} b_{1,1} & \cdots & b_{1,j} & r_1 \\ b_{2,1} & \cdots & b_{2,j} & r_2 \\ \vdots & \ddots & \vdots & \vdots \\ b_{i,1} & \cdots & b_{i,j} & r_i \\ \hline c_1 & \cdots & c_j & p \end{array}$$
	- $M$ is an $i \times j$ matrix of bits $b_{m,n}$
	- row parity bits $r_m$ for each row $m$
	- column parity bits $c_n$ for each column $n$
	- overall parity bit $p$

### internet checksum

(note: used in IP, not used in link layer)

- message is divided into words of 16 bits: $w_1, w_2, \ldots, w_m$
- the checksum is $R = \sim(w_1 + w_2 + \ldots + w_m)$ (where $\sim$ is the bitwise NOT operation. The sum is done using [[Computer Organization/Data Storage#Ones' complement|ones' complement addition]])
- the sender sends $(M,R)$
- the receiver computes $S = w_1' + w_2' + \ldots + w_m' + R'$ (using ones' complement addition) and checks if $\sim S = 0$, if yes, assume no error, else, error detected


### cyclic redundancy check (CRC)

- the message has $n+1$ bits
- $G(x)$ is the **generator polynomial** of degree $k$
- $M(x)$ is the **message polynomial** of degree $\text{deg}(M) \leq n$
- the transmitted word will be a polynomial $T(x)$ of degree $n+k$ such that $G(x) \mid T(x)$.
- $T(x)$ construction: 
	1. multiply $M(x)$ by $x^k$ to get $M'(x) = M(x) \cdot x^k$
	2. divide $M'(x)$ by $G(x)$ to get the remainder $R(x)$
	3. compute $T(x) = M'(x) - R(x)$
- the receiver receives $T'(x)=T(x)+E(x)$ where $E(x)$ is the **error polynomial** (non-zero coefficients indicate bit errors)
- the receiver checks if $G(x) \mid T'(x)$, if yes, it means that $E(x)=0$ (no error), else, error detected

<iframe width="100%" height="500" src="https://adielbm.github.io/crc-calculator/" frameborder="0"></iframe>




