
- A **single cycle processor** is a processor that carries out one instruction in a single clock cycle. (that is $\text{CPI} = 1\,\mathsf{cc/ins}$) 

- These are the instructions we will implement:
	- `sw`, `lw`
	- `add`, `sub`, `and`, `or`, `slt`
	- `beq`, `j`

1. Fetch
2. Decode
3. Execute
4. Memory
5. Write Back

