
## Clock

- A **clock signal** is  
	- The **clock period** is the time for one full cycle of the clock signal
- The **clocking methodology** is the approach used to determine 
	- **Edge-triggered clocking**: all state changes occur on a clock edge, either **rising edge** or **falling edge**. (note: our default is _rising edge_, but sometimes we'll use _falling edge_)
- A **clock generator** is an electronic oscillator producing a periodic clock signal

- A **signal edge** is the transition of a signal from one level to another
	- A **rising edge** (or **positive edge**) is the transition from low to high
	- A **falling edge** (or **negative edge**) is the transition from high to low



- A **sequential logic** is
	- The **state** of a sequential logic is the current value of the memory elements
	- A **state element** 

- A **synchronous circuit** (or **synchronous logic**)
- An **asynchronous circuit** (or **asynchronous logic**)

- **SR latch** (Set-Reset latch) is a simple form of sequential logic that can store one bit of information
- **flip-flop** 
	- **JK flip-flop**

## Memory Elements

- **Memory elements**
- Memory elements are **unclocked** when they do not have any clock input (e.g. SR latch)

### SR Latch


![[SR latch (NOR).png|200]]

| $S$ | $R$ | Action             | $Q$ | $\overline{Q}$ |
| --- | --- | ------------------ | --- | -------------- |
| 0   | 0   | hold state (latch) | $Q$ | $\overline{Q}$ |
| 0   | 1   | reset              | 0   | 1              |
| 1   | 0   | set                | 1   | 0              |
| 1   | 1   | invalid            | 0   | 0              |


### D Latch

- inputs
	- $D$ data value
	- $C$ is the clock signal - indicates when the latch should read the value of D and store it
		- when $C=1$ (asserted), the latch is said to be **open** (or **transparent**), and the value of $Q$ is updated to the value of $D$
		- when $C=0$ (deasserted), the latch is said to be **closed** (or **opaque**), and the value of $Q$ is whatever value was last stored in the latch
- outputs
	- **Q** the value of the internal state
	- **$\overline{Q}$** the complement of $Q$
- this sturcture is called a **transparent latch** (or **level-sensitive latch**)


![[D latch (NOR).png|200]]

| $C$ | $D$ | $Q$ | $\overline{Q}$ |
| --- | --- | --- | -------------- |
| 0   | $x$ | $Q$ | $\overline{Q}$ |
| 1   | 0   | 0   | 1              |
| 1   | 1   | 1   | 0              |



### Flip-Flop

- Flip-flops are not transparent: their outputs change only on the clock edge
- The **setup time** $t_{\text{setup}}$ is the minimum time that the input signal must be valid before the clock edge
- The **hold time** $t_{\text{hold}}$ is the minimum time during which the input signal must be valid after the clock edge. (hold times are usually zero or very small)
- An input is **valid** (or **stable**)
#### D Flip-Flop

- A **D flip-flop** (**data** or **delay** flip-flop) 
- consists of two D latches (master and slave) connected in series, with the $Q$ output of the master connected to the $D$ input of the slave. and a clock signal connected to both latches, but inverted in the slave latch.

 ![[D flip-flop (falling-edge).png|350]]

- $D$ is the data input to be stored
- $Q$ is the current data stored in the flip-flop
- $C$ (or $CLK$) is the clock signal

>there is also d flip-flop with enable 

