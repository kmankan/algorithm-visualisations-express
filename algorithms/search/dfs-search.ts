// Define a type for the graph
type Graph<T> = {
  [key: string]: T[]
};

type TraversalStep = 
  | { action: 'visit'; node: string; neighbours: string[] }
  | { action: 'move'; from: string; to: string }
  | { action: 'backtrack'; from: string; to: string };

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
// the return of the dfs search will be either a set of strings or null if the search failed
export function DFS(
  graph: Graph<string>, 
  currentVertex: string, 
  target: string, 
  visited: Set<string> = new Set(),
  traversalHistory: TraversalStep[] = []): TraversalStep[] | null {
  // set initial traversal history
  traversalHistory.push({ action: 'visit', node: currentVertex, neighbours: graph[currentVertex] });
  visited.add(currentVertex);
  // add the currentVertex to the visited array
  visited.add(currentVertex);
  // define the neighbours of the currentVertex
  const neighbours = graph[currentVertex]

  // check if the target has been visited and if it has return the graph traversal so far
  // this is the base case
  if (currentVertex === target) {
    return traversalHistory
  }

  // we loop over the neighbouring nodes of the currentVertex
  for (const neighbour of neighbours) {
    // if the neighbour we are visiting is not already contained in the array, then implement dfs again
    if (!visited.has(neighbour)) {
      // Record move to neighbor
      traversalHistory.push({ action: 'move', from: currentVertex, to: neighbour });
      
      // perform DSF search again on the next neighbour
      const result = DFS(graph, neighbour, target, visited, traversalHistory);
      // if the search finds something return, else return "not found"
      if (result) {
        return result;
      }
      // Record backtrack
      traversalHistory.push({ action: 'backtrack', from: neighbour, to: currentVertex });
    }
  }
  // if we've exhausted all neighbour without finding the target, we return null
  return null
}