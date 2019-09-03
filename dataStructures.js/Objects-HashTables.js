/*
Objests are very useful as data structures because
the framework or language uses a Hash function to store the data in memory
this gives us constant time lookup for retrieving data

insert, lookup, delete, and search are all 0(1)
*/

let user = {
    age: 54,
    name: 'kylie',
    magic: true,
    scream: function() {
        console,log('ahhhhhh!');
    }
}
// these are all 0(1) becuase computer uses hash functions to store the data in memory
user.age // 0(1)
user.spell = 'abra kadabra'; //0(1) 
user.scream(); //0(1)

/*
With enough data with limited memory we can not avoid collisions in Hash Tables
if we constanly just keep adding to the same memory space it slows down our ability to access
and/or insert information because we now have to check the information in that memory space
theoretically when you have a collision it slows down reading and writing with a hash table.

in JavaScript in an object if you pass a key that is a number or function it actually gets 
stringified it only allows string keys. but in new version of JS and ES6 you actuallly have 
map and sets. a map is a version of a Hash Table that allows you to save any data type as 
the key it also maintains insertion order. in an object data is inserted randomly in memory.
a set is similar to map but it only stores the key no value. a computer stores an objects
properties in buckets.
*/

//JavaScript already has objects but lets create our own
class HashTable {
    constructor(size){
    // because implementing our own hash table using arrays instead of objects
      this.data = new Array(size);
      // initially starts as an empty array with a value of undefined
      // this.data = [];
    }
  // this is our hash function that generates a hash for us
  // the underscore tells other developers you shouldnt be accessing this
  // outside of this class.
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++){// iterate over the keys(characters)
          hash = (hash + key.charCodeAt(i) * i) % this.data.length // the modulo operator is to make sure it stays within the given size of data
      }                                    // second (i) is to make it unique
      // it generates the hash the hash gets constantly looped over and included in the next iteration
      return hash;// function that produces the address in memory
    }
  
    set(key, value) {
      let address = this._hash(key); // create a place in memory using hash function to store this
      if (!this.data[address]) {
        this.data[address] = []; // if memory space is empty add an array to this memory slot
      }
      this.data[address].push([key, value]); // if memory space has something in it do not delete 
      return this.data;                      // whats there instead add this to the memory space
    }
  
    get(key){
      const address = this._hash(key); //use hash function to get address in memory 
      const currentBucket = this.data[address] // current memory space
      if (currentBucket) {
        for(let i = 0; i < currentBucket.length; i++){// iterate through all the items in the bucket
          if(currentBucket[i][0] === key) {// find the item that matches key were looking for
            return currentBucket[i][1]// return that items value because [0] is its key [1] is value
          }
        }
      }
      return undefined;//if nothing in the bucket or memory space
    }

    keys(){
        const keysArray = [];
        console.log(this.data.length);
        for (let i = 0; i < this.data.length; i++){
          if(this.data[i]){//iterate through the memory spaces allocated for this array
            keysArray.push(this.data[i][0][0])//this is an array of arrays so need to check the 
          }                                   //arrays in the outer array
        }
        return keysArray;//the memory spaces in the array that actually have keys 
      }
    }
    
    const myHashTable = new HashTable(50);
    myHashTable.set('grapes', 10000)
    myHashTable.set('grapes', 10000)
    myHashTable.get('grapes')
    myHashTable.set('apples', 9)
    myHashTable.get('apples')
    myHashTable.keys()

/*
  even though were doing a loop within the hash function 
  we dont consider it 0(n) we are just looping over the specific skey so it still 0(1)
  if no collisions then it is just 0(1) if there are collisions it could become 0(n).
  when we set something there is no loops we are just adding it to our data were just pushing it

  in JavaScript we can use for in loops to iterate though items in an object 
  but there is no order in objects so its slow. But when we retrieve a certain item(s) 
  its fast because the computer remembers what space in memory it put the item.
  
  Arrays: 
  search 0(n), lookup 0(1), push 0(1), insert 0(n), delete(n)

  Hash Tables / Objects:
  search 0(1) with good collision resolution 0(n) with collisions, insert 0(1), lookup 0(1), delete 0(1)
*/

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if(input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined
}
  
firstRecurringCharacter2([1,5,5,1,3,4,6])// Time complexity 0(n^2) space complexity 0(1)
//this solution returns 1 not 5


function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
    return input[i]
    } else {
    map[input[i]] = i;
    }
  }
  return undefined
}

firstRecurringCharacter2([1,5,5,1,3,4,6])// Time complexity 0(n) space complexity 0(n)
//this solution returns 5 not 1 
