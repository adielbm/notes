

- **transmission medium**
	- guided media
	- unguided media

- A **frequency band** is an interval in the frequency domain, limited by a lower frequency and an upper frequency. (Wikipedia)
- The **spectrum** $[f_\text{low}, f_\text{high}]$ of a signal is the range of frequencies it contains
- The **center frequency** $f_c$ of a channel is defined in two ways:
	- $f_c = \frac{f_\text{high} + f_\text{low}}{2}$ (arithmetic mean, most common)
	- $f_c = \sqrt{f_\text{high} \cdot f_\text{low}}$ (geometric mean)
- **(analog) bandwidth** (or **frequency bandwidth**) (רוחב סרט) is the difference between the upper and lower frequencies in a continuous band of frequencies. (Wikipedia) 
	- (unit: Hz)
	- $B = f_\text{high} - f_\text{low}$
	- may refer to:
		- passband bandwidth
			- passband spectrum $[f_c - W,\, f_c + W]$
			- bandwidth $B = 2W$
		- baseband bandwidth

- The **effective bandwidth** refers to the range of frequencies within which a significant portion of the signal's power or energy is concentrated.
	- "The bandwidth of a signal after noise and other factors such as environmental conditions have been applied." [@West, 2021]
- **fractional bandwidth**: $B_\text{frac} = \frac{B}{f_c}$


- The **symbol rate** (or **baud rate**) $R_s$ is the number of symbols transmitted per unit time 
	- the number of times the signal changes state per second 
	- (unit: baud (Bd) = symbols per second)
- The **symbol duration time** $T_s$ is the time taken to transmit one symbol (unit: seconds)
	- $T_s = \frac{1}{R_s}$

