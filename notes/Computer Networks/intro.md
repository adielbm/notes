
 
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


- **circuit switching**
- **packet switching**
	- **store-and-forward** switching
	- **cut-through** switching



- **Connection-oriented** and **Connectionless** (service/protocol/communication)
	- **Connectionless-mode Network Service** (**CLNS**) (or simply **Connectionless Network Service**)



[[Transport layer]]
# Internet layer


[^1]: Stallings, W. (2013). _Data and computer communications_.

[^2]: Peterson, L. L., & Davie, B. (2020). _Computer networks: A Systems Approach_. Morgan Kaufmann Publishers.

[^3]: Kozierok, C. M. (2005). _The TCP/IP guide: A Comprehensive, Illustrated Internet Protocols Reference_. No Starch Press.
