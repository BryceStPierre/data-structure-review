const Set = require('./classes/Set');

let s1 = new Set();

s1.add(1);
s1.add(2);
s1.add(3);
console.log(`Set contents: ${s1.values()}.`);

s1.add(2);
console.log(`Set contents: ${s1.values()}.`);

s1.remove(2);
console.log(`Set contents: ${s1.values()}.`);

console.log(`Set has 2: ${s1.has(2)}.`);

let s2 = new Set();
s2.add(2);
s2.add(4);
s2.add(3);
s2.add(6);
s2.add(8);

let s3 = new Set();
s3.add(2);
s3.add(4);

console.log(`Set 1: ${s1.values()}.`);
console.log(`Set 2: ${s2.values()}.`);
console.log(`Set 3: ${s3.values()}.`);
console.log(`Union s1, s2: ${s1.union(s2).values()}.`);
console.log(`Intersection s1, s2: ${s1.intersection(s2).values()}.`);
console.log(`Difference s1, s2: ${s1.difference(s2).values()}.`);
console.log(`Subset s2, s3: ${s2.isSubset(s3)}.`);
