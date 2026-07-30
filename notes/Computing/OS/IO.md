
- **input/output** (**I/O**, **i/o**, or informally **io** or **IO**)
	- software:
		- goals: (by [@Tanenbaum, 2022])
			- device independence
			- uniform naming
			- error handling
			- buffering
			- synchronous (blocking) vs. asynchronous (interrupt-driven) transfers
			- sharable vs. dedicated device
		- layers:
			- [[processes#Interrupts|interrupt handler]]
			- **device driver** (מנהל התקן)

- **character special files** (or **character devices** or **character-oriented device**)
- **block special files** (or **block devices** or **block-oriented device**)
- **device file** (or **device node** or **special file**)
	- **major number** 
	- **minor number**
- **stream**
	- **bitstream** (or **bit stream** or **binary sequence**)
	- **bytestream** 
- addressing:
	- **memory-mapped I/O** (**MMIO**) (not to be confused with _memory-mapped file_)
	- **port-mapped I/O** (**PMIO**)
- **parallel port**
- **serial port**
- **parallel communication**
- **serial communication**
- **data buffer** (or **buffer**)
- **control register**
- **video random-access memory** (**VRAM**)

- **bus** (historically also called a **data highway** or **databus**)
	- address bus
	- memory bus
- **bus snooping** (or **bus sniffing**)
- **memory controller** (or **memory chip controller** (**MCC**) or a **memory controller unit** (**MCU**))
- **disk controller**

- **cycle stealing**
- **input–output memory management unit** (**IOMMU**)
- **buffer underrun** (or **buffer underflow**)

- **polling** (or **interrogation**)
	- **polled I/O** (or **software-driven I/O**)
- **hot swapping**
	- **hot plugging**



- **programmed input–output** (or **programmed I/O**, **PIO**)
- **interrupt-driven I/O**
- **direct memory access** (**DMA**)
	- registers:
		- byte count register
		- memory address register
		- control register(s), to specify:
			- I/O port to use
			- transfer direction (reading/writing)
			- transfer unit (byte/word at a time)
			- number of bytes to transfer in a burst
	- **DMA controller**

- reading from disk: (by [@Tanenbaum, 2022])
	- (using interrupt-driven I/O)
		- disk controller: 
			- read block (one or more sector(s)) (bit by bit)
			- store the block in its buffer
			- computes the checksum
			- causes an interrupt
		- OS:
			- reads the block from the disk controller buffer (using a loop where in each iteration it reads one byte/word from the register of the disk controller and writes it to the main memory) 
	- (using DMA)
		- CPU: 
			- programs the DMA controller (by writing to its registers)
			- instructs the disk controller to read data from the disk into the buffer of the disk controller and do the checksum verification
		- (when a verified data block is ready in the disk controller buffer then the DMA controller is triggered)
		- DMA controller:
			- issues a read request to the disk controller (via the bus)
		- disk controller:
			- transfers the data to the main memory (via the bus)
			- sends acknowledgment to the DMA controller (via the bus)
		- DMA controller:
			- sends an interrupt to the CPU when the entire block has been transferred

- **input/output** (**I/O**) **scheduling** (or **disk scheduling**)
	- **first-come, first-served** (FCFS)
	- **shortest seek first** (or **shortest seek time first**)
	- **elevator algorithm** (or **SCAN**)
	- **circular SCAN** (or **C-SCAN**)
