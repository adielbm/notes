> this page covers chapter 4. but some of terms and concepts was already covered in [[Logic Circuits]] 

___

- A **single cycle processor** is a processor that carries out one instruction in a single clock cycle. (that is $\text{CPI} = 1\,\mathsf{cc/ins}$) 

- These are the instructions we will implement:
	- R-type instructions: `add`, `sub`, `and`, `or`, `slt`
	- I-type instructions: `lw`, `sw`, `beq`
	- J-type instructions: `j`



![[Control & Datapath.png]]


1. Fetch
2. Decode
3. Execute
4. Memory
5. Write Back

# Logic Design Conventions

- **Datapath elements** are classified into two types:
	- [[Logic Circuits#Combinational Logic|Combinational elements]] (e.g. [[ALU#ALU Summary|ALU]], [[Logic Circuits#Logic Gates|AND gate]])
	- [[Logic Circuits#Sequential Logic|State elements]] (e.g. [[Logic Circuits#Register File|Registers]], Memory (data, instruction))

- clock methodology: edge-triggered (positive, rising edge) 
- nearly all elements are 32-bit wide
- buses are indicated with thicker lines



# Control

## Main Control Unit

- Input: 6-bit opcode (`instruction[31-26]`)
- Output:
    - ***RegDst***:  Whether write to register `rt` (0) or `rd` (1)
    - ***RegWrite***: Whether _Write register_ register is written with _Write data_ value
    - ***ALUSrc***:   
	    - 1 = the 2nd ALU operand is the sign-extended 16-bit immediate value,
		- 0 = the 2nd ALU operand comes from the 2nd register file output (Read data 2)
    - ***MemRead***:  1 = read from memory
    - ***MemWrite***: 1 = write to memory
    - ***MemtoReg***: 
	    - 0 = the ALU result is written to the register file
		- 1 = the memory data is written to the register file
    - ***Branch***:  1 = branch
    - ***ALUOp***:  2-bit control signal for ALU operation
    - Jump:     1 = jump, 0 = don't jump


| Instr. | Opcode        | RegDst | ALUOp1 | ALUOp0 | ALUSrc | Branch | MemRead | MemWrite | RegWrite | MemtoReg | Jump |
| ------ | ------------- | ------ | ------ | ------ | ------ | ------ | ------- | -------- | -------- | -------- | ---- |
| R      | `000000` (0)  | 1      | 1      | 0      | 0      | 0      | 0       | 0        | 1        | 0        | 0    |
| `lw`   | `100011` (35) | 0      | 0      | 0      | 1      | 0      | 1       | 0        | 1        | 1        | 0    |
| `sw`   | `101011` (43) | X      | 0      | 0      | 1      | 0      | 0       | 1        | 0        | X        | 0    |
| `beq`  | `000100` (4)  | X      | 0      | 1      | 0      | 1      | 0       | 0        | 0        | X        | 0    |
| `addi` | `001000` (8)  | 0      | 0      | 0      | 1      | 0      | 0       | 0        | 1        | 0        | 0    |
| `j`    | `000010` (2)  | X      | X      | X      | X      | X      | 0       | 0        | 0        | X        | 1    |
| `jm`   | 0x3f=111111   | X      | 0      | 0      | 1      | 1      | 1       | 0        | 0        | X        | 1    |

## ALU Control Unit

Determine the 4-bit ALU control signal based on ALUOp signals and funct code.

- Input:
	- $\mathrm{ALUOp}_1$: 1-bit control signal (from the control unit)
	- $\mathrm{ALUOp}_0$: 1-bit control signal (from the control unit)
	- $\mathrm{Funct}=F_5F_4F_3F_2F_1F_0$: 6-bit function code (from `instruction[5-0]`)
- Output:
	-  4-bit control signal for ALU operation (will be used to determine as the ALU operation in the ALU)
		- $\mathrm{ALUControl}_3=0$
		- $\mathrm{ALUControl}_2=(F_1\cdot\mathrm{ALUOp}_1)+\mathrm{ALUOp}_0$
		- $\mathrm{ALUControl}_1=(\overline{\mathrm{ALUOp}_1})+(\overline{F_2})$
		- $\mathrm{ALUControl}_0=(F_0+F_3)\cdot\mathrm{ALUOp}_1$

| Input 1                |            | Input 2               |                       | Output        |     |
| ---------------------- | ---------- | --------------------- | --------------------- | ------------- | --- |
| $\mathrm{ALUOp}_{1,0}$ | **opcode** | **Funct** ($F_{5-0}$) | Instruction Operation | **Operation** |     |
| 00                     | LW, SW     | XXXXXX                | load,store            | 0010          | add |
| 01                     | beq        | XXXXXX                | branch equal          | 0110          | sub |
| 10                     | R          | 100000                | add                   | 0010          | add |
| 10                     | R          | 100010                | subtract              | 0110          | sub |
| 10                     | R          | 100100                | AND                   | 0000          | and |
| 10                     | R          | 100101                | OR                    | 0001          | or  |
| 10                     | R          | 101010                | slt                   | 0111          | slt |
# Datapath

## Instruction Memory


## Register File

## Data Memory

## ALU



