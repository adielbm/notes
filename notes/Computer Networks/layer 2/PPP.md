## Point-to-Point Protocol (PPP)

- PPP is a [[Computer Networks/intro#byte stuffing|byte-oriented protocol]]
- **Point-to-Point Protocol** (**PPP**)
	- "commonly used to carry Internet Protocol packets over various sorts of point-to-point links" [@Peterson, 2020]
	- "a data link layer (layer 2) communication protocol between two routers directly without any host or any other networking in between" (Wikipedia)



<table>
  <tr>
    <th align="center">1 byte</th>
    <th align="center">1</th>
    <th align="center">1</th>
    <th align="center">2</th>
    <th align="center"></th>
    <th align="center">2</th>
    <th align="center">1 byte</th>
  </tr>
  <tr>
    <td align="center">Flag (0x7E)</td>
    <td align="center">Address (0xFF)</td>
    <td align="center">Control (0x03)</td>
    <td align="center">Protocol</td>
    <td align="center">Information (payload)</td>
    <td align="center">FCS (Frame Check Sequence)</td>
    <td align="center">Flag (0x7E)</td>
  </tr>
  <tr>
    <td align="center"></td>
    <td align="center" colspan="3">Header</td>
    <td align="center">Data</td>
    <td align="center">Footer</td>
    <td align="center"></td>
  </tr>
</table>


- Link Control Protocol (LCP)
	- "A PPP protocol responsible for establishing, maintaining, configuring, and terminating links" [@Forouzan, 2012]
