- **main memory** (or **(primary) memory** or **RAM (random access memory)**) 
	- volatile 
	- DRAM, SRAM
- **secondary storage** (or **secondary memory** or **storage**) 
	- nonvolatile 

- **Non-volatile memory** (**NVM**) (or **non-volatile storage**)
	- (retains data even when power is off)
- **Volatile memory**
	- (loses data when power is off)

- **disk storage** (e.g. optical disc, magnetic disk)
- **Magnetic storage** (or **magnetic recording**)
	- **magnetic tape**
	- **magnetic disk**
		- [[#Hard disk drive (HDD)]]
		- floppy disk drive (FDD)
- **optical storage**
	- **optical disc**
		- compact disc (CD)
		- digital versatile disc (DVD)
		- Blu-ray disc
- Solid-state storage (SSS)
	- types:
		- DRAM (dynamic random access memory)
		- flash memory
			- nonvolatile semiconductor memory
			- architectures: 
				- NOR
				- NAND
			- solid-state drive (SSD)
			- USB flash drive
			- memory card
				- SD card
				- microSD card

- SRAM (static random access memory)

- **NVM Express** (**NVMe**)

# Hard disk drive (HDD)

- track
- geometrical sector
- disk sector
- cluster
- cylinder
- **disk read-and-write head**


- $\text{Capacity} = \text{Cylinders} \times \text{Heads} \times \text{Sectors per Track} \times \text{Bytes per Sector}$
- $\text{Platters}=2 \times \text{Surfaces}$ 
- $\text{Tracks per Cylinder} = \text{Heads}$
- $\text{Tracks per Surface} = \text{Cylinders}$

- **constant angular velocity** (**CAV**)
- **zone bit recording** (or **multiple zone recording**)



- $\displaystyle T= S + \frac{1}{2}R+ R\frac{b}{N}$
	- $b=$ bytes to be transferred
	- $N=$ bytes per track
	- $S=$ **seek time** (time to move the read-and-write head to the correct track)
	- $R=$ **rotation time** (time for one full rotation of the disk, on average half a rotation is needed to reach the desired sector)
		- **rotational latency** (or **rotational delay** or **latency**)
		- **average rotational latency** = $\frac{1}{2}  R$
- **positioning time** (or **random-access time**) $=\text{Seek time} + \text{Rotational latency}$
- **rotations per minute** (RPM)



- **head crash**
- **bad sector**
- **trace cache**
- **Logical block addressing** (**LBA**)