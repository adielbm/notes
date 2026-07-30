
- **wireless communication** (or just **wireless**)


- radio frequency (RF)
- RF currents
- radio waves
- The **radio spectrum** $[3\,\mathrm{KHz},\,3000\,\mathrm{GHz}]$
	- A **radio band**
		- The **ISM radio bands**
			- 2.4 GHz–2.5 GHz
			- 5.725 GHz–5.875 GHz
			- 24 GHz–24.25 GHz
			- and more...
		- (ITU)
			- ...
			- (9) **ultra high frequency** (**UHF**) 300 MHz–3 GHz
			- (10) **super high frequency** (**SHF**) 3 GHz–30 GHz
			- (11) **extremely high frequency** (**SHF**) 30 GHz–300 GHz
				- (millimeter waves)
			- ...
		- (IEEE)
			- ...
			- **ultra high frequency** (**UHF**) 300 MHz–1 GHz
			- ...
		- **microwave** 300 MHz–300 GHz
	- **band plan** (or **frequency plan**)


- **spectral band**
	- **frequency band**

- multipath propagation
	- **multipath interference** (or **multipath distortion**)
- **base station** (or **base radio station**, BS)


# spread spectrum

- spread spectrum
	- **frequency-hopping spread spectrum** (**FHSS**)
	- direct-sequence spread spectrum (DSSS)
- Orthogonal frequency-division multiple access (OFDMA)




# wireless network

