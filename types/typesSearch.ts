// dfs
// Define a type for the graph
export type Graph<T> = {
  [key: string]: T[]
};

export type Vertex = string;

export type DFSAnimationProps = {
  graph: Graph<string>,
  currentVertex: string,
  target: string,
  traversalSteps: TraversalStep[]
}

export type TraversalStep = 
  | { action: 'visit'; node: string; neighbours: string[] }
  | { action: 'move'; from: string; to: string }
  | { action: 'backtrack'; from: string; to: string };


// bfs
// Define the Queue interface
export type Queue<T> = {
  enqueue: (item: T) => void;
  dequeue: () => T | undefined;
  peek: () => T | undefined;
  isEmpty: () => boolean;
  size: () => number;
}


