
- $T_\text{total} =t_\text{handshake} + t_\text{data}$
	- $t_\text{handshake}=k\times \text{RTT}$, where $k$ is the number of RTTs needed for handshaking
		- $2 \times \text{RTT}$ #todo
	- (Continuous pipeline) $t_\text{data} = N\cdot \text{Transmit} + \text{Propagation}$ 
	- (Stop-and-wait) $t_\text{data} = (N-1)\cdot (\text{Transmit}+\text{RTT}) + \text{Transmit} + \text{Propagation}$
	- (window-limited) $t_\text{data} = (K-1)\cdot \text{RTT} + \text{Propagation}$
		- $K=\left\lceil\frac{N}{W}\right\rceil$ 
		- $W$ is the window size (packets per RTT)



- 2 RTT + N * transmit + propagation
- 2 RTT + (N-1) * (transmit + RTT) + transmit + propagation
- 2 RTT + (ceil(N/(packets-per-RTT))-1) * RTT + propagation
