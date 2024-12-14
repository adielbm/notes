- Integrated Circuit
- Transistor
- **Very-large-scale integration (VLSI)** is the process of creating an integrated circuit (IC) by combining millions or billions of MOS transistors onto a single chip.
- **metal–oxide–semiconductor** field-effect transistor (MOS transistor) is a type of field-effect transistor (FET), most commonly fabricated by the controlled oxidation of silicon
- **Field-effect transistor (FET)**
- Propagation delay


# Memory

## SRAM

- A **static random-access memory** (SRAM)

- it's a integrated circuit 
- usually has a single access port (read/write)
- has a fixed access time to any datum, though the time can vary depending on whether the memory is being read or written
- The number of addressable locations is called the **height**
- The number of bits stored in each location is called the **width**
- Inputs:
	- _Chip select_
	- _Address_
	- _Output enable_: controls whether or not the datum selected by the _Address_ is actually driven on the pins
	- _Write enable_
	- _Data input_ (Din)
- Outputs:
	- _Data output_ (Dout)
- Operation: 
	- To initiate a read/write access, the _Chip select_ signal must be made active
	- (read) The _Output enable_ signal must be made active
		- the access time is specified as the delay from the time the _Output enable_ is true and the _Address_ lines are valid until the time the date is on the _Data output_ lines
	- (write) The _Write enable_ has to be active, and the _Data input_ lines and _Address_ lines has to be supplied
		- the time to complete a write is specified by the combination of [[Logic Circuits#Flip-Flop|the setup times, the hold times]], and the _Write enable_ pulse width
- 
	- it cannot be build in the same way as a register file, because a giant mux would be impractical. instead, large memories are implemented with a shared output line, called a _bit line_, which multiple memory cells in the memory array can assert.
	- A **three-state buffer** has two inputs (data and enable) and a single output, which can be in one of three states: _asserted_, _deasserted_, or _high-impedance_
		- the out


>[!Example]
>$\mathrm{4M\times 8}$ SRAM provides 4 million addressable locations, each storing 8 bits, thus it will have:
> - 22 address lines (since $\mathrm{2^{22}=4M}$) 
> - 8-bit data output line
> - 8-bit single data input line


>[!Example]
>$\mathrm{2M\times 16}$ SRAM provides 2 million addressable locations, each storing 16 bits, thus it will have:
> - 21 address lines (since $\mathrm{2^{21}=2M}$) 
> - 16-bit data output line
> - 16-bit single data input line
