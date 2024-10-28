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

# MIPS

- **address** is a value used to specify the location of a specific data element within a memory array

- **mips** is a reduced instruction set computer (RISC) instruction set architecture (ISA) developed by MIPS Computer Systems, now MIPS Technologies, based in the United States
- MIPS has a load-store architecture, meaning it only performs arithmetic and logic operations between registers, and memory access is done through load/store instructions
- each array element is a word (4 bytes)
- the endianness of MIPS is big-endian


- **MIPS assembly language** 
- **alignment restriction** is a requirement that data be aligned in memory on natural boundaries



## Memory

- The memory in MIPS is byte-addressable (each byte has a unique address)
- The memory is organized as a sequence of 32-bit words
- The memory is big-endian
- The memory is accessed only by data transfer instructions 
- The size of the memory #todo
- Memory holds data structures, arrays, and spilled registers

## Registers

- MIPS has 32 general-purpose registers, each 32 bits wide

| Register (32)  | Assembly Name | Usage                  |
| --------- | ------------- | ---------------------- |
| `r0`      | `$zero`       | constant value 0       |
| `r1`      | `$at`         | reserved for assembler |
| `r2–r3`   | `$v0–$v1`     | stores results         |
| `r4–r7`   | `$a0–$a3`     | stores arguments       |
| `r8–r15`  | `$t0–$t7`     | temporary registers    |
| `r16–r23` | `$s0–$s7`     | saved registers        |
| `r24–$25` | `$t8–$t9`     | temporary registers    |
| `r26-r27` | `$k0–$k1`     | reserved for OS        |
| `r28`     | `$gp`         | global pointer         |
| `r29`     | `$sp`         | stack pointer          |
| `r30`     | `$fp`         | frame pointer          |
| `r31`     | `$ra`         | return address         |


## Instructions

- **instruction** is a command given to a computer to perform a specific operation
	- instructions are 32 bits long (4 bytes, 8 hex digits)

- **data transfer instruction** is an instruction that transfer data between memory and registers

- **immediate** is a constant value that is part of the instruction itself
- **immediate instruction** is an instruction that has an immediate operand

#### Instruction Format

- **R-type** (register type) 
	- used for arithmetic and logical operations
	- format: `op rs rt rd shamt funct`
	- it has a fixed opcode of `000000`. The actual operation is specified by the `funct`

```tex
\documentclass[varwidth]{standalone}
\usepackage{bytefield}
\begin{document}
\begin{bytefield}{32}
\textbf{R-type}\\
\bitheader{31,26,25,21,20,16,15,11,10,6,5,0} \\
\bitbox{6}{op \texttt{\scriptsize(6)}} & \bitbox{5}{rs \texttt{\scriptsize(5)}} & \bitbox{5}{rt \texttt{\scriptsize(5)}} & \bitbox{5}{rd \texttt{\scriptsize(5)}} & \bitbox{5}{shamt \texttt{\scriptsize(5)}} & \bitbox{6}{funct \texttt{\scriptsize(6)}} \\ 
\end{bytefield} \\
\begin{bytefield}{32}
\textbf{I-type}\\
\bitheader{31,16,15,11,10,6,5,0} \\
\bitbox{6}{op \texttt{\scriptsize(6)}} & \bitbox{5}{rs \texttt{\scriptsize(5)}} & \bitbox{5}{rt \texttt{\scriptsize(5)}} & \bitbox{16}{immediate \texttt{\scriptsize(16)}} \\
\end{bytefield} \\
\begin{bytefield}{32}
\textbf{J-type}\\
\bitheader{31,6,5,0} \\
\bitbox{6}{op \texttt{\scriptsize(6)}} & \bitbox{26}{address \texttt{\scriptsize(26)}} \\
\end{bytefield}
\end{document}
```

- instructions are divided into **fields**, each serving a specific purpose
	- _op_: basic operation of the instruction (**opcode**)
	- _rs_: first register source operand
	- _rt_: second register source operand
	- _rd_: register destination operand
	- _shamt_: shift amount
	- _funct_: (function code) selects the specific variant of the operation in the _op_ field


