### ממן 13 - אלגו 25א

___
# שאלה 1 


- הגדרת המערך  
	- נגדיר מערך `dp` בגודל $n \times n$.  
	- `dp[i][j]` = העלות המינימלית להגיע לנקודה $(i, j)$ מהנקודה $(1, 1)$.  
	- for each $i$,  $\mathrm{dp}[i][0] =\mathrm{dp}[i-1][0] + c(i, 0)$  
	- for each $i$, $\mathrm{dp}[0][i] =\mathrm{dp}[0][i-1] + c(0, i)$  

- נוסחת הנסיגה  
	- $dp[i][j] = c(i, j) + \min\begin{cases} dp[i - 1][j - 1] & \text{if } i > 1 \text{ and } j > 1 \\ dp[i - 1][j] & \text{if } i > 1 \\ dp[i][j - 1] & \text{if } j > 1 \end{cases}$  

- אתחול המערך  
	- `dp[1][1] = c(1, 1)`  

- עדכון המערך  
	- נריץ שתי לולאות מקוננות, אחת עבור $i$ והשנייה עבור $j$.  

- יעילות  
	- האלגוריתם פועל בזמן של $\Theta(n^2)$ (שתי לולאות מקוננות).  
	- סיבוכיות המקום גם $\Theta(n^2)$ (מערך בגודל $n \times n$).  

מצורף קוד שהרצתי עם דוגמה (שעובדת, אם כי זו כמובן זו לא הוכחה)

```python
def min_path_cost(grid: List[List[int]]) -> int:
    # grid is a n x n array in which grid[i][j] represents the cost of entering cell (i, j).
    n = len(grid)

    # initialize dp as a n x n array
    # dp[i][j] represents the minimum cost of path from (0, 0) to (i, j).
    dp = [[0] * n for _ in range(n)]
    dp[0][0] = grid[0][0]
    
    for i in range(1, n):
        dp[0][i] = dp[0][i - 1] + grid[0][i]
        dp[i][0] = dp[i - 1][0] + grid[i][0]
        
    for i in range(1, n):
        for j in range(1, n):
            dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1]
                           [j], dp[i][j - 1]) + grid[i][j]

    return dp[-1][-1]

# test
grid = [[1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]]
print(min_path_cost(grid))  # 5    (1 -> 1 -> 2 -> 1)
```


# שאלה 2

הגדרת המערך: $\text{dp}[j][k]$ הוא המאמץ המינימלי להגיע למלון $j$ תוך $k$ ימים.
$\text{dp}[0][0] = 0$
$\text{dp}[j][0] = \infty$ לכל $j > 0$

- $\forall k > 0$ and $k<t$
	- $\forall j,i>0$ 
		- if $i < j$
		    - $\text{dp}[j][k] = \min(\text{dp}[j][k], \text{dp}[i][k-1] + (p_j - p_i)^2 )$


# שאלה 4 

במקום הגרסה הרגילה:

```
for k from 1 to |V|
    for i from 1 to |V|
        for j from 1 to |V|
            dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
```

נוכל לעשות משהו כמו:

```
for k from 1 to |V|
    for i from 1 to |V|
        for j from 1 to |V|
            dist[i][j] = min(
	            dist[i][j], 
	            dist[i][k] + dist[k][j],
	            dist[i][k+1] + dist[k+1][j],
	            dist[i][k] + dist[k][k+1] + dist[k+1][j]
	            )
```


___

 תודה רבה!