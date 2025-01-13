## Alignment Distance

- An **alignment** of two strings $(s,t)$ is a pair of strings $(s',t')$ that meet the following criteria: 
    - $s'$ and $t'$ are formed by inserting `-` (_gap_) characters into $s$ and $t$ respectively.
    - $|s'| = |t'|$ is the **length** of the alignment
    - If we remove all `-` characters from $s'$ and $t'$, we get $s$ and $t$ respectively.
    - A gap cannot appear in the same position in both $s'$ and $t'$. (No consecutive gaps.)
- The **cost** of of an alignment $(s',t')$ is the number of positions in which $s'$ and $t'$ differ, and it is denoted $\mathrm{cost}(s',t')=|\{i:s'_i \neq t'_i\}|$.
- The **alignment distance** between two strings, $\mathrm{ad}(s,t)$, is the cost of their optimal (minimum-cost) alignment.
- $\forall u,v,x,y \in \Sigma^*, \mathrm{ad}(u\circ v, x\circ y) \leq \mathrm{ad}(u,x) + \mathrm{ad}(v,y)$
- $\forall u,v,t \in \Sigma^*, \exists x,y\in \Sigma^*: t = x\circ y \land \mathrm{ad}(u\circ v, t) = \mathrm{ad}(u,x) + \mathrm{ad}(v,y)$
- $\displaystyle\forall u,v,t \in \Sigma^*, \mathrm{ad}(u\circ v, t)=\min_{x\circ y=t}(\mathrm{ad}(u,x)+\mathrm{ad}(v,y))$
- For a string $s=s_1s_2\ldots s_m\in \Sigma^*$, the **inverse** of $s$ is the string $s^R=s_m\ldots s_2s_1$.
- $\forall s,t\in\Sigma^*, \mathrm{ad}(s,t) = \mathrm{ad}(s^R,t^R)$



- #todo
	- optimal sequence alignment
	- sequence alignment
	- Levenshtein distance
	- Needleman-Wunsch algorithm
	- Smith-Waterman algorithm
	- Global alignment
	- Local alignment
## Edit Distance

- The **edit distance** between two strings, $\mathrm{ed}(s,t)$, is the minimum number of edit operations required to transform string $s$ into string $t$. Different definitions of an edit distance use different sets of like operations. 
	- **Levenshtein distance** operations are the removal, insertion, or substitution of a character in the string. (Being the most common metric, the term Levenshtein distance is often used interchangeably with edit distance.)
## Ed = Ad

- _Theorem_: For any two strings $s,t\in\Sigma^*$, we have $\mathrm{ed}(s,t) = \mathrm{ad}(s,t)$.


## Problem

- Given two strings $s$ and $t$:
	- Find the optimal alignment cost $\mathrm{ad}(s,t)$ 
	- Find the optimal alignment itself.
# Algorithm

- Both versions have the same time complexity of $O(m n)$, as both involve iterating over the strings s and t in nested loops to compute the optimal alignment cost.
- Space Complexity:
	- Version 1 requires $O(mn)$ space for the DP table.
	- Version 2 is more space-efficient with a space complexity of $O(n)$, as it only maintains two arrays of size $n + 1$ at any time.
	- The disadvantage of Version 2 we can't find the alignment itself, only the cost.
### Version 1 (Space $O(mn)$)

```python
def AlignmentDistance(s: str, t: str, Cost):
    """
    Compute the optimal alignment cost between two strings using dynamic programming.

    Parameters:
    s (str): The first string.
    t (str): The second string.
        Cost (function): A function that takes two arguments (char1, char2) and returns the
        cost of aligning char1 with char2. Use '-' for gaps.

    Returns:
    int: The optimal alignment cost.
    list[list[int]]: The DP table.
    """
    m, n = len(s), len(t)

    # Initialize the DP table with infinity
    AD = [[float('inf')] * (n + 1) for _ in range(m + 1)]

    # Base cases
    AD[0][0] = 0
    for j in range(1, n + 1):
        AD[0][j] = AD[0][j - 1] + Cost('-', t[j - 1])
    for i in range(1, m + 1):
        AD[i][0] = AD[i - 1][0] + Cost(s[i - 1], '-')

    # Fill the DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            AD[i][j] = min(
                # Match/mismatch
                AD[i - 1][j - 1] + Cost(s[i - 1], t[j - 1]),
                AD[i - 1][j] + Cost(s[i - 1], '-'),           # Gap in t
                AD[i][j - 1] + Cost('-', t[j - 1])            # Gap in s
            )

    # Print the DP table
    # print(AD)

    # Return a tuple containing:
    # i. The optimal alignment cost
    # ii. The DP table
    return int(AD[m][n]), AD


```


