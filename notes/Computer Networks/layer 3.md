
- The **network layer** (or **layer 3**, and in TCP/IP, the **internet layer**)


- IP supports fragmentation and reassembly.
- **IP datagram** = network packet = IP packet 

- packet loss

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



- **fragmentation** (פיצול, פרגמנטציה)
	- "The division of a packet into smaller units to accommodate a protocol’s MTU." [@Forouzan, 2012]
	- IPv4 allows fragmentation
	- IPv6 does not allow fragmentation
- fragment (רסיס)
- reassembly (הרכבה)

- The **maximum transmission unit (MTU)** (or **maximum transfer unit**) of a network is the size of the largest IP datagram that the network can transmit in a single frame.
	- "The size of the largest IP datagram that can be transmitted over a physical network" [@Kozierok, 2005]
	- The size of the largest packet that can be sent over a physical network.
	- **Path MTU**
	- **Path MTU Discovery** (**PMTUD**)

### IP address


- **subnet** (or **subnetwork**)
	- **subnetting**
	- **subnet mask** (or **netmask**)

- IPv4 is limit to $2^{32}= 4,294,967,296$ adresses



#### Classful network

| Class         | MSB  | Network prefix length  <br>(bits) | Host identifier length  <br>(bits) | Address range             |
| ------------- | ---- | --------------------------------- | ---------------------------------- | ------------------------- |
| A             | 0    | 8                                 | 24                                 | 0.0.0.0–127.255.255.255   |
| B             | 10   | 16                                | 16                                 | 128.0.0.0–191.255.255.255 |
| C             | 110  | 24                                | 8                                  | 192.0.0.0–223.255.255.255 |
| D (multicast) | 1110 | —                                 | —                                  | 224.0.0.0–239.255.255.255 |
| E (reserved)  | 1111 | —                                 | —                                  | 240.0.0.0–255.255.255.255 |


#### Classless Inter-Domain Routing (CIDR)


- Network block
	- Network Address or Network ID


```
┌─────────┬─────────┬─────────┬─────────┬─────────┐
│ Class A │ Network │            Host             │
├─────────┼─────────┼─────────┼─────────┼─────────┤
│ Class B │      Network      │       Host        │
├─────────┼─────────┼─────────┼─────────┼─────────┤
│ Class C │           Network           │  Host   │
└─────────┴─────────┴─────────┴─────────┴─────────┘

  Network ID    Host ID  
┌────────────┼───────────┐
│  111...111 │ 000...000 │
└────────────┴───────────┘
```


```python
# run
INPUT = '57.6.96.2/21'

ip_str, p_len_str = INPUT.split('/')
p_len = int(p_len_str)
h_bits = 32 - p_len

ip_parts = [int(p) for p in ip_str.split('.')]
ip_int = (ip_parts[0] << 24) | \
         (ip_parts[1] << 16) | \
         (ip_parts[2] << 8) | \
         ip_parts[3]

total_ips = 1 << h_bits 
usable_ips = total_ips - 2

mask_int = (0xFFFFFFFF << h_bits) & 0xFFFFFFFF
net_int = ip_int & mask_int

host_bits_mask = total_ips - 1 
bcast_int = net_int | host_bits_mask

first_host_int = net_int + 1
last_host_int = bcast_int - 1

def int_to_ip(ip_val):
    return f"{ip_val >> 24 & 0xFF}.{ip_val >> 16 & 0xFF}.{ip_val >> 8 & 0xFF}.{ip_val & 0xFF}"

binary_mask_full = f"{mask_int:032b}"
binary_mask_dotted = f"{binary_mask_full[:8]}.{binary_mask_full[8:16]}.{binary_mask_full[16:24]}.{binary_mask_full[24:]}"

def dot_to_binary_ip(ip_str):
    parts = [int(p) for p in ip_str.split('.')]
    return '.'.join(f"{part:08b}" for part in parts)

res = {
    "INPUT": INPUT,
    "-------": "-------",
    "IP Address": f"{dot_to_binary_ip(ip_str)} = {ip_str}",
    f"Subnet Mask /{p_len}": f"{binary_mask_dotted} = {int_to_ip(mask_int)}",
    "Network": f"{dot_to_binary_ip(int_to_ip(net_int))} = {int_to_ip(net_int)} \t (" +
             ("Class A" if ip_parts[0] < 128 else
              "Class B" if ip_parts[0] < 192 else
              "Class C" if ip_parts[0] < 224 else
              "Class D" if ip_parts[0] < 240 else
              "Class E") + ")",
    "Broadcast": f"{dot_to_binary_ip(int_to_ip(bcast_int))} = {int_to_ip(bcast_int)}",
    "Host Bits": f"32 - {p_len} = {h_bits}",
    "#IPs": f"2^{h_bits} = {total_ips}",
    "#Hosts": f"{total_ips} - 2 = {usable_ips}",
    "Host Range:": "",
    "   Min Host": f"{dot_to_binary_ip(int_to_ip(first_host_int))} = {int_to_ip(first_host_int)}" if usable_ips > 0 else "N/A",
    "   Max Host": f"{dot_to_binary_ip(int_to_ip(last_host_int))} = {int_to_ip(last_host_int)}" if usable_ips > 0 else "N/A"
}

for key, value in res.items():
    print(f"{key:{max(len(key) for key in res.keys())}}\t{value}")
```