- (**Nyquist's formula**) $R = R_s \cdot \log_2(M) \leq 2B \cdot \log_2 (M)=C$
	- (for a noiseless channel)
	- $R_s$: symbol rate (in $\mathrm{baud}$)
	- $M$: modulation order (number of distinct symbols, or distinct amplitude (or phase, or frequency) levels)
	- $R$: bit rate (in $\textsf{bps}$)
	- $N=\log_2(M)$ = number of bits encoded per symbol
	- $B$ is the bandwidth of the channel (in $\mathrm{Hz}$)
	- $R_{\text{max}}=2B$ is the **Nyquist rate** (in symbols per second (baud)), which is the maximum symbol rate 
	- $C$ is the channel capacity (in bps) (maximum bit rate)


- The **Nyquist rate** of a signal is defined as $2f_\text{max}$ (in samples per second (Hz)), where $f_\text{max}$ is the highest frequency present in the signal (in Hz)
- The **Nyquist frequency** (in Hz) is defined as $\displaystyle {f_s}/{2}$, where $f_s$ is the sampling rate (in samples per second (Hz)), and is the highest frequency that can be accurately represented when sampling at $f_s$.

- (**Shannon–Hartley theorem**) $C = B \log_2\bigl(1 + \mathrm{SNR}\bigr)$ is the **channel capacity** (in bps) (maximum possible data rate) of a channel with bandwidth $B$ (in Hz) and signal-to-noise ratio $\mathrm{SNR}$
- $C/B$ is the **spectral efficiency** (in bps/Hz)
- $\mathrm{SNR}=\frac{S}{N}$: signal-to-noise ratio (SNR) (unitless)
	- $\mathrm{SNR_{dB}}=10\log_{10}\left( \frac{S}{N} \right)$: signal-to-noise ratio (in dB)
	- $S$: signal power (in watts)
	- $N$: noise power (in watts)


- **Nyquist–Shannon sampling theorem** #todo
- **intersymbol interference** (ISI)


- $\displaystyle\frac{\text{data}}{\text{data}+\text{overhead}}$




# Filter

- **carrier wave** (or **carrier signal** or just **carrier**)
	- carrier frequency $f_c = \frac{f_L + f_H}{2}$
- passband $[f_L, f_H]$
- sideband
	- upper sideband (USB)
		- $[f_{C},f_{H}]$
	- lower sideband (LSB)
		- $[f_{L},f_{C}]$
- baseband
	- baseband signal
	- baseband channel
- broadband
- narrowband
- baseband signal
- bandpass signal

- bandpass filter


![200](https://upload.wikimedia.org/wikipedia/commons/b/b8/Passband_schematic3.png)



# Modulation 

- **modulator**, **demodulator**


## Analog Modulation

analog-analog

AM, FM, PM

## Digital Modulation

$$\text{Sender} \xrightarrow[\mathrm{Digital\atop data}]{\texttt{0101}\dots} \boxed{\text{Modulator}} \xrightarrow[\mathrm{Analog \atop signal}]{\Large\sim} \boxed{\text{Demodulator}} \xrightarrow[\mathrm{Digital\atop data}]{\texttt{0101}\dots} \text{Receiver}$$


- **amplitude shift keying** (**ASK**)
	- **on–off keying** (**OOK**) (or **binary ASK** (**BASK**))
- **frequency shift keying** (**FSK**)
- **phase shift keying** (**PSK**)
- **quadrature amplitude modulation** (**QAM**)


Digital data , Discrete analog signal




- **DAC** (digital-to-analog converter) is a device that converts a digital signal to an analog signal
	- Spectral band
	- frequency band
	- Digital data
	- A **digital signal** is a signal that represents data as a sequence of discrete values
	- analog signal
	- analog data 

DSL modem

## Pulse Modulation	

analog-to-digital

$$\xrightarrow[\text{Analog}]{\displaystyle s(t)} \boxed{\displaystyle \mathrm{Sampler \atop \it{T}}} \xrightarrow[\text{Sampled values}]{\displaystyle s[n] =s(nT)} \boxed{\displaystyle \mathrm{Quantizer \atop }} \xrightarrow[\mathrm{Quantized \atop values}]{\displaystyle \hat{s}[n]} \boxed{\displaystyle \mathrm{Encoder \atop}} \xrightarrow[\mathrm{Digital \atop sequence}]{\displaystyle  b_1, b_2, \dots}$$

- **ADC** (analog-to-digital converter) is a device that converts a continuous analog signal to a discrete digital signal
	- **Sampling** converts a continuous-time signal $s(T)$ to a discrete-time signal, a sequence of numbers $s(nT)$, where: 
		- $T$ is the **sampling period** (or **sampling interval**).
		- $f_s = 1/T$  is the **sampling frequency** (or **sampling rate**) which is the number times per second the original analog voltage is measured ("sampled")
	- **Quantization** replaces input values by an approximation from a finite set of values
		- The **resolution** (or **bit depth**) is the number of bits or values for the voltage of each sample (=measurement)
		- The difference between the original continuous analog signal and its digital approximation is called the **quantization error** (or **quantization noise**)
	- $\text{Sampling rate} \times \text{Bit depth} = \text{Bit rate}$

![[Pulse modulation.svg]]




pulse amplitude modulation (PAM)

# transmission


- digital transmission - the data is digital
	- (analog signal) 
		- the analog signal is propagated through repeaters, each repeater recoveres the digital data and produce a new analog signal.
	- (digital signal)
		- repeaters regenerate the signal
- analog transmission
	- the data is digital/analog
	- the signal is analog

# Multiplexing
![200](https://upload.wikimedia.org/wikipedia/commons/6/6f/Multiplexing_diagram.svg)


- guard band
- **frequency-division multiplexing** (**FDM**)
- **time-division multiplexing** (**TDM**)
- **wavelength-division multiplexing** (**WDM**)
- **orthogonal frequency-division multiplexing** (**OFDM**)
	- subcarrier
	- bandwidth $Nf_b$ centered at $f_0$
	- 
	- split a signal (rate $R$) into $N$ signals of rate $R/N$.
		-  $f_0+(N-1)f_b/2$  
		- ...
		-  $f_0+f_b/2$  
		-  $f_0-f_b/2$  
		- ...
		- $f_0-(N-1)f_b/2$  

- CDM

- "When multiplexing is applied in the support of many users at one time, it’s called [[#channel access method|multiple access]]." [@West, 2021] 

## channel access method

- a **channel access method** (or **multiple access method**)
	- Frequency-division multiple access (FDMA)
	- Time-division multiple access (TDMA)
	- [[#Code-division multiple access (CDMA)]]
	- [[#Orthogonal frequency-division multiple access (OFDMA)]]

### Code-division multiple access (CDMA)

- $u \in \{U_{1},U_{2},\dots,U_{k}\}$ is a user (sender)
	- $\mathbf{c}_u = [c_{u,1}, c_{u,2}, \dots, c_{u,m}]$ is the **chiping code** for user $u$, where $c_{u,i} \in \{-1, +1\}$ is the $i$-th chip of the code.
	- **code length** (or **spreading factor**) $m$ is the number of chips used to represent (spread) a single data bit.
- The user sends $\mathbf{s}_u = b_u \mathbf{c}_u$, where $b_u \in \{-1, +1\}$ is the data bit for user $u$. where $b_u =-1$ if the user wants to send data bit 0, and $b_u =+1$ if the user wants to send data bit 1.
- The **received signal** is $\displaystyle\mathbf{r}=\sum_{u=1}^{k} \mathbf{s}_u = \sum_{u=1}^{k} b_u \mathbf{c}_u$
- The data bit for user $u$ recovered by receiver is $\displaystyle \hat{b}_u=\text{sign}\left(\mathbf{r} \cdot \mathbf{c}_u\right)=\frac{1}{m}(\mathbf{r} \cdot \mathbf{c}_u)$
	- $\hat{b}_u =0$ means user $u$ did not send any data bit.
	- $\hat{b}_u =+1$ means user $u$ sent data bit $+1$ (i.e., the user wants to send 1)
	- $\hat{b}_u =-1$ means user $u$ sent data bit $-1$ (i.e., the user wants to send 0)
	- $\mathbf{r} \cdot \mathbf{c}_u$ is called the **correlation value** $R_{u}$ 

### Orthogonal frequency-division multiple access (OFDMA)

- resource element (RE)
- transmission time interval (TTI)
- physical resource block (PRB)
- channel quality indicator (CQI)


# Encoding 

- digital to digital 
- **baseline wander**
- **DC bias** (or **DC component**)


![350](https://upload.wikimedia.org/wikipedia/commons/9/95/Digital_signal_encoding_formats-en.svg "An arbitrary bit pattern in various binary line code formats")



| Signal                    |                             | 1                      | 0                   |
| ------------------------- | --------------------------- | ---------------------- | ------------------- |
| NRZ–L                     | non-return to zero level    | high                   | low                 |
| NRZ-I                     | non-return to zero inverted | transition             | no transition       |
| Manchester (IEEE 802.3)   | midpoint transition         | high-to-low            | low-to-high         |
| Manchester (G. E. Thomas) | midpoint transition         | low-to-high            | high-to-low         |
| Differential Manchester   | always midpoint transition  | no change at the start | change at the start |
|                           |                             |                        |                     |




<iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  width="100%"
  height="500px"
  src="https://adielbm.github.io/line-code/"/>

### Manchester


<table class="wikitable" style="text-align:center;"> <caption>Encoding data using exclusive or logic (802.3 convention)</caption> <tbody><tr> <th>Original data</th> <th> </th> <th>Clock</th> <th> </th> <th>Manchester value</th></tr> <tr> <td rowspan="2" style="vertical-align: middle;" align="center">0</td> <td rowspan="4" style="vertical-align: middle;" align="center">XOR<br></td><td>0</td> <td rowspan="4" style="vertical-align: middle;" align="center">=</td> <td>0</td></tr> <tr> <td>1</td> <td>1</td></tr> <tr> <td rowspan="2" style="vertical-align: middle;" align="center">1</td> <td>0</td> <td>1 </td></tr> <tr> <td>1</td> <td>0</td></tr></tbody></table>



### 4B/5B

- No code has more than one leading 0.
- No code has more than two trailing 0s.

| Data | 4B5B code |     |
| ---- | --------- | --- |
| 0000 | 11110     |     |
| 0001 | 01001     |     |
| 0010 | 10100     |     |
| 0011 | 10101     |     |
| 0100 | 01010     |     |
| 0101 | 01011     |     |
| 0110 | 01110     |     |
| 0111 | 01111     |     |
| 1000 | 10010     |     |
| 1001 | 10011     |     |
| 1010 | 10110     |     |
| 1011 | 10111     |     |
| 1100 | 11010     |     |
| 1101 | 11011     |     |
| 1110 | 11100     |     |
| 1111 | 11101     |     |



