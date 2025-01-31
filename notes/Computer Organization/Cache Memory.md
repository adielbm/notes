- $\text{Word}=4\text{ bytes}$
- Cache Memory consists of $2^n$ entries called **blocks** (or **lines**)
- $\text{Main-Memory-Size}=2^{\text{Address-bits}}$ bytes (in MIPS, $\text{Main-Memory-Size}=2^{32}\text{ bytes}=4\text{ GB}$)
- $\text{Address-bits}=\text{Tag-bits}+n+m+2$ (in MIPS, $\text{Address-bits}=32$)
	- $\displaystyle\text{Tag-bits}=\text{Address-bits}-\log \left(\frac{\text{Cache-Size}_{\text{Data}}[\text{bytes}]}{K}\right)=\text{Address-bits}-n-m-2$
		- $\text{Tag-bits}\geq 1$
	- $\text{Index-bits}=n$ (for choose the set)
	- $\text{Block-offset-bits}=m$ (aka: **word-offset**; for choose the word inside the block)
		- $m\geq 0$
	- $\text{Byte-offset-bits}=2$ (used for the byte part of the address)
- Cache
	- Cache size:
		- $\underset{\text{data}}{\text{Cache-Size}}=K\times 2^{n+m+2} \text{ bytes}=K\times 2^{n+m+5}\text{ bits}$
		- $\underset{\text{data + metadata}}{\text{Cache-Size}}=K\times 2^{n}\times (1+\text{tag-bits}+2^{m+5})\text{ bits}$
		- $\displaystyle\text{Compression Ratio}=\frac{\underset{\text{data + metadata}}{\text{Cache-Size}}}{\underset{\text{data}}{\text{Cache-Size}}}=\frac{1+\text{tag-bits}+2^{m+5}}{2^{m+5}}$

	- $\text{Block-Size}=2^m \text{ words}=2^{m+2}\text{ bytes}=2^{m+5}\text{ bits}$
	- $\text{Total-Blocks-in-Cache}=2^n\times K$
	- $\text{Total-Sets-in-Cache}=2^n$
	- $\text{Valid-bit}=1$
- $K$ is the number of **ways** (for blocks) per set
	- $K=1$ is a direct-mapped cache
	- $K=2$ is a 2-way set-associative cache
	- $K=2^n$ is a fully associative cache
- For given cache size, when $K$ increases, $n$ (index-bits) decreases and the tag-bits increases

- The ratio between the main memory size and the cache size (data) is $\displaystyle\frac{2^{\text{tag-bits}}}{~~K~~}$

#### Mapping Process

>  in general:
>  - by taking modulo of a number with $2^p$ we get its $p$ LSB bits
>  - by dividing a number with $2^p$ we get the number without its $p$ LSB bits (i.e. shifting right by $p$ bits)

____


Given we have an _word address_ (?) $x$ in main memory

- The range of addresses in a block in main memory that contains $x$ is:
	- $\text{base address}=\displaystyle\left\lfloor \frac{x}{2^{m}} \right\rfloor \times 2^{m}$
	- $\text{ending address}=\displaystyle\text{base address}+2^{m}-1$


- $\displaystyle\left\lfloor \frac{x}{2^{m}} \right\rfloor$ is the memory block number of $x$


- $\displaystyle \left\lfloor \frac{x}{2^{m}} \right\rfloor  \mod 2^n$ is the index (set number) to which $x$ will be mapped in the cache
- $\displaystyle\left\lfloor\frac{\displaystyle\left\lfloor \frac{x}{2^{m}} \right\rfloor}{2^n}\right\rfloor$ is the tag of $x$



- Alternatively, we can calculate the index as $\displaystyle\left\lfloor \frac{x \mod 2^{n+m+2}}{2^{m+2}} \right\rfloor$





> [!EXAMPLE]
> - $m=2$ (thus, $2^4=16$ bytes per block)
> - $n=6$ (thus, $2^6=64$ sets=blocks, because $K=1$)
> - $x=1200=0b10010110000$ is an address in main memory
> - (shift by m+2) by dividing $x$ by $2^{m+2}=2^4=16$, we get $75=0b1001011$ which is the block number in memory (index+tag)
> 	- $1200\div 16=75$ (ignore the remainder, if there were any)
> - by takeing modulo to $75$ with $2^n=2^6=64$, we get the index (set number, $n=6$ bit) which is $11=0b001011$
> 	- $75\mod 64=11$
> - by dividing $75$ by $2^n=2^6=64$, we get the tag which is $1$
> 	- $75\div 64=1$ (ignore the remainder, if there were any)
> - another approache:
> 	- $1200 \mod 1024=176$
> 	- $176 \div 16 = 11$

### Performance

