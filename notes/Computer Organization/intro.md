# Integrated Circuits & Transistors

- **Very-large-scale integration (VLSI)** is the process of creating an integrated circuit (IC) by combining millions or billions of MOS transistors onto a single chip.
- **metal–oxide–semiconductor** field-effect transistor (MOS transistor) is a type of field-effect transistor (FET), most commonly fabricated by the controlled oxidation of silicon
- **Field-effect transistor (FET)**

# Architecture

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


- **register** 
- **register file**

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

# MIPS

- **address** is a value used to specify the location of a specific data element within a memory array
- **data transfer instruction** is an instruction that transfer data between memory and registers
	- The data transfer instruction that copies data from memory to a register is traditionally called **load**. The actual MIPS name for this instruction is `lw`, standing for **load word**
	- The data transfer instruction that copies data from a register to memory is traditionally called **store**. The actual MIPS name for this instruction is `sw`, standing for **store word**
- **mips** is a reduced instruction set computer (RISC) instruction set architecture (ISA) developed by MIPS Computer Systems, now MIPS Technologies, based in the United States
- MIPS has 32 general-purpose registers, each 32 bits wide
- MIPS has a load-store architecture, meaning it only performs arithmetic and logic operations between registers, and memory access is done through load/store instructions

- **MIPS assembly language** 
- **alignment restriction** is a requirement that data be aligned in memory on natural boundaries

- Instruction Format
	- R-type
	- I-type
	- J-type



- MIPS Fields:
	- _op_: basic operation of the instruction (**opcode**)
	- _rs_: first register source operand
	- _rt_: second register source operand
	- _rd_: register destination operand
	- _shamt_: shift amount
	- _funct_: (function code) selects the specific variant of the operation in the _op_ field


# Performance

- processor performance:
	- **clock cycle (time)** is the time for one clock period (usually of the processor clock, which runs at a constant rate, usually published as part of the documentation for a computer)
		- note: Although clock cycle time has traditionally been fixed, to save energy or temporarily boost performance, today’s processors can vary their clock rates, so we would need to use the average clock rate for a program.
	- **clock rate** is the inverse of the clock cycle time (usually measured in $\mathsf{Hz}$ or its multiples)
	- **response time** (or **execution time**) is the total time required for the computer to complete a task (including disk accesses, memory accesses, I/O activities, operating system overhead, CPU execution time, etc.)
	- **performance** is the reciprocal of response time $$\text{Performance}_X = \frac{1}{\text{Response time}_X}$$
	- **CPU (execution) time** (of task) is the actual time the CPU spends computing for a specific task (excluding other activities) 
	- **throughput** (or **bandwidth**) is the number of tasks completed per unit time
- program performance:
	- **instruction count** is the number of instructions executed by the program
	- **CPI (cycles per instruction)** is the average number of clock cycles per instruction for a program or program fragment
	- **CPU clock cycles** is the total number of clock cycles consumed by the program $$\text{CPU clock cycles} = \text{Instruction count} \times \text{CPI}$$
	- **CPU (execution) time** (of program) is $$\text{CPU time for program} = \text{CPU clock cycles} \times \text{Clock cycle time}=\frac{\text{CPU clock cycles}}{\text{Clock rate}}$$