- wireless network
	- types:
		- **wireless LAN** (**WLAN**)
			- [[#Wi-Fi]]
		- **wireless personal area network** (**WPAN**)
			- [[#Bluetooth]]
		- **wireless wide area network** (**WWAN**)
			- [[#cellular network]]
		- **wireless ad hoc network** (WANET)
	- difficulties:
		- The **hidden node problem** (or **hidden terminal problem**)
		- The **exposed node problem**
	- **wireless mesh network** (WMN)

- **near-field communication** (**NFC**)

- **multiple access with collision avoidance** (**MACA**)
	- RTS (request to send) 
	- CTS (clear to send)
- **backhaul**

## Wi-Fi

![](https://upload.wikimedia.org/wikipedia/commons/6/6f/SSID_ESS-en.svg)

- Wi-Fi
- IEEE 802.11

- **station** (**STA**) (sometimes also _wireless client_ or _node_)
	- **mobile station**: "A type of STA that uses network communications while in motion." (802.11-2020)
	- **portable station**: "A type of station (STA) that might be moved from location to location, but that uses network communications only while at a fixed location." (802.11-2020)
	- **fixed station**: "A STA that is physically attached to a specific location. In licensed bands, a fixed STA might be authorized to operate only at a specific location." (802.11-2020)
	- 
- service set
	- identifier: _service set identifier_ (_SSID_) - "A string used to identify the infrastructure basic service sets (BSSs) that comprise an extended service set (ESS), or to identify a non-infrastructure BSS." (802.11-2020)
	- subgroups:
		- **basic service set** (**BSS**) 
			- identifier: _basic service set identifier_ (_BSSID_)
			- types:
				- _infrastructure BSS_
					- **wireless access point** (WAP) (also just **access point** (AP)) - "An entity that contains one station (STA) and provides access to the distribution system services, via the wireless medium (WM) for associated STAs." (802.11-2020)
						- basic service area (BSA)
				- _independent BSS_ (_IBSS_) (or _ad hoc network_)
				- _mesh basic service set_ (_MBSS_)
		- **extended service set** (**ESS**)
			- 
- **distribution system** (**DS**) 
	- "A system used to interconnect a set of basic service sets (BSSs) and integrated local area networks (LANs) to create an extended service set (ESS)." (802.11-2020)



- (data-link layer)
	- (LLC sublayer)
	- (MAC sublayer)
		- **distributed coordination function** (**DCF**)
			- _request to send_ (RTS)
			- _clear to send_ (CTS)
			- **short interframe space** (**SIFS**)
			- **distributed interframe space** (**DIFS**)
			- **network allocation vector** (**NAV**)
		- **point coordination function** (**PCF**)
			- for infrastructure BSS (but not for IBSS) 
			- **beacon frame** 
				- "a frame that starts the repetition interval." [@Forouzan, 2012]
			- **PCF interframe space** (**PIFS**)
- (physical layer)


- active scanning (for first joining to the network or in handoff)
	- probe request frame broadcast from the station
	- all APs within radio range respond with probe response frames describing: SSID, supported data rates, other capabilities
	- the station selects one AP and sends it an association request
	- the AP accepts or rejects the association
- passive scanning 
	- APs periodically broadcast beacon frames
	- the station listens for beacon frames.
	- upon finding a suitable AP, it directly sends an association request.


- **Wi-Fi Direct**
- **hotspot**

#### security

- **Wired Equivalent Privacy** (**WEP**)
- **Wi-Fi Protected Access** (**WAP**, **WAP2**, and **WAP3**)
	- **WPA-Personal** (**WPA-PSK**, pre-shared key)


## cellular network


![](https://upload.wikimedia.org/wikipedia/commons/4/4a/Cellular_network_standards_and_generation_timeline.svg)

- **cellular network** (or **mobile network**)


- Multiple-input and multiple-output (MIMO)
- **handover** (or **handoff**)
	- "Changing to a new channel as a mobile device moves from one cell to another" [@Forouzan, 2012]
- **roaming**

- **Access Point Name** (**APN**)


- **mobile switching center** (MSC)
	- gateway MSC (G-MSC)
- **base station controller** (BSC)
- A **base transceiver station** (BTS) or (a **baseband unit** (BBU))
- **Radio Network Controller** (RNC)
- Serving GPRS support node (SGSN)
- Gateway GPRS support node (GGSN)


- **international mobile subscriber identity** (**IMSI**)


### 3GPP


- **Advanced Mobile Phone System** (**AMPS**)
	- FDMA
- **Global System for Mobile Communications** (**GSM**)
	- Primary GSM (P-GSM)
		- circuit switching for voice
		- FDMA + TDMA combination
		- 124 frequency channels (1–124)
			- 8 time slots per carrier
		- uplink: 890.0–915.0 MHz
		- downlink: 935.0–960.0 MHz
- **Universal Mobile Telecommunications System** (**UMTS**)
	- HSPA (HSDPA, HSUPA)
	- HSPA+ (DC-HSDPA)
- **long-term evolution** (**LTE**) (or **3.95G** or **4G LTE** or **Advanced 4G**)
	- (_Release 8_, _Release 9_)
	- **System Architecture Evolution** (**SAE**)
		- ![](https://upload.wikimedia.org/wikipedia/commons/d/d7/Evolved_Packet_Core.svg)
		- **Evolved Packet Core** (EPC) (or **SAE Core**)
			- **mobility management entity** (MME)
			- **packet data network** (PDN)
				- **PDN Gateway** (or **PGW**)
			-  **serving gateway** (**SGW**)
			- **home subscriber server** (HSS)
		- **radio access network** (**RAN**)
			- **evolved NodeB** (or **eNodeB** or **eNB**) - a base station in LTE
		- **user equipment** (**UE**)
- **LTE Advanced** (or **LTE+**, **LTE-A** or **4G+**)
	- (_Release 10_, _Release 11_, _Release 12_)
- **LTE Advanced Pro** (**LTE-A Pro**, or **4.5G**, **4.5G Pro**, **4.9G**, **Pre-5G**, **5G Project**)****
	- (_Release 13_, _Release 14_)
- **5G New Radio** (5G NR) 
	- (_Release 15_)
	- **Frequency Range 1** (FR1)
		- 410 MHz–7,125 MHz
	- **Frequency Range 2** (FR2)
		- 24,250 MHz–71,000 MHz
- **5G-Advanced** (aka **5.5G**; _Release 18_)

## Bluetooth


- Bluetooth Special Interest Group (Bluetooth SIG)

- 2.4-GHz ISM band 
- 79 channels (1 MHz each)
- $f_c=2402 + n \ \text{MHz}$ (for $n=0,1,2,\dots,78$)
- TDD
- FHSS
	- $625\ \mu s$
	- 1600 hops/sec
	- master transmits in even-numbered slots
	- slave transmits in odd-numbered slots
	- packets may occupy 1, 3, or 5 slots
- modulation: GFSK
- basic rate (BR)
- Enhanced Data Rate (EDR)
- **piconet**
	- **master** (or _primary_)
	- **slave** (or _secondary_)
		- states: _active_ or _parked_ 
	- 1 master
	- up to 7 active slaves 
	- up to 255 slaves
	- all communication is master ↔ slave
	- slave ↔ slave communication is not allowed
	- only one slave communicates with the master at a given instant

- profile


- **Bluetooth Low Energy** (**Bluetooth LE**, **BLE**)
	- channels: 40
	- bandwidth: 2 MHz
	- GFSK