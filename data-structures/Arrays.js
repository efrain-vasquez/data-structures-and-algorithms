// BIG 0 of Array methods:
// lookup or access of arrays 0(1)
// push 0(1)
// insert 0(n)
// delete 0(n) 

const strings = ['a', 'b', 'c', 'd'];

// push add an element to end of the array
strings.push('e'); // 0(1) because the indexes that already exist in the array stay the same

// pop remove element from the end of the array
strings.pop(); // 0(1) no loop needed because computer keeps track of 
// where it stored the element in memory

// unshift adds element(s) to the beginning of the array
strings.unshift('x') // 0(n) because you must loop through the array to reassign the indices
//  to each element arrays are not very useful for adding items at beginning of arrays

// splice(starting index, number of items deleted, items want to add)
strings.splice(2, 0, 'alien'); // 0(n) because we have to loop 
// to reassign all indices after the introduction of new element

// in some languages there are two types of arrays static or Dynamic JS only has dynamic arrays
// static arrays have a predetermined size
// dynamic arrays have no predetermined size


//var, let, and const


// var
// When you define a variable with var, the scope of that variable 
// will be its enclosing execution context; that execution context 
// can be either a function space or the global space.
// var is function scoped and let is block scoped. It can be said that
// a variable declared with var is defined throughout the program as compared to let.
// javaScript differentiate between variable assignment and declaration, 
// and then hoist all the declaration at the top of the code.

// let
// The difference is scoping. var is scoped to the nearest function block and let 
// is scoped to the nearest enclosing block, which can be smaller than a function block. 
// Also, variables declared with let are not accessible before they are declared in 
// their enclosing block. Hoisting has no power when we declare statements with let.
// unlike var it does not create a property on the global object regardless of where you define it.

// const
// Const just like let uses block scope, so it has all the properties of let 
// besides the ability to prevent redeclaration of the variable.
// If you have declared a string or a number the 
// value can't be changed either. But when you are declaring as an object, 
// it gets a bit interesting. An objects properties can be modified or added to 
// but the vaiable can not be redeclared.


// var, let, and const  (Hoisting)
// The difference between var, let and const in the hoisting point is the initialization.
// var get initialized with undefined but let and const stay uninitialized that lead to 
// ReferenceError when you try to access them before the declaration.


// reference type
// JavaScript defines all primitive types
// but reference types are not defined by the programming lanuage
// they are defined by the programmer

// context vs scope
// scope is created within curly brackets
// context tells you where we are within the object
// this refers to the window object in the console console.log(this === window) returns true;
// this key word this simply refers to the object its inside of
// the object to the right of the (dot)

// instantiation
// when you make a copy of an object and reuse the code
// making instances or multiple copies of an object

// Arrays in JavaScript
// arrays in javascript are just objects with integer based keys that act like indexes
// How arrays work and how they are implemented underneath the hood:

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item; // inserts item in zero index
        this.length++ // next time we run it new item will be inserted one index ahead
        return this.length; // push method in JS returns new length of array
    }

    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        // return item (as a reference which is how JS works)
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return lastItem;
    }

    shiftItems(index) { 
        for (let i = index; i < this.length - 1; i++) { // we begin looping where the item was deleted
            this.data[i] = this.data[i+1]; // within this loop take each item in the data {object} and
            // instead of what it had before i want you to add the data that is right next to it which is
            // [i+1]. from the index of the item deleted [i] you shift the items to the left by 1 index.         
            // because we did that the index we gave it for the deleted item automatically gets replaced 
            // because that index of deleted item is going to get replaced with the new item. but the 
            // last item in the array still exists with the same value.
            delete this.data[this.length - 1]; // this deletes the last item
        }
    }
}

const newArray = new MyArray(); // Myarray { length: 0, data: {} }
newArray.push('hi'); // adds 'hi' to data object at index 0 
newArray.push('you'); // adds 'you' to data object at index 1
newArray.push('!') // adds '!' to data object at index 2
newArray.delete(0) // delete item at index 0 and shifts all other items 1 to the left deletes last item aswell
newArray.push('are'); // adds 'are' to index 2
newArray.push('nice'); // adds 'nice' to index 3
newArray.delete(1); // delete item at index 1 shifts items after index 1 to the left by 1 delete last item aswell
console.log(newArray); // MyArray { length: 3, data: { 0: 'you', 1: 'are', 2: 'nice' } }


// Strings:
// strings are simply an array of characters
// create a function that reverses a string:
// 'Hi my name is Efrain' should be:
// 'niarfE si eman ym iH' 

string = 'Hi my name is Efrain';

function reverse(str) {
    return str.split('').reverse().join('')
}

reverse(string);

// Arrays
// arrays are fast for lookups, push, and pop becuse they are ordered.
// ordered means they are stored close to each other in memory
// arrays are slow for inserts and deletes because we have to shift arrays