# 1. Linear equations systems

| Linear equations systems    |       | מערכת משוואות לינארית     |
| --------------------------- | ----- | ------------------------- |
| Elementary Row Operations   |       | שינוי אלמנטרי, פעולת שורה |
| row equivalent matrix       |       | מטריצה שקולת שורה         |
| Row echelon form            |       | צורה מדורגת               |
| leading entry               |       | איבר פותח                 |
| free variable               |       | משתנה חופשי               |
| leading variable            |       | משתנה קשור                |
| Reduced row echelon form    |       | צורה מדרגות קנונית        |
| Homogeneous system          |       | מערכת הומוגנית            |
| Consistent system           |       | מערכת עקבית               |
| Coefficient matrix          |       | מטריצת המקדמים            |
| Augmented matrix            |       | מטריצה מורחבת             |
| identity matrix of size $n$ | $I_n$ | מטריצת היחידה מסדר $n$    |
| Main diagonal               |       | אלכסון ראשי               |
| Square matrix               |       | מטריצה ריבועית            |
| zero row                    |       | שורת אפס                  |


# Vector space (2,7,8)

| vector space (linear space)       | **מרחב וקטורי** (מרחב ליניארי) | $F^n$                                                                                                                                                                                                          |
| --------------------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vector addition                   | חיבור וקטורים                  | $\mathbf{a}+\mathbf{b}=(a_1+b_1,a_2+b_2,\ldots,a_n+b_n)$                                                                                                                                                       |
| Zero Vector                       | וקטור האפס                     | $\mathbf{0}=(0,\ldots,0)$                                                                                                                                                                                      |
| Scalar multiplication             | כפל בסקלר                      | $t\mathbf{a}=(ta_1,ta_2,\ldots,ta_n)$                                                                                                                                                                          |
| Dot product (or *scalar product*) | מכפלה סקלרית                   | $\mathbf{\color{red}a}\cdot\mathbf{\color{blue}b}=\sum_{i=1}^n {\color{red}a}_i{\color{blue}b}_i={\color{red}a}_1{\color{blue}b}_1+{\color{red}a}_2{\color{blue}b}_2+\cdots+{\color{red}a}_n{\color{blue}b}_n$ |
| parametric form                   | הצגה פרמטרית                   |                                                                                                                                                                                                                |
| Linear combination                | צירוף לינארי                   | $a_1 \mathbf v_1 + a_2 \mathbf v_2 + a_3 \mathbf v_3 + \cdots + a_n \mathbf v_n$                                                                                                                               |
| Linear independence               | אי תלות לינארית                |                                                                                                                                                                                                                |
| Linear span                       | קבוצה פורשת                    |                                                                                                                                                                                                                |
| Basis                             | בסיס                           | $B\subseteq{F^{n}}$ is basis, if is **linear independence**, and **spanning set** of $F^{n}$                                                                                                                   |
| Standard basis                    | בסיס סטנדרטי                   |                                                                                                                                                                                                                |
|                                   | בסיס סדור                      |                                                                                                                                                                                                                |
| direct sum of subspaces           | סכום ישר של תת מרחבים          |                                                                                                                                                                                                                |
| Coordinate vector                 | וקטור קואורדינטות              |                                                                                                                                                                                                                |
| null space of a matrix            | מרחב האפס של מטריצה            |                                                                                                                                                                                                                |
| eigenvalue                        | ערך עצמי                       |                                                                                                                                                                                                                |
| eigenvector                       | וקטור עצמי                     |                                                                                                                                                                                                                |
| eigenspace                        | מרחב עצמי                      |                                                                                                                                                                                                                |
| algebraic multiplicity            | ריבוי אלגברי                   |                                                                                                                                                                                                                |
| geometric multiplicity            | ריבוי גיאומטרי                 |                                                                                                                                                                                                                |
| norm                              | נורמה של וקטור                 |                                                                                                                                                                                                                |
|                                   |                                |                                                                                                                                                                                                                |

# 3 - Matrices

| Matrix                 | מטריצה               |      |
| ---------------------- | -------------------- | ---- |
| Matrix addition        | חיבור מטריצות        |      |
| Matrix multiplication  | כפל מטריצות          |      |
| Row vector (matrix)    | וקטור (מטריצת) שורה  |      |
| Column vector (matrix) | וקטור (מטריצת) עמודה |      |
| Transpose              | שחלוף                |      |
| Main diagonal          | אלכסון ראשי          |      |
| Antidiagonal           | אלכסון משני          |      |
| Symmetric matrix       | מטריצה סימטרית       |      |
| Square matrix          | מטריצה ריבועית       |      |
| Identity matrix        | מטריצת היחידה        | $I$  |
| Scalar matrix          | מטריצה סקלרית        | $tI$ |
| Commuting matrix       | מטריצה מתחלפת        |      |
| diagonal matrix        | מטריצה אלכסונית      |      |
| Invertible matrix      | מטריצה הפיכה         |      |
| elementary matrix      | מטריצה אלמנטרית      |      |
| transition matrix, ()  | מטריצת המעבר         |      |
| Diagonalizable matrix  | מטריצה לכסינה        |      |
| Matrix similarity      | דמיון מטריצות        |      |

# 6 - Complex numbers

## Polynomial

| Polynomial                   | פולינום                    |
| ---------------------------- | -------------------------- |
| The degree of a polynomial   | הדרגה (המעלה) של פולינום   |
| Polynomial long division     | חלוקת פולינומים עם שארית   |
| the leading term             |                            |
| the leading coefficient      | המקדם העליון, המקדם המוביל |
| the zero polynomial          | פולינום האפס               |
| monic polynomial             | פולינום מתוקן              |
| Factorization of polynomials | פירוק לגורמים              |
|                              |                            |

### Root of a polynomial

| zero, root                             | שורש                     |
| -------------------------------------- | ------------------------ |
| Fundamental theorem of algebra         | המשפט היסודי של האלגברה  |
| Multiplicity of a root of a polynomial | ריבוי של שורש של פולינום |
| simple root                            | שורש פשוט                |
| multiple root                          | שורש מרובה               |

### Derivative of polynomial


| Derivative      | נגזרת |
| --------------- | ----- |
| differentiation | גזירה |
|                 |       |
|                 |       |


___

#### Additional material

It's not study in the course

- Cross product - מכפלה וקטורית
	- $\displaystyle  \mathbf {a} \times \mathbf {b} =\|\mathbf {a} \|\|\mathbf {b} \|\sin(\theta )\,\mathbf {n}$