> this page covers chapter 4. but some of terms and concepts was already covered in [[Logic Circuits]] 

___

- A **single cycle processor** is a processor that carries out one instruction in a single clock cycle. (that is $\text{CPI} = 1\,\mathsf{cc/ins}$) 

- These are the instructions we will implement:
	- R-type instructions: `add`, `sub`, `and`, `or`, `slt`
	- I-type instructions: `lw`, `sw`, `beq`
	- J-type instructions: `j`


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

# Datapath

