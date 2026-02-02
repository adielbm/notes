- **sliding window protocol**
	- "A protocol that allows several data units to be in transition before receiving an acknowledgment." [@Forouzan, 2012]
	- "also used to improve efficiency when the channel may include high latency" (Wikipedia)


##### sender

```sh
# constant
SWS               # send window size. the sender may transmit up to SWS frames without waiting for acknowledgments).

# variables
LAR := 0          # last frame acknowledged
LFS := 0          # last frame sent
                  # Send-Window = [LAR+1, ..., LFS]

ack[·] := false   # acknowledgment bitmap

# invariant: 
LFS - LAR ≤ SWS


# On data from upper layer
if (LFS - LAR < SWS) then
    seq := LFS + 1
    send(frame(seq))
    start_timer(seq)
    LFS := LFS + 1
    
# On ACK(k)
if LAR < k ≤ LFS then
    ack[k] := true
    stop_timer(k)

    while ack[LAR + 1] = true do
        LAR := LAR + 1

# On timeout(k)
if LAR < k ≤ LFS then
	resend(frame(k))
	start_timer(k)
```


##### receiver

```sh
# constant
RWS # receive window size (s.t. RSW ≤ SWS)
# receiver can accept up to RSW frames out-of-order. (e.g. if RSW=3 and the expected frame is 5, then the receiver can accept frames 5, 6, 7 (buffering 6 and 7 until 5 arrives). 

# variables
LFR := 0          # last frame received in order
LAF := RWS        # last acceptable frame
# Receive Window = [LFR+1, ..., LAF]
# LFR+1 = ראש חלון הקבלה

buffer[·] := empty

# invariant: 
LAF - LFR ≤ RWS


# On receive frame(k)
if k ≤ LFR then
    send_ack(k)

else if LFR < k ≤ LAF then
    if buffer[k] is empty then
        buffer[k] := frame(k)

    send_ack(k)
    
    # optional: negative acknowledgment (NACK)
	if k > LFR + 1 then # missing frame detected
        send_nack(LFR + 1)              


    while buffer[LFR + 1] is not empty do
        deliver(buffer[LFR + 1])
        remove buffer[LFR + 1]
        LFR := LFR + 1

    LAF := LFR + RWS

else # LAF < k
    discard frame(k)
    # optional: cumulative ACK ("additional ACK")
    send_ack(LFR) 
```





- to fully utilize the link the SWS must be at least the bandwidth-delay product (in frames), i.e. $\displaystyle\text{SWS} \geq \text{BDP} \textsf{ [frames]}=\left\lceil { \frac{\text{BDP \textsf{[bits]}}}{\text{frame-size \textsf{[bits]}}}}  \right\rceil$


- selective acknowledgments 
	- the receiver could acknowledge exactly those frames it has received rather than just the highest numbered frame received in order

- speicial cases:
	- **Stop-and-wait ARQ**
		- $\text{RWS} = \text{SWS} = 1$
	- **Go-Back-N ARQ** (or **Go-Back-N**) protocol
		- $\text{RWS} = 1$
		- $\text{SWS} = N$
		- $N +1 \leq \text{MaxSeqNum}$
	- **Selective Repeat ARQ** (or **Selective Reject ARQ**) protocol 
		- $\text{RWS} = \text{SWS} = N$
		- The sequence number space must be at least twice the size of the send window to avoid ambiguity, i.e.:
			- $N < \frac{\text{MaxSeqNum}+1}{2}$ 

- **sequence number space** $[0, \text{MaxSeqNum}]$




