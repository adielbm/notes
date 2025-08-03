
- A **link** is 


- $\text{data rate}=\frac{\text{data transmitted}}{\text{time taken}}$
	- $\text{Bit rate}=\frac{\text{ \# bits transmitted}}{\text{Time taken}}$ (unit: bits per second, bps) 
	- The **bit rate** $R$ (קצב נתונים) is the number of bits transmitted per a unit of time (unit: **bps**, bits per second)
	- The **data bandwidth** (or **digital bandwidth** or simply **bandwidth**) is the maximum data rate that can be transmitted over a communication channel
- Throughput
	- Throughput is a measurement of the average amount of data that _actually_ passes through a network in a specific time frame, taking into account the impact of latency
- Latency 
	- latency is the amount of time it takes for a packet of data to travel between two points across a network connection
	- Latency is the time it takes for data to pass from one point on a network to another


Latency = Propagation + Transmit + Queue
Propagation =  Distance/SpeedOfLight
Transmit = Size/Bandwidth


- Propagation delay





- The **(analog) bandwidth** (or **frequency bandwidth**) (רוחב סרט) is the range of frequencies that a channel can transmit, defined as $B = f_\text{high} - f_\text{low}$ (unit: Hz)
	- **Nyquist rate** = $2B$
- The **symbol rate** (or **baud rate**) $R_s$ is the number of symbols transmitted per unit time 
	- the number of times the signal changes state per second 
	- (unit: baud (Bd) = symbols per second)
- The **symbol duration time** $T_s$ is the time taken to transmit one symbol (unit: seconds)
	- $T_s = \frac{1}{R_s}$

- $R=R_s \cdot \log_2(M)$
	- $R_s$ = symbol rate (baud)
	- $M$ = number of symbols
	- $R$ = bit rate (bps)
- $R_s \leq 2B$
- (**Nyquist's formula**) $R \leq 2B \cdot \log_2 M$
	- $B$ is the bandwidth of the channel (Hz)


- $\displaystyle\frac{\text{data}}{\text{data}+\text{overhead}}$





- Connection-oriented service
- Connection-less service



- Link Classification
	- Last-Mile
	- Backbone
	- LAN




# encoding 

- baseline wander


![350](https://upload.wikimedia.org/wikipedia/commons/9/95/Digital_signal_encoding_formats-en.svg "An arbitrary bit pattern in various binary line code formats")


- non-return to zero (NRZ or NRZ‑L): low: 0, high: 1
- non-return to zero inverted (NRZI): change at the start: 1, no change at the start: 0
- Manchester: transition at the midpoint. 
	- (G. E. Thomas) low-to-high: 1, high-to-low: 0
	- (IEEE 802.3) low-to-high: 0, high-to-low: 1
- Differential Manchester: transition at the midpoint. change at the start: 0, no change at the start: 1


| Data    | Signal                | Encoding/Conversion Technique                  |
| ------- | --------------------- | ---------------------------------------------- |
| Analog  | Analog                | AM, FM                                         |
| Digital | (Square-wave) digital | NRZ, NRZI, Manchester, Differential Manchester |
| Digital | (Discrete) analog     |                                                |
| Analog  | Digital               |                                                |
