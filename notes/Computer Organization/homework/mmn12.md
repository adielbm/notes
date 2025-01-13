# Q1

- Design a logical circuit with:
	- **Inputs:** 8 bits $I_0,\ldots,I_7$
	- 3 control bits ($C_0, C_1, C_2$).
	- **Outputs:** 8 bits $Q_0,\ldots,Q_7$
- The circuit performs a **left circular shift (Left Rotate)** on the input bits by a value $N\in\{0,\dots,7\}$, determined by the control bits $C_0, C_1, C_2$.
- In a left circular shift, bits shifted out from the left end re-enter from the right end.
- You may use a schematic representation for your solution. There’s no need to draw all connections, but the schematic and explanation should clarify how each input bit is routed to produce the output.
 - Example: For $N = 1$, one left circular shift moves the most significant bit (MSB) to the least significant bit (LSB) position.
- Refer to basic components from Chapter 5 for your design.


$Q_0 = \mathrm{Mux}(I_0,I_7,I_6,I_5,I_4,I_3,I_2,I_1)$
$Q_1 = \mathrm{Mux}(I_1,I_0,I_7,I_6,I_5,I_4,I_3,I_2)$
$Q_2 = \mathrm{Mux}(I_2,I_1,I_0,I_7,I_6,I_5,I_4,I_3)$
$Q_3 = \mathrm{Mux}(I_3,I_2,I_1,I_0,I_7,I_6,I_5,I_4)$
$Q_4 = \mathrm{Mux}(I_4,I_3,I_2,I_1,I_0,I_7,I_6,I_5)$
$Q_5 = \mathrm{Mux}(I_5,I_4,I_3,I_2,I_1,I_0,I_7,I_6)$
$Q_6 = \mathrm{Mux}(I_6,I_5,I_4,I_3,I_2,I_1,I_0,I_7)$
$Q_7 = \mathrm{Mux}(I_7,I_6,I_5,I_4,I_3,I_2,I_1,I_0)$

# Q2

- Refer to Diagram B.8.4 in Appendix B (Page 132 of the study guide).  
	- Explain the term _falling-edge triggered_
	- What happens to the circuit if the clock remains constantly in the **high (1)** state? (_asserted_)  
	- What happens if the NOT gate at the input to the _slave latch_ is removed?
- Refer to Diagram B.8.6 in Appendix B (Page 133 in SG), and B.11 section. 
	- Define **"Setup Time"** and **"Hold Time"** concepts.


- הפלט $Q$ של ה D flip-flop משתנה רק בירידת השעון. כלומר, הפלט מתעדכן רק כאשר $C$ יורד מהערך 1 ל-0.
- אם השעון תמיד 1, אז השעון של master יקבל תמיד 1, כלומר הוא יהיה תמיד שקוף, וה slave יקבל תמיד 0. כךומר תמיד נעול. כלומר, הפלט $Q$ ישאר 0 ולא ישתנה. 
- אם מסירים את NOT, אז ה D flip-flop יהיה ניתן לשינוי בכל זמן ש- C הוא 1, כלומר שני ה D latch יהיו שקופים. אבל כאשר הוא 0 הפלט ישאר קבוע ולא ישתנה. #todo 
- ה setup time הוא הזמן המינימלי שנדרש שהקלט יהיה תקין לפני הקצה של השעון, וה hold time הוא הזמן המינימלי שהקלט חייב להישאר קבוע לאחר הקצה של השעון. 
# Q3

**Control Signals for Instruction `narrative` (in MIPS single-cycle processor):**

| RegDst | ALUSrc | MemtoReg | RegWrite | MemRead | MemWrite | Branch | ALUOp1 | ALUOp0 |
| ------ | ------ | -------- | -------- | ------- | -------- | ------ | ------ | ------ |
| 1      | 0      | 1        | 1        | 1       | 0        | 0      | 0      | 1      |

- What does the instruction `narrative` do? What values are written and where? (Use Diagram 4.24 and Table 4.18).  
	- Calculate the written values assuming:
		- **rt** (bits 16–20) = 12
		- **rs** (bits 21–25) = 14
		- **rd** (bits 11–15) = 3
	- Register values are initialized as `R[i] = i^2` (e.g., `R8 = 64, R10 = 100`).
- Memory addresses from `0` to `1000` contain the value `0xA5`  
- Is it possible to implement this instruction in MIPS? If yes, which format would it use? If not, explain why.