#### Longest Prefix Match (LPM)


```python
# run
# -----------------------------
# Longest Prefix Match + per-hop IP count
# -----------------------------

INPUT_ROUTES = {
    '182.168.112.0/24': 'A',
    '182.168.80.0/24':  'A',
    '182.168.0.0/17':   'B',
    '182.168.63.0/24':  'C',
    '182.168.64.0/18':  'C',
    '182.168.96.0/19':  'D',
    '0.0.0.0/0':        'E'   # Default route
}

DEST_IP_STR = '182.168.70.35'

# -----------------------------
# Utility Functions
# -----------------------------

def ip_to_int(ip_str):
    parts = [int(p) for p in ip_str.split('.')]
    return (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]

def dot_to_binary_ip(ip_str):
    return '.'.join(f"{int(p):08b}" for p in ip_str.split('.'))

def cidr_block_size(p_len):
    return 1 << (32 - p_len)


# -----------------------------
# Longest Prefix Match
# -----------------------------

dest_ip_int = ip_to_int(DEST_IP_STR)
best_match_cidr = None
best_match_next_hop = None
max_p_len = -1
route_analysis = []

for route_cidr, next_hop in INPUT_ROUTES.items():
    net_str, p_len_str = route_cidr.split('/')
    p_len = int(p_len_str)

    route_net_int = ip_to_int(net_str)
    mask_int = (0xFFFFFFFF << (32 - p_len)) & 0xFFFFFFFF

    is_match = (dest_ip_int & mask_int) == route_net_int

    route_analysis.append({
        'cidr': route_cidr,
        'next_hop': next_hop,
        'is_match': is_match
    })

    if is_match and p_len > max_p_len:
        max_p_len = p_len
        best_match_cidr = route_cidr
        best_match_next_hop = next_hop


# -----------------------------
# Per-Hop IP count
# -----------------------------

hop_ip_count = {}

for route_cidr, next_hop in INPUT_ROUTES.items():
    _, p_len_str = route_cidr.split('/')
    p_len = int(p_len_str)
    block_size = cidr_block_size(p_len)

    hop_ip_count[next_hop] = hop_ip_count.get(next_hop, 0) + block_size


# -----------------------------
# Printing
# -----------------------------

max_key_len = max(len(key) for key in ["Input Packet Dest IP", "Best Match CIDR", "Prefix Length", "Final Next Hop"])

route_header_width = 18
next_hop_width = 11
match_width = 25
total_width = route_header_width + next_hop_width + match_width + 4


print("Longest Prefix Match (LPM)\n")
print("(A,B,... in Next Hops are some IPs)\n")

print(f"{'Packet Dest IP'}\t{DEST_IP_STR} = {dot_to_binary_ip(DEST_IP_STR)}")
print("-" * total_width)

print(f"{'Route (CIDR)':<{route_header_width}}  {'Next Hop':<{next_hop_width}}  {'':<{match_width}}")
print("-" * total_width)

for entry in route_analysis:
    match_output = "Match" if entry['is_match'] else ""
    print(f"{entry['cidr']:<{route_header_width}}  {entry['next_hop']:<{next_hop_width}}  {match_output:<{match_width}}")

print("-" * total_width)
print(f"{'Final Next Hop':{max_key_len}}\t{best_match_next_hop}\n")


# -----------------------------
# Print per-hop IP coverage
# -----------------------------

print("IP addresses covered per next hop (raw CIDR block sizes):")
print("-" * 50)

for hop, count in sorted(hop_ip_count.items()):
    print(f"Next Hop {hop}: {count} addresses")

print("-" * 50)

```

#### Network address translation (NAT)




#### Address Resolution Protocol (ARP)

#### Dynamic Host Configuration Protocol (DHCP)

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


# Routing

- **router**
	- "_A node that is connected to two or more networks is commonly called a **router** or **gateway**_" [@Tanenbaum, 2011]
	 - "_The general name for a machine that makes a connection between two or more networks and provides the necessary translation, both in terms of hardware and software, is a **gateway**_" [@Peterson, 2020]
- **routing protocol**
	- **routing algorithm**
		- "The algorithm used to make a routing decision for a particular datagram, based on current routing information" [@Stallings, 2013]
