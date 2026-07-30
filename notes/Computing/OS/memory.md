

- memory management
- memory paging (דפדוף)
- **memory management unit** (**MMU**)
- virtual memory

- mapping
	- bitmap 
	- linked lists
	- free list
	- quick fit 


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

- **thrashing**
- fragmentation (ריסוק)
	- external fragmentation
	- internal fragmentation
- Memory segmentation
	- segment table
- **swapping**
	- "Moving a process between main memory and a backing store. A process may be swapped out to free main memory temporarily and then swapped back in to continue execution." [@Galvin, 2018]
	- **swap space** - "Secondary storage backing-store space used to store pages that are paged out of memory." [@Galvin, 2018]
- **page replacement**
	- **local** and **global** replacement
	- [[#page replacement algorithms]]



- **locality of reference** (aka the **principle of locality**)
	- temporal locality
	- spatial locality
		- memory locality (or data locality)


# virutal memory

- **virutal memory**
- **page** (or **memory page** or **virtual page**)
	- "a fixed-length contiguous block of virtual memory, described by a single entry in a page table" (Wikipedia)
- **page frame**
	- "the smallest fixed-length contiguous block of physical memory into which memory pages are mapped by the operating system." (Wikipedia)

$$
\text{Virtual page number}\to \boxed{\displaystyle \mathrm{Page \atop Table}} \to \begin{cases}
\text{Page frame number} &&& \text{if present bit = 1}\\
\text{``on disk''} &&& \text{if present bit = 0}
\end{cases}
$$

- **memory paging** (or **paging**)
- $\textbf{page-table}(\text{virtual page number}) = \text{page frame number}$
- **page table entry** (**PTE**) contains:
	- page frame number
	- present/absent bit
		- 1 = in memory
		- 0 = on disk (then CPU generates a **page fault** exception)
	- protection bits 
		- read/write/execute permissions 
	- reference bit
	- modified bit
	- caching disabled/enabled
- **page frame number** (PFN) (which is the physical page number) 
- page frame

- dirty bit

- $\# \text{pages} =\# \text{page-table entries} = \frac{\text{virtual memory size}}{\text{page size}}$
	- $\text{page size} = 2^{\text{offset bits}}$
		- tradeoffs:
			- small pages: reduced internal fragmentation; better memory utilization;
			- large pages: smaller page table; faster I/O; better TLB usage;
		- optimal page size formula: $p=\sqrt{ 2se }$
			- $s=$ process size 
			- $e=$ page table entry size
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


- **translation lookaside buffer** (TLB) - cache for page table

- **copy-on-write** (**COW**) (or **implicit sharing** or **shadowing**)
- hard miss
- page walk
- page fault
	- Minor page fault
	- Major page fault
	- segmentation fault 
- inverted page table (IPT)
	- $\mathrm{IPT}(\text{physical frame}) = \text{(process id, virtual page number)}$
- demand paging

- **shared library**
- **position-independent code** (**PIC**)
- **paging daemon**
 

# memory allocation

- allocation algorithms:
	- **first fit** - first hole that is big enough to hold the process
		- pros: fast
		- cons: 
	- **next fit** - similar to 'first fit' but it starts searching from where the last allocation ended
		- pros: 
		- cons: 
	- **best fit** - smallest hole that is still big enough for the process
		- pros: 
		- cons: external fragmentation 
	- **worse fit** - largest available hole
		- pros: 
		- cons: 
	- **quick fit** - 
		- pros: 
		- cons: 
- **buddy memory allocation**




# page replacement algorithms





- theoretically optimal (OPT)
- **not recently used** (**NRU**)
	- `(R,M) = (referenced, modified)`
	- initially: (R,M)=(0,0)
	- periodically: for each page $p$: $R(p)\leftarrow 0$
	- on write: $M(p)\leftarrow 1$
	- on read/write: $R(p)\leftarrow 1$
	- on page fault:
		- classify pages into:
			- $C_{0}: R=0, M=0$
			- $C_{1}: R=0, M=1$
			- $C_{2}: R=1, M=0$
			- $C_{3}: R=1, M=1$
		- Evict a page from lowest nonempty class $C_{i}$
- FIFO
- second-chance (FIFO + reference bit R)
	- loop: p = head(Q)
		- if R(p) = 0:
			- dequeue Q
			- evict p
			- break
		- else if R(p) = 1:
			- $R(p)\leftarrow 0$
			- move p to tail of Q
- clock
	- like _second-chance_ but with circular list with pointer hand
- **least recently used** (LRU)
	- on reference to page $p$:
		- update $\text{last-use-time}({p})$
	- on page fault:
		- evict $\underset{p}{\text{argmin}} (\text{last-use-time}(p))$ ('temporal locality')
- **not frequently used** (NFU)
	- each page $p$ has $k$-bit counter, $\text{counter}(p)=0$
	- At each clock interrupt:
		- For every page $p$:
			- $\text{counter}(p) \leftarrow \text{counter}(p) + R(p)$
			- $R(p)=0$
	- on page fault: evict $\underset{p}{\text{argmin}} (\text{counter}(p))$
	- (_Problem_: NFU accumulates counts forever. So it does not forget old history. Thus, NFU approximates frequency, not recency.)
- The **aging** algorithm ("improved NFU")
	- At each clock tick:
		- $\text{counter}(p) \leftarrow \text{counter}(p) \gg 1$
		- $\text{counter}(p)_{MSB} \leftarrow R(p)$
		- $R(p)=0$
	- on page fault: evict $\underset{p}{\text{argmin}} (\text{counter}(p))$
- working set
	- $w(k,t)=$ pages referenced by the $k$ most recent memory references up to time $t$.
		- $k_1<k_2\implies w(k_{1},t)\subseteq w(k_{2},t)$
		- $\displaystyle\lim_{k \to \infty} |w(k,t)| < \infty$
		- For small $k$, the working set grows quickly. For large $k$, it stabilizes.
	- approximation for $k$ references:
		- $w(\tau,t) = \{ \text{pages referenced in } (t-\tau,\,t] \}$
			- $\tau=$ working set window (in seconds of CPU time)
			- $t=$ current virtual time of the process
			- **virtual time** counts the CPU time actually used by the process
	- algorithm:
		- on reference to page $p$:
			- $R(p)\leftarrow 1$
			- update $\text{last-use-time}({p})$
		- on page fault: 
			- for each page in memory:
				- if $R=1$, then set $\tau \leftarrow t$ and $R \leftarrow 0$
				- else if $R=0$
					- $\text{age} \leftarrow t - \tau$
					- if $\text{age} > \tau$, then evict the page
					- if $\text{age} \le \tau$, then keep the page
			- if no page is evicted 
				- if some pages had $R=0$ (so all pages have $\text{age} \le \tau$), then:
					- evict the page with the largest age
				- if all pages have $R=1$, then: 
					- evict a page at random 
- WSClock #todo
	- if R=1, then:
		- virtual-time(p)=current virtual time
		- R=0
		- advance head 
	- else if R=0, then:
		- age = current virtual time - time of last use
		- if age > $\tau$
			- if M=0, evict page
			- else, 
		- else if age $\leq \tau$
			- 




# Linux




- address space: 
	- text segement
	- data segment
		- initialized data
		- uninitialized data, which is called the **block starting symbol** (abbreviated to `.bss` or `bss`. origin: **BSS** from **Block Started by Symbol**)
			- initialized to zero after loading
	- stack

