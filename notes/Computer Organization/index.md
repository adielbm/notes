

- **data path**
- **control unit** (**CU**)
- **stored-program computer**
- **memory hierarchy** 
- cache memory
- virtual memory
- I/O devices
- system-on-chip (SoC)
- operands
- program counter (PC) (aka instruction pointer (IP) in x86)
- instruction register (IR)
- pipelining
- physical address space
- address space
- memory-mapped I/O (MMIO)
- port-mapped I/O (PMIO)
- bus
	- address bus
	- data bus
	- control bus
- **arithmetic logic unit (ALU)**
- **general-purpose register** (GPR)
- **instruction set architecture (ISA)** (or **architecture**) is an abstract interface between the hardware and the lowest-level software that encompasses all the information necessary to write a machine language program that will run correctly, including instructions, registers, memory access, I/O, and so on
	- **RISC** (reduced instruction set computer)
		- **RISC-V** is an open-source ISA based on established RISC principles
		- Examples: MIPS, ARM
	- **CISC** (complex instruction set computer)
		- Examples: x86, PowerPC

- **word**
	- **word size** (or **word length**) is the number of bits in a word 
	- word size may be used for:
		- registers: the number of bits in a general-purpose register
		- memory addresses: the number of bits in a memory address
		- instructions
		- data types (e.g., integer, floating-point, character)
		- address bus
		- data bus
	- e.g., 32 bits in MIPS, 64 bits in x86-64, or 16 bits in the 8086


- **register** is a small, fast storage location within the CPU used to store data temporarily
	- **register file**
	- The process of putting less commonly used variables (or those needed later) into memory is called **spilling** registers 
	
