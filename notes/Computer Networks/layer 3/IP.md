

### IP Datagram Format 

![[IPv4.svg]]


- (1st word)
	- The “simple” model of best-effort datagram delivery has subtle features.
	- Version field: Current version, IPv4 (version 4).
	- HLen field: header length in (32-bit) words. Typically 5 (words (20 bytes). when no options)
	- TOS (Type of Service)
	- Total Length: 16 bits, length (in bytes) of datagram, including header.
	    - theoretical Maximum size of IP datagram: 65,535 bytes.
	    - (note: physical network may not support such long packets.)
- (2nd word)
	- _identification_ (16 bits): to identify fragments of a datagram.
	- _flags_ (3 bits):
		- (reserved): zero.
		- _more fragments_ (MF) flag: 1 if more fragments follow.
		- _don't fragment_ (DF) flag: 1 if fragmentation not allowed.
	- _fragment offset_ (13 bits):
		- in units of 8-bytes.
		- indicates where in the original IP datagram this fragment belongs.
- (3rd word):
	- TTL: hop count, decremented by 1 per hop. default: 64.
	- Protocol number: 
		- Acts as demultiplexing key.
		- Identifies higher-level protocol to pass packet to.
		- common values: TCP (6), UDP (17)
		- Others in protocol graph above IP
	- Checksum:
		- Calculated using entire header as sequence of 16-bit words.
		- Uses ones’ complement arithmetic.
		- Ones’ complement of sum is checksum.
		- Detects corrupted header bits.
		- Not as strong as CRC, but easier to calculate in software.

> _The protocol number is the glue that binds the network and transport layers together, whereas the port number is the glue that binds the transport and application layers together. We’ll see in Chapter 6 that the link-layer frame also has a special field that binds the link layer to the network layer_.
> — [@Kurose & Ross, 2025]
  
### fragmentation and reassembly



- **fragmentation** (פיצול, פרגמנטציה)
	- "The division of a packet into smaller units to accommodate a protocol’s MTU." [@Forouzan, 2012]
	- IPv4 allows fragmentation
	- IPv6 does not allow fragmentation
	- **fragment** (רסיס)
- **reassembly** (הרכבה)
	- "Reassembly is done at the receiving host and not at each router." [@Peterson, 2020]

- The **maximum transmission unit (MTU)** (or **maximum transfer unit**) of a network is the size of the largest IP datagram that the network can transmit in a single frame.
	- "The size of the largest IP datagram that can be transmitted over a physical network" [@Kozierok, 2005]
	- **path MTU**
		- "the smallest MTU of any link on the current path (route) between two hosts." [@Peterson, 2020]
	- **path MTU discovery** (**PMTUD**)
		- "A source must use a Path MTU Discovery technique to find the smallest MTU supported by any network on the path. The source then fragments using this knowledge." [@Forouzan, 2012]

- $\displaystyle \text{MSL}_{\text{IP}}\,\text{[sec]} \times BW_{\text{max}}\,\text{[bps]}=2^{16}\times n\,\text{[bits]}$
	- $BW_{\text{max}}$ is the maximum bandwidth at which an IP host can send $n$-bit packets without having the _Ident_ field wrap around within $t$ seconds


