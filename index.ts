// Setup
import express from "express";

const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
	res.send("Hello World!");
});

app.get("/hello", (_, res) => {
	res.send("Whats up? can you hear me?");
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

// Routes

// Linear search
// import { linearSearch } from "./algorithms/search/linear-search";

// app.post("/algos/search/linear", (req, res) => {
// 	const node = req.body;
// 	//console.log(node);
// 	const algoOutput = linearSearch(node);
// 	res.status(200).json(algoOutput);
// });

// Binary search
// import { binarySearch } from "./algorithms/search/binary-search";

// app.post("/algos/search/binary", (req, res) => {
// 	const node = req.body;
// 	console.log(node);
// 	const algoOutput = binarySearch(node);
// 	res.status(200).json(algoOutput);
// });

// // BFS

// // DFS
import { DFS } from "./algorithms/search/dfs-search"

app.post("/algorithms/search/dfs", (req, res) => {
	const {graph, currentVertex, target} = req.body; // this should accept an object
	console.log('sometning osmeting')
	console.log('recieved rquest with:', req.body);
	const algoOutput = DFS(graph, currentVertex, target);
	console.log('sending back sorted array:', algoOutput)
	res.status(200).json(algoOutput); // this will send a sorted array object of type BubbleSortState back
});

// Bubble sort
import { BubbleSort } from "./algorithms/sort/bubbleSort";

app.post("/algorithms/sort/bubble", (req, res) => {
	const node = req.body.array; // this should accept an unsorted array
	console.log('recieved rquest with:', node);
	const algoOutput = BubbleSort(node);
	console.log('sending back sorted array:', algoOutput)
	res.status(200).json(algoOutput); // this will send a sorted array object of type BubbleSortState back
});

// Selection sort
import { selectionSort } from "./algorithms/sort/selectionSort";

app.post("/algorithms/sort/selection", (req, res) => {
	const node = req.body.array;
	console.log(node);
	const algoOutput = selectionSort(node);
	res.status(200).json(algoOutput);
});

// // Insertion sort
// import { insertionSort } from "./algorithms/sort/insertionSort";

// app.post("/algos/sort/insertion", (req, res) => {
// 	const { list } = req.body;
// 	console.log(list);
// 	const algoOutput = insertionSort(list);
// 	res.status(200).json(algoOutput);
// });

// // Merge sort
// import { mergeSort } from "../algorithms/sort/mergeSort";

// app.post("/algos/sort/merge", (req, res) => {
// 	const { list } = req.body;
// 	console.log(list);
// 	const algoOutput = mergeSort(list);
// 	res.status(200).json(algoOutput);
// });

// // Quick sort
// import { quickSort } from "../algorithms/sort/quickSort";

// app.post("/algos/sort/quick", (req, res) => {
// 	const { list } = req.body;
// 	console.log(list);
// 	const algoOutput = quickSort(list);
// 	res.status(200).json(algoOutput);
// });