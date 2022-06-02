// Import stylesheets
import './style.css';
import { Stack } from './stack.js';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var stack = new Stack();
console.log('intial Stack length: ', stack.size());

//stack.push(); // this can push undefined values in stack
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log('after push, Stack length: ', stack.size());

stack.pop();

console.log('after pop, Stack length: ', stack.size());

console.log('Top element in stack: ', stack.peek());
