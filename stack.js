// stack using array

var stack = [];

stack.push('apple');
stack.push('banana');
stack.push('mango');

console.log('stack data: ', stack);

console.log('popped data: ', stack.pop());

console.log('stack data after pop: ', stack);

console.log('stack data at top: ', stack[stack.length - 1]);

// stack implementation from scratch

export function Stack() {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    if (value === null || value === undefined) {
      // you can restrict your stack to not accept null or undefined values
      throw 'Null or undefined values cannot be pushed';
    }
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var popItem = this.storage[this.count];
    delete this.storage[this.count];
    return popItem;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };

  this.size = function () {
    return this.count;
  };
}
