const Stack = require('./classes/Stack');

var s = new Stack();

s.push('Hello');
s.push('World');

console.log(s.length());

console.log(`Popped element: ${s.pop()}.`);
console.log(`Popped element: ${s.pop()}.`);

s.push('Test');
console.log(`Stack is empty: ${s.isEmpty()}.`);
console.log(s.peek());