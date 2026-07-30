

## High-Level Data Link Control (HDLC)

- **High-Level Data Link Control** (**HDLC**)
- HDLC is a [[intro#bit stuffing|bit-oriented protocol]]

<table>
  <tr>
    <td align="center" colspan="6">HDLC Frame</td>
  </tr>
  <tr>
    <td align="center" style="vertical-align: middle;"><b>Flag</b></td>
    <td align="center" style="vertical-align: middle;"><b>Header</b></td>
    <td align="center" style="vertical-align: middle;"><b>Body</b></td>
    <td align="center" style="vertical-align: middle;"><b>CRC</b></td>
    <td align="center" style="vertical-align: middle;"><b>Flag</b></td>
  </tr>
  <tr>
    <td align="center">8 bits<br/>(01111110)</td>
    <td align="center">16 bits</td>
    <td align="center">variable<br/>length</td>
    <td align="center">16 or 32 bits</td>
    <td align="center">8 bits<br/>(01111110)</td>
  </tr>
</table>

