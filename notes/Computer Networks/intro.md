
 
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
	- _"The combination of data from the next higher layer and control information"_ [^1]
	- _"Another name for a packet or frame"_. [^2] 
	- _"A PDU at layer $N$ is a message sent between protocols at layer $N$. It consists of layer $N$ header information and an encapsulated message from layer $N+1$, which is called both the layer $N$ SDU and the layer $N+1$ PDU"_. [^3]
- **service data unit (SDU)**
- (**packet**) 
	- (1) _a generic term used to describe unit of data at all levels of the protocol stack_. ([RFC 1594](https://www.rfc-editor.org/rfc/rfc1594.html))
	- (2) a PDU in the Internet (Network) layer
- (**datagram**) 
	- a synonym with _packet_
	- connectionless communication, packet-switched network
	- _"A self-contained, independent entity of data carrying sufficient information to be routed from the source to the destination computer without reliance on earlier exchanges between this source and destination computer and the transporting network"_. ([RFC 1594](https://www.rfc-editor.org/rfc/rfc1594.html))


- **Best-effort service**


- **circuit switching** and **packet switching**
- **Connection-oriented** and **Connectionless** (service/protocol/communication)
	- **Connectionless-mode Network Service** (**CLNS**) (or simply **Connectionless Network Service**)



# Transport layer

- **Transport PDU**s (TPDU) are typically called **segments** [^1]
	- UDP datagram 
	- TCP segment
maximum segment size

# Internet layer



- IP supports fragmentation and reassembly.
- **IP datagram** = network packet = IP packet 

### IP Datagram Format 

![[IPv4 datagram.svg]]

- (1st word)
	- The “simple” model of best-effort datagram delivery has subtle features.
	- Version field: Current version, IPv4 (version 4).
	- HLen field: header length in (32-bit) words. Typically 5 (words (20 bytes). when no options)
	- TOS (Type of Service)
	- Total Length: 16 bits, length (in bytes) of datagram, including header.
	    - theoretical Maximum size of IP datagram: 65,535 bytes.
	    - (note: physical network may not support such long packets.)
- (2nd word)
	- Identification: to identify fragments of a datagram.
	- Flags: (3 bits)
		- (reserved): zero.
		- More Fragments (MF) flag: 1 if more fragments follow.
		- Don't Fragment (DF) flag: 1 if fragmentation not allowed.
	- Fragment Offset (13 bits):
		- in units of 8-bytes.
		- indicates where in datagram this fragment belongs.
- (3rd word):
	- TTL: hop count, decremented by 1 per hop. default: 64.
	- Protocol number: 
		- Acts as demultiplexing key.
		- Identifies higher-level protocol to pass packet to.
		- Common values:
		- TCP (6)
		- UDP (17)
		- Others in protocol graph above IP
	- Checksum:
		- Calculated using entire header as sequence of 16-bit words.
		- Uses ones’ complement arithmetic.
		- Ones’ complement of sum is checksum.
		- Detects corrupted header bits.
		- Not as strong as CRC, but easier to calculate in software.

> _The protocol number is the glue that binds the network and transport layers together, whereas the port number is the glue that binds the transport and application layers together. We’ll see in Chapter 6 that the link-layer frame also has a special field that binds the link layer to the network layer_.
> — Kurose, J., & Ross, K. (2025). _Computer Networking a Top-Down approach_. Pearson.
  
### fragmentation and reassembly



- fragmentation (פיצול, פרגמנטציה)
- fragment (רסיס)
- reassembly (הרכבה)

- The **maximum transmission unit (MTU)** of a network is the size of the largest IP datagram that the network can transmit in a single frame.
	- The size of the largest packet that can be sent over a physical network.




- Maximum Transmission Unit (MTU)
- Path MTU
- Path MTU Discovery (PMTUD)


[^1]: Stallings, W. (2013). _Data and computer communications_.

[^2]: Peterson, L. L., & Davie, B. (2020). _Computer networks: A Systems Approach_. Morgan Kaufmann Publishers.

[^3]: Kozierok, C. M. (2005). _The TCP/IP guide: A Comprehensive, Illustrated Internet Protocols Reference_. No Starch Press.
