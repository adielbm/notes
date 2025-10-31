#### Bandwidth 

- $\text{data rate}=\frac{\text{data transmitted}}{\text{time taken}}$
- $\text{Bit rate}=\frac{\text{ \# bits transmitted}}{\text{Time taken}}$ (unit: bits per second, bps) 
- The **bit rate** $R$ (קצב נתונים) is the number of bits transmitted per a unit of time (unit: **bps**, bits per second)
- The **data bandwidth** (or **digital bandwidth** or simply **bandwidth**) is the maximum data rate that can be transmitted over a communication channel
- transmission rate? #todo

###### Throughput

- **Network throughput** (or just **throughput**) (in bps) is a measurement of the average amount of data that _actually_ passes through a network in a specific time frame, taking into account the impact of latency

#### Latency 
$$\text{Latency} = t_{\text{prop}} + t_{\text{tx}} + t_\text{queue}$$
- latency is the amount of time it takes for a packet of data to travel between two points across a network connection
- latency (also called delay (?) #todo) is the time it takes for data to pass from one point on a network to another
- (**Propagation delay**) $t_{\text{prop}} = \frac{d}{v}$
	- $d$ is the length of the physical link (in $\mathrm{m}$)
	- $v$ is the propagation speed in the medium (in $\mathrm{m/s}$).
		- (Typically, $v \approx \frac{2}{3}c$, where $c$ is the speed of light in vacuum.)
- (**Transmission delay**) $t_{\text{tx}} =\frac{L}{R} = \frac{\text{length}\,\textsf{[bits]}}{\text{transmission rate}\,\textsf{[bps]}}$
- (**Queueing delay**)
- (**Processing delay**)
- **round-trip time** (**RTT**) (or (**round-trip delay** (**RTD**)): the time it takes for a signal to travel from the source to the destination and back again
	- $\text{RTT} \approx 2 \times t_{\text{prop}}$

#### Bandwidth-delay product

- The **bandwidth-delay product**, $\text{RTT}  \times \text{bandwidth}$, in bits, is the amount of data that can be in transit in the network at any given time


#### Stop-and-wait

$\displaystyle \text{Throughput}\,\textsf{[bps]} = \frac{\text{frame size}\,\textsf{[bits]} }{\text{RTT}}$

#### File transfer time

- Minimum transfer time: $\text{RTT} + t_{\text{tx}}$

- $T_\text{total} =t_\text{handshake} + t_\text{data}$
	- $t_\text{handshake}=k\times \text{RTT}$, where $k$ is the number of RTTs needed for handshaking
		- $2 \times \text{RTT}$ #todo
	- (Continuous pipeline) $t_\text{data} = N\cdot t_{\text{tx}} + t_{\text{prop}}$ 
	- (Stop-and-wait) $t_\text{data} = (N-1)\cdot (t_{\text{tx}}+\text{RTT}) + t_{\text{tx}} + t_{\text{prop}}$
	- (window-limited) $t_\text{data} = (K-1)\cdot \text{RTT} + t_{\text{prop}}$
		- $K=\left\lceil\frac{N}{W}\right\rceil$ 
		- $W$ is the window size (packets per RTT)
	- $N=\left\lceil\frac{\text{File Size}}{\text{Packet Size}}\right\rceil$ is the number of packets needed to transmit the file
