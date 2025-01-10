// time O(V+E)
// V --> Vertices
// E --> Edges

function dfs(graph, startNode) {
  let stack = [startNode];
  let visited = new Array(graph.length).fill(false);
  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (!visited[currentNode]) {
      console.log(currentNode); // this give you the result
      visited[currentNode] = true; // age pop korte hoy pore visited true korte hoy
      for (let i = graph[currentNode].length - 1; i >= 0; i--) {
        const neighbour = graph[currentNode][i];
        if (!visited[neighbour]) {
          stack.push(neighbour);
        }
      }
    }
  }
}

//                 0       1      2     3    4
const graph = [[2, 3, 1], [0], [0, 4], [0], [2]];
dfs(graph, 0);
