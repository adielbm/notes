

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

- **throughput** (or **bandwidth**) is the number of tasks completed per unit time
- **performance** is the reciprocal of response time $$\text{Performance}_X = \frac{1}{\text{Response time}_X}$$
- **response time** (or **execution time**) is the total time required for the computer to complete a task (including disk accesses, memory accesses, I/O activities, operating system overhead, CPU execution time, etc.)
- **CPU execution time** (or **CPU time**) is the actual time the CPU spends computing for a specific task (excluding other activities) $$\text{CPU time} = \text{CPU clock cycles} \times \text{Clock cycle time}=\frac{\text{CPU clock cycles}}{\text{Clock rate}}$$
- **clock cycle** is the time for one clock period (usually of the processor clock, which runs at a constant rate)
- **clock rate** is the inverse of the clock cycle
- **instruction count** is the number of instructions executed by the program
- **CPI (cycles per instruction)** is the average number of clock cycles per instruction for a program or program fragment
- **CPU clock cycles** is the total number of clock cycles consumed by the program $$\text{CPU clock cycles} = \text{Instruction count} \times \text{CPI}$$