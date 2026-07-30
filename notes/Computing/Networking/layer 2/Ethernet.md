

- **link aggregation**
- **Ethernet in the first mile** (**EFM**)

### Frame format (802.3 Ethernet II)

<table>
<tr>
	<td align="center"></td>
    <td align="center" colspan="5">Ethernet frame (64–1518 bytes)<br/><small>(Data link layer)</small></td>
  </tr>
  <tr>
    <td align="center" colspan="6">Ethernet packet (72–1526 bytes)<br/><small>(Physical layer)</small></td>
  </tr>
<tr>
    <td style="vertical-align: middle;" align="center" rowspan="2"><b>Preamble</b></td>
    <td align="center" colspan="3"><b>MAC header</b></td>
        <td style="vertical-align: middle;" align="center" rowspan="2"><b>Payload</b></td>
    <td style="vertical-align: middle;" align="center" rowspan="2"><b>FCS</b></td>
  </tr>
  <tr>
    <td align="center"><b>Dest addr</b></td>
    <td align="center"><b>Src addr</b></td>
    <td align="center"><b>EtherType</b></td>

  </tr>
  <tr>
    <td align="center">8 (bytes)</td>
    <td align="center">6</td>
    <td align="center">6</td>
    <td align="center">2</td>
    <td align="center">46-1500</td>
    <td align="center">4</td>
  </tr>
</table>




