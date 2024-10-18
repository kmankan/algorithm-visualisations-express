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

// Define the Queue interface
type Queue<T> = {
  enqueue: (item: T) => void;
  dequeue: () => T | undefined;
  peek: () => T | undefined;
  isEmpty: () => boolean;
  size: () => number;
}


const createQueue = () => {
  const queue:string[] = [];
  return {
    enqueue: (item: any) => queue.push(item), // add a vertice to the queue
    dequeue: () => {
      const removeFirst = queue.shift()
      console.log('removed', removeFirst, 'from queue, added', removeFirst, 'to current vertex')
      return removeFirst
    }, // remove the first item from the array
    firstInQueue: () => queue[0], // check the first item in the queue
    isEmpty: () => queue.length === 0,
    sizeOfQueue: () => queue.length,
    showQueue: () => console.log('current queue', queue),
    includes: (item: any) => queue.includes(item), // boolean return to check if item is in queue
    getQueue: () => [...queue] // get a copy of the queue
  }
}

const bfs = (graph: Graph<string>, startingVertex:string) => {
  // we need to create a queue
  const q = createQueue();
  const visited: string[] = [];
  let currentVertex = startingVertex;

  // add the vertices adjacent to the current vertex
  console.log('current vertex:', currentVertex)
  // initialise the queue with adjacent vertices of the root starting vertex
  graph[currentVertex].map((neighbour) => {
    q.enqueue(neighbour)
  });
  q.showQueue();

  while(!q.isEmpty()) {
    // access a vertex of the graph and add all of its adjacent vertices to the queue
    graph[currentVertex].map((neighbour) => {
      // add the vertices that are adjacent to the starting vertex to the queue
      if (!visited.includes(neighbour) && !q.includes(neighbour)) {
        q.enqueue(neighbour);
        console.log('adding',neighbour, 'to queue')
      }
    })
    // take the current vertex, and put it in visited
    visited.push(currentVertex);
    // take the first vertex in the queue and make it the current vertex
    currentVertex = q.firstInQueue();
    // remove the first vertex from the queue
    console.log('visited:', visited)
    q.dequeue();
    if (q.isEmpty()) {
      console.log('queue is empty')
      visited.push(currentVertex)
      console.log('current vertex:', currentVertex)
      console.log('visited:', visited)
      console.log('breadth first search finished')
      break
    }
    console.log('current vertex:', currentVertex)

    q.showQueue();
    console.log('adding new adjacent nodes to queue...')
  }
  console.log('finished: ', visited)
  return visited
}

bfs(graph, "A")