
 
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




- **protocol data unit (PDU)**
	- _"The combination of data from the next higher layer and control information"_ [@Stallings, 2013]
	- _"Another name for a packet or frame"_. [@Peterson, 2020]
	- _"A PDU at layer $N$ is a message sent between protocols at layer $N$. It consists of layer $N$ header information and an encapsulated message from layer $N+1$, which is called both the layer $N$ SDU and the layer $N+1$ PDU"_. [@Kozierok, 2005]
- **service data unit (SDU)**
- (**packet**) 
	- (1) _a generic term used to describe unit of data at all levels of the protocol stack_. ([RFC 1594](https://www.rfc-editor.org/rfc/rfc1594.html))
	- (2) a PDU in the Internet (Network) layer
- (**datagram**) 
	- a synonym with _packet_
	- connectionless communication, packet-switched network
	- _"A self-contained, independent entity of data carrying sufficient information to be routed from the source to the destination computer without reliance on earlier exchanges between this source and destination computer and the transporting network"_. ([RFC 1594](https://www.rfc-editor.org/rfc/rfc1594.html))
- (**frame**) 
	- "A packet at the data-link layer is normally called a _frame_." [@Forouzan, 2012]

- **encapsulation**
- **decapsulation** or (**deencapsulation** (or **de-encapsulation**))


- **local area network** (**LAN**)
	- **wireless LAN** (**WLAN**)
- **wide area network** (**WAN**)
	- **wireless wide area network** (**WWAN**)

- Last-Mile
- Backbone

- point-to-point link
- broadcast link

- **piggybacking**


- **best-effort service**



- **bit stuffing**
	- "A technique used to distinguish control sequences and data on the bit level." [@Peterson, 2020]
	- "In a bit-oriented protocol, the process of adding an extra bit in the data section of a frame to prevent a sequence of bits from looking like a flag." [@Forouzan, 2012]
- **byte stuffing**
	- "The process of adding one extra byte whenever there is a flag or escape character in the text." [@Forouzan, 2012]
	- "In a byte-oriented protocol, the process of adding an extra byte in the data section of a frame to prevent a byte from looking like a flag." [@Forouzan, 2012]
- **bit-oriented protocol**
	- "A protocol in which the data frame is interpreted as a sequence of bits" [@Forouzan, 2012]
- **byte-oriented protocol**
	- "A protocol in which the data section of the frame is interpreted as a sequence of bytes (characters)." [@Forouzan, 2012]






- **Connection-oriented** (service/protocol/communication)
	- "A service for data transfer involving establishment and termination of a connection." [@Forouzan, 2012]
- **Connectionless** (service/protocol/communication)
	- "A service for data transfer without connection establishment or termination." [@Forouzan, 2012]
- **Connectionless-mode Network Service** (**CLNS**) (or simply **Connectionless Network Service**)




- **circuit switching**
	- always connection-oriented (e.g., POTS)
- **packet switching**
	-  
		- datagram (connectionless) (e.g., IP, UDP)
		- virtual circuit (connection-oriented) (e.g., TCP, ATM) 
	- 
		- **store-and-forward** switching
		- **cut-through** switching


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
