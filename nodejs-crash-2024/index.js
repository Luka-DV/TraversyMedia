
//if not default:

// import { getPosts } from "./postController.js";

// if default export:

import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());

console.log(`Posts length is ${getPostsLength()}`);

// console.log("Hello World");

// CommonJS

// const { celciusToFahrenheit, generateRandomNumber, constanta } = require("./utils");

// console.log(`Random number: ${generateRandomNumber()}`);
// console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(0)}`);
// console.log(`Test for a variable: ${constanta}`);