| Instruction | Example              | Meaning                   | Comments                     |
| ----------- | -------------------- | ------------------------- | ---------------------------- |
| `add`       | `add $s1, $s2, $s3`  | `$s1 = $s2 + $s3`         | Three register operands      |
| `sub`       | `sub $s1, $s2, $s3`  | `$s1 = $s2 - $s3`         | Three register operands      |
| `addi`      | `addi $s1, $s2, 100` | `$s1 = $s2 + 100`         | Used to add constant         |
| `lw`        | `lw $s1, 100($s2)`   | `$s1 = Memory[$s2 + 100]` | Word from memory to register |
| `sw`        | `sw $s1, 100($s2)`   | `Memory[$s2 + 100] = $s1` | Word from register to memory |




| Name | | For. | Operation (verilog) |  | Opcode/Func (hex) |
| ---- | -------- | ------ | -------------------- | -------- | --------------- |
| Add  | `add`    | R      | `R[rd] = R[rs] + R[rt]` | (1) | 0 / 20 |
| Add Immediate | `addi` | I      | `R[rt] = R[rs] + SignExtImm` | (1,2) | 8 |
| Add Imm. Unsigned | `addiu` | I | `R[rt] = R[rs] + SignExtImm` | (2) | 9 |
| Add Unsigned | `addu` | R | `R[rd] = R[rs] + R[rt]` |  | 0 / 21 |
| And  | `and`    | R      | `R[rd] = R[rs] & R[rt]` |  | 0 / 24 |
| And Immediate | `andi` | I | `R[rt] = R[rs] & ZeroExtImm` | (3) | c | 
| Branch on Equal | `beq` | I | `if (R[rs] == R[rt]) PC = PC+4+BranchAddr` | (4) | 4 |
| Branch on Not Equal | `bne` | I | `if (R[rs] != R[rt]) PC = PC+4+BranchAddr` | (4) | 5 |
| Jump | `j` | J | `PC = JumpAddr` | (5) | 2 |
| Jump and Link | `jal` | J | `R[31] = PC+8; PC = JumpAddr` | (5) | 3 |
| todo | | | | | |


1. May cause overflow exception
2. `SignExtImm = { 16{immediate[15]}, immediate }`
3. `ZeroExtImm = { 16{lb'0}, immediate }`
4. `BranchAddr = { 14{immediate[15]}, immediate, 2'b0 }`
5. `JumpAddr = { PC+4[31:28], address, 2'b0 }`
6. Operands considered unsigned numbers (vs. 2's comp.)
7. Atomic test&set pair; `R[rt] = 1` if pair atomic, `0` if not atomic

### Load and Store

- The data transfer instructions that copy data from memory to a register, or copy data from a register to memory, are called **load** and **store** (resp.). The actual MIPS names for this instructions are `lw` and `sw`, standing for **load word** and **store word**.
	- the **base address** is the address of the first element of the array
	- syntax: `lw register, offset(base)` (or `sw register, offset(base)`)
		- `offset` is the displacement from the base address in bytes
			- if `offset` is `0`, it can be omitted: `lw register, (base)` or `sw register, (base)`
			- the offset can be negative (because the offset is a 16-bit signed integer (using 2's complement)), e.g `sw $7, -8($6)` stores the word from register `$7` to memory at address `$6 - 8`
			- the offset must be a multiple of 4 (see _alignment restriction_)
		- `base` is the base register that holds the base address of the array
		- `register` is the destination register that holds the value loaded from memory (or the source register that holds the value to be stored in memory)


> [!EXAMPLE] Example (section 2.3)
> Suppose we have the following C code:
> ```c
> A[12] = h + A[8];
> ```
> Where `A` is an array (of words) whose base address is in register `$s3`, and `h` is in register `$s2`. The MIPS assembly code for this C code is:
> ```mips
> lw $t0, 32($s3)		# $t0 = A[8]
> add $t0, $s2, $t0	# $t0 = h + A[8]
> sw $t0, 48($s3)		# A[12] = h + A[8]
> ```
> explanation: `32` is because `8 * 4 = 32` (each array element is a word), and `48` is because `12 * 4 = 48`, in general, `offset = index * 4`
> 

> [!WARNING] Cannot Add Two Registers for Address Calculation Directly
> ```mips
> lw $t0, $s2($s3) # ERROR
> ```
> To add two registers for address calculation, we need to use an intermediate register to store the sum of the two registers, then use the intermediate register as the offset:
> ```mips
> add $s1, $s2, $s3		# assume we can store intermediate value in $s1
> lw $4, 0($s1)			# load word from memory at address $s1 + 0 into $4
> ```




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
