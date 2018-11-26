class HashTable {

  constructor (size) {
    this._storage = [];
    this._storageLimit = size;
  }

  // Add an element to the table.
  add (key, value) {
    let index = HashTable.hash(key, this._storageLimit);

    if (this._storage[index] === undefined) {
      this._storage[index] = [key, value];
    } else {
      let inserted = false;

      for (let i = 0; i < this._storage[index].length; i++) {
        if (this._storage[index][i][0] === key) {
          this._storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (!inserted)
        this._storage[index].push([key, value]);
    }
  }

  // Remove an element from the table.
  remove (key) {
    let index = HashTable.hash(key, this._storageLimit);

    if (this._storage[index].length === 1 && this._storage[index][0][0] === key) {
      delete this._storage[index];
    } else {
      for (let i = 0; i < this._storage[index]; i++) {
        if (this._storage[index][i][0] === key)
          delete this._storage[index][i];
      }
    }
  }

  // Lookup an element from the table.
  lookup (key) {
    let index = HashTable.hash(key, this._storageLimit);

    if (this._storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this._storage[index].length; i++) {
        if (this._storage[index][i][0] === key)
          return this._storage[index][i][1];
      }
    }
  }

  // Display the contents of the table.
  print () {
    console.log(this._storage);
  }

  // Hash function.
  static hash (string, max) {
    let hash = 0;
    for (let i = 0; i < string.length; i++)
      hash += string.charCodeAt(i);
    return hash % max;
  }
}

module.exports = HashTable;