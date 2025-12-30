
# Chapter 1

### 4

- Calculate the total time required to transfer a 1000 kB file in the following cases, assuming an RTT of 100 ms, a packet size of 1 kB data, and an initial 2 \times  RTT of “handshaking” before data are sent. 
	- (a) The bandwidth is 1.5 Mbps, and data packets can be sent continuously. 
	- (b) The bandwidth is 1.5 Mbps, but after we finish sending each data packet, we must wait one RTT before sending the next. 
	- (c) The bandwidth is “infinite,” meaning that we take transmit time to be zero, and up to 20 packets can be sent per RTT. 
	- (d) The bandwidth is infinite, and during the first RTT, we can send one packet ($2^{1−1}$), during the second RTT we can send two packets ($2^{2−1}$), during the third we can send four ($2^{3−1}$), and so on. (A justification for such an exponential increase will be given in Chapter 6.)

#### answer

We will count the transfer as completed when the last data bit arrives at its destination. An alternative interpretation would be to count until the last ACK arrives back at the sender, in which case the time would be half an RTT (25 ms) longer. 

- (a) 2 initial RTT’s (100ms) + 1000KB/1.5Mbps (transmit) + RTT/2 (propagation = 25ms) ≈ 0.125 + 8Mbit/1.5Mbps = 0.125 + 5.333 sec = 5.658 sec. 
	- If we pay more careful attention to when a mega is $10^6$ versus $2^{20}$, we get 8,192,000 bits/1,500,000 bits/sec = 5.461 sec, for a total delay of 5.586 sec. 
- (b) To the above we add the time for 999 RTTs (the number of RTTs between when packet 1 arrives and packet 1000 arrives), for a total of $5.586+ 49.95 = 55.536$. 
- (c) This is $49.5$ RTTs, plus the initial $2$, for $2.575$ seconds. 
- (d) Right after the handshaking is done we send one packet. One RTT after the handshaking we send two packets. At $n$ RTTs past the initial handshaking we have sent $1+2+4+···+2^n = 2^{n+1}−1$ packets. At $n = 9$ we have thus been able to send all $1,000$ packets; the last batch arrives $0.5$ RTT later. Total time is $2+9.5$ RTTs, or $.575$ sec.


### 5

Calculate the total time required to transfer a 1.5 MB file in the following cases, assuming an RTT of 80 ms, a packet size of 1 kB data, and an initial $2 \times  \mathrm{RTT}$ of “handshaking” before data are sent.

- (a) The bandwidth is 10 Mbps, and data packets can be sent continuously. 
- (b) The bandwidth is 10 Mbps, but after we finish sending each data packet, we must wait one RTT before sending the next.
- (c) The link allows infinitely fast transmit but limits bandwidth such that only 20 packets can be sent per RTT. 
- (d) Zero transmit time as in (c), but during the 1st RTT, we can send $1$ packet, during the 2nd RTT we can send $2$ packets, during the 3rd we can send $4= 2^{3−1}$, etc. (A justification for such an exponential increase will be given in Chapter 6.)

#### answer

We will count the transfer as completed when the last data bit arrives at its destination.

- (a) 1.5 MB = 12582912 bits. 2 initial RTTs (160 ms) + 12,582,912/10,000,000 bps (transmit) + RTT/2 (propagation) ≈ 1.458 seconds.
- (b) Number of packets required $= 1.5\,\text{MB}/1\,\text{kB}  = 1536$. To the above we add the time for 1535 RTTs (the number of RTTs between when packet 1 arrives and packet 1536 arrives), for a total of $1.458 + 122.8 = 124.258$ seconds.
- (c) Dividing the 1536 packets by 20 gives 76.8. This will take 76.5 RTTs (half an RTT for the first batch to arrive plus 76 RTTs between the first batch and the 77th partial batch) plus the initial 2 RTTs, for 6.28 seconds.
- (d) Right after the handshaking is done we send one packet. One RTT after the handshaking we send two packets. At $n$ RTTs past the initial handshaking we have sent $1+2+4+···+2^n = 2^{n+1} −1$ packets. At $n = 10$ we have thus been able to send all $1,536$ packets; the last batch arrives $0.5$ RTT later. Total time is $2 + 10.5$ RTTs, or $1$ sec.


### 7

Consider a point-to-point link 50 km in length. 
- At what bandwidth would propagation delay (at a speed of $2\times 10^8 \,\text{m/sec}$) equal transmit delay for 100-byte packets? 
- What about 512-byte packets?

#### answer

- Propagation delay is $\frac{50 \times  10^3 \text{ m}}{2 \times  10^8 \,\mathrm{m/sec}} = 250 \,\mathrm{\mu s}$. 
- $\frac{800 \,\mathrm{bits}}{ 250 \,\mathrm{\mu s}}=3.2 \,\mathrm{Mbits/sec}$. 
- For 512-byte packets, this rises to $16.4 \,\mathrm{Mbit/sec}$.

### 15

 Suppose a 128-kbps point-to-point link is set up between Earth and a rover on Mars. The distance from Earth to Mars (when they are closest together) is approximately 55 Gm, and data travel over the link at the speed of light $3 \times  10^8$ m/sec. 
 
 - (a) Calculate the minimum RTT for the link. 
 - (b) Calculate the delay-bandwidth product for the link. 
 - (c) A camera on the rover takes pictures of its surroundings and sends these to Earth. How quickly after a picture is taken can it reach Mission Control on Earth? Assume that each image is 5 Mbit in size.


