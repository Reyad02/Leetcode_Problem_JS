// time O(V+E)
// V --> Vertices
// E --> Edges

function bfs(graph, startNode) {
  let visited = new Array(graph.length).fill(false);
  let queue = [startNode];
  visited[startNode] = true; // age visited true korte hoy pore enqueue korte hoy
  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode); // this give you the result

    for (let i = 0; i < graph[currentNode].length; i++) {
      const neighbour = graph[currentNode][i];
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        queue.push(neighbour);
      }
    }
  }
}

const graph = [
  [1, 2],
  [0, 2, 3],
  [0, 1, 4],
  [1, 4],
  [2, 3],
];
bfs(graph, 0);
