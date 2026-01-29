### IP address

- **subnet** (or **subnetwork**)
	- **subnetting**
		- "The use of a single IP network address to denote multiple physical networks. Routers within the subnetwork use a subnet mask to discover the physical network to which a packet should be forwarded. Subnetting effectively introduces a third level to the two-level hierarchical IP address"
	- **subnet mask** (or **netmask**)
- IPv4 is limit to $2^{32}= 4,294,967,296$ adresses
- **Classful network**

| Class         | MSB  | Network prefix length  <br>(bits) | Host identifier length  <br>(bits) | Address range             |
| ------------- | ---- | --------------------------------- | ---------------------------------- | ------------------------- |
| A             | 0    | 8                                 | 24                                 | 0.0.0.0–127.255.255.255   |
| B             | 10   | 16                                | 16                                 | 128.0.0.0–191.255.255.255 |
| C             | 110  | 24                                | 8                                  | 192.0.0.0–223.255.255.255 |
| D (multicast) | 1110 | —                                 | —                                  | 224.0.0.0–239.255.255.255 |
| E (reserved)  | 1111 | —                                 | —                                  | 240.0.0.0–255.255.255.255 |

- **Classless Inter-Domain Routing** (**CIDR**)
- Network block
	- Network Address or Network ID
- **private IPv4 address**
	- 10.0.0.0/8
	- 172.16.0.0/12
	- 192.168.0.0/16


<iframe width="100%" height="400px" src="https://adielbm.github.io/ip"></iframe>

- **network address translation** (**NAT**)
	- table:
		- 
   

#### ARP

- **Address Resolution Protocol** (**ARP**)
	- "used to translate high-level protocol addresses into physical hardware addresses" [@Peterson, 2020]
	- _ARP cache_ (or _ARP table_)


#### DHCP

- **Dynamic Host Configuration Protocol** (**DHCP**)

- DORA
	- Discover
	- Offer
	- Request
	- ACK

DHCP Relay
#### Internet Control Message Protocol (ICMP)

- Defines a collection of error messages that are sent back to the source host whenever a router or host is unable to process an IP datagram successfully
• Destination host unreachable due to link /node failure
• Reassembly process failed
• TTL had reached 0
• IP header checksum failed
- ICMP-Redirect

#### virtual networks 

- virtual private network (VPN)
- virutal circuit
- tunnels

