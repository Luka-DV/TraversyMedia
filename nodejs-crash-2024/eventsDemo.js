
import { EventEmitter } from "events";

//great for building real time appliations, because you an create custom events, and listen for them (also built-in events)

//new emitter
const myEmitter = new EventEmitter();

function greetHandler() {
    console.log("Hello World");
}

function goodbyeHandler() {
    console.log("Goodbye World");
}

function questionHandler(name) {
    console.log(`How are you, ${name}?`)
}

//.on() method is used to register eventListeners

//Register event listeners
myEmitter.on("greet", greetHandler); //on the greet event I want to call the greetHandler
myEmitter.on("goodbye", goodbyeHandler);
myEmitter.on("question", questionHandler);

//Emit events
myEmitter.emit("greet"); //emit the "greet" event
myEmitter.emit("goodbye");

//Emit event with data
myEmitter.emit("question", "John"); //we have access to the name argument, because we are passing in a second argument to emit

// Error handling
myEmitter.on("error", err => {
    console.log("An Error Occured: ", err);
})

//Simulate error
myEmitter.emit("error", new Error("Something went wrong"));

