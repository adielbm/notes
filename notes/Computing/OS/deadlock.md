
- **preemptable resource**
- **nonpreemptable resource**

# deadlock

- conditions: (known as the _Coffman conditions_)
	- _Mutual exclusion_
	- _Hold and wait_ or _resource holding_
	- _No preemption_:
	- _Circular wait_: There is a set of waiting processes $P=\{ p_{1},p_{2},\dots,p_{n} \}$, s.t. $p_i$ is waiting for a resource held by $p_{(i+1) \mod n}$.
- handling:
	- ignoring
		- **ostrich algorithm**
	- detection and recovery
		- detection
			- (**system**) **resource-allocation graph**
				- $T=\{ T_{1},T_{2},\dots,T_{n}\}$: set of active threads 
				- $R=\{ R_{1},R_{2},\dots,R_{m}\}$: set of resource types
				- **request edge** $T_{i} \to R_{j}$: thread $T_{i}$ has requested an instance of resource type $R_{j}$
				- **assignment edge** $R_{j} \to T_{i}$: an instance of resource type $R_{j}$ has been allocated to thread $T_{i}$
			- Multiple Resources
				- **current allocation matrix** 
					- $(E_1,E_2,\dots,E_m)$: total number of each resource type
					- $C[i,j]=$ number of instances of resource type $R_j$ currently allocated to thread $T_i$
				- **request matrix**
					- $(A_1,A_2,\dots,A_m)$: number of available instances of each resource type
					- $R[i,j]=$ number of instances of resource type $R_j$ requested by thread $T_i$
				- invariant: $\sum_{i=1}^{n} C[i,j] + A_j = E_j$
		- recovery
			- preemption
			- rollback
				- checkpoints
			- procces killing 
	- avoidance
		- resource trajectories
		- safe states
		- **Banker's algorithm**
	- prevention 
