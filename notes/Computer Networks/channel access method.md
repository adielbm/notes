
- a **channel access method** (or **multiple access method**)
	- channel partitioning (or channelization) protocols
		- Frequency-division multiple access (FDMA)
		- Time-division multiple access (TDMA)
		- [[#Code-division multiple access (CDMA)]]
		- [[#Orthogonal frequency-division multiple access (OFDMA)]]
	- random access (or contention-based) protocols
		- ALOHA
		- [[#CSMA]]
			- [[#CSMA/CD]]
			- [[#CSMA/CA]]
	- controlled access (or taking-turns) protocols
		- token passing
- **multiple access protocol**



## CSMA

- **carrier sense multiple access** (**CSMA**) 
	- "A contention access method in which each station listens to the line before transmitting data" [@Forouzan, 2012]
	- "...means that multiple stations can listen to the link and detect when it is in use or idle" [@Peterson, 2020]



- **1-persistent**
	- Sense channel
	- If channel is idle
	    - transmit frame
		    - if transmission is successful, done
		    - else, wait random time and continue sensing
	- Else
		- Continue sensing
- **non-persistent**
	- Sense channel
	- If channel is idle
		- transmit frame
		- if transmission is successful
			- done
		- else
			- 
	- Else
		- Wait random backoff time
		- Sense again
- **p-persistent**
	- Sense channel at slot boundary
	- If channel is idle
		- With probability $p$, transmit frame
		- With probability $1-p$, wait for the beginning of the next time slot and sense again
			- if idle, transmit frame
			- if busy, Wait for Next Time Slot
	- if busy, Wait for Next Time Slot

### CSMA/CD

- **CSMA/CD** (**collision detection**)
	- "An access method in which stations transmit whenever the transmission medium is available and retransmit when collision occurs" [@Forouzan, 2012]
	- "The CSMA method does not specify the procedure following a collision. CSMA/CD augments the algorithm to handle the collision" [@Forouzan, 2012]
	- "CSMA/CD is used to improve CSMA performance by terminating transmission as soon as a collision is detected, thus shortening the time required before a retry can be attempted." (Wikipedia)
	- "With the growing popularity of Ethernet switches in the 1990s, IEEE 802.3 deprecated Ethernet repeaters in 2011, making CSMA/CD and half-duplex operation less common and less important." (Wikipedia)

- $\displaystyle t_{\text{tx}} \geq 2 \cdot t_{\text{prop}}$
- $\displaystyle \text{slot-time} = \frac{n_\text{min}}{R}= 2 t_{\text{prop}}$
	- $t_{\text{prop}}=\frac{d}{v}$ is the [[Computer Networks/Performance#Latency|propagation delay]]
	- $n_\text{min}=R \cdot 2 t_{\text{prop}}$ is the minimum frame size
	- slot time examples:
		- (10 Mbps Ethernet) $51.2\,\mathrm{\mu s} =\frac{512\,\text{bits}}{10 \times 10^6\,\text{bps}}$
			- (that implies that $t_{\text{prop}}=\frac{d}{v}=25.6$, thus $d \approx \frac{2}{3}c\times 25.6\, \mu s \approx 5115 \,\text{m}$, however, some 802.3 standards limit (2.5 km (4 repeaters)) include large safety margins)

- CSMA/CD procedure:
	- $n=0$ (the number of collisions for the frame (up to a maximum value, e.g., $n_\text{max}=10$))
	- (1) persistence method
	- while (not done and not collision)
		- transmit
	- if collision detected:
		- send a jamming signal
		- $n = n+1$
		- if $n>n_\text{max}$, abort
		- choose random integer $k\in[0, 2^n - 1]$
		- wait $\text{backoff time}=k \times \text{slot time}$
		- go back to (1)

- **jam signal** (or **jamming signal**)

### CSMA/CA

- **CSMA/CA** (**collision avoidance**)
	- "An access method in wireless LANs that avoids collision by forcing the stations to send reservation messages when they find the channel is idle" [@Forouzan, 2012]



## Code-division multiple access (CDMA)

- $u \in \{U_{1},U_{2},\dots,U_{n}\}$ is a user (sender)
	- $\mathbf{c}_u = [c_{u,1}, c_{u,2}, \dots, c_{u,k}]$ is the **chiping code** for user $u$, where $c_{u,i} \in \{-1, +1\}$ is the $i$-th **chip** of the code.
	- **code length** (or **spreading factor**) $k$ is the number of chips used to represent (spread) a single data bit.
	- $n$ is the number of stations (users)
- The user sends $\mathbf{s}_u = b_u \mathbf{c}_u$, where $b_u \in \{-1, +1\}$ is the data bit for user $u$. where $b_u =-1$ if the user wants to send data bit 0, and $b_u =+1$ if the user wants to send data bit 1.
- The **received signal** is $\displaystyle\mathbf{r}=\sum_{u=1}^{n} \mathbf{s}_u = \sum_{u=1}^{n} b_u \mathbf{c}_u=\left( \sum_{u=1}^{n}b_{u}c_{u,1},\dots,\sum_{u=1}^{n}b_{u}c_{u,k} \right)$
- The data bit for user $u$ recovered by receiver is $\displaystyle \hat{b}_u=\text{sign}\left(\mathbf{r} \cdot \mathbf{c}_u\right)=\frac{1}{k}(\mathbf{r} \cdot \mathbf{c}_u)$
	- $\hat{b}_u =0$ means user $u$ did not send any data bit.
	- $\hat{b}_u =+1$ means user $u$ sent data bit $+1$ (i.e., the user wants to send 1)
	- $\hat{b}_u =-1$ means user $u$ sent data bit $-1$ (i.e., the user wants to send 0)
	- $\mathbf{r} \cdot \mathbf{c}_u$ is called the **correlation value** $R_{u}$ 

## Orthogonal frequency-division multiple access (OFDMA)

- resource element (RE)
- transmission time interval (TTI)
- physical resource block (PRB)
- channel quality indicator (CQI)