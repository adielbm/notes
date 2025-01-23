
- The **clock cycle** time (CCT) is the time for one clock period (usually of the processor clock, which runs at a constant rate, usually published as part of the documentation for a computer)
	- note: Although clock cycle time has traditionally been fixed, to save energy or temporarily boost performance, today’s processors can vary their clock rates, so we would need to use the average clock rate for a program.
- The **clock rate** (CR) is the inverse of the clock cycle time 
	- $\displaystyle\text{CR}=\frac{1}{\text{CCT}}$
	- (usually measured in $\mathsf{Hz}$ or its multiples)
# Single-Cycle


- The **response time** (or **execution time**) is the total time required for the computer to complete a task (including disk accesses, memory accesses, I/O activities, operating system overhead, CPU execution time, etc.)
	- The **latency** is the time it takes to complete an individual instruction
		- (note: the latency can refer to (i) the number of stages in a pipeline. or (ii) The number of stages between two instructions during execution)
		- #todo latency = execution time ?
		- $\mathrm{Latency}=\mathrm{CPI} \times \mathrm{CCT}$
- The **performance** is the reciprocal of response time: $\displaystyle\text{Performance}_X = \frac{1}{\text{Response time}_X}$
- The **CPU (execution) time** (of task) is the actual time the CPU spends computing for a specific task (excluding other activities) 
- The **throughput** (or **bandwidth**) is the number of tasks (instructions) completed per unit time
- $\text{CPU Clock Cycles} = \text{IC} \times \text{CPI}$
	- The **instruction count** (IC) is the number of instructions executed by the program
	- The **clock cycles per instruction** (CPI) is the average number of clock cycles per instruction for a program or program fragment
	- The **CPU clock cycles** (or **total clock cycles**) is the total number of clock cycles consumed by the program 
- The **CPU (execution) time** (of program) is 
	- $\text{Execution Time} = \text{IC}\times \text{CPI} \times \text{CCT}=\frac{\text{CPU clock cycles}}{\text{Clock rate}}$


- $\displaystyle\text{CPU Clock Cycles}=\sum_{i=1}^{n} \text{IC}_i \times \text{CPI}_i$
	- $\text{IC}_i$ is the number of instructions of type $i$
	- $\text{CPI}_i$ is the average number of clock cycles per instruction of type $i$




> The number of instructions in the program (IC) is determined by the efficiency of the algorithm implementation, the compiler, and the processor's instruction set architecture (ISA). 
> The implementation of the processor determines both the clock cycle time and the CPI.



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

# Pipelining 

> In this section, $\mathrm{CPI}=1$, therefore, $\mathrm{Latency}=\mathrm{CCT}$


- The **pipeline depth** is the number of stages ($=5$) in the pipeline
- $\{\mathrm{IF},\mathrm{ID},\mathrm{EX},\mathrm{MEM},\mathrm{WB}\}$ are the **stage delay** in the pipeline

$\mathrm{Latency_{pipelined}}=\mathrm{CCT_{pipelined}} \times \text{pipeline-depth}$



	- $\displaystyle\mathrm{Latency_{pipelined}}=\frac{\text{Execution-time}} {\text{Number-of-instructions}}$  #todo is it correct


- $\mathrm{CCT_{single}}=\mathrm{IF}+\mathrm{ID}+\mathrm{EX}+\mathrm{MEM}+\mathrm{WB}$
- $\mathrm{CCT_{pipelined}}=\max(\mathrm{IF},\mathrm{ID},\mathrm{EX},\mathrm{MEM},\mathrm{WB})$

- $\displaystyle\text{Throughput}=\frac{1}{\text{CCT}}$
- $\displaystyle{\text{ET}}(n)={\text{CCT}}\times (n+\text{depth}-1)$

> Although the _latency_ is worse in the pipelined processor, the _throughput_ is significantly improved


- $\displaystyle\mathrm{Speedup}=\frac{\mathrm{Latency_{single}}}{\mathrm{Latency_{pipelined}}}=\frac{\mathrm{CPI_{single}}\times \mathrm{CCT_{single}}}{\mathrm{CPI_{pipelined}}\times \mathrm{CCT_{pipelined}}}$

- $\displaystyle\text{Speedup}=\frac{\text{Pipeline-depth}}{1+\text{Pipeline stall CPI}}\times \frac{\text{CCT}_{\text{single}}}{\text{CCT}_{\text{pipelined}}}$


	
	
	
	- $\displaystyle\lim_{N\to \infty} \frac{(N\cdot \mathrm{Latency_{single}})+\mathrm{Overhead_{single}}}{(N\cdot \mathrm{Latency_{pipelined}})+\mathrm{Overhead_{pipelined}}}$ is the speedup of the pipelined processor over the single-cycle processor, where:
		- $\mathrm{Overhead_{single}}$ and $\mathrm{Overhead_{pipelined}}$ are the time taken to execute some given number of instructions, for the single-cycle and pipelined processors, respectively.