- `R[rd] = Mem[R[rs] - R[rt]]`
- `R[3] = Mem[R[14] - R[12]]`
- `R[3] = Mem[14^2 - 12^2]`
- `R[3] = Mem[196 - 144]`
- `R[3] = Mem[52]`
- `R[3] = 0xA5A5A5A5`

- אי אפשר לממש את הפקודה כי מצד אחד היא צריכה להיות R כי משתמשים ב rd אבלמצד שני היא צריכה להיות I כי צריך להיות לה OPCODE בשביל ה control signals.. 


# Q4

You are given the following MIPS assembly code snippet:

| **Address**  | **Code**     | **Basic**           | **Source**            |     |
| ------------ | ------------ | ------------------- | --------------------- | --- |
| `0x74007484` | `0x2063fd00` | `addi $3, $3, -768` | `addi $3, $3, -0x300` |     |
| `0x74007488` | `0xac6c0800` | `sw $12, 2048($3)`  | `sw $12, 0x800($3)`   |     |
| `0x7400748c` | `0x8da2fe00` | `lw $2, -512($13)`  | `lw $2, -0x200($13)`  |     |



- Each register starts with the value `0x10010000` plus its register number multiplied by `0x100`. For example:
    - `$1` = `0x10010100`
    - `$2` = `0x10010200`
    - `$3` = `0x10010300`
    - `$4` = `0x10010400`
    - (and so on, except `$0`, which is always `0`).
- All memory addresses are accessible for `sw` and `lw` instructions, provided the address is a multiple of 4.
- Processor Modifications:
	- A **2-bit left shift unit** is added to the processor. This unit is connected to the output of the `RegDst` multiplexer.
	- The left shift moves the bits of its input **two places to the left** and fills the two rightmost bits with zeros (bits shifted out on the left are discarded).
- Task:
	- For the given **third instruction** (`lw $2, -512($13)`), determine the values on the six highlighted lines (marked `Y1` to `Y6`) in hexadecimal.
	- Use the processor diagrams and data from Tables 4.12 and 4.18 (pages 169–170 of the SG) to assist in the calculations.
	- If a value is unknown, mark it as `X`.
- Notes:
	- Line `Y3` corresponds to `(PC + 4) (bits 28–31)`.
	- The effect of the **2-bit left shift unit** must also be considered for prior instructions.

![[Pasted image 20241216213706.png]]


### תשובה

- `$3 - 0x300 = 0x10010000` 
- `0x10010000 + 0x800 = 0x10010800` (268503040)
- `sw $12, 2048($3)` will store the value of `$12` (which is `0x10010C00`) in memory address `0x10010800`
- `$13 = 0x10010D00`
- `$2 = 0x10010200`
- `0x10010D00 - 0x200 = 0x10010B00`
- `lw $2, -512($13)` will load the value from memory address `0x10010B00` into `$2`
- The code of the third instruction is: 
- `0x8da2fe00`, which is 
- `100011 01101 00010 11111 11000 000000`
- The opcode is `100011` which is `lw` 


```
# Control Signals for lw (0b100011 = 35)
RegDst = 0
ALUSrc = 1
MemtoReg = 1
RegWrite = 1
MemRead = 1
MemWrite = 0
Branch = 0
ALUOp1 = 0
ALUOp0 = 0
Jump = 0

# Write Addr
Y1 = ShiftLeft2(Mux(ins[20-16], ins[15-11]))
Y1 = ShiftLeft2(Mux(0xD, 0x2, RegDst))
Y1 = ShiftLeft2(0x2)
Y1 = 0x8

ALUResult = ALU(R[ins[25-21]], SignExt(ins[15-0]))
ALUResult = ALU($13, -512)
ALUResult = 0x10010D00 - 0x200
ALUResult = 0x10010B00
Y2 = Mux(ALUResult, Mem[ALUResult], MemtoReg)
Y2 = Mem[0x10010B00]
Y2 = 0b10010000

Y3 = PC + 4[31-28] # i.e. the 31-28 bits of PC + 4
Y3 = (0x7400748C + 4)[31-28]
Y3 = 0x74007490[31-28]
Y3 = 01110100000000000111010010010000[31-28]
Y3 = 0111

Y4 = ShiftLeft2(SignExt(ins[15-0]))
Y4 = ShiftLeft2(-512)
Y4 = -2048

Y5 = ALUControl(aluop=00, funct=0)
Y5 = 0b0010
Y5 = 2

Y6 = R[in[20-16]]
Y6 = R[0x2]
Y6 = 0x10010200
```


