### Language

The language of the Propositional Logic:

- Logical Connectives
	- Unary connective
		- **negation**, (or **logical not**, **logical complement**) $\lnot$
	- Binary connectives (notation: we use in $@$ for any binary connective)
		- **Logical disjunction** $\lor$
		- **Logical conjunction** $\land$
		- **Material conditional** (or **material implication**) $\rightarrow$
		- **logical biconditional** (or **material biconditional**) $\leftrightarrow$ 
	- $n$-ary connective




 - The keyboard $\Sigma_{n}=\{ P_{1},\dots,P_{n},\lnot,\lor,\land,\rightarrow,\leftrightarrow,(,) \}$ is the **propositional keyboard** (המקלדת הפסוקית) 
 - The keyboard $\Sigma_{\infty}=\{ \lnot,\lor,\land,\rightarrow,\leftrightarrow,(,),P_{1},\dots,P_{n},\dots \}$ (המקלדת המלאה)
 - 
	 - Therefore, for all $n$ we have, $\Sigma_{n}\subset \Sigma_{n+1}\subset \Sigma_{\infty}$


- השפה הפסוקית (המלאה) 
	- Recursive definition (הגדרה ברקורסיה)
		- A string with one symbol that is an elementary proposition is a proposition
		- Any proposition preceded by $¬$ is a proposition
		- Any two propositions can be made into another proposition by writing one of these symbols between them, $∧, ∨, →, ↔$ and enclosing the result in parentheses
	- הגדרה מדורגת, אינדוקציה טבעית
		- $E_{0}$ is the set of of **elementary propositions** with one symbol
		- Given $E_{n-1}$ is defined: $E_{n}$ is the set of all strings in $E_{n-1}$ in additional all strings $(\varphi\land\psi)$, $(\varphi\lor\psi)$, $(\varphi\rightarrow\psi)$, and $(\varphi\leftrightarrow\psi)$ for which $\psi$ and $\varphi$ are in $E_{n-1}$
		- A string is called a **proposition** if and only if, it is in one of the sets $E_{n}$ 
		- Depth:
			- The **depth** of a proposition $\varphi$, denoted by $d(\varphi)$, is the smallest number $n$ such that $\varphi\in E_{n}$ 
			- A proposition $\varphi$ is an elementary proposition, if and only if, $d(\varphi)=0$
			- Given a proposition φ, we define its depth to be 1 + the length of the longest path of its parse tree
			- $d(P)=0$ for each elementary proposition $P$, and $d(\lnot\varphi)=d(\varphi)+1$, and $d((\varphi @ \psi))=\max(d(\varphi),d(\psi))+1$ for each binary connective @ and propositions $\varphi$ and $\psi$.


- Theorem 2.1
	- Let $\mathbf{R}$ be a property of some (or all) the strings. Given:
		- Every elementary proposition has the property $\mathbf{R}$
		- If a proposition $\varphi$ has the property $\mathbf{R}$ then $\lnot\varphi$ has the property $\mathbf{R}$ as well
		- For each binary connective @, if $\varphi$ and $\psi$ has the property $\mathbf{R}$, then $(\varphi{@}\psi)$ has the property $\mathbf{R}$ as well
	- Then, every proposition has the property $\mathbf{R}$


- Parentheses
	- Every proposition is parentheses balanced: the number of left parentheses equals the number of right parentheses.
	- Let $S$ be a string representing a proposition. 
		- At any prefix, the number of left parentheses is greater than or equal to the number of right parentheses
		- At any suffix, the number of right parentheses is greater than or equal to the number of left parentheses
	- Every binary connective in a proposition sees more left parentheses to its left (and more right parentheses to its right).

### Unique Readability

The propositions are naturally divided into three types:

- Elementary propositions
- Negation propositions, of the form $\lnot\alpha$, where $\alpha$ is a proposition. In other words, a string whose first symbol is the negation connective, and the rest of the string is also a proposition.
- Compound propositions, which are of the form $(\alpha{@}\beta)$, where $\alpha$ and $\beta$ are propositions.

