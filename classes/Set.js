class Set {

  constructor () {
    this._storage = [];
  }

  // Check for the provided value in the set.
  has (value) {
    return this._storage.indexOf(value) !== -1;
  }

  // Adds the provided value to the set. Returns boolean for success.
  add (value) {
    if (!this.has(value)) {
      this._storage.push(value);
      return true;
    }
    return false;
  }

  // Removes the provided value if it's in the set. Returns boolean for success.
  remove (value) {
    if (this.has(value)) {
      this._storage.splice(this._storage.indexOf(value), 1);
      return true;
    }
    return false;
  }

  // Returns all the values in the set.
  values () {
    return this._storage;
  }

  // Returns length of the set.
  length () {
    return this._storage.length;
  }

  // Returns the union of two sets.
  union (set) {
    let union = new Set();
    let first = this.values();
    let second = set.values();

    first.forEach(v => { union.add(v); });
    second.forEach(v => { union.add(v); });
    return union;
  }

  // Returns the intersection of two sets.
  intersection (set) {
    let intersection = new Set();
    
    this._storage.forEach(v => { 
      if (set.has(v))
        intersection.add(v);
    });
    return intersection;
  }

  // Returns the difference of two sets.
  difference (set) {
    let difference = new Set();

    this._storage.forEach(v => {
      if (!set.has(v))
        difference.add(v);
    });
    return difference;
  }

  // Returns a boolean representing if this set is a subset of another set.
  isSubset (set) {
    return this._storage.every(v => set.has(v));
  }

  // Checks if the set is empty.
  isEmpty () {
    return this._storage.length === 0;
  }
}

module.exports = Set;