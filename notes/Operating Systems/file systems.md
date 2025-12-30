- **file system** or **filesystem** (abbr. **FS** or **fs**)
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
	- character special file (in UNIX, they are in `/dev/`) 
	- block special files (in UNIX, they are in `/dev/`)
- **memory-mapped file**

- archive
	- header
		- module name
		- date
		- owner
		- protection
		- size 
	- object module
- executable binary file
	- 

- file access
	- **random access** (or **direct access**)
	- **sequential access**
- File attributes


- Contiguous allocation
- Linked list allocation
	- Linked list allocation using an index 
- a **directory** is a special file that contains directory entries
	- a **directory entry** is a pair of $\langle \text{filename, inode-number} \rangle$
	- **inode** (index node) 
		- contains:
			- file type
			- file size
			- 
		- (Addresses per indirect block)
			- $\text{Max-file-size}=\left( \text{direct-block-addresses}+\frac{\text{block-size}}{\text{disk-address-size}} \right)\times \text{block-size}$
			- 
		- Indirect block
- **hard link**
- **symbolic link** (or **symlink** or **soft link**)
- **disk quota**


- block cache (buffer cache)
	- write policies 
		- write-through
		- non write-through 