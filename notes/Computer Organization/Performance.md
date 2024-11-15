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
