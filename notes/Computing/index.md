
- _address space_ in:
	- [[#Memory]]
	- disk sector
	- I/O device
- **stored-program computer**
- system-on-chip (SoC)
- **computer program**
	- **source code** (or **code** or **source**)
	- **object code** (or **object module**)
	- **machine code**
	- **bytecode** (also called **portable code** or **p-code**)
- **object file**


# CPU

- **data path**
	- **arithmetic logic unit (ALU)**
- **control unit** (**CU**)
- **instruction cycle**
- pipelining
	- branch predictor
	- hazards
- [[Integrated circuit]]
- [[CPU performance]]
## Architecture

- **instruction set architecture (ISA)** (or **architecture**) is an abstract interface between the hardware and the lowest-level software that encompasses all the information necessary to write a machine language program that will run correctly, including instructions, registers, memory access, I/O, and so on
	- **RISC** (reduced instruction set computer)
		- **RISC-V** is an open-source ISA based on established RISC principles
		- Examples: [[MIPS]], ARM
	- **CISC** (complex instruction set computer)
		- Examples: x86, PowerPC
- opcode
- addressing modes
- instruction format
- operands

## Registers 

- **register** is a small, fast storage location within the CPU used to store data temporarily
	- **register file**
	- The process of putting less commonly used variables (or those needed later) into memory is called **spilling** registers 
- **special-purpose registers** (SPRs)
	- **program counter** (PC) (or **instruction pointer** (IP) in x86) holds a memory address that points to the next instruction
- **general-purpose registers** (GPRs)
- address registers
	- **stack pointer** (SP) – points to the top of the stack (lowest address in the stack)
	- **frame pointer** (FP) (or **base pointer** (BP)) – holds a fixed memory address pointing to the base of the current stack frame during function execution
- internal registers
	- **instruction register** (IR) holds the instruction currently being executed

# Memory

see more [[memory]].

- **address space**
	- **physical address space**
- **memory management**
- **memory hierarchy** 
- **memory address**
- cache memory
- virtual memory


### Memory segments

cf. [[memory|memory segmentation]].

memory segments (from low to high addresses) for a given process:

- reserved segment – contains the operating system and other reserved areas
- **code segment** (or **text segment** or **text**)
	- contains the machine code
	- read-only
- **static data segment** (or **data segment**)
	- **.data** – initialized global and static variables
	- **.bss** – uninitialized (or zero-initialized)
	- used for:
		- _global variables_ (declared outside of any procedure in C/C++)
			- `int global_x = 3;` (initialized)
			- `int global_y;` (uninitialized)
		- _static variables_ (using `static` in C/C++; inside/outside a function)
			- `static int counter = 1;` (initialized)
			- `static char buffer[1024];` (zero-initialized)
			- `static int Foo::count;` (uninitialized, C++)
	- its size fixed at compile/link time
	- memory reserved at process load time (when the OS loads/execs the program)
	- deallocated at program exit
- **.rodata** – read-only data
	- `const int MAX_USERS = 100;` (.rodata)
	- `static const double PI = 3.14159;` (.rodata)
	- may be grouped with text or data segment (implementation-dependent)
- The **heap segment** (aka: dynamic data, free store, dynamic memory)
	- Grows upward (toward the stack, from lower to higher addresses)
	- Used for dynamic memory allocation, like:
		- linked lists (grow and shrink during execution)
		- arrays (whose size is not known until runtime)
	- C: `malloc`, `calloc`, `realloc`, `free`
	- C++: `new`, `delete` or `std::unique_ptr`, `std::shared_ptr`
	- risks: 
		- memory leaks
		- dangling pointers
	- Java: uses automatic memory allocation and garbage collection
- The **call stack** (or **execution stack** or the **stack**) (מחסנית קריאות) ![200](https://upload.wikimedia.org/wikipedia/commons/a/ac/ProgramCallStack2_en.svg)
	- bases on [[Abstract Data Types#Stack|stack]] ADT
	- risk: **stack overflow**
	- **stack frame** (or **activation record**, **procedure frame**) of a function. (allocated at runtime and is automatically deallocated when the function exits). contain:
		- function arguments (parameters) passed to callee
			- see also: **calling convention**, fastcall
		- return address of caller
		- base pointer
		- saved registers
		- **automatic local variables**
			- declared inside a procedure, and discarded when the procedure exits
			- e.g. `void foo() { int x = 5; }`
	- Grows downward (toward the heap, from higher to lower addresses)
	- see also: 
		- [[#Registers|stack and frame pointers]]
- memory reserved for input/output devices 


# Input/Output

- I/O devices
- memory-mapped I/O (MMIO)
- port-mapped I/O (PMIO)

# misc.

- **motherboard** (or **mainboard**)
- bus
	- address bus
	- data bus
	- control bus
- **word**
	- **word size** (or **word length**) is the number of bits in a word 
	- word size may be used for:
		- registers: the number of bits in a general-purpose register
		- memory addresses: the number of bits in a memory address
		- instructions
		- data types (e.g., integer, floating-point, character)
		- address bus
		- data bus
	- e.g., 32 bits in MIPS, 64 bits in x86-64, or 16 bits in the 8086


