

# 

1. $\varphi \equiv \lnot \lnot \varphi$ (known as double negation, or negation elimination)
2. $\varphi \equiv \lnot \psi$ then $\lnot \varphi \equiv \psi$
3. $(\varphi \to \psi) \equiv (\lnot \varphi \lor \psi)$ (material implication)
4. $(\varphi \lor \psi) \equiv (\lnot \varphi \to \psi)$ (material implication)
5. (a) $\lnot(\varphi \to \lnot \psi) \equiv (\varphi \land \psi)$
5. (b) $\lnot(\varphi \to \psi) \equiv (\varphi \land \lnot \psi)$
6. (a) $\lnot(\varphi \lor \psi) \equiv (\lnot \varphi \land \lnot \psi)$ (De Morgan)
6. (b) $(\varphi \lor \psi) \equiv \lnot(\lnot \varphi \land \lnot \psi)$ (De Morgan)
7. (a) $\lnot(\varphi \land \psi) \equiv (\lnot \varphi \lor \lnot \psi)$ (De Morgan)
7. (b) $(\varphi \land \psi) \equiv \lnot(\lnot \varphi \lor \lnot \psi)$ (De Morgan)
8. $(\varphi \lor (\psi \land \theta)) \equiv ((\varphi \lor \psi) \land (\varphi \lor \theta))$ (distributivity)
9. $(\varphi \land (\psi \lor \theta)) \equiv ((\varphi \land \psi) \lor (\varphi \land \theta))$ (distributivity)
10. $(\lnot \varphi \to \lnot \psi) \equiv (\psi \to \varphi)$ (contraposition)
11. $(\varphi \leftrightarrow \psi) \equiv ((\varphi \to \psi) \land (\psi \to \varphi))$ (biconditional)
12. $(\varphi \leftrightarrow \psi) \equiv ((\varphi \land \psi) \lor (\lnot \varphi \land \lnot \psi))$ (exclusive or)

# Claculus Axioms in propositional language ${L_{\to}}$

1. $(\varphi \to (\psi \to \theta))$
2. $(\varphi \to (\psi \land \theta))\to((\varphi \to \psi) \land (\varphi \to \theta))$
3. $(\lnot \varphi \to \lnot \psi)\to(\psi \to \varphi)$

# Additional Claculus Axioms in propositional language $L$

4. (a) $((\alpha \land \beta) \to \alpha)$ (conjunction elimination)
4. (b) $((\alpha \land \beta) \to \beta)$ (conjunction elimination)
5. $(\alpha \to (\beta \to (\alpha \land \beta)))$ (conjunction introduction)
6. (a) $((\beta \to (\alpha \lor \beta))$ (disjunction introduction)
6. (b) $((\alpha \to (\alpha \lor \beta))$ (disjunction introduction)
7. $(\lnot \alpha \to ((\alpha \lor \beta) \to \beta))$ (modus tollens)
8. (a) $((\alpha \leftrightarrow \beta) \to (\alpha \to \beta))$ (biconditional elimination)
8. (b) $((\alpha \leftrightarrow \beta) \to (\beta \to \alpha))$ (biconditional elimination)
9. $((\alpha \to \beta) \land ((\beta \to \alpha) \to (\alpha \leftrightarrow \beta)))$ (biconditional introduction)

# Modus Ponens

$\frac{\varphi,( \varphi \to \psi)}{\psi}$ (modus ponens)

# Additional Axioms in predicate language


| **Axioms of $\forall$**                                                    |                                          |
| -------------------------------------------------------------------------- | ---------------------------------------- |
| $\forall x \varphi\to \varphi[t/x]$                                        | if no variable occur in $t$ become bonud |
| $\forall x(\varphi\to \psi)\to(\varphi\to \forall x\psi)$                  | if $x$ is not occur freely in $\varphi$  |


- $\frac{\varphi}{\forall x\varphi}$ (generalization)

# Natural Deduction

- $\frac{\varphi \alpha}{\exists x \varphi x}$
- $\frac{\exists x \varphi x}{\varphi \alpha}$ 
- $\frac{\varphi x}{\forall y \varphi y}$ (where $x$ is a variable, and $y$ is not free in $\varphi x$ #todo)
- (Universal instantiation) $\frac{\forall y \varphi y}{\varphi a}$ (where $y$ is a variable, and $a$ is a constant)

# 

- $(\forall x \varphi)\leftrightarrow (\lnot \exists x \lnot \varphi)$
- $(\lnot \forall x \varphi)\leftrightarrow (\exists x \lnot \varphi)$
- $(\exists x \varphi)\leftrightarrow (\lnot \forall x \lnot \varphi)$
- $(\lnot \exists x \varphi)\leftrightarrow (\forall x \lnot \varphi)$

where $x$ is not free in $\varphi$, then the following formulas are logical tauatologies:

- $[(\forall x \varphi) \land \psi] \leftrightarrow \forall x (\varphi \land \psi)$
- $[(\forall x \varphi) \lor \psi] \leftrightarrow \forall x (\varphi \lor \psi)$
- $[(\exists x \varphi) \land \psi] \leftrightarrow \exists x (\varphi \land \psi)$
- $[(\exists x \varphi) \lor \psi] \leftrightarrow \exists x (\varphi \lor \psi)$

- $\forall x (\psi \to \varphi) \leftrightarrow [\psi \to (\forall x \varphi)]$
- $\exists x (\psi \to \varphi) \leftrightarrow [\psi \to (\exists x \varphi)]$
- $\forall x (\varphi \to \psi) \leftrightarrow [(\exists x \varphi) \to \psi]$
- $\exists x (\varphi \to \psi) \leftrightarrow [(\forall x \varphi) \to \psi]$

the first four formulas are called quantifier distributivity laws.
the last four formulas are called quantifier exchange laws.