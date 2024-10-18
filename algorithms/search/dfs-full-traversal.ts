// Define a type for the graph
type Graph<T> = {
  [key: string]: T[]
};

// Example usage
const graph: Graph<string> = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

type Vertex = string;


// the graph has the following inputs: 
// - a graph
// - starting vertex
// - a data structure for storing visited nodes -> we define its default value in the parameter as well as an empty set

export default function dfs(graph: Graph<string>, currentVertex: string, visited: Set<string> = new Set()) {
  // add the currentVertex to the visited array
  visited.add(currentVertex);
  // define the neighbours of the currentVertex
  const neighbours = graph[currentVertex]

  // we loop over the neighbouring nodes of the currentVertex
  for (const neighbour of neighbours) {
    // if the neighbour we are visiting is not already contained in the array, then implement dfs again
    if (!visited.has(neighbour)) {
      dfs(graph, neighbour, visited)
    }
  }
  return visited;
}

console.log(dfs(graph, "A"))