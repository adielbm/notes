
- **Wireless communication** (or just **wireless**)
- Wireless network
	- The **hidden node problem** (or **hidden terminal problem**)
	- The **exposed node problem**
- piconet
- Multipath propagation
- **handover** (or **handoff**)
- **Base station** (or **base radio station**, BS)
- Radio frequency (RF)
- RF currents
- Radio waves
- The **radio spectrum** $[3\,\mathrm{KHz},\,3000\,\mathrm{GHz}]$
	- A **radio band**
		- **band plan** (or **frequency plan**)
- **Microwave** $[300\,\mathrm{MHz},\,300\,\mathrm{GHz}]$
- spread spectrum
	- Frequency-hopping spread spectrum (FHSS)
	- direct-sequence spread spectrum (DSSS)
- Orthogonal frequency-division multiple access (OFDMA)
- a **channel access method** (or **multiple access method**)
	- Frequency-division multiple access (FDMA)
	- Time-division multiple access (TDMA)
	- Code-division multiple access (CDMA)
		- $u \in \{U_{1},U_{2},\dots,U_{k}\}$ is a user (sender)
			- $\mathbf{c}_u = [c_{u,1}, c_{u,2}, \dots, c_{u,m}]$ is the **chiping code** for user $u$, where $c_{u,i} \in \{-1, +1\}$ is the $i$-th chip of the code.
			- **code length** (or **spreading factor**) $m$ is the number of chips used to represent (spread) a single data bit.
		- The user sends $\mathbf{s}_u = b_u \mathbf{c}_u$, where $b_u \in \{-1, +1\}$ is the data bit for user $u$. where $b_u =-1$ if the user wants to send data bit 0, and $b_u =+1$ if the user wants to send data bit 1.
		- The **received signal** is $\displaystyle\mathbf{r}=\sum_{u=1}^{k} \mathbf{s}_u = \sum_{u=1}^{k} b_u \mathbf{c}_u$
		- The data bit for user $u$ recovered by receiver is $\displaystyle \hat{b}_u=\text{sign}\left(\mathbf{r} \cdot \mathbf{c}_u\right)=\frac{1}{m}(\mathbf{r} \cdot \mathbf{c}_u)$
			- $\hat{b}_u =0$ means user $u$ did not send any data bit.
			- $\hat{b}_u =+1$ means user $u$ sent data bit $+1$ (i.e., the user wants to send 1)
			- $\hat{b}_u =-1$ means user $u$ sent data bit $-1$ (i.e., the user wants to send 0)
			- $\mathbf{r} \cdot \mathbf{c}_u$ is called the **correlation value** $R_{u}$ 




- **Multiple access with collision avoidance** (**MACA**)
	- RTS (request to send) 
	- CTS (clear to send)

# cellular network

- **cellular network** or **mobile network**
- **mobile switching center** (MSC)
	- gateway MSC (G-MSC)
- **base station controller** (BSC)
- A **base transceiver station** (BTS) or (a **baseband unit** (BBU))
- **Radio Network Controller** (RNC)
- Serving GPRS support node (SGSN)
- Gateway GPRS support node (GGSN)

- long-term evolution (LTE)
	- **System Architecture Evolution** (**SAE**)
		- **Evolved Packet Core** (EPC) (or **SAE Core**)
		- packet data network (PDN)
			- PDN Gateway

- **5G New Radio** (5G NR)
- Multiple-input and multiple-output (MIMO)


# Wi-Fi 

- Wi-Fi
- IEEE 802.11
- service set
	- basic service set (BSS) 
	- extended service set (ESS)
- beacon frame

- **wireless ad hoc network** (WANET)
- **wireless mesh network** (WMN)
- **wireless distribution system** (WDS)
- **Wi-Fi Direct**
- **wireless access point** (WAP) (also just **access point** (AP))
- **hotspot**

# Bluetooth