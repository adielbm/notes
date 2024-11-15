




- **address** is a value used to specify the location of a specific data element within a memory array

- **mips** is a reduced instruction set computer (RISC) instruction set architecture (ISA) developed by MIPS Computer Systems, now MIPS Technologies, based in the United States
- MIPS has a load-store architecture, meaning it only performs arithmetic and logic operations between registers, and memory access is done through load/store instructions
- the endianness of MIPS is big-endian
- A **word** is 32 bits (4 bytes) long

- To access an element at a given index, the index is multiplied by the size of each element (often 4 bytes for integers) to calculate the offset. 
	- This offset is added to the base address of the array to locate the specific element.
	- The **base address** is the memory location of the first element of the array, typically stored in a register. All elements are accessed relative to this address by calculating their offsets.

- **MIPS assembly language** 
- **alignment restriction** is a requirement that data be aligned in memory on natural boundaries

## Registers

- MIPS has 32 general-purpose registers, each 32 bits wide

| Register (32) | Assembly Name | Use                    | Preserved on call? |
| ------------- | ------------- | ---------------------- | ------------------ |
| 0             | `$zero`       | constant value 0       | N.A.               |
| 1             | `$at`         | Assembler Temporary    | No                 |
| 2-3           | `$v0–$v1`     | Values (2)             | No                 |
| 4-7           | `$a0–$a3`     | Arguments (4)          | No                 |
| 8-15          | `$t0–$t7`     | Temporaries            | No                 |
| 16-23         | `$s0–$s7`     | Saved Temporaries      | Yes                |
| 24-25         | `$t8–$t9`     | Temporaries            | No                 |
| 26-27         | `$k0–$k1`     | Reserved for OS Kernel | No                 |
| 28            | `$gp`         | Global Pointer         | Yes                |
| 29            | `$sp`         | Stack Pointer          | Yes                |
| 30            | `$fp`         | Frame Pointer          | Yes                |
| 31            | `$ra`         | Return Address         | Yes                |

## Memory

- The memory is byte-addressable (each byte has a unique address from `0x00000000` to `0xFFFFFFFF`)
- The memory is organized as a sequence of 32-bit words
- The memory is big-endian
- The memory is accessed only by data transfer instructions 
- The size of the memory is $2^{32}$ bytes (4GB)
- Memory holds data structures, arrays, and spilled registers


![[Memory Segments.jpg]]


