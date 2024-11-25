# CPU Performance

- **clock cycle (time)** is the time for one clock period (usually of the processor clock, which runs at a constant rate, usually published as part of the documentation for a computer)
	- note: Although clock cycle time has traditionally been fixed, to save energy or temporarily boost performance, today’s processors can vary their clock rates, so we would need to use the average clock rate for a program.
- **clock rate** (CR) is the inverse of the clock cycle time (usually measured in $\mathsf{Hz}$ or its multiples)


- **response time** (or **execution time**) is the total time required for the computer to complete a task (including disk accesses, memory accesses, I/O activities, operating system overhead, CPU execution time, etc.)
- **performance** is the reciprocal of response time $$\text{Performance}_X = \frac{1}{\text{Response time}_X}$$

- **CPU (execution) time** (of task) is the actual time the CPU spends computing for a specific task (excluding other activities) 
- **throughput** (or **bandwidth**) is the number of tasks completed per unit time

#### Program Performance

In this subsection, we refer to the performance of some program in a the CPU.
$$\text{CPU clock cycles} = \text{IC} \times \text{CPI}$$

- **instruction count** (IC) is the number of instructions executed by the program
- **cycles per instruction** (CPI) is the average number of clock cycles per instruction for a program or program fragment
- **CPU clock cycles** is the total number of clock cycles consumed by the program 


- **CPU (execution) time** (of program) is $$\text{CPU time for program} = \text{CPU clock cycles} \times \text{Clock cycle time}=\frac{\text{CPU clock cycles}}{\text{Clock rate}}$$


# CPU Time








# Problem Solving

### Instruction Replacement


> [!EXAMPLE]
> Given  
> - $\text{CR} = 3\,\mathsf{GHz}$  
> - $\text{CPI}_A = 9\,\mathsf{cc/ins}$ 
> - $\text{CPI}_B = 2\,\mathsf{cc/ins}$ 
> - Some of the $A$ instructions in the program are replaced by $B$ instructions, after which, the program gets shorter by $3\,\mathsf{sec}$  
> - Each two $A$ instructions are replaced by five $B$ instructions.
> 
>**Question**: How many $A$ instructions were replaced?
> 
> **Answer:**
> - $\text{CPI}_A = 9\,\mathsf{cc/ins} \implies$ 2 $A$ instructions has $18\,\mathsf{cc}$ 
> - $\text{CPI}_B = 2\,\mathsf{cc/ins} \implies$ 5 $B$ instructions has $10\,\mathsf{cc}$ 
> - Therefore, by replacing 2 $A$ instructions with 5 $B$ instructions, we save $8\,\mathsf{cc}$, thus, by replacing one $A$ instruction, we save $4\,\mathsf{cc}$.
> - The cycles saved = $3\,\mathsf{sec} \times 3\,\mathsf{GHz} = 9 \times 10^9\,\mathsf{cc}$
> - The number of $A$ instructions replaced = $\frac{9 \times 10^9}{4} = 2.25 \times 10^9$
>  


$$\displaystyle\mathrm{N}_{A}={\frac{a \cdot \Delta T \cdot \text{CR}}{a \cdot \text{CPI}_A - b \cdot \text{CPI}_B}}$$

- Every $a$ instructions of type $A$ replaced by $b$ instructions of type $B$
- $\Delta T$ is the time saved (in $\mathsf{sec}$)
- $\text{CR}$ is the clock rate of the CPU (in $\mathsf{Hz}$)
- $\text{CPI}_A$ and $\text{CPI}_B$ are the cycles per instruction for $A$ and $B$ (resp.)
- $\mathrm{N}_A$ is the total number of $A$ instructions replaced

### Instruction Count

> [!EXAMPLE]
> Given  
> - CPU A with $\text{CPI}=5.5$, and $\text{Clock rate}=2\text{ GHz}$  
> - CPU B with $\text{CPI}=2.2$, and $\text{Clock rate}=3\text{ GHz}$
> - A program with $200,000$ instructions in running time (after assembly for CPU A)  
> 
> How many instructions (in running time) would CPU B execute to match the running time of CPU A? 
> - $\text{ET}_A = \text{ET}_B$ (ET=Execution Time)  
> - $\frac{\text{IC}_A \times \text{CPI}_A}{\text{Clock rate}_A} = \frac{\text{IC}_B \times \text{CPI}_B}{\text{Clock rate}_B}$  
> - $\frac{200,000 \times 5.5}{2} = \frac{\text{IC}_B \times 2.2}{3}$  
> - $\text{IC}_B = \frac{200,000 \times 5.5 \times 3}{2 \times 2.2}=750,000$  

$$\displaystyle\text{ET}_{A}=\text{ET}_{B} \implies \frac{\text{IC}_{A} \times \text{CPI}_{A}}{\text{CR}_{A}} = \frac{\text{IC}_{B} \times \text{CPI}_{B}}{\text{CR}_{B}}\implies \boxed{\text{IC}_{B} = \frac{\text{IC}_{A} \times \text{CPI}_{A} \times \text{CR}_{B}}{\text{CPI}_{B} \times \text{CR}_{A}}}$$





# Amdahl's Law

$$\displaystyle\text{Speedup}(N)=\frac{1}{(1-P)+\frac{P}{N}}=\frac{\mathrm{ET}_{\text{old}}}{\mathrm{ET}_{\text{new}}}$$


- $N$ is the number of processors
- $P$ is the fraction of the program that can be parallelized
- $1-P$ is the fraction of the program that must be executed sequentially
- $\text{Speedup}(N)$ is the speedup of the program when executed on $N$ processors
- $\text{ET}_{\text{old}}$ and $\text{ET}_{\text{new}}$ are the execution times of the program before and after the improvement (resp.)



