
- **preemptive** -  
- **nonpreemptive** - once a process starts running, it keeps the CPU until it either terminates or blocks (for I/O or another event).


- **CPU-bound** (or **compute-bound**) process
- **I/O-bound** process

- A **CPU burst** is an interval of time during which a process utilizes the CPU for computation before it either completes or requests an I/O operation.
- An **I/O burst** is an interval of time during which a process waits for completion of an I/O operation.

- **Long-term scheduling** determines when new processes are admitted to the system. 
- **Medium-term scheduling** determines when a program is brought partially or fully into main memory so it may be executed. 
	- part of the swapping function
- **Short-term scheduling** determines which ready process will be executed next by the processor.
	- CPU scheduler
	- Scheduling algorithm goals (criteria)
		- (any system)
			- fairness
			- policy enforcement
			- balance
		- Batch systems
			- **CPU utilization** $1-p^n$ 
				- $n$ is the number of processes in the system
			- **throughput**
				- "the number of processes completed per time unit" [@Tanenbaum, 2022]
			- **turnaround time** (TAT) (זמן השהייה)
				- "the statistically average time from the moment that a batch job is submitted until the moment it is completed" [@Tanenbaum, 2022]
		- Interactive systems
			- **response time** is the time between issuing a command and gettintg the result
			- proportionality
		- real time 
			- meeting deadlines
			- predictability


- A variety of criteria are used in designing the short-term scheduler. 
	- Some of these criteria relate to the behavior of the system as perceived by the individual user (user oriented), 
	- others view the total effectiveness of the system in meeting the needs of all users (system oriented). 
	- Some of the criteria relate specifically to quantitative measures of performance,
	- while others are more qualitative in nature. 
	- From a user’s point of view, response time is generally the most important characteristic of a system, while from a system point of view, throughput or processor utilization is important.



# Scheduling Algorithms

- **first-come, first-served (FCFS)**
	- non-preemptive
	- FIFO
	- disadvantage: CPU-bound process may occupies the CPU for a long period. while all I/O-bound processes must wait even though they only need short CPU bursts. As a result, I/O devices become underutilized, since their corresponding processes are waiting in the ready queue.
- **shortest job first (SJF)** (or **shortest job next** (**SJN**))
	- $n$ jobs (indexed by $i=1,\dots,n$)
	- $t_i$ is the run time of job $i$ 
	- The average turnaround time is $\frac{n t_1 + (n-1)t_2 + \dots + t_n}{n}$
	- nonpreemptive
- **shortest remaining time first (_or_ next)** (SRTF)
	- At any given time, the scheduler chooses the process with the smallest remaining processing time.
	- When a new job arrives, its total time is compared to the current process’ remaining time. If the new job needs less time to finish than the current process, the current process is suspended and the new job started.
	- advantages:
		- newly arrived short jobs receive immediate sevice
		- Reduces average waiting time compared to non-preemptive SJF. #todo why 
	- disadvantages:
		- the run time has to be known in advance
	- preemptive version of SJF
- **round-robin scheduling**
	- processes rotate through CPU access, each getting a fixed **time quantum** (or **time slice**)
- priority scheduling
	- Processes assigned priorities; highest priority runs first
- multiple queues (CTSS approach)
	- higher priority classes get shorter but more frequent quanta. 
	- lower priority processes get longer quanta but run less often
	- a process that used up all its allocated quanta was moved down to the next lower priority class. 
- shortest process next (SPN)
	- SPN chooses the process with the shortest predicted CPU burst. 
	- $E(i+1)=(1-a)T(i)+aE(i)$
		- $E(i)$ is the estimated time (for the $i$th process) 
		- $T(i)$ is the actual time (for the $i$th process)
		- $a$ is a parameter (where $0<a<1$)
		- $E(1)$ is an initial guess (given)
- guaranteed scheduling
- lottery scheduling
- fair-share scheduling








# real-time


* A **real-time** system is an execution environment in which each task is guaranteed to complete within a specified time constraint.
* A **real-time operating system (RTOS)** is an operating system designed for applications that impose strict timing requirements on processor operations or data flow
	* **real-time system**
* A **real-time task** is a computational activity associated with external processes or events that must be completed within one or more defined deadlines.
* A **soft real-time system** is a system in which the execution time of critical real-time threads is not strictly guaranteed but such threads are given priority over noncritical ones.
* A **hard real-time system** is a system in which each task must be completed by its deadline, as missing the deadline is equivalent to system failure.
* A **periodic task** is a real-time process that alternates between execution and inactivity at fixed, regular intervals.
* An **aperiodic task** is a task that occurs irregularly and does not repeat at fixed time intervals.
- If there are $m$ periodic events, where event $i$ occurs every $P_i$ sec. and requires $C_i$ sec. of CPU time, the system can handle the load only if: $\sum_{i=1}^{m} \frac{C_i}{P_i} \leq 1$. (assumes context switch overhead is negligible)