```python
def print_alignment(AD, s, t, Cost):
    """
    Print the optimal alignment between two strings s and t with color-coded differences.
    """
    i, j = len(s), len(t)
    aligned_s, aligned_t = [], []

    while i > 0 or j > 0:
        if i > 0 and j > 0 and AD[i][j] == AD[i - 1][j - 1] + Cost(s[i - 1], t[j - 1]):
            aligned_s.append(s[i - 1])
            aligned_t.append(t[j - 1])
            i, j = i - 1, j - 1
        elif i > 0 and AD[i][j] == AD[i - 1][j] + Cost(s[i - 1], '-'):
            aligned_s.append(s[i - 1])
            aligned_t.append('-')
            i -= 1
        else:  # j > 0
            aligned_s.append('-')
            aligned_t.append(t[j - 1])
            j -= 1

    # Reverse the strings and apply coloring
    colors = {'-': "\033[94m", 'mismatch': "\033[95m", 'default': "\033[0m"}
    aligned_s, aligned_t = aligned_s[::-1], aligned_t[::-1]
    for a, b in zip(aligned_s, aligned_t):
        color = colors['-'] if '-' in (
            a, b) else colors['mismatch'] if a != b else colors['default']
        print(f"{color}{a}\033[0m", end='')
    print("")
    for a, b in zip(aligned_s, aligned_t):
        color = colors['-'] if '-' in (
            a, b) else colors['mismatch'] if a != b else colors['default']
        print(f"{color}{b}\033[0m", end='')
    print("")


```

### Version 2 (Space $O(n)$)


```python
def AlignmentDistance(s, t, Cost):
    m, n = len(s), len(t)

    # Allocate ADP and ADC arrays (initializing to infinity)
    AD_P = [float('inf')] * (n + 1)
    AD_C = [float('inf')] * (n + 1)

    # Initialize ADP[0] = 0 (aligning empty sequence with empty sequence)
    AD_P[0] = 0

    # Fill the first row of ADP (align empty s with prefixes of t)
    for j in range(1, n + 1):
        AD_P[j] = AD_P[j - 1] + Cost('-', t[j - 1])

    # Iterate over each character in s
    for i in range(1, m + 1):
        # Initialize the first element of ADC for the current row
        AD_C[0] = AD_P[0] + Cost(s[i - 1], '-')
        
        # Compute the values for ADC[j] for each position j
        for j in range(1, n + 1):
            AD_C[j] = min(
                AD_P[j - 1] + Cost(s[i - 1], t[j - 1]),  # Match or substitution
                AD_P[j] + Cost(s[i - 1], '-'),            # Gap in t
                AD_C[j - 1] + Cost('-', t[j - 1])         # Gap in s
            )
        
        # After processing row i, update ADP to be the current row (ADC)
        AD_P[:] = AD_C[:]

    # The minimum alignment cost is found in ADC[n]
    return AD_C[n]
```

### Example Usage

```python
def example_Cost(a, b):
    # Matching characters
    if a == b:
        return 0
    # Cost of aligning a character with a gap (insertion/deletion)
    elif a == '-' or b == '-':
        return 1
    # Cost of mismatch (replacement)
    else:
        return 1

examples = [("kitten", "sitting"), ("AATGACGATGTGCC",
                                    "AGTGCGAGTTTAC"), ("ros", "horse")]

for s, t in examples:
    cost, AD = AlignmentDistance(s, t, example_Cost)
    print(f"Minimum alignment cost between '{s}' and '{t}': {cost}")
    print_alignment(AD, s, t, example_Cost)
    print("")
```

