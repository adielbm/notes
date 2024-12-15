from collections import defaultdict
import sys


class Heap():

    def __init__(self):
        self.array = []
        self.size = 0
        self.pos = []

    def newMinHeapNode(self, v, dist):
        minHeapNode = [v, dist]
        return minHeapNode

    def swapMinHeapNode(self, a, b):
        t = self.array[a]
        self.array[a] = self.array[b]
        self.array[b] = t

    def minHeapify(self, idx):
        smallest = idx
        left = 2 * idx + 1
        right = 2 * idx + 2

        if (left < self.size and self.array[left][1] < self.array[smallest][1]):
            smallest = left

        if (right < self.size and self.array[right][1] < self.array[smallest][1]):
            smallest = right

        if smallest != idx:
            self.pos[self.array[smallest][0]] = idx
            self.pos[self.array[idx][0]] = smallest

            self.swapMinHeapNode(smallest, idx)

            self.minHeapify(smallest)

    def extractMin(self):
        if self.isEmpty():
            return

        root = self.array[0]

        lastNode = self.array[self.size - 1]
        self.array[0] = lastNode

        self.pos[lastNode[0]] = 0
        self.pos[root[0]] = self.size - 1

        self.size -= 1
        self.minHeapify(0)

        return root

    def isEmpty(self):
        return self.size == 0

    def decreaseKey(self, v, dist):
        i = self.pos[v]
        self.array[i][1] = dist

        while i > 0 and self.array[i][1] < self.array[(i - 1) // 2][1]:
            self.pos[self.array[i][0]] = (i - 1) // 2
            self.pos[self.array[(i - 1) // 2][0]] = i
            self.swapMinHeapNode(i, (i - 1) // 2)

            i = (i - 1) // 2

    def isInMinHeap(self, v):
        if self.pos[v] < self.size:
            return True
        return False


class Graph:
    def __init__(self, V):
        self.V = V
        self.graph = defaultdict(list)

    def addEdge(self, src, dest, weight):
        newNode = [dest, weight]
        self.graph[src].append(newNode)

        newNode = [src, weight]
        self.graph[dest].append(newNode)

    def getWeight(self, u, v):
        for node in self.graph[u]:
            if node[0] == v:
                return node[1]
        return None

    def dijkstra(self, src):
        V = self.V
        dist = [float('inf')] * V
        parent = [-1] * V

        minHeap = Heap()
        for v in range(V):
            minHeap.array.append(minHeap.newMinHeapNode(v, dist[v]))
            minHeap.pos.append(v)

        minHeap.pos[src] = src
        dist[src] = 0
        minHeap.decreaseKey(src, dist[src])

        minHeap.size = V

        while not minHeap.isEmpty():
            newHeapNode = minHeap.extractMin()
            u = newHeapNode[0]

            for pCrawl in self.graph[u]:
                v = pCrawl[0]

                if (minHeap.isInMinHeap(v) and dist[u] + pCrawl[1] < dist[v]):
                    dist[v] = dist[u] + pCrawl[1]
                    parent[v] = u
                    minHeap.decreaseKey(v, dist[v])

        return dist, parent

    def secondShortestPath(self, src, target):
        dist, parent = self.dijkstra(src)
        shortest_distance = dist[target]
        second_shortest_distance = float('inf')
        second_parent = None

        for u in range(self.V):
            for v, weight in self.graph[u]:
                # Skip edge if it's part of the shortest path
                if parent[u] == v or parent[v] == u:
                    continue

                # Try excluding this edge and recompute distance
                if dist[u] != float('inf') and dist[v] != float('inf'):
                    potential_dist = dist[u] + weight + dist[v]
                    if shortest_distance < potential_dist < second_shortest_distance:
                        second_shortest_distance = potential_dist
                        second_parent = parent.copy()

        print(f"Second shortest distance: {second_shortest_distance}")
        return second_shortest_distance, second_parent

def print_path_with_weights(graph, parent, target):
    total_weight = 0
    path = []
    current = target
    while current != -1:
        path.append(current)
        current = parent[current]
    path.reverse()

    for i in range(1, len(path)):
        u, v = path[i - 1], path[i]
        weight = graph.getWeight(u, v)
        total_weight += weight
        print(f"{u} ---[{weight}]---> {v}")

    print(f"Total weight: {total_weight}")

# Driver program
graph = Graph(9)
graph.addEdge(0, 1, 4)
graph.addEdge(0, 7, 8)
graph.addEdge(1, 2, 8)
graph.addEdge(1, 7, 11)
graph.addEdge(2, 3, 7)
graph.addEdge(2, 8, 2)
graph.addEdge(2, 5, 4)
graph.addEdge(3, 4, 9)
graph.addEdge(3, 5, 14)
graph.addEdge(4, 5, 10)
graph.addEdge(5, 6, 2)
graph.addEdge(6, 7, 1)
graph.addEdge(6, 8, 6)
graph.addEdge(7, 8, 7)

src = 0
target = 4

print(f"\nShortest path from {src} to {target}:")
dist, parent = graph.dijkstra(src)
print_path_with_weights(graph, parent, target)

print(f"\nSecond shortest path from {src} to {target}:")
second_distance, second_parent = graph.secondShortestPath(src, target)
if second_parent:
    print_path_with_weights(graph, second_parent, target)
else:
    print("No second shortest path exists.")
