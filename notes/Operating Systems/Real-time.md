


* A **real-time** system is an execution environment in which each task is guaranteed to complete within a specified time constraint.
* A **real-time operating system (RTOS)** is an operating system designed for applications that impose strict timing requirements on processor operations or data flow
	* **real-time system**
* A **real-time task** is a computational activity associated with external processes or events that must be completed within one or more defined deadlines.
* A **soft real-time system** is a system in which the execution time of critical real-time threads is not strictly guaranteed but such threads are given priority over noncritical ones.
* A **hard real-time system** is a system in which each task must be completed by its deadline, as missing the deadline is equivalent to system failure.
* A **periodic task** is a real-time process that alternates between execution and inactivity at fixed, regular intervals.
* An **aperiodic task** is a task that occurs irregularly and does not repeat at fixed time intervals.
- If there are $m$ periodic events, where event $i$ occurs every $P_i$ sec and requires $C_i$ sec of CPU time, the system can handle the load only if: $\sum_{i=1}^{m} \frac{C_i}{P_i} \leq 1$. (assumes context switch overhead is negligible)