```c
# Summary
Y1 = 0x8
Y2 = 0b10010000 // = Mem[0x10010B00]
Y3 = 0b0111 = 0x7
Y4 = -2048 = 0xFFFFF800
Y5 = 0b0010 = 0x2
Y6 = 0x10010200
```

# Q5

**Add a `jm` (memory jump) instruction to the single-cycle processor's datapath.**

- The instruction jumps to the memory word at the address specified by
- **Instruction Format:** `jm IMM($rs)`
- Tasks:
	- Draw the instruction fields (e.g., opcode, registers, immediate) and show required changes to Diagram 4.24 and Table 4.18. Add components if necessary.
	- Discuss whether it’s possible to extend the immediate/offset field for this instruction and what would be required to do so.
- Refer to the existing instructions (e.g., `addi`, `jump`) in Table 4.18 as examples.
- You need to add the `jm` (memory jump) instruction to the single-cycle datapath. The instruction causes a jump based on the value of a word fetched from the data memory, where the address is specified in the instruction. The instruction is composed of a register (`$rs`) and an offset (IMM) of 16 bits, after sign extension. The instruction format is: `jm IMM($rs)`
- The result is a jump to `MEM[$rs + sign_extend(IMM)]`

| **Instruction** | **Opcode** | **RegDst** | **ALUSrc** | **MemtoReg** | **RegWrite** | **MemRead** | **MemWrite** | **Branch** | **ALUOp1** | **ALUOp0** | **Jump** |
| --------------- | ---------- | ---------- | ---------- | ------------ | ------------ | ----------- | ------------ | ---------- | ---------- | ---------- | -------- |
| **R-Type**      | 0          | 1          | 0          | 0            | 1            | 0           | 0            | 0          | 1          | 0          | 0        |
| **lw**          | 35         | 0          | 1          | 1            | 1            | 1           | 0            | 0          | 0          | 0          | 0        |
| **sw**          | 43         | x          | 1          | x            | 0            | 0           | 1            | 0          | 0          | 0          | 0        |
| **beq**         | 4          | x          | 0          | x            | 0            | 0           | 0            | 1          | 0          | 1          | 0        |
| **addi**        | 8          | 0          | 1          | 0            | 1            | 0           | 0            | 0          | 0          | 0          | 0        |
| **j**           | 2          | x          | x          | x            | 0            | 0           | 0            | x          | x          | x          | 1        |
| **jm**          | 63 (0x3F)  |            |            |              |              |             |              |            |            |            |          |



![[Pasted image 20241216214303.png]]

## תשובה

| **Instruction** | **Opcode** | **RegDst** | **ALUSrc** | **MemtoReg** | **RegWrite** | **MemRead** | **MemWrite** | **Branch** | **ALUOp1** | **ALUOp0** | **Jump** | **JMControl** |
| --------------- | ---------- | ---------- | ---------- | ------------ | ------------ | ----------- | ------------ | ---------- | ---------- | ---------- | -------- | ------------- |
| **jm**          | 63         | x          | 1          | x            | 0            | 1           | 0            | x          | 0          | 0          | x        | 1             |

נוסיף MUX אחרי ה MUX של JUMP. כאשר אם הוא 0 אז הוא יעביר את הערך הרגיל (כלומר מה שמופיע בתרשים), אחרת אם הוא אחד אז יעביר את הערך של הזיכרון, כלומר של READ DATA.
כאשר ה SELECTOR שלו יהיה JMControl. שיגיע מה Control Unit. 


```
RegDst = x
ALUSrc = 1
MemtoReg = x
RegWrite = 0
MemRead = 1
MemWrite = 0
Branch = x
ALUOp1 = 0
ALUOp0 = 0
Jump = x
NEW_CONTROL_FOR_JM = 1
```

**אפשרות נוספת** בלי להוסיף עוד signal היא להוסיף שער AND שייקח את jump ואת MemRead ויעביר את התוצאה ל MUX שהוספנו, ויעביר את Read Data כאשר הוא 1 ואת הערך הרגיל כאשר הוא 0. 