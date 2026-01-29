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
- **forwarding table** (or **forwarding information base** (**FIB**) or **MAC** (**address**) **table**, or **CAM table**)
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



