//how Big O allows us to measure scalability
//Big O notation is the language we use to speak about how long it takes an algorithm to run
//When we talk about Big O and scalability of code we simply mean when we grow bigger and bigger
//with our input how much does the algorithum or function slows down 
//as list of characters/elements increases how many more operations do we have to do = algorithmic
//efficiency Big O and scalability of code we simply mean when we grow bigger and bigger with our 
//input how much does the algorium slow down the less it slows down or the slower it slows down the
//better it is instead of using time to measure the effecientcy of our function we can just calculate
//how many operations a computer must perform beacuse each operation takes time on a computer
//Big 0 allows us and concerns us with how many steps it takes in a function

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < Array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break;
        }
    }
};

findNemo(nemo); // 0(n) Linear Time means Big 0 depends on number of inputs

// Big 0 constant Time means  

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // 0(1)
    console.log(boxes[1]); // 0(2)
};

logFirstTwoBoxes(boxes); //0(2)
//This is constant time because the number of operations always remains the same
//so it remains 0(1) No matter the size of the data it receives, 
//the algorithm takes the same amount of time to run.

function funChallenge(input) {
    let a = 10; //0(1)
    a = 50 + 3; //0(1)
  
    for (let i = 0; i < input.length; i++) { //0(n)
      anotherFunction(); //0(n)
      let stranger = true; //0(n)
      a++; //0(n)
    }
    return a; //0(1)
  }
  
  funChallenge(); //BIG 0(3 + 4n) reduces to BIG 0(n)

  function anotherFunChallenge(input) {
    let a = 5; //0(1)
    let b = 10; //0(1)
    let c = 50; //0(1)
    for (let i = 0; i < input; i++) {
      let x = i + 1; //0(n)
      let y = i + 2; //0(n)
      let z = i + 3; //0(n)
  
    }
    for (let j = 0; j < input; j++) {
      let p = j * 2; //0(n)
      let q = j * 2; //0(n)
    }
    let whoAmI = "I don't know"; //0(1)
  }

  anotherFunChallenge(); //BIG 0(4 + 5n) reduces to BIG 0(n)

// rules for calculating BIG 0
// 1. We always care about worst case senario.
// 2. Remove Constants

//rule 2 
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console,log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

//BIG 0(1 + n/2 + 100) for this function. 
//but we remove constants and reduce to worst case which leaves BIG 0(n)
//example 0(a + 50) same as 0(a + 500000000) both have BIG 0(n)
//example:

function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes.forEach(function(boxes) {
        console,log(boxes);
    })
}
//this function has two for loops that do the same thing
//so O(n) in first loop and 0(n) in second loop 
//because two seperate steps we add them together = 0(2n) 
//but because we drop the constants it equates to 0(n)

//Rule number 3 Different terms for inputs
function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes2.forEach(function(boxes) {
        console,log(boxes);
    })
}

//This is not 0(n) like the previous function because
//third rule states that there are different terms for inputs
//the first for loop will depend on how big the first input is
//and the second for loop will depend on how big the second input is
//these two loops are iterating over different items
//in this case the BIG 0 of this function would be 0(boxes + boxes2) or 0(a + b)
//any step that happens in the same indintation one after another you add 

//Log all pairs of array
const array = ['a','b','c','d','e'];

function logAllPairsOfArray (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if(array[i] !== array[j]) {
        console.log(array[i], array[j])
      }
    }
  }
};

console.log(logAllPairsOfArray(array));
//when we see nested loops we think in terms of multiplication not addition
//so this becomes 0(n * n) or 0(n^2) This is quadratic time
//means every time number of elements increases 
//the number of operations increase quadratically
//any step that happens with indentation that is nested you multiply

//Rule number four: Drop non Dominant Terms
function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) {
        console.log(number);
    });

    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber);
        });
    });
}

printAllNumbersThenAllPairSums([1,2,3,4,5])

//0(n + n^2) becomes 0(n^2) 

//because as the input increases the size of n to the power of 2 is way more important than just n
//But rule 4 states we drop the non-Dominant Terms
//that means we care about the most important term so we drop n and just leave n^2
//so we always just keep the dominant term because we only care about scale
//how n scales makes n^2 the dominant term


// What can cause time in a function?
// Operations (+, -, *, /)
// Comparisons (<, >, ==)
// Looping (for, while)
// Outside Function call (function())


// What causes Space complexity?
// Variables
// Data Structures
// Function Call
// Allocations


// Given 2 arrays, create a function that lets a user know (true/false)
// whether these two arrays contain any common items
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true
      }
    }
  }
  return false
}

containsCommonItem(array1, array2);

// Because these two arrays can be different sizes the BIG 0 is actually 0(a * b)
// if array sizes are the same it could be 0(n^2)
// this solution is slower but it has a better space complexity which is 0(1) constant
// because we are not creating any new variables only using the given input arrays

// Is there a way to turn this 0(a * b) to have a better BIG 0
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

// array1 will be converted to an object where all the proerties are equal to true. {
// a: true
// b: true
// c: true
// x: true
// }
// check to see if array2[index] === object.properties

// this solution is much better on time complexity because instead of nested loops which 
// have a time complexity of 0(a * b) this function has two seperate loops
// which give it a time complexity of 0(a = b)

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  let object = {};
  for (let i = 0; i < arr1.length; i++) {
    if(!object[arr1[i]]) {
      const createdKey = arr[i];
      object[createdKey] = true;
    }
  }
  //loop through second array and check if item in second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (object[arr2[j]]) {
      return true;
    }
  }
  return false;
}

containsCommonItem2(array1, array2);

// BIG 0 of 0(a + b) this solution is faster, but its space compleity is heavier
// because we are creating a new object which takes up memory this function has
// a space complexity of 0(a) which is the first array



