- **file system** or **filesystem** (**FS** or **fs**)
	- free-space management:
		- bitmap
		- linked list
	- consistency:
		- utilities: `fsck` (UNIX), `sfc` (Windows)
		- inconsistency cases:
			- missing block (appears in neither table)
			- duplicate free block 
				- (possible only with free lists, not bitmaps)
			- duplicate data block (same block referenced by multiple files)
			- both free and allocated 
	- block cache (buffer cache)
		- write policies 
			- write-through
			- non write-through 
	- layout:
		- **master boot record** (**MBR**)
		- **Unified Extensible Firmware Interface** (**UEFI**)
			- partition table 
			- GUID Partition Table (GPT)
			- globally unique identifiers (GUID)


# file

- file
- filename
- structures:
	- byte sequence
	- record sequence
	- tree
- file types:
	- regular
		- ASCII file vs binary file
		- executable vs non-executable file
	- directory
	- **device file** (or **device node** or **special file**) (in UNIX, they are in `/dev/`) 
		- character special file 
		- block special files
		- pseudo-devices (e.g. `/dev/null`, `/dev/random`, `/dev/zero`)
	- **named pipe** (or **FIFO**)
	- **hard link**
	- **symbolic link** (or **symlink** or **soft link**)
- implementation:
	- contiguous allocation
	- linked list allocation
		- linked list allocation using an index 
	- indexed allocation
- **file attributes**
	- archive
		- header
			- module name
			- date
			- owner
			- protection
			- size 
			- group
			- number of links
			- device number
			- device number for special file
			- i-node number
		- object module
- executable binary file
	- 
- file access
	- **random access** (or **direct access**)
	- **sequential access**
- **memory-mapped file**

## directory


- a **directory** is a special file that contains directory entries  
	- a **directory entry** is a pair $\langle \text{filename}, \text{inode-number} \rangle$
- an **inode** (index node)  
	- contains metadata (not the filename):
		- file type
		- file size (in bytes)
		- number of links
		- owner / group ID
		- access permissions
		- timestamps (atime, mtime, ctime)
		- block pointers
	- block pointers:
		- **direct pointers**: contain direct addresses of data blocks
		- **single indirect pointer**: points to a block that stores addresses of data blocks
		- **double indirect pointer**: points to a block of pointers to indirect blocks
		- **triple indirect pointer**: adds one more level of indirection
	- (addresses per indirect block)
		- let:
			- $B$ = block size (bytes)
			- $a$ = disk address (pointer) size (bytes)
			- $d$ = number of direct pointers
			- $i_1,i_2,i_3$ = number of indirect pointers (single, double and triple. resp.), usually everyone is 1.
		- number of addresses per indirect block: $n = \frac{B}{a}$
		- maximum file size (bytes): $(d + i_{1}n + i_{2}n^2 + i_{3}n^3)\cdot B$
		- maximum file size (bytes) with blocks limit of $l$:
			- $B \cdot \left(c_0 + c_1 + c_2 + c_3\right)$
				- $c_0 = \min(d, l)$
				- $l_1=l-c_0$



- **disk quota**




- **disk partitioning**
- **boot sector**

- **partition table**
- **superblock**



