
- The **transport layer** (or **layer 4**)
- **Transport PDU**s (TPDU) are typically called **segments**
	- UDP datagram 
	- TCP segment
- **maximum segment size** (**MSS**)
- **client-server** (model/paradigm/architecture)
	- **client**
	- **server**
- **port** number
	- well-known port numbers
	- ephemeral port number
	- ICANN ranges:
		- Well-known ports 
			- 0 to 1023
			- assigned and controlled by ICANN
		- Registered ports
			- 1024 to 49,151 
		- Dynamic ports
			- 49,152 to 65,535
			- (neither controlled nor registered)
- **socket**

- Reliable byte stream

- **reliable** and **unreliable**
	- a reliable protocol notifies the sender whether data has been received correctly
		- reliable protocols typically bear more overhead 

- remote procedure call (RPC)
	- SunRPC, DCE-RPC, gRPC

- Real-time Transport Protocol (RTP

# UDP

- UDP
	- connectionless
	- unreliable

### header 

![[UDP header.svg]]


# TCP 

- **Transmission Control Protocol (TCP)**
	- characteristics:ont
		- connection-oriented
			- full-duplex
		- reliable
	- functions:
		- 

- $\text{EstimatedRTT}_{n+1} = (1 - \alpha) \times \text{EstimatedRTT}_n + \alpha \times \text{SampleRTT}$ 
- $\text{DevRTT}_{n+1} = (1 - \beta) \times \text{DevRTT}_n + \beta \times |\text{SampleRTT} - \text{EstimatedRTT}_n|$ 
	- (Jacobson & Karels)
- (typical values: $\alpha = 0.125$, $\beta = 0.25$)
- $\text{TimeoutInterval} = \text{EstimatedRTT}_{n+1} + 4 \times \text{DevRTT}_{n+1}$

- **maximum segment lifetime** (MSL)
### header 

![[TCP header.svg]]

### Connection establishment

- Connection establishment using **three-way handshake**:
	- SYN
	- SYN-ACK
	- ACK


### Connection termination

- Connection termination using four segments:
	- FIN
	- ACK
	- FIN
	- ACK


![](https://upload.wikimedia.org/wikipedia/commons/5/55/TCP_CLOSE.svg)
