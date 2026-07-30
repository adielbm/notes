
 
# OSI and TCP/IP models



<table>
  <thead>
    <tr>
      <th></th>
      <th>OSI</th>
      <th>Five-layer</th>
      <th>TCP/IP</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>APDU</b></td>
      <td><b>Application</b></td>
      <td style="vertical-align: middle;" align="center" colspan="2" rowspan="3"><b>Application</b></td>
      <td style="vertical-align: middle;" align="center" rowspan="3">Software</td>
    </tr>
    <tr>
      <td><b>PPDU</b></td>
      <td><b>Presentation</b></td>
    </tr>
    <tr>
      <td><b>SPDU</b></td>
      <td><b>Session</b></td>
    </tr>
    <tr>
      <td><b>TPDU</b></td>
      <td align="center" colspan="3"><b>Transport</b><br/><small>(תעבורה, תובלה)</small></td>
      <td>Hardware/Software</td>
    </tr>
    <tr>
      <td>(Network) Packet</td>
      <td><b>Network</b></td>
      <td align="center" colspan="2"><b>Internet</b> <small>(or Network)</small></td>
      <td style="vertical-align: middle;" align="center" rowspan="3">Hardware</td>
    </tr>
    <tr>
      <td>Frame</td>
      <td colspan="2" align="center"><b>Data Link</b><br/><small>(קו, ערוץ)</small></td>
      <td style="vertical-align: middle;" align="center" rowspan="2"><b>Link</b> <small>(or Network Access)<br/>(קשר, ערוץ)</small></td>
    </tr>
    <tr>
      <td>Bit</td>
      <td colspan="2"><b>Physical</b></td>
    </tr>
  </tbody>
</table>




#### layer 1

- **Ethernet hub** (or **active hub**, **network hub**, **repeater hub**, **multiport repeater**, **hub**)



- (Ethernet) IEEE 802.3
	- 10 Mbps ("Standard Ethernet")
		- 10BASE5 (_Thick Ethernet_, _DIX Standard_, 802.3, 1983) and 10BASE2 (_Thin Ethernet_, 802.3a, 1988)
			- bus topology
			- coax cable
			- CSMA/CD
			- one collision domain
		- 10BASE-T (802.3i, 1990)
			- twisted pair cable
			- star topology
		- (802.3x, 1997)
			- full duplex
	- **Fast Ethernet** (100 Mbps) 
		- (802.3u, 1995)
	- **Gigabit Ethernet** (1 Gbps)
	- **10 Gigabit Ethernet**
	- **40 Gigabit Ethernet** (**40GbE**) and **100 Gigabit Ethernet** (**100GbE**)
	- **Terabit Ethernet** (**TbE**)


#### layer 2

- The **data link layer** (or **layer 2**)
- _media access control_ (_MAC_) (or _medium access control_) may refer to:
	- a sublayer of the data link layer
	- a frame structure  
