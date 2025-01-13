# MMN 12
עדיאל בן משה 208969378
ארגון 25א
___
# Q1
ה- $\mathrm{Mux}$ נקבע לפי $C=C_{0}C_{1}C_{2}$. למשל כאשר $C=0$ אז הפלט יהיה העמודה הכי שמאלית במוקסים. 
$Q_0 = \mathrm{Mux}(I_0,I_7,I_6,I_5,I_4,I_3,I_2,I_1)$
$Q_1 = \mathrm{Mux}(I_1,I_0,I_7,I_6,I_5,I_4,I_3,I_2)$
$Q_2 = \mathrm{Mux}(I_2,I_1,I_0,I_7,I_6,I_5,I_4,I_3)$
$Q_3 = \mathrm{Mux}(I_3,I_2,I_1,I_0,I_7,I_6,I_5,I_4)$
$Q_4 = \mathrm{Mux}(I_4,I_3,I_2,I_1,I_0,I_7,I_6,I_5)$
$Q_5 = \mathrm{Mux}(I_5,I_4,I_3,I_2,I_1,I_0,I_7,I_6)$
$Q_6 = \mathrm{Mux}(I_6,I_5,I_4,I_3,I_2,I_1,I_0,I_7)$
$Q_7 = \mathrm{Mux}(I_7,I_6,I_5,I_4,I_3,I_2,I_1,I_0)$
# Q2


- הפלט $Q$ של ה D flip-flop משתנה רק בירידת השעון. כלומר, הפלט מתעדכן רק כאשר $C$ יורד מהערך 1 ל-0.
- אם השעון תמיד 1, אז השעון של master יקבל תמיד 1, כלומר הוא יהיה תמיד שקוף, וה slave יקבל תמיד 0. כךומר תמיד נעול. כלומר, הפלט $Q$ ישאר 0 ולא ישתנה. 
- אם מסירים את NOT, אז ה D flip-flop יהיה ניתן לשינוי בכל זמן ש- C הוא 1, כלומר שני ה D latch יהיו שקופים. אבל כאשר הוא 0 הפלט ישאר קבוע ולא ישתנה. (_אני לא בטוח בזה.._)
- ה setup time הוא הזמן המינימלי שנדרש שהקלט יהיה תקין לפני הקצה של השעון, וה hold time הוא הזמן המינימלי שהקלט חייב להישאר קבוע לאחר הקצה של השעון. 
# Q3

- `R[rd] = Mem[R[rs] - R[rt]]`
- `R[3] = Mem[R[14] - R[12]]`
- `R[3] = Mem[14^2 - 12^2]`
- `R[3] = Mem[196 - 144]`
- `R[3] = Mem[52]`
- `R[3] = 0xA5A5A5A5`

- אי אפשר לממש את הפקודה כי מצד אחד היא צריכה להיות R כי משתמשים ב rd אבל מצד שני היא צריכה להיות I כי צריך להיות לה OPCODE בשביל ה control signals.. 
# Q4

תוצאה סופית:

```c
Y1 = 0x8
Y2 = 0b10010000 // = Mem[0x10010B00]
Y3 = 0b0111 = 0x7
Y4 = -2048 = 0xFFFFF800
Y5 = 0b0010 = 0x2
Y6 = 0x10010200
```

___
תשובה יותר מפורטת:

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


# Q5

נוסיף MUX אחרי ה MUX של JUMP. כאשר אם הוא 0 אז הוא יעביר את הערך הרגיל (כלומר מה שמופיע בתרשים), אחרת אם הוא אחד אז יעביר את הערך של הזיכרון, כלומר של READ DATA.
כאשר ה SELECTOR שלו יהיה JMControl. שיגיע מה Control Unit. 

```
# Control Signals for jm (0b111111 = 63)

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
JMControl = 1
```

**אפשרות נוספת** בלי להוסיף עוד signal היא להוסיף שער AND שייקח את jump ואת MemRead ויעביר את התוצאה ל MUX שהוספנו, ויעביר את Read Data כאשר הוא 1 ואת הערך הרגיל כאשר הוא 0. 