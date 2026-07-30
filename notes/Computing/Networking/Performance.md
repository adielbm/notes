#### Bandwidth 

- $\text{data rate}=\frac{\text{data transmitted}}{\text{time}}$
	- (**bit rate** $R$) (קצב נתונים)
		- $\textbf{bit-rate}=\frac{\text{data transmitted}\,\textsf{[bits]}}{\text{time}\,\textsf{[sec]}}$ (unit: **bits per second** (or **bps**)) 
- **data bandwidth** (or **digital bandwidth** or simply **bandwidth**)
	- 
- **network throughput** (or just **throughput**) (in bps)
	- "The amount of data that a medium transmits, either theoretically or practically, during a given period of time." [@West, 2021]
	- "Throughput at any point in a network is defined as the number of bits passing through the point in a second, which is actually the transmission rate of data at that point." [@Forouzan, 2012]
- "The throughput is a measure of how fast we can actually send data through a network. Although, at first glance, bandwidth in bits per second and throughput seem the same, they are different. ...the bandwidth is a potential measurement of a link; the throughput is an actual measurement of how fast we can send data." [@Forouzan, 2012]
- "The terms _bandwidth_ and _throughput_ are often used interchangeably" [@Kozierok, 2005]

#### Latency 
$$\text{Latency} = t_{\text{prop}} + t_{\text{tx}} + t_\text{queue}$$
- **latency**
	- the amount of time it takes for a packet of data to travel between two points across a network connection
	- "_The delay between the transmission of a signal and its receipt_" [@West, 2021]
	- 
- latency (also called delay (?) #todo) is the time it takes for data to pass from one point on a network to another
- (**Propagation delay**) $t_{\text{prop}} = \frac{d}{v}$
	- $d$ is the length of the physical link (in $\mathrm{m}$)
	- $v$ is the propagation speed in the medium (in $\mathrm{m/s}$).
		- (Typically, $v \approx \frac{2}{3}c$, where $c$ is the speed of light in vacuum.)
- (**Transmission delay**) $t_{\text{tx}} =\frac{L}{R} = \frac{\text{length}\,\textsf{[bits]}}{\text{transmission rate}\,\textsf{[bps]}}$
- (**Queueing delay**)
	- (internet layer) "The time a packet waits in input and output queues in a router" [@Forouzan, 2012]
- (**Processing delay**)
	- (internet layer) "Time required to process a packet in a router or a destination host" [@Forouzan, 2012]
- **round-trip time** (**RTT**) (or (**round-trip delay** (**RTD**)): the time it takes for a signal to travel from the source to the destination and back again
	- $\text{RTT} \approx 2 \times t_{\text{prop}}$
- (packet switched network with $S$ switches (i.e. $S+1$ links))
	- $\text{source} \to \text{switch}_1 \to \cdots \to \text{switch}_S \to \text{destination}$
	- (store-and-forward) $T= (S+1)\cdot (t_{\text{tx}} + t_{\text{prop}})$ (time to send a packet from source to destination)
	- (cut-through) $T= t_{\text{tx}} + (S+1)\cdot t_{\text{prop}}+ S\cdot \frac{H}{R}$.
		- $H$ is the header size (in bits)
		- $\frac{H}{R}$ is the cut-through delay at each switch

- (_effective throughput_) $\displaystyle\frac{\text{size}\,\textsf{[bits]}}{\text{RTT}+\frac{\text{size}\,\textsf{[bits]}}{\text{bandwidth}\,\textsf{[bps]}}}$


- (stop-and-wait)
	- $\displaystyle \text{throughput}\,\textsf{[bps]} = \frac{\text{packet-size}\,\textsf{[bits]} }{\text{RTT}}$
		- $\displaystyle\text{RTT}=N\cdot \left(\frac{\text{packet-size}\,\textsf{[bits]}+\text{ack-size}\,\textsf{[bits]}}{\text{bandwidth}\,\textsf{[bps]}} + 2\cdot t_{\text{prop}}\right)$
			- $N$ is the number of links in one direction 

#### Bandwidth-delay product

- **bandwidth-delay product** (in bits)
	- $\text{RTT}\times\text{bandwidth}$
	- the amount of data that can be in transit in the network at any given time
	- "The bandwidth-delay product defines the number of bits that can fill the link." [@Forouzan, 2012]
	- link utilization = $\displaystyle\frac{\text{data in flight}}{\text{bandwidth-delay product}}$




#### File transfer time

- $T_\text{total} =t_\text{handshake} + t_\text{data}+t_{\text{prop}}$
	- $t_\text{handshake}=h\times \text{RTT}$, where $h$ is the number of RTTs needed for handshaking
		- (often $h=2$)
	- $t_{\text{prop}} \approx \frac{\text{RTT}}{2}$
	- $N=\left\lceil\frac{\text{file-size}\,\textsf{[bits]}}{\text{packet-size}\,\textsf{[bits]}}\right\rceil$ is the number of packets needed to transmit the file
	- $t_{\text{tx}}=\frac{\text{packet-size}\,\textsf{[bits]}}{\text{bandwidth}\,\textsf{[bps]}}$ is the transmission time for one packet
	- $N\cdot t_{\text{tx}}\approx \frac{\text{file-size}\,\textsf{[bits]}}{\text{bandwidth}\,\textsf{[bps]}}$ is the total transmission time for all packets
	- (Continuous pipeline) 
		- $t_\text{data} = N\cdot t_{\text{tx}}$ 
	- (Stop-and-wait) 
		- $t_\text{data} = N\cdot t_{\text{tx}} + (N-1)\cdot \text{RTT}$
	- (window limited to $W$ packets) 
		- $t_\text{data} = (K-1)\cdot \text{RTT}$
			- $K=\left\lceil\frac{N}{W}\right\rceil$ (number of RTT rounds needed to send all packets)
			- $W$ is the window size (packets can be sent per RTT)
	- (exponential increase) 
		- $t_\text{data} = (\left\lceil \log_2(N+1) \right\rceil -1)\cdot \text{RTT}$

## draft  

- (**Channel utilization**) $U=\frac{\text{throughput}}{R}$