- The Unique Readability Theorem (2.2)
	- Every proposition belongs to one of the three types we described, and to only one.
	- Every compound proposition is of the form $(\alpha{@}\beta)$ for some connective $@$ and for a pair of single propositions, $\alpha$ and $\beta$. 
		- The position of this connective in the string $(\alpha{@}\beta)$ is characterized by the following: after removing the outer parentheses, it is the unique binary connective in the string $\alpha{@}\beta$ such that the segment to its left has an equal number of left and right parentheses (any other binary connective before or after it has an excess of left parentheses to its left.)


- In a negation proposition $\lnot{\alpha}$, the connective $\lnot$ is called the **main connective** of the proposition and $\alpha$ is called the **main component** of the proposition
- In a compound proposition, $(\alpha{@}\beta)$, the connective $@$ is called the **main connective** of the proposition and $\alpha$ and $\beta$ are called the **main components** of the proposition



- (q2.6) A proper prefix of a proposition is not a proposition


## Structure Tree 

The unique readability theorem provides us with an algorithm that, given a string of propositional keyboard symbols, does the following:

1. Determines whether the string is a proposition.
2. If the string is a non-elementary proposition, the algorithm finds the main connective and main components.
3. As long as the components are not elementary propositions, the algorithm continues to analyze them in the same way.
4. The algorithm presents the analysis result as a tree where the given proposition's root appears, all the sub-propositions of the given proposition are written in nodes, and the branches of each node are the main components of the proposition at that node.

### Algorithm

Given a string $\alpha$ of propositional keyboard symbols, we write it at the top of the page. This is the **root** of the structure tree, or alternatively the node at level 0 of the tree.

- If $\alpha$ is a single symbol, which is the name $P_{i}$ of an elementary proposition, the analysis is complete: $\alpha$ is indeed a proposition, and the trivial tree, with its root also a leaf, is the structure tree of the proposition.
- Otherwise, if $\alpha$ starts with a negation symbol, meaning there is a string $\beta$ such that $\beta=\lnot{\alpha}$, we write $\beta$ below $\alpha$. $\beta$ is found in the next level of the tree, at level 1, and since it is a product of the next-level node, it is called a child of node $\alpha$. (Recall that according to the definition of propositions: $\alpha$ is a proposition if and only if $\beta$ is a proposition.)
- Otherwise, if the first symbol is a left parenthesis, and the last symbol is a right parenthesis, meaning there is a string $\beta$ such that $\alpha=(\beta)$, then according to the unique readability theorem, $\alpha$ is a proposition if and only if there are propositions $\varphi$ and $\psi$ such that $\beta=\varphi@\psi$, and $\varphi$ is the unique substring with the same number of left and right parentheses followed by a binary connective symbol.
	- Therefore: we remove the outer parentheses and look for a binary connective where the segment from its left has an equal number of both types of parentheses. 
		- If none is found, the string $\alpha$ is not a proposition. 
		- If we find such a segment, then $\beta$ is of the form $\gamma@\delta$, and $\alpha$ is a proposition if and only if $\delta$ and $\gamma$ are propositions. We write below $\alpha$, side by side, the two components $\delta$ and $\gamma$. In this case, there will be two nodes at level 1, $\delta$ and $\gamma$. (Again: $\alpha$ is a proposition if and only if its two children are propositions.)
	- This exhausts the possibilities for $\alpha$ to be a proposition. We complete this step of the algorithm by determining:
- Otherwise, $\alpha$ is not a proposition


We described a step in the algorithm that confirms whether the string is a proposition (case A), or not a proposition (case D), or replaces the string with shorter sub-strings (one or two) so that the original string is a proposition if and only if the substituted sub-strings are propositions.

We handle all nodes of the tree at the next level as we did with the root. If it turns out that one of the nodes is not a proposition, then all its ancestors in the tree, including the root $\alpha$, are not propositions. If all the strings at the current level are propositions, then so are all their ancestors down to the root. For some nodes, this may depend on their children, and for the children - on the children's children, and we will continue to analyze and grow the tree.

At each level (layer in the tree), the descendants may multiply, but each node is a shorter string than its parent, and therefore the number of generations a string can have is finite (it is easy to see that the number of generations does not exceed the number of connectives in the string).

If the treatment ends without finding $\alpha$ to be a proposition, then all the leaves of the tree (all the nodes without children) are elementary propositions, and all their parents, grandparents, and predecessors up to the earliest ancestor are propositions.

