

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
	- $L$ 
	- $\mathbb{Z}^d$ 
	- $\Sigma$ is a finite set of $k$ possible cell states 
	- $N \subset \mathbb{Z}^d$ is an ordered set called the **neighborhood** of $A$
		- $|N|=n+1$
		- $N_i^t$ denotes the neighborhood of cell $i$ at time $t$
		- examples:
			- **von Neumann neighborhood**
			- **Moore neighborhood** ![50](https://upload.wikimedia.org/wikipedia/commons/4/4d/Moore_neighborhood_with_cardinal_directions.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)
	- $\delta:\Sigma^{n+1}\to \Sigma$ is the **transition rule**
		- $\delta(N_i^t)=S_i^{t+1}$ denotes the state of cell $i$ at time $t$




- **universal cellular automaton**

- A state $s$ for which $\delta(s,\dots,s)=s$ is called a **quiescent state**

- synchronous transition



- A configuration at time $t$ is a function


- neighborhood

- steady state


## 2-dimensional automaton

### Conway's Game of Life

- $L=\mathbb{Z}^2$
- $\Sigma=\{0=\text{dead cell},1=\text{live cell}\}$
- neighborhood: [[#Cellular automata|Moore neighborhood]]
- transition rule
	- **birth** (**B3**): A dead cell becomes alive if exactly 3 of its 8 neighbors are alive.
	- **survival** (**S23**): A live cell remains alive if exactly 2 or 3 of its 8 neighbors are alive.
	- **death**: A live cell dies if it has fewer than 2 or more than 3 live neighbors.


- **[Gosper glider gun](https://conwaylife.com/wiki/Gosper_glider_gun)**
- **gun**
- **spaceships** (or **gliders**)
	- **[glider](https://conwaylife.com/wiki/Glider)**
- [**eater**](https://conwaylife.com/wiki/Eater_1)




- patterns:
	- **oscillators** – "a pattern that repeats itself after a fixed number of generations (known as its **period**)"
	- **still life** (or **stable**)
		- may be thought of as an oscillator with period 1

## 1-dimensional automaton

- **1-dimensional automaton**
	- $L=\mathbb{Z}^1$
	- $r$ is the neighborhood radius: the number of cells considered on each side of the current cell.
	- $2r+1$ is the neighborhood size: the total number of cells in the neighborhood, including the current cell.
	- $k^{2r+1}$ is the number of possible neighborhood configurations: each of the $2r+1$ cells can have any of $k$ states
	- $k^{k^{2r+1}}$ is the number of possible transition rule functions: each neighborhood configuration maps to one of $k$ possible next states


### Elementary cellular automata

- **elementary cellular automata** (ECA): one-dimensional cellular automata 
- $\Sigma=\{ 0,1 \},\quad k=2$
- neighborhood: $N=\{-1,0,1\}$, radius $r=1$
- $\delta:\Sigma^3\rightarrow\Sigma$
	- $c_i^{t+1}=\delta(c_{i-1}^t,c_i^t,c_{i+1}^t)$
- there are $2^3=8$ possible neighborhood configurations.
- there are 256 elementary cellular automaton rules, conventionally numbered from 0 to 255.
- $\begin{array}{c|cccccccc} \text{Neighborhood} & 111 & 110 & 101 & 100 & 011 & 010 & 001 & 000\\ \hline \text{Output} & b_7 & b_6 & b_5 & b_4 & b_3 & b_2 & b_1 & b_0 \end{array}$

- **Wolfram code**
	- Class I: homogeneous
	- Class II: periodic
	- Class III: chaotic
	- Class IV: complex


