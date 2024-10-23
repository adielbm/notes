

- input
- output
- memory
- control
- datapath

- main memory (or primary memory) - volatile, typically DRAM
- secondary memory - nonvolatile, typically flash memory or magnetic disk

- #todo
	- **memory hierarchy** 
	- SRAM - static random access memory
	- instruction set architecture (ISA)
	- ABI - application binary interface
	- cache memory

- volatile - loses data when power is off
	- DRAM - dynamic random access memory
- nonvolatile - retains data even when power is off
	- **flash memory** - semiconductor memory 
	- **magnetic disk** (or **hard disk**)
	- **optical disk** 

- **Very-large-scale integration (VLSI)** is the process of creating an integrated circuit (IC) by combining millions or billions of MOS transistors onto a single chip.
- **metal–oxide–semiconductor** field-effect transistor (MOS transistor) is a type of field-effect transistor (FET), most commonly fabricated by the controlled oxidation of silicon
- **Field-effect transistor (FET)** is


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


# Instructions


- Design Principles:
	1. **Simplicity favors regularity**
	2. **Smaller is faster**
	3. **Good design demands good compromises**

- **stored-program** concept is the idea that instructions and data of many types can be stored in memory as numbers, leading to the stored-program computer
- **register** 
- **register file**
- **word** The natural unit of access in a computer, usually a group of 32 bits; corresponds to the size of a register in the MIPS architecture
- **arithmetic logic unit (ALU)**
- **general-purpose register** (GPR)
- **RISC** (reduced instruction set computer)
- **RISC-V** is an open-source ISA based on established RISC principles


- **data transfer instruction** is an instruction that transfer data between memory and registers
	- The data transfer instruction that copies data from memory to a register is traditionally called **load**. The actual MIPS name for this instruction is `lw`, standing for **load word**
	- The data transfer instruction that copies data from a register to memory is traditionally called **store**. The actual MIPS name for this instruction is `sw`, standing for **store word**

- **address** is a value used to specify the location of a specific data element within a memory array

- CPU families:
	- Intel x86 (CISC)
	- ARM
	- MIPS
	- RISC-V 
	- PowerPC

- **mips** is a reduced instruction set computer (RISC) instruction set architecture (ISA) developed by MIPS Computer Systems, now MIPS Technologies, based in the United States
- MIPS has 32 general-purpose registers, each 32 bits wide
- MIPS has a load-store architecture, meaning it only performs arithmetic and logic operations between registers, and memory access is done through load/store instructions


- **MIPS assembly language** 


- MIPS Fields:
	- _op_: basic operation of the instruction (**opcode**)
	- _rs_: first register source operand
	- _rt_: second register source operand
	- _rd_: register destination operand
	- _shamt_: shift amount
	- _funct_: (function code) selects the specific variant of the operation in the _op_ field

