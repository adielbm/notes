



* **Process** (תהליך): an executing instance of a program, with its own memory space.
	* **Child Process** (CP): processes created by another (parent) process.
	* **Process Table**: data structure used by the OS to manage processes.
	* **Thread** (תהליכון): the smallest unit of execution within a process.
		* **Multithreading** (ריבוי תהליכונים): A CPU feature that enables the processor to maintain the state of multiple threads and rapidly alternate between them on a nanosecond scale.
			* This mechanism improves the utilization of execution units during stalls (such as memory latency), but it does not provide genuine parallelism, as only one thread is actively executing at any given moment.


* **Timesharing** (חלוקת זמן): CPU time is divided among multiple users or processes.
* **Batch System** (מערכת אצווה): executes jobs in batches with minimal user interaction.
* **Multiprogramming** (ריבוי תוכניות): multiple programs reside in memory to improve CPU utilization.
* **Interrupt** (פסיקה): a signal to the CPU to stop and handle an event.
* **Kernel** (גרעין): the core part of the OS managing resources and hardware.
* **Kernel Mode** (מצב ראשוני): CPU mode with full access to hardware and memory.
* **User Mode** (מצב משתמש): restricted CPU mode for running user applications.
* **System Call** (קריאת מערכת): interface for user processes to request OS services.
* **Signal**: signal sent to a process after a specified time delay.
* **UID (User Identification)**: numeric ID assigned to a user for permission control.
* **GID (Group Identification)**: numeric ID assigned to a group of users.
* **Interprocess Communication**: mechanisms for processes to communicate and synchronize.

* **Address Space**: the memory range a process can access.
* **Command Interpreter**: program that reads and executes user commands (e.g., shell).
* **Core Image**: memory snapshot of a process, including code and data.

* **File Descriptor**: integer handle used to access open files in a process.
- **Virtual memory**