- **static routing** (or **non-adaptive routing**)
- **dynamic routing** (or **adaptive routing**) 
	- "An adaptive routing technique in which routing tables react to network fluctuations when calculating the best path between networks." [@West, 2021]
- [[#Distance-vector routing]]
- [[#Link-state routing]]
- [[#Path-vector routing]]
- **routing domain**
	- **interior gateway protocol** (IGP) (or **interior routing protocol**)
	- **exterior gateway protocol** (_Not to be confused with the specific protocol_ Exterior Gateway Protocol (EGP))
	- **intradomain** and **interdomain** routing
		- **intra-AS** routing
			- (using OSPF, IS-IS and RIP)
		- **inter-AS** routing
			- (using BGP)
- **control plane**
- **data plane** (or **forwarding plane**)
- network topology
- packet forwarding
- **backbone network** (or **core network**)
	- (e.g. the **Internet backbone**)
- **hot-potato routing**
- **cold-potato routing**
- **autonomous systems** (AS)
	- "A group of networks and routers under the authority of a single administration." [@Forouzan, 2012]
	- **autonomous system number** (**ASN**)
		- formats:
			- 16-bit
			- 32-bit 
	- types:
		- stub
		- multihomed
		- transit
		- IXP
- **Internet service provider** (ISP)
	- Tier 1, Tier 2 and Tier 3
- **internet exchange point** (**IX** or **IXP**)
- peering
- **forwarding table**
	- Prefix/Length 
	- MAC address
	- interface 
- **routing table** (or **routing information base** (**RIB**))
	- network identifier (Prefix/Length)
	- next hop (or gateway)
	- metric
- **routing loop**
- **address aggregation** (or **address summarization** or **route summarization** or **route aggregation**)
- anycast



## Distance-vector routing

- The **distance vector** of a node $i$ is a vector $(c_{i1}, c_{i2}, \ldots, c_{in})$ that contains the cost from node $i$ to each of the other nodes in the network.
- Initially: 
	- for each non-neighboring nodes $i$ and $j$, we set $c_{ij} = \infty$.
	- the routing table of node $i$ contains an entry for each of destination node $j$:
		- cost $c_{ij}$ 
		- $\text{next-hop}_{ij} = \begin{cases} j & \text{if } 0< c_{ij} < \infty \\ \text{null} & \text{otherwise} \end{cases}$ 
- for each node $i$:
	- for each neighbor $k$ of $i$:
		- node $i$ receives from node $k$ its distance vector $\mathbf{c}_k$
		- for each destination node $j$:
			- if $c_{ik} + c_{kj} < c_{ij}$:
				- set $c_{ij} = c_{ik} + c_{kj}$
				- set $\text{next-hop}_{ij} = k$


- implementation: **routing information protocol** (RIP)

- Count to Infinity
	- Split horizon

## Link-state routing

- Link-state routing protocol
	- (flooding)
		- initially, each node generates an LSP describing its local link state.
		- at every node X, upon receiving an LSP from node Y:
			- if no LSP originated by Y is stored → store the LSP.
			- if an LSP from Y exists and the received LSP has a higher SEQNO → replace the stored LSP.
			- if the received LSP is accepted → forward it to all neighbors of X except the one from which it was received.
	- (route calculation) once a node has received the most recent LSP from every node, it runs [[Shortest Path Problem#Dijkstra's Algorithm|Dijkstra's algorithm]] to compute the shortest paths to all destinations.
- **link-state advertisement** (**LSA**)
- a **link state packet** (**LSP**) of a node, contains:
	- node identifier (originator ID)
	- sequence number (SEQNO)
	- time-to-live (TTL)
	- cost (weight) of each adjacent link
- a node generates a new LSP periodically or upon a local topology change
	(e.g., a link or neighbor failure, detected via "Hello" packets).
- **link-state database** (**LSDB**)
	- each node maintains an LSDB containing the most recent LSAs from all other nodes in the routing domain.
- examples:
	- **Open Shortest Path First** (OSPF)
	- **Intermediate System to Intermediate System** (IS-IS)


## Path-vector routing

- **path-vector routing** 

### Border gateway protocol (BGP) 

- **border gateway protocol** (**BGP**) 
	- BGP is path-vector routing protocol 
- **Internal BGP** (**iBGP** or **Interior Border Gateway Protocol**)
	- used for all routers in an AS
- **External BGP** (**eBGP** or **Exterior Border Gateway Protocol**)
	- used for border routers in an AS

- A **border router** is a router responsible for forwarding packets between different ASs.
	- A "BGP speaker" router is a router within an AS that runs the BGP protocol to communicate with BGP speakers in other Autonomous Systems. Every AS participating in BGP must have at least one BGP speaker. A border router is often also a BGP speaker, but this is not a strict requirement.
- Edge Router

- 


- `OPEN`
- `UPDATE`
- `KEEPALIVE`
- `NOTIFICATION`




