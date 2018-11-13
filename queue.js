const Queue = require('./classes/Queue');

let q = new Queue();

q.enqueue(1);
console.log(`Queue contents: ${q.values()}.`);

q.enqueue(2);
console.log(`Queue contents: ${q.values()}.`);

q.enqueue(3);
console.log(`Queue contents: ${q.values()}.`);

q.dequeue();
console.log(`Queue contents: ${q.values()}.`);

q.enqueue(4);
console.log(`Queue contents: ${q.values()}.`);

q.dequeue();
console.log(`Queue contents: ${q.values()}.`);
