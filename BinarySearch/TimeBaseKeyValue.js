// Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

// Implement the TimeMap class:

// TimeMap() Initializes the object of the data structure.
// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

var TimeMap = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.has(key)) {
    this.map.set(key, []);
  }
  this.map.get(key).push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let res = "";
  let values = this.map.get(key) || [];
  //console.log('values', values);
  //perform binary search
  let l = 0;
  let r = values.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (values[mid][1] <= timestamp) {
      res = values[mid][0];
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return res;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
var obj = new TimeMap();

//Output
//[null, "bar", "bar", null, "bar2", "bar2"]
console.log(obj.set("foo", "bar", 1));
console.log(obj.get("foo", 1));
console.log(obj.get("foo", 3));
console.log(obj.set("foo", "bar2", 4));
console.log(obj.get("foo", 4));
console.log(obj.get("foo", 5));
