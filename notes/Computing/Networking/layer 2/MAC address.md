
<table style="font-family: monospace; border-collapse: collapse; border-spacing: 0;" border="1">
   <caption>EUI-48 structure</caption>
  <tr>
    <th align="center" colspan="13">MAC address<br><small>(12 hex digits = 6 bytes = 48 bits)</small></th>
  </tr>
  <tr>
    <td align="center" colspan="13">XX:XX:XX:XX:XX:XX</td>
  </tr>
  <tr>
    <td align="center" colspan="10">XX:XX:XX</td>
    <td align="center" colspan="3">XX:XX:XX</td>
  </tr>
  <tr>
    <td align="center" colspan="10">OUI<br><small>(Organizationally Unique Identifier)</small></td>
    <td align="center" colspan="3">NIC<br><small>(Device Identifier)</small></td>
  </tr>
  <tr>
    <td align="center" colspan="8">Byte 1</td>
    <td align="center">2</td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">5</td>
    <td align="center">6</td>
  </tr>
  <tr>
    <td align="center" style="min-width:0;" title="Bit 7">b7</td>
    <td align="center" style="min-width:0;" title="Bit 6">b6</td>
    <td align="center" style="min-width:0;" title="Bit 5">b5</td>
    <td align="center" style="min-width:0;" title="Bit 4">b4</td>
    <td align="center" style="min-width:0;" title="Bit 3">b3</td>
    <td align="center" style="min-width:0;" title="Bit 2">b2</td>
    <td align="center" style="min-width:0;" title="U/L bit"><b>U/L</b></td>
    <td align="center" style="min-width:0;" title="I/G bit"><b>I/G</b></td>
    <td align="center" colspan="5"></td>
  </tr>
</table>






- **MAC address** (**medium access control address**)
	- (other names: **burned-in address**, **Ethernet hardware address**, **hardware address**, and **physical address**)
- **EUI-48** (or **MAC-48**)
	- used in Ethernet, Wi-Fi, Bluetooth
- **EUI-64**

- **unicast address**: 
- **broadcast address**: FF:FF:FF:FF:FF:FF = all 1s
	- an adpaptor will pass all frames addressed to this address up to host
- **multicast address**: the first bit is 1 but the address is not the broadcast address
	- an adpaptor can be configured to accept frames addressed to set of multicast addresses

- Ethernet adaptor receives all frames, but accepts only:
	- frames addressed to its unicast address
	- frames addressed to the broadcast address
	- frames addressed to multicast addresses it is configured to accept
	- (all frames if in **promiscuous mode**)




<table>
   <caption>Universal/local and individual/group bits in MAC addresses</caption>
   <tbody>
      <tr>
         <th style="position: relative;">
            <div style="right:0; position:absolute;">U/L</div>
            <div>I/G</div>
         </th>
         <th>Universally administered</th>
         <th>Locally administered</th>
      </tr>
      <tr>
         <th>Unicast (individual)</th>
         <td><em>X<strong><u>0</u></strong>-XX-XX-XX-XX-XX</em><br /><em>X<strong><u>4</u></strong>-XX-XX-XX-XX-XX</em><br /><em>X<strong><u>8</u></strong>-XX-XX-XX-XX-XX</em><br /><em>X<strong><u>C</u></strong>-XX-XX-XX-XX-XX</em></td>
         <td><em>X<strong><u>2</u></strong>-XX-XX-XX-XX-XX</em><br /><em>X<strong><u>6</u></strong>-XX-XX-XX-XX-XX</em><br /><em>X<strong><u>A</u></strong>-XX-XX-XX-XX-XX</em><br /><em>X<strong><u>E</u></strong>-XX-XX-XX-XX-XX</em></td>
      </tr>
      <tr>
         <th>Multicast (group)</th>
         <td><em>X<strong><u>1</u></strong>-XX-XX-XX-XX-XX</em><br /><em>X<strong><u>5</u></strong>-XX-XX-XX-XX-XX</em><br /><em>X<strong><u>9</u></strong>-XX-XX-XX-XX-XX</em><br /><em>X<strong><u>D</u></strong>-XX-XX-XX-XX-XX</em></td>
         <td><em>X<strong><u>3</u></strong>-XX-XX-XX-XX-XX</em><br /><em>X<strong><u>7</u></strong>-XX-XX-XX-XX-XX</em><br /><em>X<strong><u>B</u></strong>-XX-XX-XX-XX-XX</em><br /><em>X<strong><u>F</u></strong>-XX-XX-XX-XX-XX</em></td>
      </tr>
   </tbody>
     <tfoot>
    <tr>
      <td colspan="3">Wikipedia <small>(CC BY-SA 4.0)</small></td>
    </tr>
  </tfoot>
</table>
