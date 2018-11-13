const PriorityQueue = require('./classes/PriorityQueue');

let p = new PriorityQueue();

p.enqueue('Hello', 2);
p.enqueue('World', 3);
p.enqueue('Oh', 1);

console.log(`Queue contents: ${p.values()}.`);
