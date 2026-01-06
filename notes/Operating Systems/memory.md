

- memory management
- memory paging
- memory management unit (MMU)
- virutal memory
- page replacement
	- local and global replacement
	- page replacement algorithm
		- theoretically optimal (OPT)
		- not recently used (NRU)
			- (referenced, modified) 
			- (0,0), (0,1), (1,0), (1,1)
		- FIFO
		- Second-chance
		- least recently used (LRU)
		- Clock
			- WSClock
		- not frequently used (NFU)
		- aging
		- working set
			- $w(k,t)=$ pages referenced by the $k$ most recent memory references up to time $t$.
			- approximation for $k$ references:
				- $w(\tau,t)=$ pages referenced in the past $\tau$ time units of virtual time (the amount of CPU time a process actually uses) up to the current time $t$.
			- algorithm:
				- in a page fault: 
					- for each page in memory:
						- if $R=1$, then set $\tau \leftarrow t$ and $R \leftarrow 0$
						- if $R=0$
							- $\text{age} \leftarrow t - \tau$
							- if $\text{age} > \tau$, then evict the page
							- if $\text{age} \le \tau$, then keep the page
					- if no page is evicted, then evict the page with the largest age
					- if all pages have $R=1$, then evict a page at random 
	- page fault frequency (PFF)
	- reference string $R = (r_1, r_2, \ldots, r_k)$
	- $\text{PageFaults}(R,n) =|\{ r_i \in R : r_i \notin \text{Frames}(i,n) \}|$
		- $n$ is the number of frames allocated to the process
		- $\text{Frames}(i,n)$ is the set of pages in memory after processing $r_i$
	- distance string
		- $D = (d_1, d_2, \ldots, d_k)$
			- $d_i = \min \{ j : r_i = r_{i-j} \land j < i \}$
			- if no such $j$ exists, then $d_i = \infty$
	- Bélády's anomaly
		- $\exists R, n, m : n < m \land \text{PageFaults}(R,n) > \text{PageFaults}(R,m)$
- thrashing
- fragmentation
	- external fragmentation
	- internal fragmentation
- buddy memory allocation
- Memory segmentation
	- segment table
- swapping
- 
	- First fit
	- Next fit
	- Best Fit
	- Worse fit
	- Quick fit
- mapping
	- bitmap 
	- linked lists
	- free list
	- quick fit 
- **locality of reference** (aka the **principle of locality**)
	- Temporal locality
	- Spatial locality
		- Memory locality (or data locality)



$$\text{Virtual page number}\to \boxed{\displaystyle \mathrm{Page \atop Table}} \to \begin{cases}
\text{Page frame number} && \text{if present bit = 1}\\
\text{``on disk''} && \text{if present bit = 0}
\end{cases}$$

- virutal memory
- paging 
- $\text{page-table}(\text{virtual page number}) = \text{page frame number}$
- **page frame number** (PFN) (which is the physical page number) 
- page frame

- dirty bit

- $\# \text{pages} =\# \text{page-table entries} = \frac{\text{virtual memory size}}{\text{page size}}$
	- $\text{page size} = 2^{\text{offset bits}}$
	- $\text{virtual memory size} = 2^{\text{virtual address bits}}$ (set by the ISA)
		- $\text{virtual address bits}= \text{VPN bits} + \text{offset bits}$
	- $\text{virtual address} = [\text{VPN}, \text{page offset}]$
	- $\text{VPN}= \left\lfloor \frac{\text{virtual address}}{\text{page size}} \right\rfloor$
	- $\text{page offset} =\text{virtual address} - \text{VPN} \times \text{page size}$
	- $\text{physical memory address} = (\text{page frame number}, \text{page offset})$
	- $\text{physical address} = \text{PFN} \times \text{page size} + \text{page offset}$
- $\# \text{page frames} = \frac{\text{physical memory size}}{\text{page size}}$
- $\text{physical memory size} = 2^{\text{physical address bits}}$ (set by the actual RAM installed)
	- $\text{physical address bits}= \text{PFN bits} + \text{offset bits}$
- page table entry (PTE) contains:
	- page frame number
	- present/absent bit
		- 1 = in memory
		- 0 = on disk (then CPU generates a **page fault** exception)
	- protection bits 
		- read/write/execute permissions 
	- reference bit
	- modified bit
	- caching disabled/enabled

- translation lookaside buffer (TLB) 
- hard miss
- page walk
- page fault
	- Minor page fault
	- Major page fault
	- segmentation fault
- multilevel page table
- inverted page table (IPT)
	- $\mathrm{IPT}(\text{physical frame}) = \text{(process id, virtual page number)}$
- demand paging


# Linux




- address space: 
	- text segement
	- data segment
		- initialized data
		- uninitialized data, which is called the **block starting symbol** (abbreviated to `.bss` or `bss`. origin: **BSS** from **Block Started by Symbol**)
			- initialized to zero after loading
	- stack

