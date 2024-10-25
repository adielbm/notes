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
