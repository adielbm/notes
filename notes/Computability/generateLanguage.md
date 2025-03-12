

```js
function generateLanguage({ Alphabet, States, InitialState, AcceptingStates, Transitions }) {
    const transitionMap = {};
    
    // Store transitions as sets to accommodate multiple next states
    Transitions.forEach(([from, symbol, to]) => {
        if (!transitionMap[from]) transitionMap[from] = {};
        if (!transitionMap[from][symbol]) transitionMap[from][symbol] = new Set();
        transitionMap[from][symbol].add(to);
    });

    function explore(states, path, results, maxDepth = 5) {
        if (path.length > maxDepth) return;
        
        // Check if any current state is an accepting state
        if (states.some(state => AcceptingStates.includes(state))) {
            results.add(path);
        }
        
        for (const symbol of Alphabet) {
            let nextStates = new Set();
            
            // Collect all possible next states for each current state
            for (const state of states) {
                if (transitionMap[state] && transitionMap[state][symbol]) {
                    for (const nextState of transitionMap[state][symbol]) {
                        nextStates.add(nextState);
                    }
                }
            }
            
            if (nextStates.size > 0) {
                explore([...nextStates], path + symbol, results, maxDepth);
            }
        }
    }

    let results = new Set();
    explore([InitialState], "", results);

    let sortedResults = [...results].sort((a, b) => a.length - b.length);
    console.log("Accepted strings:", sortedResults);
}

// Example NFA usage
generateLanguage({
    Alphabet: ["0", "1"],
    States: ["q1", "q2", "q3", "q4", "q5"],
    InitialState: "q1",
    AcceptingStates: ["q5"],
    Transitions: [
		["q1", "0", "q1"],
		["q1", "1", "q1"],
		["q2", "1", "q3"],
		["q1", "0", "q2"],
		["q3", "0", "q4"],
		["q4", "1", "q5"],
		["q5", "0", "q5"],
		["q5", "1", "q5"],
		["q2", "0", "q1"],
		["q4", "0", "q1"],
		["q3", "1", "q1"],
    ]
});

```