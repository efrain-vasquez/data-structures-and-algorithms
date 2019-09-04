//JavaScript doesnt come with pre built Linked Lists but we can build our own.
//pseudo-code of linked list
const basket = ['apples', 'grapes', 'pears']

linked list: apples --> grapes --> pears

apples
8947 --> grapes
          8742 --> pears
                    372 --> null


//animation tool to help understand linked lists
//https://visualgo.net/en/list

//linked lists have a loose structure meaning you can insert or delete a value into the middle
//of the list by simply resetting a few pointers.
//dont need to shift the indexes when insert or delete within the list.
//to search for a node we have to traverse the list till you find the node your looking for.
//in an array since they are indexed you can go directly to the item if you know the index
//in arrays the items are usually located next to each other in memory which makes them faster to
//work with than linked list which have items scattered in memory.
//one advantage linked lists have over hash tables / objects is 
//that they have a sorted order each node points to the next node.
//prepend 0(1), append 0(1), lookup/traversal 0(1), insert 0(n), delete 0(n)
//JS is garbaged collected meaning memory is mananged automatically


// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

  //we do not want to repeat ourselves when writing code
  //object oriented programming usually work by having classes 
  //that interact with other classes to create our programs.
/*
  class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
*/

class LinkedList {//constructor is about creating first linked list node
    constructor(value) {//list can not be empty has to have a value
      this.head = {// inside this object is a node. all nodes need a value property and a pointer
        value: value,//value property of the node
        next: null//pointer property that points to the next node. the last node points to null
      };
      this.tail = this.head;//only one item so head is the tail
      this.length = 1;//only one node so length is 1
    }

    append(value) {
      //const newNode = new Node(value); 
      //we can use this instead of having to rewrite the following code 
      const newNode =  {
      value: value, //value equals value we get as a parameter
      next: null
      };//remember next = null
      this.tail.next = newNode;//it grabs the pointer of the tail and says instead of pointing
                              //it to null point it to the new node we created
      this.tail = newNode;//what we had as tail before is no longer the tail we 
                          //have a new last item. because we run this operation 
                          //after the one before we can now update the tail to 
                          //be the new node because the next has been updated properly
                          //for the older tail value
      this.length++;//make sure you increment the list
      return this;//this just references what this class is that gets instantiated
                //we return this so we get back the link list
      }

    prepend(value) {//value is the parameter  
      //const newNode = new Node(value); 
      //we can use this instead of having to rewrite the following code  
      const newNode = {//first we create our new node
        value: value,//value is set to the value we get from parameter
        next: null//next = null because its the last node
        }//remember next = null
        newNode.next = this.head;//the head becomes the next node after the newNode
        this.head = newNode;//newNode becomes the new head
        this.length++;//increment the length to account for the newNode
        return this;//this just references what this class is that gets instantiated
                    //we return this so we get back the link list
        } 

    printList() {//printList function is to make sure insert method is working
      const array = [];//prints info in an array
      let currentNode = this.head;//first item in the list
      while (currentNode !== null) {//while this is happening run these commands
        array.push(currentNode.value);//add to the array the currentNode value
        currentNode = currentNode.next;
      }
      return array;
    }   

    insert(index, value) {//first check parameters make sure index is a value you understand so no program errors
      if (index >= this.length) {// this is an important check so you know what to do with an insert
          return this.append(value);//way longer than lenght of list, simply add it to the end of the list
      }
      //we could create the Node class here if we wanted using the class Node at the top that is commented out
      const newNode = {//create new object that has  
          value: value,//a value property with a value that comes from parameter
          next: null//and a next property with a value of null
      };
      //remember a link list only has reference to this.head and this.tail
      //to get a reference to any other node we need to traverse the list
      const leader = this.traverseToIndex(index - 1) //this is the first node we will connect the 
      //newNode to, so we need to traverse our list to get reference to it. the newNode will point
      //to this node we are referencing, which we are calling leader.
      //we still have to create this traverseToIndex method 
      const holdingPointer = leader.next;//because of the way JS works this variable allows us to save 
      //in memory what this pointer use to point to, which is the node that use to come after leader
      leader.next = newNode
      //now we make sure we can reference the next node on the
      //list that comes after the leader, we do this by saving that item to a variable
      //by doing this we can now reference leader.next and point it to newNode. 
      //By doing this we have deleted the old referenceor the old pointer, meaning the reference  
      //to the to the old node that use to come after leader but we still have that reference
      //saved in the holdingPointer variable and allows us to use it here
      newNode.next = holdingPointer;//here we are able to point the newNode 
      //to the node that use to come after the leader
      this.length++;//because we have added to the list we increment the length
      return this.printList();//this is to check if we have inserted properly
    } 

    traverseToIndex(index) {
        //check params to make sure index is a valid index
        let counter = 0;
        let currentNode = this.head;//so we can start traversing from the head
        //while counter doesnt equal index keep traversing. 
        while(couter !== index) {//when get to point/index we want on the list and stop
            currentNode = currentNode.next;//until this happens we keep moving currentNode to the
            counter++;//right and increment counter one by one as we move to the right
            //when get to the index we want the counter will equal this index
        }
        return currentNode;//when counter equals index we want we return the current node getting our
        //reference to the leader which is the node that is to the right of where we want to insert
    } 
    //check parameters make sure its a valid index. positive number and higher than the length
    remove(index) {
        //because of how memory works in garbage collectioned languages like JavaScript as soon as
        //we delete a reference (the pointer which was pointing to a space in memory)
        //the memory space gets deleted     
        const leader = this.traverseToIndex(index-1);
        //first we find the leader by using this.traverseToIndex
        //which gives us the reference to the leader now we can point the 
        //leader to the node that comes after the unwanted node. but first  
        //we need a reference to the node that comes after the unwanted node.
        const unwantedNode = leader.next;//the unwanted node is going to equal leader.next 
        //now we have this reference in memory by saving it to this variable
        leader.next = unwantedNode.next; //so we grab the leader and then we say this node that 
        //I dont want I want to grab it here by using leader.next and then make sure we get the  
        //pointer (the pointer that the unwanted node had pointing to the node that comes after it)
        //we reassign that pointer to now point to leader.next by doing this we are
        //making leader point to the node that comes after the unwanted node, the old reference
        //where leader was pointing to the unwanted node gets deleted this deleted reference caused  
        //that space in memory to be deleted/removed thus removing that unwanted node from the list. 
        this.length--;//we decrease the length by one, since we removed a node.
        return this.printList();//we check to see if the deletion was done correctly
      }
}                         
  
let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
myLinkedList.printList();
//console.log(mylinkedList);
  
  
  