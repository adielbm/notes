# Stages


- (IF) Instruction Fetch
	- The instruction is fetched from instruction memory
- (ID) Instruction Decode
	- The instruction is decoded
	- The register file is read
- (EX) Execution
	- The ALU performs the operation
	- jump address is calculated
- (MEM) Memory Access
	- _lw_ and _sw_ instructions access data memory
- (WB) Write Back
	- R-type and _lw_ instructions write back to register file 

> [!Exercise] What instruction of `lw`, `sw`, `add`, `sub`, `and`, `or`, `slt`, and `beq` are used in each stage of the pipeline?
> The `lw` instruction is used in each stage of the pipeline.


### Instruction Fetch (IF)

- Fetches instruction from memory using PC
- Increments PC by 4
- Saves both instruction and incremented PC in IF/ID register
- Always active, no special control needed

### Instruction Decode (ID) <small>Register File Read</small> 

- Decodes instruction from IF/ID register
- Reads two registers
- Sign-extends 16-bit immediate
- Generates control signals for later stages
- Always active, no special control needed
### Execute (EX) <small>Address Calculation</small>

- Performs ALU operations
- Control signals:
	- RegDst: Selects destination register
	- ALUOp: Determines ALU operation
	- ALUSrc: Chooses between register or immediate value
### Memory Access (MEM) 

   - Accesses data memory if needed
   - Control signals:
     - Branch: Controls branch operations
     - MemRead: Enables memory read
     - MemWrite: Enables memory write

### Write Back (WB)

- Writes results back to register file
- Control signals:
	- MemtoReg: Selects between ALU result or memory data
	- RegWrite: Enables register writing

# Pipeline Registers

| **IF/ID**                                                               | **ID/EX**                                                                                            | **EX/MEM**                                                                                              | **MEM/WB**                                                                                          |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 64 bits (32-bit instruction, 32-bit PC)                                 | Varies (32-bit immediate, register data, control signals)                                            | 128 bits (including data and control signals)                                                           | 64 bits (including control signals)                                                                 |
| - Instruction fetched from memory<br>- Incremented PC (Program Counter) | - Sign-extended immediate<br>- Register numbers<br>- Read data<br>- Control signals for the EX stage | - ALU result<br>- Data to write to memory<br>- Branch target address<br>- Control signals for MEM stage | - Data from memory or ALU result<br>- Destination register number<br>- Control signals for WB stage |




   - Each instruction takes 5 clock cycles to complete
   - New instruction starts every clock cycle
   - Up to 5 instructions in pipeline simultaneously


# Pipeline Control

![[Pipeline Control.png]]

- EX:
	- RegDst
	- ALUOp
	- ALUSrc
- MEM:
	- Branch
	- MemRead
	- MemWrite
- WB:
	- RegWrite
	- MemtoReg

# TODO 

- branch prediction
# Hazards

## Structural Hazards

- **Structural hazard** occur when hardware resources are insufficient to support the operations of multiple instructions in the same clock cycle.
#### Memory Unit

- Many simple processor architectures use a single memory unit for both instructions (fetching the next instruction) and data (reading or writing data). A conflict arises if one instruction is fetching an instruction from memory while another needs to access data in the same clock cycle.
- Example: The first instruction `lw` reads from the memory in its MEM stage (CC 4), But, The forth instruction reads (fetch) the instruction from the memory in its IF stage (CC 4 too), that is we use in the same resource (memory, especially reading from it) in the same clock cycle.
- Solutions:
	- Separate memory into two units: _instruction memory_ and _data memory_, known as _Harvard architecture_
	- Cache memory
	- Stalling

#### Register File

- (Register File) When a specific register is read and written in the same clock cycle, a structural hazard occurs.

```mips
# Instruction 1
lw $t2, 100($t1) # In WB stage (CC 5) writes to register file ($t2)
# ...
# Instruction 4
add $t7, $t2, $t5 # In ID stage (CC 5) reads from register file ($t2) 
# The register $t2 is both read and written in the same clock cycle 
```

- Solution: Writing will be done in the first half of the clock cycle, and reading in the second half. (Using connecting _inverted clock singal_ to the register file, such that the writting is done in _inactive_ clock edge, relative to the clock of the other components)
	- (In the study guide: _חציית מקבץ האוגרים_)


## Data Hazards


- **(1a)** `EX/MEM.Rd == ID/EX.Rs`
- **(2a)** `MEM/WB.Rd == ID/EX.Rs`
- **(1b)** `EX/MEM.Rd == ID/EX.Rt`
- **(2b)** `MEM/WB.Rd == ID/EX.Rt`