- When the stages are perfectly balanced, then:
	- $\displaystyle\mathrm{CCT_{pipelined}}=\frac{\mathrm{CCT_{single}}}{\mathrm{depth}}$, thus, $\displaystyle\mathrm{Speedup}=\mathrm{depth}$ (Under ideal conditions and with a large number of instructions)




> [!Exercise]
> - Given the following times for each one of 5 stages of the pipeline: (assume $\mathrm{CPI}=1$)
> 	- $\mathrm{IF}=300\,\mathsf{ps}$
> 	- $\mathrm{ID}=400\,\mathsf{ps}$
> 	- $\mathrm{EX}=350\,\mathsf{ps}$
> 	- $\mathrm{MEM}=500\,\mathsf{ps}$
> 	- $\mathrm{WB}=100\,\mathsf{ps}$
> - A. What is the clock cycle time (single-cycle / pipelined)?
> - B. What is the latency of `lw` instruction (single-cycle / pipelined)?
> - C. For a large number of instructions, what is the speedup of the pipelined processor over the single-cycle processor?
> - D. If it is possible to split one stage into two stages, each taking half the time of the original stage. 
> 	- What is the best choice of stage to split? 
> 	- What would be the new clock cycle time of the pipelined processor? 
> 	- What would be the new latency of the `lw` instruction?
> 	- How does the change affect the throughput?
>  
>  #### **Answer**
> - $\mathrm{CCT_{single}}=\mathrm{IF}+\mathrm{ID}+\mathrm{EX}+\mathrm{MEM}+\mathrm{WB}=1650\,\mathsf{ps}$  
> - $\mathrm{CCT_{pipelined}}=\max(\mathrm{IF},\mathrm{ID},\mathrm{EX},\mathrm{MEM},\mathrm{WB})=500\,\mathsf{ps}$
> - $\mathrm{Latency_{single}}=\mathrm{CCT_{single}}=1650\,\mathsf{ps}$  
> - $\mathrm{Latency_{pipelined}}=\mathrm{CCT_{pipelined}} \times \mathrm{depth}=500\,\mathsf{ps} \times 5=2500\,\mathsf{ps}$
> - $\mathrm{Speedup}=\frac{\mathrm{Latency_{single}}}{\mathrm{CCT_{pipelined}}}=3.3$ (given that there is no stalls)
> - The best choice to split is the longest stage, which is the `MEM` stage with $500\,\mathsf{ps}$, that will be split into two stages each taking $250\,\mathsf{ps}$, thus the new longest stage will be the `ID` stage with $400\,\mathsf{ps}$, and the new clock cycle time will be $400\,\mathsf{ps}$, the new latency will be $400\,\mathsf{ps} \times 6=2400\,\mathsf{ps}$, the throughput will be improved as the clock cycle time is reduced.
> - The speedup of the pipelined processor (with the split stage) over the single-cycle processor is $\frac{1650\,\mathsf{ps}}{400\,\mathsf{ps}}=4.125$, and over the pipelined processor (without the split stage) is $\frac{500\,\mathsf{ps}}{400\,\mathsf{ps}}=1.25$

# Speedup

- The **speedup** is it is the improvement in speed of execution of a task executed on two similar architectures with different resources
- Speedup can be defined for two different types of quantities: latency and throughput
	- $\displaystyle S_{\text{L}} = \frac{\text{Latency}_{\text{old}}}{\text{Latency}_{\text{new}}}$ 
	- $\displaystyle S_{\text{T}} = \frac{\text{Throughput}_{\text{new}}}{\text{Throughput}_{\text{old}}}$


### Amdahl's Law

$$\displaystyle\text{Speedup}(N)=\frac{1}{(1-P)+\frac{P}{N}}=\frac{\mathrm{ET}_{\text{old}}}{\mathrm{ET}_{\text{new}}}$$


- $N$ is the number of processors
- $P$ is the fraction of the program that can be parallelized
- $1-P$ is the fraction of the program that must be executed sequentially
- $\text{Speedup}(N)$ is the speedup of the program when executed on $N$ processors
- $\text{ET}_{\text{old}}$ and $\text{ET}_{\text{new}}$ are the execution times of the program before and after the improvement (resp.)






