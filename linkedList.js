const LinkedList = require('./classes/LinkedList');

let l = new LinkedList();
l.add('Hello');
l.add('World');
l.add('New');
l.add('Data');
l.add('Structure');

console.log(l.length());
console.log(l.removeAt(4));
console.log(l.length());
