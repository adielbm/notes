
- A **register** is a memory element that can hold a multibit datum of $n$ bits (such as a byte or a word), and it can be read and written. It can be implemented using $n$ D flip-flops, each storing one bit.
- A register file consists of a set of registers that can be read and written by supplying a register number to be accessed. it can be implemented with a decoder for each read and write port, and an array of registers
- In MIPS, a register file has $32$ registers, each storing a $32$-bit value, that is $32^2=1024$ bits in total implemented $1024$ D flip-flops where all connected to the same clock signal.
- In MIPS, we define a special register called **zero** that always contains the value zero, and it cannot be written to. (we do not present its implementation here)

#### Register Read

- _read port_: the _read register number_ input connected as the selector of $n$-to-1 multiplexor with $n$ registers as data inputs of the multiplexor that outputs the _read data_
- for $n$ registers of $m$ bits, a $\lfloor\log n\rfloor$-bit _Read Register Number_ input is used as the selector for $n$-to-1 multiplexor that outputs $m$-bit _Read Data_



![[Register File (read).png|300]]

- In MIPS, Two 5-bit lines (`read register 1` and `read register 2`) specify which registers to read (values between 0 and 31), using two 32-to-1 multiplexors.
- If `read register 1` and `read register 2` are the same, both outputs will contain the same value.

#### Register Write

- _write port_
- A _Clock_ signal is connected to the clock input of all flip-flops
	- TODO: does not appear in this diagram, but it is connected to the clock input of all flip-flops instead of the AND output, which will be connected to E in the actual implementation.
- A _Write Enable_ signal (will be called later _RegWrite_)
- A _Register Number_ input ($\lfloor\log n\rfloor=5$ bits) is implemented using a using a $\lfloor\log n\rfloor$-to-$n$ decoder (5-to-32) that each one of its $n=32$ outputs is connected with the _Write Enable_ signal using an AND gate to the clock input of the corresponding register flip-flop. 
- A _Register Data_ input (32 bits) is connected to the data input of the corresponding register flip-flop.


![[Register File (write).png]]