- _data link control_ (DLC) can refer to:
	- the service provided by the data link layer
	- A specific protocol in the [[#layer 4|transport layer]] with the name **Data Link Control**.
- The [[#IEEE 802|IEEE 802]] divides the OSI data link layer into two sub-layers:
	- **logical link control (LLC)**
		- error control
		- flow control
		- framing
			- [[Ethernet|Ethernet frame]]
	- **media access control (MAC)** (only in broadcast links)
		- channel access method
		- addressing
		- switching
			- Store-and-forward switching or cut-through switching
		- VLANs
		- QoS control

- IEEE 802.1
	- (802.1D-1990)
		- MAC Bridges



- **network bridge**
- **network interface controller** (**NIC**)
- **network switch** (or **switching hub**, **bridging hub**, **Ethernet switch**, **MAC bridge**)
	- acts as N-port bridge (where N is number of stations)







#### layer 3

- The **network layer** (or **layer 3**, and in TCP/IP, the **internet layer**)
- **(IP) datagram** (or **network packet** or **(IP) packet**)
- IP supports fragmentation and reassembly
- packet loss

- **multilayer switch** (**MLS**)
- [[Routing|routing]]

#### layer 4


- The **transport layer** (or **layer 4**)
	- "The transport layer performs end-to-end error control and end-to-end flow control" [@West, 2021]
	- protocols:
		- [[TCP]]
		- [[UDP]]
		- **QUIC**
	- **Transport PDU**s (TPDU) are typically called **segments**
		- UDP datagram 
		- TCP segment
- **client-server** (model/paradigm/architecture)
	- **client**
	- **server**
	- **downstream**: the direction from the server to the client
	- **upstream**: the direction from the client to the server
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

- sequence number


- remote procedure call (RPC)
	- SunRPC, DCE-RPC, gRPC

- Real-time Transport Protocol (RTP)


# Protocol data units


- **protocol data unit (PDU)**
	- _"The combination of data from the next higher layer and control information"_ [@Stallings, 2013]
	- _"Another name for a packet or frame"_. [@Peterson, 2020]
	- _"A PDU at layer $N$ is a message sent between protocols at layer $N$. It consists of layer $N$ header information and an encapsulated message from layer $N+1$, which is called both the layer $N$ SDU and the layer $N+1$ PDU"_. [@Kozierok, 2005]
- **service data unit (SDU)**
- (**packet**) can refer to:
	- _a generic term used to describe unit of data at all levels of the protocol stack_. ([RFC 1594](https://www.rfc-editor.org/rfc/rfc1594.html))
	- **(IP) packet** - a PDU in the Internet (Network) layer
- **segment** 
	- PDU in the TCP protocol
- **datagram** can refer to:
	- **(user) datagram** - PDU in the UDP protocol
	- **(IP) datagram** - PDU in the IP protocol 
	- a PDU in any connectionless communication packet-switched network
	- _"A self-contained, independent entity of data carrying sufficient information to be routed from the source to the destination computer without reliance on earlier exchanges between this source and destination computer and the transporting network"_. ([RFC 1594](https://www.rfc-editor.org/rfc/rfc1594.html))
- (**frame**) 
	- "A packet at the data-link layer is normally called a _frame_." [@Forouzan, 2012]


# terms

- **encapsulation**
- **decapsulation** or (**deencapsulation** (or **de-encapsulation**))

- **local area network** (**LAN**)
	- **virtual local area network** (**VLAN**)
	- **wireless LAN** (**WLAN**)
- **wide area network** (**WAN**)
	- **wireless wide area network** (**WWAN**)

- last mile
- backbone

- point-to-point link
- broadcast link

- **piggybacking**


- **best-effort service**





- **frame** 
- **framing**
- **frame size**
	- _fixed-size framing_
		- (e.g., ATM (cells))
	- _variable-size framing_
		- the end of a frame is identified using:
			- length field
				- (use examples: [[Ethernet|Ethernet]])
			- end delimiter
				- there is a need for stuffing
					- [[intro#byte stuffing|byte stuffing]]
					- [[intro#bit stuffing|bit stuffing]]





- **reliable** and **unreliable**
	- a reliable protocol notifies the sender whether data has been received correctly
		- reliable protocols typically bear more overhead 
- _Reliable Data Transfer_


- [[Error detection and correction]]
- **flow control**
	- "A technique to control the rate of flow of frames (packets or messages)." [@Forouzan, 2012]
	- "Flow control is required to assure that the source does not overwhelm the destination by sending data faster than they can be processed and absorbed." [@Stallings, 2013]
- **acknowledgment** (**ACK**) (also **positive acknowledgment**) 
- **stop-and-wait**
	- "A protocol in which the sender sends one frame, stops until it receives confirmation from the receiver, and then sends the next frame" [@Forouzan, 2012]
- **automatic repeat request** (**ARQ**) (or **automatic repeat query**)
	- "ARQ is used to achieve reliable data transmission over an unreliable communication channel" (Wikipedia)
- [[Sliding window protocol]]


# connection/connectionless


- **Connection-oriented** (service/protocol/communication)
	- "A service for data transfer involving establishment and termination of a connection." [@Forouzan, 2012]
- **Connectionless** (service/protocol/communication)
	- "A service for data transfer without connection establishment or termination." [@Forouzan, 2012]
- **Connectionless-mode Network Service** (**CLNS**) (or simply **Connectionless Network Service**)

# switching

- **circuit switching**
	- always connection-oriented (e.g., POTS)
- **packet switching**
	- datagram (connectionless) (e.g., IP, UDP)
	- virtual circuit (connection-oriented) (e.g., TCP, ATM) 

- forwarding techniques:
	- **store-and-forward** switching
	- **cut-through** switching
# virtual circuit

- **virtual circuit** (**VC**)
	- **virtual circuit identifier** (**VCI**)
	- table:
		- incoming interface
		- incoming VCI
		- outgoing interface
		- outgoing VCI
	- types:
		- permanent virtual circuit (PVC)
			- "A virtual circuit transmission method in which the same virtual circuit is used between source and destination on a continual basis." [@Forouzan, 2012]
		- switched virtual circuit (SVC)
			- "A virtual circuit transmission method in which a virtual circuit is created and in existence only for the duration of the exchange." [@Forouzan, 2012]
	

- virtual circuit connection (VCC)

- virtual path (VP)
- transmission path (TP)
- virtual-path identifier (VPI)




# stuffing

### bit stuffing


$$\begin{gathered}
\begin{array}{|c|}
\hline
011111{\phantom{0}}1010011111{\phantom{0}}01 \\
\hline
\end{array} \\
\boldsymbol{\vert }\\
\text{bit stuffing} \\
\boldsymbol{\downarrow} \\
\begin{array}{|c|c|c|c|c|}
\hline
\overset{\text{Flag}}{01111110} & \text{Header} & 011111{\boldsymbol{\color{#d92e7e}{0}}}1010011111{\boldsymbol{\color{#d92e7e}{0}}}01 & \text{Trailer} & \overset{\text{Flag}}{01111110} \\
\hline
\end{array}
\end{gathered}$$


- **bit stuffing**
	- "A technique used to distinguish control sequences and data on the bit level." [@Peterson, 2020]
	- "In a bit-oriented protocol, the process of adding an extra bit in the data section of a frame to prevent a sequence of bits from looking like a flag." [@Forouzan, 2012]
- **bit-oriented protocol**
	- "A protocol in which the data frame is interpreted as a sequence of bits" [@Forouzan, 2012]
	- (e.g. [[HDLC|HDLC]])

### byte stuffing

$$\begin{gathered} \begin{array}{|c|c|c|c|c|c|c|c|c|} \hline \dots &    \phantom{ESC} & \text{FLAG} & \dots  &  \phantom{ESC} & \text{ESC} & \dots \\ \hline \end{array} \\ \boldsymbol{\vert }\\ \text{byte stuffing} \\ \boldsymbol{\downarrow} \\ \begin{array}{|c|c|c|c|c|} \hline \text{Flag} & \text{Header} &  \dots & \boldsymbol{\color{#d92e7e}{\text{ESC}}} & \text{FLAG} & \dots & \boldsymbol{\color{#d92e7e}{\text{ESC}}} & \text{ESC}  & \dots  & \text{Trailer} & \text{Flag} \\ \hline \end{array} \end{gathered}$$


- **byte stuffing**
	- "The process of adding one extra byte whenever there is a flag or escape character in the text." [@Forouzan, 2012]
	- "In a byte-oriented protocol, the process of adding an extra byte in the data section of a frame to prevent a byte from looking like a flag." [@Forouzan, 2012]
- **byte-oriented protocol**
	- "A protocol in which the data section of the frame is interpreted as a sequence of bytes (characters)." [@Forouzan, 2012]
	- (e.g. [[PPP|PPP]])


# IEEE 802

![](https://upload.wikimedia.org/wikipedia/commons/b/b5/Comparing_OSI_and_IEEE_802_network_stacks.svg)

- (active) working groups
	- 802.1
		- Higher Layer LAN Protocols Working Group
	- [[Ethernet|802.3]]
		- Ethernet
	- [[Wireless communication#Wi-Fi|802.11]]
		- Wireless LAN (WLAN) & Mesh (Wi-Fi certification)
	- 802.15
		- Wireless PAN
- **service access point** (**SAP**)
	- LSAP
	- MSAP
	- PSAP