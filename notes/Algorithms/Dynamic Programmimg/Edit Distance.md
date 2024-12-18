- The **edit distance** between two strings, $\mathrm{ed}(s,t)$, is the minimum number of edit operations (insertion, deletion, or replacement of a character) required to transform string $s$ into string $t$.
- An **alignment** of two strings $(s,t)$ is a pair of strings $(s',t')$ that meet the following criteria: 
    - $s'$ and $t'$ are formed by inserting `-` (_gap_) characters into $s$ and $t$ respectively.
    - $|s'| = |t'|$. (The strings are the same length.)
    - If we remove all `-` characters from $s'$ and $t'$, we get $s$ and $t$ respectively.
    - A gap cannot appear in the same position in both $s'$ and $t'$. (No consecutive gaps.)
- The **cost** of of an alignment $(s',t')$ is the number of positions in which $s'$ and $t'$ differ, and it is denoted $\mathrm{cost}(s',t')=|\{i:s'_i \neq t'_i\}|$.
- The **alignment distance** between two strings, $\mathrm{ad}(s,t)$, is the cost of their optimal (minimum-cost) alignment.
- _Theorem_: For any two strings $s,t\in\Sigma^*$, we have $\mathrm{ed}(s,t) = \mathrm{ad}(s,t)$.



```python
def alignment_distance(s: str, t: str, cost_fn):
    """
    Compute the optimal alignment cost between two strings using dynamic programming.

    Parameters:
    s (str): The first string.
    t (str): The second string.
        cost_fn (function): A function that takes two arguments (char1, char2) and returns the
        cost of aligning char1 with char2. Use '-' for gaps.

    Returns:
    int: The minimum alignment cost.
    """
    m, n = len(s), len(t)

    # Initialize the DP table with infinity
    AD = [[float('inf')] * (n + 1) for _ in range(m + 1)]

    # Base cases
    AD[0][0] = 0
    for j in range(1, n + 1):
        AD[0][j] = AD[0][j - 1] + cost_fn('-', t[j - 1])
    for i in range(1, m + 1):
        AD[i][0] = AD[i - 1][0] + cost_fn(s[i - 1], '-')

    # Fill the DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            AD[i][j] = min(
                # Match/mismatch
                AD[i - 1][j - 1] + cost_fn(s[i - 1], t[j - 1]),
                AD[i - 1][j] + cost_fn(s[i - 1], '-'),           # Gap in t
                AD[i][j - 1] + cost_fn('-', t[j - 1])            # Gap in s
            )

    # Print the DP table
    # print(AD)

    # Return the final alignment cost
    return int(AD[m][n]), AD


def print_alignment(AD, s, t, cost_fn):
    """
    Print the optimal alignment between two strings s and t with color-coded differences.
    """
    i, j = len(s), len(t)
    aligned_s, aligned_t = [], []

    while i > 0 or j > 0:
        if i > 0 and j > 0 and AD[i][j] == AD[i - 1][j - 1] + cost_fn(s[i - 1], t[j - 1]):
            aligned_s.append(s[i - 1])
            aligned_t.append(t[j - 1])
            i, j = i - 1, j - 1
        elif i > 0 and AD[i][j] == AD[i - 1][j] + cost_fn(s[i - 1], '-'):
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


def example_cost_fn(a, b):
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
    cost, AD = alignment_distance(s, t, example_cost_fn)
    print(f"Minimum alignment cost between '{s}' and '{t}': {cost}")
    print_alignment(AD, s, t, example_cost_fn)
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