- Memory Segments: (from low to high addresses, `0x00000000` to `0xFFFFFFFF`)`
	- The **reserved segment** contains the operating system and other reserved areas
	- The **text segment** contains the MIPS machine code
	- The **static data segment** contains constants and global variables
		- Used for: 
			- _constants_ (using `const` in C)
			- _static variables_ (using `static` in C)
			- _global variables_ (declared outside of any procedure in C)
		- fixed size data structures like arrays
		- Allocated at compile time and deallocated when the program exits
		- The **global pointer** `$gp` points to the midpoint of the static data segment, the access is using a 16-bit signed offset, in the following range:
			- (negative offset) `$gp - 32768 = 0x10000000`
			- (zero offset) `$gp = 0x10008000`
			- (positive offset) `$gp + 32767 = 0x1000FFFF`
			- The total length of the static data segment is `0x1000FFFF - 0x10000000 = 65535 = 2^16` bytes (64KB, where KB = 1024 bytes)
	- The **heap** (_dynamic data_ in the diagram)
		- Grows upward (toward the stack, from lower to higher addresses)
		- Used for: 
			- dynamic memory allocation 
		- for data structures like _linked lists_ that grow and shrink during execution, or for _arrays_ whose size is not known until runtime
		- In C, memory allocation controlled by the programmer (allocated using `malloc` and deallocated using `free`)
			- see also: _memory leaks_, _dangling pointers_
		- Java uses automatic memory allocation and garbage collection
	- The **stack** 
		- contains the procedure frames
		- Grows downward (toward the heap, from higher to lower addresses)
		- The segment of the stack containing a procedure's saved registers and local variables is called called a **procedure frame** (or **activation record**)
		- The **stack pointer** `$sp` always points to the top of the stack (lowest address in the stack)
		- Stack memory is allocated at runtime and is automatically deallocated when the function exits
		- Used for: 
			- _local variables_ (_automatic_) declared inside a procedure, and discarded when the procedure exits
			- _procedure call information_ (e.g., return address, saved registers)
	- The remaining memory (doesn't appear in the diagram) is reserved for input/output devices 


### Text Representation

- ascii
- strings:
	1. the first byte is reserved for the length of the string (Java uses this convention)
	2. an accommpanying variable holds the length of the string 
	3. the string is null-terminated, i.e. ends with a `NUL` byte, `0x00` in ASCII, (C uses this convention)
)
- load and store byte instructions
- halfword


## Instructions

- **instruction** is a command given to a computer to perform a specific operation
	- instructions are 32 bits long (4 bytes, 8 hex digits)

- **data transfer instruction** is an instruction that transfer data between memory and registers

- **immediate** is a constant value that is part of the instruction itself
- **immediate instruction** is an instruction that has an immediate operand

#### Instruction Format



```tex
\documentclass[varwidth]{standalone}
\usepackage{bytefield}
\begin{document}
\begin{bytefield}{32}
\textbf{R-type}\\
\bitheader[endianness=big]{0,5,6,10,11,15,16,20,21,25,26,31} \\
\bitbox{6}{op \texttt{\scriptsize(6)}} & \bitbox{5}{rs \texttt{\scriptsize(5)}} & \bitbox{5}{rt \texttt{\scriptsize(5)}} & \bitbox{5}{rd \texttt{\scriptsize(5)}} & \bitbox{5}{shamt \texttt{\scriptsize(5)}} & \bitbox{6}{funct \texttt{\scriptsize(6)}} \\ 
\end{bytefield} \\
\begin{bytefield}{32}
\textbf{I-type}\\
\bitheader[endianness=big]{0,15,16,20,21,25,26,31} \\
\bitbox{6}{op \texttt{\scriptsize(6)}} & \bitbox{5}{rs \texttt{\scriptsize(5)}} & \bitbox{5}{rt \texttt{\scriptsize(5)}} & \bitbox{16}{immediate \texttt{\scriptsize(16)}} \\
\end{bytefield} \\
\begin{bytefield}{32}
\textbf{J-type}\\
\bitheader[endianness=big]{0,25,26,31} \\
\bitbox{6}{op \texttt{\scriptsize(6)}} & \bitbox{26}{address \texttt{\scriptsize(26)}} \\
\end{bytefield}
\end{document}
```


- **R-type** (register type) 
	- used for arithmetic and logical operations
	- format: `op rs rt rd shamt funct`
	- it has a fixed opcode of `000000`. The actual operation is specified by the `funct`
	- MIPS assembly syntax: `op rd, rs, rt` 
- 

- instructions are divided into **fields**, each serving a specific purpose
	- _op_: basic operation of the instruction (**opcode**)
	- _rs_: 1st register source operand
	- _rt_: 2nd register source operand
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





| Instruction                | Meaning                           | Funct (hex) |
| -------------------------- | --------------------------------- | ----------- |
| `add R[rd], R[rs], R[rt]`  | `R[rd] = R[rs] + R[rt]`           | 20          |
| `sub R[rd], R[rs], R[rt]`  | `R[rd] = R[rs] - R[rt]`           | 22          |
| `sll R[rd], R[rt], shamt`  | `R[rd] = R[rt] << shamt`          | 00          |
| `addu R[rd], R[rs], R[rt]` | `R[rd] = R[rs] + R[rt]`           | 21          |
| `and R[rd], R[rs], R[rt]`  | `R[rd] = R[rs] & R[rt]`           | 24          |
| `jr R[rs]`                 | `PC = R[rs]`                      | 08          |
| `nor R[rd], R[rs], R[rt]`  | `R[rd] = ~(R[rs] \| R[rt])`       | 27          |
| `or R[rd], R[rs], R[rt]`   | `R[rd] = R[rs] \| R[rt]`          | 25          |
| `slt R[rd], R[rs], R[rt]`  | `R[rd] = (R[rs] < R[rt]) ? 1 : 0` | 2A          |
| `sltu R[rd], R[rs], R[rt]` | `R[rd] = (R[rs] < R[rt]) ? 1 : 0` | 2B          |
| `slr R[rd], R[rt], shamt`  | `R[rd] = R[rt] >>> shamt`         | 02          |
| `subu R[rd], R[rs], R[rt]` | `R[rd] = R[rs] - R[rt]`           | 23          |





| Name                |         | For. | Operation (verilog)                        |       | Opcode/Func (hex) |     |
| ------------------- | ------- | ---- | ------------------------------------------ | ----- | ----------------- | --- |
| Add                 | `add`   | R    | `R[rd] = R[rs] + R[rt]`                    | (1)   | 0 / 20            |     |
| Add Immediate       | `addi`  | I    | `R[rt] = R[rs] + SignExtImm`               | (1,2) | 8                 |     |
| Add Imm. Unsigned   | `addiu` | I    | `R[rt] = R[rs] + SignExtImm`               | (2)   | 9                 |     |
| Add Unsigned        | `addu`  | R    | `R[rd] = R[rs] + R[rt]`                    |       | 0 / 21            |     |
| And                 | `and`   | R    | `R[rd] = R[rs] & R[rt]`                    |       | 0 / 24            |     |
| And Immediate       | `andi`  | I    | `R[rt] = R[rs] & ZeroExtImm`               | (3)   | c                 |     |
| Branch on Equal     | `beq`   | I    | `if (R[rs] == R[rt]) PC = PC+4+BranchAddr` | (4)   | 4                 |     |
| Branch on Not Equal | `bne`   | I    | `if (R[rs] != R[rt]) PC = PC+4+BranchAddr` | (4)   | 5                 |     |
| Jump                | `j`     | J    | `PC = JumpAddr`                            | (5)   | 2                 |     |
| Jump and Link       | `jal`   | J    | `R[31] = PC+8; PC = JumpAddr`              | (5)   | 3                 |     |
| todo                |         |      |                                            |       |                   |     |


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
> 
> ```mips
> lw $t0, $s2($s3) # ERROR
> ```
> To add two registers for address calculation, we need to use an intermediate register to store the sum of the two registers, then use the intermediate register as the offset:
> ```mips
> add $s1, $s2, $s3		# assume we can store intermediate value in $s1
> lw $4, 0($s1)			# load word from memory at address $s1 + 0 into $4
> ```


### Logical Operations

- `sll` (shift left logical, `<<`) and `srl` (shift right logical, `>>>`) are used for shifting bits in a register left or right by a fixed number of bits specified by the `shamt` field (shift amount)
- Shift left by $i$ bits is equivalent to multiplying by $2^i$
- `sra` (shift right arithmetic, `>>`) is used for shifting bits in a register right by a fixed number of bits specified by the `shamt` field, but it fills the leftmost bits with the sign bit (the most significant bit) to preserve the sign of the number, hence arithmetic shift right by $i$ bits is equivalent to dividing by $2^i$

- MIPS excludes the `not` instruction, because it can be implemented using `nor` the value with `0`, or `xor` with `1`

- Immediate logical operations:
	- `andi` (and immediate)
	- `ori` (or immediate)
	- `xori` (exclusive or immediate)
	- the 16-bit immediate value is zero-extended to 32 bits before the operation is performed because the other operand (source register) is 32 bits


### Conditional Branches

- `beq` (branch if equal): jumps to a label if two registers are equal
- `bne` (branch if not equal): jumps to a label if two registers are not equal

- These are used to compare two registers and set a destination register to `1` if the first register is less than the second, and `0` otherwise
- `slt` (set less than) 
- `sltu` (set less than, unsigned) 
- `slti` (set less than, immediate)
- `sltiu` (set less than, immediate, unsigned)



- A **branch** is an instruction that can change the flow of control in a program (e.g. `beq $s1, $s2, label`)
- A **branch target** is the destination of a branch instruction (e.g. `label` in `beq $s1, $s2, label`)
- A **branch label** is a label that marks the target of a branch instruction (e.g. `label:` in `label: add $s1, $s2, $s3`)
- A **basic block** is a sequence of instructions without branches (except possibly at the end) and without branch targets or branch labels (except possibly at the beginning)

> [!EXAMPLE] `if-then-else` in MIPS
> The following C code:
> ```c
> if (i == j) f = g + h; else f = g – h;
> ```
> Where `f,g,h,i,j` are variables corresponding to registers `$s0,$s1,$s2,$s3,$s4` (resp.), can be translated to MIPS as:
>
> ```mips
> # from the example in the textbook (section 2.7)
> bne $s3, $s4, Else		# if i != j, go to Else
> add $s0, $s1, $s2		# f = g + h
> j Exit 				# unconditional jump to 'Exit' label
> Else: sub $s0, $s1, $s2		# f = g - h (skipped if i = j)
> Exit:
> ```
> or:
> ```mips
> # Alternative implementation (from the study guide)
> beq $s3, $s4, if # go to 'if' label if i == j
> sub $s0, $s1, $s2 # f = g - h (skipped if i == j)
> j Exit # go to 'Exit' label
> if: add $s0, $s1, $s2 # f = g + h (skipped if i != j)
> Exit: # continue here
> ```
> 

> [!EXAMPLE] Loop in MIPS
> The following C code:
> ```c
> while (save[i] == k) i += 1;
> ```
> Where `save` is an array of words whose base address is in register `$s3`, `k` is in register `$s2`, and `i` is in register `$s4`, can be translated to MIPS as:
> ```mips
> Loop: sll $t1, $s4, 2		# $t1 = i * 4
> add $t1, $t1, $s3		# $t1 = &save[i]
> lw $t0, 0($t1)			# $t0 = save[i]
> bne $t0, $s2, Exit		# if save[i] != k, exit loop
> addi $s4, $s4, 1		# i += 1
> j Loop				# repeat loop
> Exit:
> ```
>


### Jump Instructions

- **caller** is the program that instigates a procedure and provides the necessary parameter values
- **callee** is a procedure that executes a series of stored instructions based on the parameters provided by the caller and then returns control to the caller
- **program counter (PC)** is the register containing the address of the next instruction to be executed
	- The term _program counter_ is used for historical reasons; a more sensible name would have been _instruction address register_
	- `jal` (jump and link) does:
		1. stores the **return address** (the address of the next instruction after the `jal` instruction; `$ra = PC + 4`) in register `$ra` (return address).
		2. jumps to the address specified in the instruction (the target address)
	- `jr` (jump register) jumps to the address stored in a register (e.g. `jr $ra` unconditionally jumps to the return address stored in `$ra`)

- An **argument** is a value passed to a procedure by the caller
	- Arguments are passed either in registers (four arguments in `$a0-$a3`) or on the stack (if more than four arguments)
- The **return values** are two values that can be returned by a procedure in registers `$v0-$v1`

- **stack** is a data structure
	- The **stack pointer** is adjusted by one word for each register that is saved or restored
	- By historical precedent, the stack grows from higher addresses to lower addresses

> [!TIP] Procedure in MIPS
> 1. The caller places input parameters in `$a0-$a3`
> 2. The caller uses `jal` to (i) save the return address in `$ra` and (ii) jump to the callee
> 3. Acquire the storage resources needed for the procedure
> 4. The callee completes its task
> 5. The callee places the result in `$v0-$v1`
> 6. The callee uses `jr $ra` to return to the caller

> [!EXAMPLE] Compiling a C procedure that doesn't call another procedure
> ```c
> int leaf_example(int g, int h, int i, int j) {
> 	int f;
> 
> 	f = (g + h) - (i + j);
> 	return f;
> }
> ```
> The MIPS assembly code for this C code is:
> ```mips
> leaf_example:
> addi $sp, $sp, -12		# adjust stack pointer to allocate space for 3 words (12 bytes)
> sw $t1, 8($sp)			# save $t1 on the stack
> sw $t0, 4($sp)			# save $t0 on the stack
> sw $s0, 0($sp)			# save $s0 on the stack
> add $t0, $a0, $a1		# register $t0 contains g + h
> add $t1, $a2, $a3		# register $t1 contains i + j
> sub $s0, $t0, $t1		# f=$t0-$t1, which is (g+h)-(i+j)
> add $v0, $s0, $zero		# returns f ($v0=$s0+0)
> lw $s0, 0($sp)			# restore $s0