```
Computer Architecture: A Quantitative


10. Average memory-access time = Hit time + Miss rate Miss penalty 
11. Misses per instruction = Miss rate Memory access per instruction 
12. Cache index size: 2index = Cache size /(Block size Set associativity)
```

Cache CPI Misses per instruction Miss penalty

- $\text{Memory-Accesses} = \text{Hits} + \text{Misses}$
- $\displaystyle\text{Hit Rate} = \frac{\text{Hits}}{\text{Memory-Accesses}}$
- $\displaystyle\text{Miss Rate} =1-\text{Hit Rate}$
- The **Hit Time** is the time required to access a level of the memory hierarchy, including the time needed to determine whether the access is a hit or a miss.
- The **Miss Penalty** is the time required to fetch a block into a level of the memory hierarchy from the lower level, including (1) the time to access the block, (2) transmit it from one level to the other, (3) insert it in the level that experienced the miss, and then (4) pass the block to the requestor.
- $\text{Miss Penalty} = \frac{\text{Memory-Access Time}}{\text{CCT}}=\text{Memory-Access Time}\times \text{CR}$




- $\text{CPI}=\text{Base CPI}+\text{Miss Rate}\times \text{Miss Penalty}$
- (**Average memory-access time**) $\text{AMAT}= \text{Hit time} + \text{Miss rate} \times \text{Miss penalty}$

- Ex.
	- $\text{Hit time}=2\text{ cycles}$
	- $\text{Hit rate}=92\%$
	- $\text{Miss penalty}=100\text{ cycles}$
	- $\text{CCT}=1.5 \,\mathsf{ns}$
	- $\text{AMAT}=2+0.08\times 100=10\text{ cycles}$
	- $\text{CCT}=10\text{ cycles}\times 1.5\text{ ns}=15\text{ ns}$

- Ex.
	- Given:
		- $\text{CR}=4\,\mathsf{GHz}$
		- $\text{Memory-Access Time}=100\,\mathsf{ns}$
		- $\text{Base CPI}=1$
		- $\text{miss rate}=2\%$
	- Answer:
		- $\text{miss penalty}=100\text{ ns}\times 4\,\mathsf{GHz}=400\text{ cycles}$
		- $\text{CPI}=1+0.02\times 400=9$
	- Assume we add L2 cache:
		- $\text{access time}=5\,\mathsf{ns}$
		- $\text{miss rate}=0.5\%$ (global miss rate to main mem)
		- $\text{miss penalty}=5\,\mathsf{ns}\times 4\,\mathsf{GHz}=20\text{ cycles}$
		- extra penalty 400 cycles 
		- $\text{CPI}=1+(0.02 \times 20)+(0.005\times 400)=3.4$
		- speedup: $9/3.4=2.6$

- Given:
	- $\text{miss-rate}=\begin{cases} 4\% & \text{data} \\ 2\% & \text{instructions} \end{cases}$
	- $\text{miss-penalty}=\begin{cases} 100\text{ cycles} & \text{data} \\ 200\text{ cycles} & \text{instructions} \end{cases}$
	- $\text{load/store frequency}=36\%$ (instructions that access data memory)
	- base CPI = 2
- miss cycles per instruction
	- data: $0.04\times 0.36\times 100=1.44$
	- ins.: $0.02\times 200=4$
- total number of memory-stalls cycles per ins.: $1.44+4=5.44$
- new CPI (with memory stalls): $2+5.44=7.44$
- speedup: $\frac{2}{7.44}=0.2688$


 - given:
	- $\text{CR}=4\,\mathsf{GHz}$
	- $\text{miss-rate}=\begin{cases} 4\% & \text{data} \\ 2\% & \text{instructions} \end{cases}$
	- $\text{miss-penalty}=\begin{cases} 800\text{ cycles} & \text{data} \\ 600\text{ cycles} & \text{instructions} \end{cases}$
	- $\text{load/store frequency}=40\%$ (instructions that access data memory)
	- $\text{Base-CPI} = 2.5\,\mathsf{cc/ins}$
- find the CPU time of a program with $\text{IC}=2\times 10^9$ instructions
	- miss cycles per instruction:
		- data: $0.04\times 0.4\times 800=12.8$
		- ins.: $0.02\times 600=12$
		- total: $12.8+12=24.8$
	- new CPI: $2.5+24.8=27.3$
	- $\text{CPU-Time}=\frac{2\times 10^9}{4\times 10^9}\times 27.3=13.65\,\mathsf{sec}$
- in general:
	- $\displaystyle\text{CPU Time} = \frac{\text{IC} }{\text{CR}}\times \left(\text{CPI}_{\text{base}} + \left(\text{MR}_{\text{data}} \times f_{\text{LS}} \times \text{MP}_{\text{data}}\right) + \left(\text{MR}_{\text{ins}} \times \text{MP}_{\text{ins}}\right)\right)$
