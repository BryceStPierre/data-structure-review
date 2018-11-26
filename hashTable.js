const HashTable = require('./classes/HashTable');

let h = new HashTable(10);
h.add('car', 'apple');
h.add('truck', 'orange');
h.add('train', 'banana');
h.add('bus', 'pineapple');
h.add('plane', 'peach');

console.log(h.lookup('truck'));
h.print();