#### answer

- (a) Propagation delay on the link is $(55 \times  10^9)/(3 \times  10^8) = 184$ seconds. Thus the RTT is 368 seconds. 
- (b) The delay-bandwidth product for the link is $= 184 \times 128 \times 10^3 = 2.81\,\text{MB}$. 
- (c) After a picture is taken, it must be transmitted on the link and be completely propagated before Mission Control can interpret it. Transmit delay for 5 MB of data is $\frac{41,943,040 \,\mathrm{bits}}{128 \times  10^3} = 328\,\mathrm{\sec}$. Thus, the total time required is transmit delay + propagation delay = 328 + 184 = 512 seconds.



### 17


Calculate the latency (from first bit sent to last bit received) for the following:

- (a) 10-Mbps Ethernet with a single store-and-forward switch in the path and a packet size of 5000 bits. Assume that each link introduces a propagation delay of 10 µs and that the switch begins retransmitting immediately after it has finished receiving the packet. 
- (b) Same as (a) but with three switches. 
- (c) Same as (a) but assume the switch implements “cut-through” switching: it is able to begin retransmitting the packet after the first 200 bits have been received.


#### answer

- (a) One packet consists of 12000 bits, and so is delayed due to bandwidth 120 µs along each link. The packet is also delayed 10 µs on each of the two links due to propagation delay, for a total of 260 µs. 
- (b) With three switches and four links, the delay is 4×120µs+4×10µs= 520µs 
- (c) With cut-through, the switch delays the packet by 200 bits = 2 µs. There is still one 120 µs delay waiting for the last bit, and 20 µs of propagation delay, so the total is 142 µs. To put it another way, the last bit still arrives 120 µs after the first bit; the first bit now faces two link delays and one switch delay but never has to wait for the last bit along the way. With three cut-through switches, the total delay would be: 120+3×2+4×10= 600µs

### 18

 Calculate the latency (from first bit sent to last bit received) for: 
 - (a) 1-Gbps Ethernet with a single store-and-forward switch in the path and a packet size of 5000 bits. Assume that each link introduces a propagation delay of 10 µs and that the switch begins retransmitting immediately after it has finished receiving the packet. 
 - (b) Same as (a) but with three switches. 
 - (c) Same as (b) but assume the switch implements “cut-through” switching: it is able to begin retransmitting the packet after the first 128 bits have been received.

#### answer

- (a) For each link, it takes 5 kb / 1 Gbps = 5 µs to transmit the packet on the link, after which it takes an additional 10 µs for the last bit to propagate across the link. Thus for a LAN with only one switch that starts forwarding only after receiving the whole packet, the total transfer delay is two transmit delays + two propagation delays = 30 µs. 
- (b) For three switched and thus four links, the total delay is four transmit delays + four propagation delays = 60 µs. 
- (c) For “cut-through,” a switch need only decode the first 128 bits before beginning to forward. This takes 128 ns. This delay replaces the switch transmit delays in the previous answer for a total delay of one transmit delay + three cut-through decoding delays + four propagation delays = 45.384 µs.

### 19

- Calculate the effective bandwidth for the following cases. For (a) and (b), assume there is a steady supply of data to send; for (c), simply calculate the average over 12 hours. 
	- (a) 10-Mbps Ethernet through three store-and-forward switches as in Exercise 17(b). Switches can send on one link while receiving on the other. 
	- (b) Same as (a) but with the sender having to wait for a 50- byte acknowledgment packet after sending each 5000-bit data packet. 
	- (c) Overnight (12-hour) shipment of 100 compact disks (650 MB each).

#### answer

- (a) The effective bandwidth is 10 Mbps; the sender can send data steadily at this rate and the switches simply stream it along the pipeline. We are assuming here that no ACKs are sent, and that the switches can keep up and can buffer at least one packet. 
- (b) The data packet takes 2.04 ms as in 17(b) above to be delivered; the 400 bit ACKs take 40 µs/link for a total of 4 × 40µs+4 × 10µs = 200 µsec = 0.20 ms, for a total RTT of 2.24 ms. 5000 bits in 2.24 ms is about 2.2 Mbps, or 280 KB/sec. 
- (c) 100×6.5× $10^8$ bytes / 12 hours = 6.5× $10^10$ bytes/(12×3600 sec) ≈ 1.5 MByte/sec = 12 Mbit/sec

### 28

For the following, as in the previous problem, assume that no data compression is done. Calculate the bandwidth necessary for transmitting in real-time: 

- (a) HDTV high-definition video at a resolution of $1920 \times  1080$, $24$ bits/pixel, $30$ frames/sec. 
- (b) POTS (plain old telephone service) voice audio of 8 bit samples at 8 KHz. 
- (c) GSM mobile voice audio of 260-bit samples at 50 Hz. 
- (d) HDCD high-definition audio of 24-bit samples at 88.2 kHz.
#### answer
 
- (a) $1920 \times  1080 \times  24 \times  30 = 1492992000 ≈ 1.5$ Gbps.
- (b) $8 \times  8000 = 64$ kbps.
- (c) $260 \times  50 = 13$ kbps.
- (d) $24 \times  88200 = 216800 ≈ 2.1$ Mbps.