```
given cost(gap) = 1, cost(mismatch) = 1, cost(match) = 0

----
cost: 3
kitten-
sitting

cost: 6
AATGACGATGTGCC
AGTG-CGAGTTTAC

cost: 3
ro-s-
horse
```


### Divide and Conquer

https://opal.openu.ac.il/mod/combopage/item/book/bookview.php?bookid=60304
https://en.wikipedia.org/wiki/Hirschberg%27s_algorithm


```python

# TODO: check the correctness and complexity

def Cost(a, b):
    """
    Compute the cost of aligning two characters.
    """
    if a == b:  # Matching characters
        return 0
    elif a == "-" or b == "-":  # Gap alignment
        return 1
    else:  # Mismatch
        return 1


def AlignmentDistance(s, t):
    """
    Compute the alignment distance between two strings `s` and `t`.
    Returns the last row of the alignment distance matrix for space efficiency.
    """
    m, n = len(s), len(t)

    # Allocate two rows for the DP table
    AD_P = [float("inf")] * (n + 1)  # Previous row
    AD_C = [float("inf")] * (n + 1)  # Current row

    # Initialize the first row (aligning empty sequence with prefixes of `t`)
    AD_P[0] = 0
    for j in range(1, n + 1):
        AD_P[j] = AD_P[j - 1] + Cost("-", t[j - 1])

    # Compute the DP table row by row
    for i in range(1, m + 1):
        AD_C[0] = AD_P[0] + Cost(s[i - 1], "-")  # Initialize first column
        for j in range(1, n + 1):
            AD_C[j] = min(
                AD_P[j - 1] + Cost(s[i - 1], t[j - 1]),  # Match or mismatch
                AD_P[j] + Cost(s[i - 1], "-"),  # Insert
                AD_C[j - 1] + Cost("-", t[j - 1]),  # Delete
            )
        # Move to the next row
        AD_P, AD_C = AD_C, AD_P

    return AD_P  # The last row of the DP table


def OptimalAlignment(s, t):
    m, n = len(s), len(t)

    # Base case: If either string is very short, compute the alignment directly
    if m == 0:
        return "-" * n, t
    if n == 0:
        return s, "-" * m
    if m == 1 or n == 1:
        # Use AlignmentDistance for simple alignment in base case
        aligned_s, aligned_t = "", ""
        i, j = 0, 0
        while i < m or j < n:
            if i < m and j < n and s[i] == t[j]:
                aligned_s += s[i]
                aligned_t += t[j]
                i += 1
                j += 1
            elif j < n and (i == m or Cost("-", t[j]) < Cost(s[i], "-")):
                aligned_s += "-"
                aligned_t += t[j]
                j += 1
            else:
                aligned_s += s[i]
                aligned_t += "-"
                i += 1
        return aligned_s, aligned_t

    # Decompose s into two halves
    mid = m // 2
    u, v = s[:mid], s[mid:]

    # for each j in {0, ..., n}
    for j in range(n + 1):
        # decompose t into prefix x (of size j) and suffix y (of size n-j)
        x, y = t[:j], t[j:]
        # calc ad of prefix u of s and prefix x of t
        ad_u_x = AlignmentDistance(u, x)
        # calc ad of suffix v of s and suffix y of t
        ad_v_y = AlignmentDistance(v, y)
        # sum the two, and remember the decomposition of t into a node and a node y ◦ x = t that minimized the sum.
        if j == 0 or ad_u_x + ad_v_y < min_sum:
            min_sum = ad_u_x + ad_v_y
            min_j = j

    # Compute an optimal alignment of u and x recursively
    aligned_u, aligned_x = OptimalAlignment(u, t[:min_j])

    # Compute an optimal alignment of v and y recursively
    aligned_v, aligned_y = OptimalAlignment(v, t[min_j:])

    # Return the concatenation of the two alignments
    return aligned_u + aligned_v, aligned_x + aligned_y


# Example usage
s = "ros"
t = "horse"
aligned_s, aligned_t = OptimalAlignment(s, t)
print(aligned_s)

print(aligned_t)

# Alignment distance
print(AlignmentDistance(s, t))
```