The tree we have grown indicates that it is a proposition. The tree is called the structure tree of the proposition, as it provides a complete description of how the proposition is built systematically from simpler propositions.


```c
function build_structure_tree(alpha):
    // Case A: alpha is a single symbol
    if is_elementary_proposition(alpha): 
		// Return a tree with alpha as the root
        return Tree(alpha)  
    
    // Case B: alpha starts with a negation symbol
    else if starts_with_negation(alpha):  
        beta = get_negation_component(alpha)
        beta_tree = build_structure_tree(beta)
        // Return a tree with alpha as root and beta_tree as its child
        return Tree(alpha, beta_tree)  
    
    // Case C: alpha is enclosed in parentheses
    else if is_enclosed_in_parentheses(alpha):  
        beta = get_inner_component(alpha)
        gamma = get_outer_component(alpha)
        phi = get_left_component(beta)
        psi = get_right_component(beta)
        
        // Case C.1: beta is of the form phi @ psi
        if is_binary_connective(phi):  
            phi_tree = build_structure_tree(phi)
            psi_tree = build_structure_tree(psi)
             // Return a tree with alpha as root and phi_tree and psi_tree as its children
            return Tree(alpha, phi_tree, psi_tree) 
        else:
	        // If phi is not a binary connective, alpha is not a proposition
            return "Not a proposition"  
            
    // Case D: alpha does not match any known pattern for proposition
    else:
        return "Not a proposition"  


```

___

## Structural Induction

### משפט ההגדרה באינדוקציה מבנית (2.3)

- (informal version) We can define function from the set of propositions to a set $A$
	- Define $f(e)$ for each elementary proposition $e$
	- Define $f(\lnot{\psi})$ (by the value of $f(\psi)$ given exists)
	- Define $f(\psi @\theta )$ for each binary connective $@$. (by the values of $f(\psi)$ and $f(\theta)$  given exist)

- (formal version) Let $f_{e}$ a function from the set of elementary propositions to the set $A$, and let $C_{\lnot}(x):A\to A$ a function, and for each binary contective $@$ let $C_{@}(x,y):A \times A\to A$, then, there only one function $f$ from the set of elementary propositions to the set $A$, such that:
	- if $\varphi$ is an elementary proposition, then $f(\varphi)=f_e(\varphi)$
	- if $\varphi=\lnot\psi$, then $f(\varphi)=C_{\lnot}(f_{e}(\psi))$
	- if $\varphi=(\psi @ \theta)$ then $f(\varphi)=C_{@}(f(\psi),f(\theta))$

### לוקליות ההגדרה באינדוקציה (2.4)

- Let $L_{1}$ and $L_{2}$ be proportional languages (possibly the same), and let $\varphi$ be a proposition in both (and therefore the elementary propositions in $\varphi$ are in both languages). and let $A$ be a set. and let $F_{1}:L_{1}\to A$ and $F_{2}:L_{2}\to A$ functions defiend in structural Induction, such that, 
	- (1.) the functions $C_{\lnot}:A\to A$ and $C_{@}:A \times A\to A$ in the function defintions of $F_{1}$ and $F_{2}$ are the same.
	- (2.) $F_{1}(Q)=F_{2}(Q)$ for each elementary proposition $Q$ in the string $\varphi$.
	- Then: $F_{1}(\varphi)=F_{2}(\varphi)$.



___


- (2.5) $\psi$ is a **subproposition** of $\varphi$ if and only if it is substring of $\varphi$ which is also a proposition
	- (2.6) Let $\varphi$ and $\theta$ propositions such that $\theta$ is also substring of $\varphi$, i.e. there exist strings $\alpha$ and $\beta$ such that $\varphi=\alpha \theta \beta$. let $\psi$ be a proposition. let $\varphi '$ the string by replacing the substring $\theta$ in $\psi$ such that $\varphi'=\alpha \psi \beta$. then $\varphi'$ is also a proposition.


## Formation Sequence

A formation Sequence is #todo 

## Summary 

- Necessary and sufficient conditions for a string to be a proposition
	- It is a proposition
	- It is construct from elementary proposition and connectives according to the allowed construction rules
	- it is in one of the sets $E_{n}$
	- It has a structure tree
	- It has a formation sequence


