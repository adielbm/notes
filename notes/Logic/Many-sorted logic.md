# Syntax

## Alphabet

### Non-logical Symbols (Signature)

- **Sorts** (or **Domains**): $D_1, D_2, \ldots, D_n$ (_$n$-sorted_ logic)
    - Each sort is a non-empty set of objects
- **Universe**: $U=\bigcup_{i=1}^n D_i$ is the set of all objects in the universe
- **Function Symbols**: $f_1, f_2, \ldots, f_n$
    - All are unary functions
    - Each function symbol has two sorts associated with it
- **Predicate Symbols**: $R_1, R_2, \ldots, R_n$
    - Each predicate symbol has arity and sorts associated with it
- **Constants Symbols**: $c_1, c_2, \ldots, c_n$
    - Each constant symbol has a sort associated with it

> For simplicity, we assume the language is finite, and we use in unary function symbols

> It is possible for a constant symbol to have more than one sort associated with it, but for simplicity, we assume that each constant symbol has exactly one sort associated with it

### Logical Symbols

- Connectives, Quantifiers, Equality, and Parentheses are the same as in [[Predicate Logic/Syntax#Logical symbols|First-order logic]]
- Variables: For each sort $D$ we have a set of variables $\{v_1^D, v_2^D, \ldots, v_n^D, \ldots\}$. 
    - that means that these variables can only take values from the sort $D$
    - When we have a litle number of sorts, we can use for example $v_1, v_2, \ldots$ for $D_1$ and $V_1, V_2, \ldots$ for $D_2$ and so on, and denote $R(v,V,V,v)$ instead of $R_{D_1,D_2,D_2,D_1}$.

## Language

The language of many-sorted logic is defined by the following grammar:

- **Terms**: $t ::= x \mid c \mid f(t) \mid t = t$
    - where $x$ is a variable, $c$ is a constant symbol, $f$ is a function symbol, and $t$ is a term
- **Atomic Formulas**: $A ::= R(t) \mid t = t$
    - where $R$ is a predicate symbol, and $t$ is a term
- [[Predicate Logic/Syntax#Formulas|Formulas]] and [[Predicate Logic/Syntax#Sentence|sentences]] as in FOL

# Semantics

- [[Predicate Logic/Semantic#Variable Assignment|Variable Assignment]], as in FOL, but with the additional requirement that each variable is assigned a value from its sort
- Interpretation of a terms and formulas is similar to FOL #todo

# Examples

## Real Analysis

- The universe consists of three sorts: 
    - $\mathbb{R}$: the set of real numbers
    - $\mathbb{P}$: the set of subsets of $\mathbb{R}$
    - $\mathbb{F}$: the set of all partial functions from $\mathbb{R}$ to $\mathbb{R}$
- The language:
    - Variable symbols:
        - $v_1, v_2, \ldots, v_n, \ldots$ for $\mathbb{R}$ (or $x, y, z, \ldots$)
        - $V_1, V_2, \ldots, V_n, \ldots$ for $\mathbb{P}$ (or $X, Y, Z, \ldots$)
        - $h_1, h_2, \ldots, h_n, \ldots$ for $\mathbb{F}$ (or $f, g, F, G, \ldots$)
    - Constant symbols: $0,1$
    - Function symbols: $+, -, \cdot$ for elements and pairs of elements of $\mathbb{R}$
    - Predicate symbols: 
        - (order relation) $<$ and $\leq$ for elements of $\mathbb{R}$
        - (membership relation) $\in$ for conections between two sorts. (instead of $R^{\in}(v,V)$ we write $v \in V$)
        - A 3-ary predicate symbol $\text{Apply}(h,x,y)$ for connecting a function $h$ with its domain and codomain (instead of $\text{Apply}(h,x,y)$ we write $h(x)=y$)
            - Note: $h(x)$ is not a term in the language, therefore composition of functions is not straightforward: $h(f(x))=y$ is not a formula in the language #todo 