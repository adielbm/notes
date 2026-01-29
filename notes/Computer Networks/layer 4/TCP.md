




# TCP 

- **Transmission Control Protocol (TCP)**
	- characteristics:
		- connection-oriented
			- full-duplex
		- reliable
		- byte-stream protocol
	- functions:
		- 

- **retransmission timeout** (**RTO**)
	- $\text{EstimatedRTT}_{n+1} = (1 - \alpha) \times \text{EstimatedRTT}_n + \alpha \times \text{SampleRTT}$ 
	- $\text{DevRTT}_{n+1} = (1 - \beta) \times \text{DevRTT}_n + \beta \times |\text{SampleRTT} - \text{EstimatedRTT}_n|$ 
		- (Jacobson & Karels)
	- (typical values: $\alpha = 0.125$, $\beta = 0.25$)
	- $\text{TimeoutInterval} = \text{EstimatedRTT}_{n+1} + 4 \times \text{DevRTT}_{n+1}$



- **fast retransmit**
	- when a sender receives 3 duplicate ACKs (4 identical ACKs in total) for the same segment, it assumes the subsequent segment was lost in transit. Instead of waiting for the timer to run out, the sender immediately retransmits the missing segment.



- **maximum segment lifetime** (**MSL**)
- **silly window syndrome** (**SWS**)

- **receive window** (**rwnd**) 
	- **advertised window**
- **congestion window** (**cwnd**)

- $2^{n}\geq\displaystyle \text{MSL}\,\text{[sec]} \times BW\,\text{[bps]}$
	- $n$ is the nubmer of bits in the sequence number field 
- $2^{m}\geq\displaystyle \text{RTT}\,\text{[sec]} \times BW\,\text{[bps]}$
	- $m$ is the nubmer of bits in the window size field 


- **TCP Fast Open** (**TFO**)

### header 

![[TCP header.svg]]


- (1st word)
	- Source port
	- Destination port
- (2nd word)
	- **sequence number** identifies byte positions
		- ($\textsf{SYN} = 1$) It represents the initial sequence number; actual data starts at sequence number + 1. 
		- ($\textsf{SYN} = 0$) It represents the sequence number of the first data byte in the segment.
- (3rd word)
	- **acknowledgment number** specifies the next sequence number expected, thereby acknowledging receipt of all preceding bytes. (**cumulative acknowledgment**, an ACK $n$ confirms everything up to byte $n-1$)
		- valid when $\textsf{ACK} = 1$
- (4th word)
	- **data offset** (**DOffset**) (TCP header length) in 4-byte words 
		- min: 5
		- max: 15 
	- reserved (3 bits)
	- flags:
		- **ACK** (acknowledgment): indicates that the _acknowledgment number_ is valid and the sender is confirming receipt of data.
		- **SYN** (synchronize): used to initiate a connection by synchronizing sequence numbers between hosts.
		- **FIN** (finish): indicates that the sender has no more data to send and requests connection termination.
	- **window size**
		- in bytes
		- the _rwnd_ the receiver advertises (specifies the number of bytes the receiver allows the sender to transmit before needing an acknowledgment)
			- when _window size_ = 0, 
- (5th word)
	- checksum
	- urgent pointer
- (6th+ word(s))
	- options
		- (each option has: _kind_ (8 bits), _length_ (8 bits) and _value_ (16 bits))
		- **maximum segment size** (**MSS**) - the maximum amount of TCP payload data (in bytes) that can be carried in the TCP segment
			- (theoretical) $0\leq\text{MSS}= 2^{16}-1=65535$ (bytes)
			- (practical) $\text{MSS}=\text{MTU}-(\text{IP header}+\text{TCP header})$
		- **selective acknowledgement** (**SACK**)
		- **window scaling**
			- used only during the [[#Connection establishment|three-way handshake]]



- _SYN_ and _SYN-ACK_ segments
	- can carry data by specification, but in practice they do not
	- consume one sequence number.
- _ACK_ segments (if they contain no data)
	- do not consume sequence numbers
	- are not acknowledged 

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