> Above, in [[#Register File]] we have seen a situation, where the register is written and read in the same clock cycle, that is _Write Register_ and one of the _Read the _Read Registers_ are the same.  

#### Forwarding (Bypassing)

```verilog
// Default values, no forwarding, ALU operands come from the register file
ForwardA = 00
ForwardB = 00

// 1a
if (EX/MEM.Rd == ID/EX.Rs) && 
		(EX/MEM.Rd != 0) && (EX/MEM.RegWrite == 1) then:
    ForwardA = 10
// 2a
else if (MEM/WB.Rd == ID/EX.Rs) && 
		(MEM/WB.Rd != 0) && (MEM/WB.RegWrite == 1) then:
    ForwardA = 01

// 1b
if (EX/MEM.Rd == ID/EX.Rt) && 
    (EX/MEM.Rd != 0) && (EX/MEM.RegWrite == 1) then:
    ForwardB = 10
// 2b
else if (MEM/WB.Rd == ID/EX.Rt) && 
    (MEM/WB.Rd != 0) && (MEM/WB.RegWrite == 1) then:
    ForwardB = 01
```


| Input             | Width | Description                              |
| ----------------- | ----- | ---------------------------------------- |
| `EX/MEM.Rd`       | 5     | Dest. register for ins. k+1              |
| `MEM/WB.Rd`       | 5     | Dest. register for ins. k                |
| `EX/MEM.RegWrite` | 1     | RegWrite signal for ins. k+1             |
| `MEM/WB.RegWrite` | 1     | RegWrite signal for ins. k               |
| `ID/EX.Rs`        | 5     | Source register 1 for ins. k+2           |
| `ID/EX.Rt`        | 5     | Source register 2 for ins. k+2           |
| **Output**        |       |                                          |
| `ForwardA`        | 2     | Forwarding control for source register 1 |
| `ForwardB`        | 2     | Forwarding control for source register 2 |


> [!Example] Forwarding
> $\texttt{add\ {\color{lightgreen}\$s0},\$t1,\$t2}$  
> $\texttt{sub\ \$t2,{\color{lightgreen}\$s0},\$t3}$
>  
> **Data hazard**: $\texttt{\color{lightgreen}\$s0}$ is used in `sub` in the EX stage (cycle 3+1=4) before it is written in the WB stage (cycle 5) of `add`.
> **Forwarding**: The value of $\texttt{\color{lightgreen}\$s0}$ is available after the EX stage of `add` (cycle 3) and can be forwarded to the EX stage of `sub` (cycle 3+1)

### Load-Use Data Hazard

 > [!Example] _Load-Use Data Hazard_ (resolved by Forwarding & Stalling)
 > $\texttt{lw\ {\color{lightgreen}\$s0},20(\$t1)}$ 
 > $\texttt{sub\ \$t2,{\color{lightgreen}\$s0},\$t3}$
 > 
 > **Data hazard**: $\texttt{\color{lightgreen}\$s0}$ is used in `sub` in the EX stage (cycle 3+1=4) before it is written in the MEM stage (cycle 4) of `lw`. (this is a _load-use data hazard_)
 > Forwarding only is not enough because the value is not available until the MEM stage of `lw` (cycle 4)
 > **Forwarding & Stalling**: By using in stalling too, the value of $\texttt{\color{lightgreen}\$s0}$ is available in the EX stage of `sub` (cycle 3+1+1=5)

### Stalling (NOP)

- **Hazard Detection Unit** (HDU) detects the `lw` instruction in the EX stage, and inserts a _NOP_ (no operation) before the following instruction
	- Inputs:
		- `ID/EX.RegisterRt` (destination register of the `lw` instruction)
	- Outputs:
		- `IF/IDwrite` (write to the IF/ID register)
			- 1 =  write the instruction in the IF/ID register
			- 0 = prevent writing in the IF/ID register (stall the pipeline)
		- `PCWrite` 
			- 1 = increment PC
			- 0 = stall the pipeline
		- selector signal to mux .. #todo



```
if (ID/EX.MemRead and 
	((ID/EX.RegisterRt = IF/ID.RegisterRs) or (ID/EX.RegisterRt = IF/ID.RegisterRt))
	) then:
	    Stall the pipeline
```








- stalling (inserting NOPs)
- (sometimes by both)
- reordering instructions


> [!Example] Reordering Instructions
> 
> Both `add` instructions have a hazard because of the `lw` instruction (load-use data hazard)
> - The `$t1` in the first `lw` is used in the `add` instruction in the EX stage (cycle 3+2=5), but it is written in the WB stage (cycle 5) of the `lw` instruction
> - The `$t4` in the third `lw` is used in the `add` instruction in the EX stage (cycle 3+5=8), but it is written in the WB stage (cycle 5+4=9) of the `lw` instruction
> 
> ```mips
> lw t1, 0(t0)
> lw t2, 4(t0)
> #           ◄────────────────┐
> add $t3, $t1, $t2 #          │
> sw t3, 12(t0) #              │
> lw t4, 8(t0) # >─────────────┘
> add $t5, $t1, $t4
> sw t5, 16(t0)
> ```
> 



____

- structual hazard


- control hazard
