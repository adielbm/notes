

# syllabus


- **2: Cellular Automata** (Skip: 2.6)
- **3: Evolutionary Computation** (Skip: 3.7)
- **4: Artificial Neural Networks**
    - 4.1 Biological Background
    - 4.2 Learning _(originally assigned last, after 4.6.8)_
    - 4.3.1 General Structure of Artificial Neural Networks
    - 4.6 Associative Memory, only:
        - 4.6.7 Application of a Hopfield Network
        - 4.6.8 Further Uses of the Hopfield Network
- **5: Molecular Computation** (skip: 5.2.3)


---


# Cellular automata

- A $d$-dimensional **cellular automaton** $A$ is a 4-tuple $(L,\Sigma,N,\delta)$ where:
	- $L$ is tghe 
	- $\mathbb{Z}^d$ 
	- $\Sigma$ is a finite set of $k$ possible cell states 
	- $N \subset \mathbb{Z}^d$ is an ordered set called the **neighborhood** of $A$
		- $|N|=n+1$
		- $N_i^t$ denotes the neighborhood of cell $i$ at time $t$
		- examples:
			- **von Neumann neighborhood**
			- **Moore neighborhood**
	- $\delta:\Sigma^{n+1}\to \Sigma$ is the **transition rule**
		- $\delta(N_i^t)=S_i^{t+1}$ denotes the state of cell $i$ at time $t$



- A state $s$ for which $\delta(s,\dots,s)=s$ is called a **quiescent state**

- synchronous transition



- A configuration at time $t$ is a function


- neighborhood

- steady state
- oscillators

- **Game of Life**
- **1-dimensional automaton**
	- $r$ is the neighborhood radius: the number of cells considered on each side of the current cell.
	- $2r+1$ is the neighborhood size: the total number of cells in the neighborhood, including the current cell.
	- $k^{2r+1}$ is the number of possible neighborhood configurations: each of the $2r+1$ cells can have any of $k$ states
	- $k^{k^{2r+1}}$ is the number of possible transition rule functions: each neighborhood configuration maps to one of $k$ possible next states