- **leaf procedure** is a procedure that does not call any other procedures
- **non-leaf procedure** is a procedure that calls other procedures (or even themselves, as in recursion)
	- Just as we need to be careful when using registers in procedures, more care must also be taken when invoking nonleaf procedures.

> [!NOTE]
> Example Scenario:
> 1. The main program calls procedure `A` with an argument in `$a0` (e.g. value `3`)
> 2. Procedure `A` calls procedure `B` with a new argument also placed in `$a0` (e.g. value `7`)
>
> The Conflict: 
> - `$a0` now holds `7`, overridding the previous value `3` needed by `A`
> - Similarly, the return address register `$ra` now has `B`'s return address, overwriting `A`'s return address
>
> Solution: Using the Stack
> - Caller saves any needed argument or temporary registers (like `$a0` and `$t0-$t9`) on the stack before calling a procedure 
> - Callee saves the return address register `$ra` and any saved registers (`$s0-$s7`) it uses
> 


> [!EXAMPLE] Compiling a recursive C procedure, showing nested procedure linking
> The following C code is a recursive function that calculates the factorial of a number:
> ```c
> int fact(int n) {
> 	if (n < 1) return 1;
> 	else return (n * fact(n-1));
> }
> ```
> The MIPS assembly code for this C code is:
> ```mips
> fact:
> addi $sp, $sp, -8		# adjust stack pointer to allocate space for 2 words (8 bytes)
> sw $ra, 4($sp)			# save $ra on the stack
> sw $a0, 0($sp)			# save $a0 on the stack
> slti $t0, $a0, 1		# $t0 = 1 if n < 1, 0 otherwise
> beq $t0, $zero, L1		# if n >= 1, go to L1
> addi $v0, $zero, 1		# $v0 = 1 (base case)
> addi $sp, $sp, 8 		# pop 2 items off stack
> jr $ra				# return to the caller
> L1: addi $a0, $a0, -1		# n = n - 1
> jal fact			# call fact(n-1)
> lw $a0, 0($sp)			# retuen from jal: restore argument n
> lw $ra, 4($sp)			# restore $ra
> addi $sp, $sp, 8		# pop 2 items off stack
> mul $v0, $a0, $v0		# $v0 = n * fact(n-1)
> jr $ra				# return to the caller
> ```


