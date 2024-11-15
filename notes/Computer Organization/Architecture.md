
- components:
	- input
	- output
	- memory
	- control
	- datapath

- concepts:
	- Design Principles:
		1. **Simplicity favors regularity**
		2. **Smaller is faster**
		3. **Good design demands good compromises**
	- **stored-program** concept is the idea that instructions and data of many types can be stored in memory as numbers, leading to the stored-program computer

- #todo
	- **memory hierarchy** 
	- cache memory
	- virtual memory
	- I/O devices
	- system-on-chip (SoC)
	- control unit
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
		- Examples: 
			- MIPS
			- ARM
	- **CISC** (complex instruction set computer)
		- Examples: 
		 	- x86
			- PowerPC

- a **word** The natural unit of access in a computer; the **word size** (or **word length**) is the number of bits in a word 
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
	
- **endianess** is the order in which bytes are stored in memory
	- **big-endian**: the most significant byte is stored at the smallest memory address
		- Example: `0x12345678` is stored as `0x12 0x34 0x56 0x78`
	- **little-endian**: the least significant byte is stored at the smallest memory address
		- Example: `0x12345678` is stored as `0x78 0x56 0x34 0x12`

## Memory

- **main memory** (or **(primary) memory** or **RAM (random access memory)**) 
	- volatile (loses data when power is off)
	- **DRAM** (dynamic random access memory)
		- 
	- **SRAM** (static random access memory)
- **secondary storage** (or **secondary memory** or **storage**) 
	- nonvolatile (retains data even when power is off)
	- types:
		- magnetic storage
			- magnetic tape
			- hard disk drive (HDD)
			- floppy disk drive (FDD)
		- optical storage
			- compact disc (CD)
			- digital versatile disc (DVD)
			- Blu-ray disc
		- Solid-state storage (SSS)
			- flash memory - nonvolatile semiconductor memory
				- solid-state drive (SSD)
				- USB flash drive
				- memory card
			- memory card
				- SD card
				- microSD card
