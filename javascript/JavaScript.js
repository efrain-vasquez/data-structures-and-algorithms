// How does JavaScript work internally:

//What is a program and what does it do:
//first a program has to allocate memory and 
//parse and execute scripts which means read and run commands.
//There is a JavaScript engine that each browser implements. in chrome it is the V-8 engine
//the V-8 engine reads the JavaScript that we write and 
//changes into machine executable instructions for the browser

//the engine consists of two parts:
//the memory heap: this is where the memory allocation happens
//memory leaks happen when you have unused memory such as variables that are not being used
//hanging around. that is why you hear that global variables are bad because you need to clean up 
//or delete variables you no longer are using. if your memory heap gets full 
//eventually the browser will not be able to work

//the call stack: this is where your code is read and executed
//it tells you where you are in the program
//when you run your code in the browser terminal it adds it to the call stack
//because the call stack reads and executes the scripts
//the call stack is FILO = First in last out

//JavaScript is a single threaded language that can be non-blocking.
//single threaded means it has only one call stack
//meaning it can only do one thing at a time
//running code on a single thread can be quite easy since you only have one thread to keep track of
//but also limiting because it can only do one thing at a time 
//JavaScript was designed to be single threaded so it could be easier to manage and keep track of
//multi-threaded languages have multiple call stacks and can have deadlocks
//synchronous programming means code gets executed line by line. the code has to get executed in
//synchronous order
//stack over flow means when a stack is overflowing. the call stack gets so big it
//doesnt have enough space to contain the data

//example:
/*

function foo() {
  foo()
}

 foo();

*/
//this will cause a stack overflow because it never stops calling itself so the 
//stack will eventually get full and overflow. 

//synchronous programming is great because its predictable but
//it can be slow because the code has to execute line by line  
//and as we all know waiting in line for your turn can take time

//non-blocking:
//if JavaScript is single threaded how can it be non-blocking
//the reason is asynchronous programming
//example:
/*

console.log('1);
setTimeout(() => {
    console.log('2);
}, 2000)
console.log('3);

*/
//wen we run in the console what happens
//this is what prints out
/*

1
3
2

*/

//why is it printing 1, 3, 2 to the console instead of printing 1, 2, 3.
//because of asynchronous programming
//to get an indepth understanding you need to know this
//in order for JavaScript as we know it to run for the JavaScript engine with memory heap
//and call stack to run we need more than just the javascript engine we need what we call
//a javascript run time enviroment. a javascript runtime enviroment is part of the broswer
//it is included in the browsers they have extra things. on top of the engine they have 
//something called Web API's, Callback Queue, and an Event Loop. setTimeout is part of the
//Web API, technically its not part of javascript it is something the browser gives us to use
//
//Web API's examples:
//DOM (document)
//AJAX (XMLHttpRequest)
//Timeout(setTimeout)
//
//Callback Queue examples:
//onClick - event listener
//onLoad - event listener
//onDone - event listener
//
//Event Loop
//keeps track of the cycle of events, the order of code to be executed.



//the reson the console prints out 1, 3, 2 is because 

//Call Stack
console.log('3')// last to get poped off the stack but second to be executed
console.log('2')// second to get poped off the stack but last to be executed but how
console.log('1')// first to get poped off the stack because gets executed first
//now the Call Stack is empty
//Call Stack

//Web API
//settimeout is poped out of the call stack because it triggers the Web API
//and it is stored here temporarily (a timer is started) till its time to be executed
//Web API

//Callback Queue
//after 2000 milliseconds setTimeout is ready to be executed 
//so it gets sent to the Callback Queue
//where it is staged to be executed
//Callback Queue

//Event Loop
//the event loop continously checks to see if the Call Stack is empty if it is
//then it checks the Callback Queue to see if it has anything to execute
//if there is it sends it to the Call Stack to be executed
//Event Loop
