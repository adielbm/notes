- A **context-sensitive grammar** is a formal grammar $\displaystyle {\textstyle G=(V,\Sigma,R,S)}$ in which each production rule is either of the form $S\to \varepsilon$ or of the form $\alpha A\beta \to \alpha \gamma \beta$ where:
	- $\displaystyle \alpha ,\beta \in (V\cup \Sigma \setminus \{S\})^*$
	- $\gamma \in (V\cup  \Sigma  \setminus \{S\})^+$
	- $\displaystyle A\in V$
- The term _context-sensitive_ comes from the fact that the production rules are sensitive to the **context** ($\alpha$ and $\beta$) in which a variable $A$ appears. By contrast, in a context-free grammar, the left-hand side of a production is a single variable, with no context surrounding it.
- As defined, the string $\gamma$ is not allowed to be empty. Without this restriction, the resulting grammars become equal in power to unrestricted grammars.
### Linear Bounded Automaton

chapter 5
