
# BNF (Backus-Naur Form) Grammar

Exmaple: Prepositional Language 

- $Q::=P_{1}|P_{2}|\dots|P_{n}|\dots$
- $\varphi::=Q|\lnot\varphi|(\varphi \lor\varphi)|(\varphi \land\varphi)|(\varphi \to\varphi)|(\varphi\leftrightarrow\varphi)$


## MOST language 

- The keyboard is $\Sigma_{most_{n}}=\{ \lnot,\to ,D_{n},(,),P_{1},\dots,P_{i},\dots \}$
	- $D_{n}(\varphi_{1},\varphi_{2},\dots ,\varphi_{n})$ is n-ary connective that defined to true if and only if more then $n/2$ of $\varphi_{1},\dots,\varphi_{n}$ are true


