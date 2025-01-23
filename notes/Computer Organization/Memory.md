


- $\text{Memory-Accesses} = \text{Hits} + \text{Misses}$
- $\displaystyle\text{Hit Rate} = \frac{\text{Hits}}{\text{Memory-Accesses}}$
- $\displaystyle\text{Miss Rate} =1-\text{Hit Rate}$
- The **Hit Time** is the time required to access a level of the memory hierarchy, including the time needed to determine whether the access is a hit or a miss.
- The **Miss Penalty** is the time required to fetch a block into a level of the memory hierarchy from the lower level, including (1) the time to access the block, (2) transmit it from one level to the other, (3) insert it in the level that experienced the miss, and then (4) pass the block to the requestor.


# Cache Memory

- Data are transferred between memory and cache in blocks of fixed size, called **cache lines** or **cache blocks**
- The **Cache Memory** consists of $2^n$ entries called **blocks** (or **lines**)
	- **Cache block** contains $2^{m}\text{ words}=2^{m+2}\text{ bytes}=2^{m+5}\text{ bits}$ of data (Block size)
	- Tag Directory:
		- A tag field ($32-(n+m+2)$ bits)
		- A valid bit (1 bit)
- **Cache Size**
	- Cache size (including: data, tag, valid): $2^n\times((2^m \times 32)+31-n-m)\text{ bits}$
	- Cache size (data only): $2^{n+m+5} \text{ bits}=2^{n+m+2} \text{ bytes}$
- 32 bits of address
	- ($2 \text{ bits}$) **byte offset** used for the byte part of the address 
	- ($0\leq m$ bits) block (word) offset 
	- ($n \text{ bits}$) **index** (block) 
	- ($32-(m+n+2) \text{ bits}$) **tag** 
- $\text{Cache Location} = (\text{Block Address}) \mod (\text{Number of Cache Blocks})$
	- The _block address_ is the address of the block in main memory that contains the word being accessed.
	- The _number of cache blocks_ is the number of blocks in the cache.


- caach line number = mem block number mod
- $\text{Cache Line Number} = \text{Memory Block Number} \mod \text{Number of Cache Lines}$


- block offset
- tag
- **Cache index** is used to select the block



- The size of the tag field is $32-(n+m+2)$ bits.
- Total number of bits in a direct-mapped cache is $2^n\times (\text{block size}+\text{tag size}+\text{valid field size})$



```
Computer Architecture: A Quantitative


10. Average memory-access time = Hit time + Miss rate Miss penalty 
11. Misses per instruction = Miss rate Memory access per instruction 
12. Cache index size: 2index = Cache size /(Block size Set associativity)
```