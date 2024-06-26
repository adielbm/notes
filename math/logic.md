# Q1

- Proof Calculus $D$
    - $\{\rightarrow, \leftrightarrow, \}$
    - Logical Axioms
        - $\varphi_1 \rightarrow \varphi_1$
    - Rules of Inference
        - $\frac{\varphi_1\rightarrow\varphi_1, \varphi_2\rightarrow\varphi_2}{\varphi_1\leftrightarrow\varphi_2}$

> is this true: "for all $\varphi$, if $\vdash_{D} \varphi$ then $\models_{D} \varphi$"

> is this true: "for all $\varphi$, if $\models_{D} \varphi$ then $\vdash_{D} \varphi$"

> is the proposition $((q\rightarrow q)\leftrightarrow p)$ provable in the proof calculus $D$?

# Q2

- Proof Calculus $D$
    - $\{\lnot, \lor \}$
    - Logical Axioms
        - $(p\lor\lnot p)$ (where $p$ is a propositional variable)
    - Rules of Inference
        - $\frac{\varphi_1\lor\varphi_2}{\varphi_2}$
        - $\frac{\varphi_1\lor\varphi_2}{\varphi_1}$

> is this true: "for all $\varphi$, if $\vdash_{D} \varphi$ then $\varphi$ is satisfiable but not a tautology"

> is this true: "for all $\varphi$, if $\Sigma\vdash\varphi$ where $\Sigma$ is a consistent set of formulas, then $\varphi$ is satisfiable but not a tautology"

> is this true: "for all $\varphi$, if $\Sigma\nvDash\varphi$ then $\Sigma\vdash\varphi$"

# Q3

- Proof Calculus $D$
    - $\{\lnot, \rightarrow, \}$
    - Logical Axioms
        - $(\varphi\rightarrow(\psi\rightarrow\varphi))$
        - $((\varphi\rightarrow(\psi\rightarrow\theta))\rightarrow((\varphi\rightarrow\psi)\rightarrow(\varphi\rightarrow\theta)))$
        - $((\lnot\varphi\rightarrow\lnot\psi)\rightarrow(\psi\rightarrow\varphi))$
    - Rules of Inference
        - $\frac{\alpha\rightarrow\beta, \alpha\rightarrow\lnot\beta}{\lnot\alpha}$

> is this true: "for all $\varphi$, if $\vdash_{D} \varphi$ then $\models_{D} \varphi$"

> given a consistent set of formulas $\Sigma$, is it true that: "for all $\varphi$, if $\Sigma\vdash\varphi$ then $\Sigma\models\varphi$"

> is the proof calculus $D$ complete?

> is the proposition $\lnot(p\rightarrow((q\rightarrow t)\rightarrow p))$ provable in the proof calculus $D$?