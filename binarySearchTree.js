const BinarySearchTree = require('./classes/BinarySearchTree');

let bst = new BinarySearchTree();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(8);
bst.add(7);

console.log(`Minimum: ${bst.findMinimum()}.`);
console.log(`Maximum: ${bst.findMaximum()}.`);

bst.remove(8);
console.log(`Maximum after removing 8: ${bst.findMaximum()}.`);
