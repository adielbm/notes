

```js 
// Hamiltonian Path Problem
// Given an adjacency matrix adj of a graph, determine whether the graph has a Hamiltonian path or not.
// time complexity: O(2^N * N^2)
// space complexity: O(N * 2^N)

function Hamiltonian_path(adj)
{
	const N = adj.length; // Number of nodes in the graph
	
	// intialize dp (Dynamic Programming) array N*2^N with 0.
	// dp[i][j]=1 if there's a path visits all nodes in the subset j and ends at i
	var dp = Array.from(Array(N), ()=> Array(1 << N).fill(0)); // space: O(N * 2^N)
  
	// Set all dp[i][(1 << i)] (=dp[i][2^i]) to 1
	for (var i = 0; i < N; i++) dp[i][(1 << i)] = true;

	// Iterate over each subset i of nodes
	for (var i = 0; i < (1 << N); i++) { // time: O(2^N)
		// Iterate over each node j
		for (var j = 0; j < N; j++) { // time: O(N)
    
			// If the node j is included in the current subset i
			if (i & (1 << j)) {
				// Iterate over each node k
				for (var k = 0; k < N; k++) { // time: O(N)
				
					if (i & (1 << k) // if k is in the subset i
						&& adj[k][j] // and there's an edge between k and j
						&& j != k // and j!=k
						&& dp[k][i ^ (1 << j)]) { // and there's a valid HP ending at k with the subset i excluding j (dp[k][i ^ (1 << j)]).
						
						dp[j][i] = true; // Update dp[j][i] to true
						break;
					}
				}
			}
		}
	}

	// for each node i
	for (var i = 0; i < N; i++) {
		if (dp[i][(1 << N) - 1]) // if there's a HP ending at i with all nodes visited (subset 2^N-1 is the set of all nodes)
			return true;
	}

	// Otherwise, return false
	return false;
}
```
