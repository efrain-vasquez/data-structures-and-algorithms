



class DoublyLinkedList {//constructor is about creating first linked list node
    constructor(value) {//list can not be empty has to have a value
      this.head = {// inside this object is a node. all nodes need a value property and a pointer
        value: value,//value property of the node
        next: null,//pointer property that points to the next node. the last node points to null
        prev: null//this previous pointer will begin at null because its the first node 
        //so the head will point to null
      };
      this.tail = this.head;//only one item so head is the tail
      this.length = 1;//only one node so length is 1
    }

    append(value) {
      //const newNode = new Node(value); 
      //we can use the code above instead of having to rewrite the following code 
      //to create a new object
      const newNode =  {
      value: value, //value equals value we get as a parameter
      next: null,//a null property whos value is null
      prev: null//append is adding a new node whos previous property also points to null to begin with
      };//remember next = null
      newNode.prev = this.tail;//we need to add a previous property because append adds to
      //the end of the list. we want to add a previous property to equal whatever was at the end
      //of the original list before we did the append
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
        next: null,//next = null because its the last node
        prev: null//add a new previous property that points to null for now
        }//remember next = null
        newNode.next = this.head;//the head becomes the next node after the newNode
        //the newNode.next points to whatever the head is currently
        this.head.prev = newNode;//the prev should now point to our newNode because the original
        //head of the list is no longer the head because now our newNode becomes the current head
        this.head = newNode;//then we update our head to become our newNode
        this.length++;//increment the length to account for the newNode
        return this;//this just references what this class is that gets instantiated
                    //we return this so we get back the link list
        } 

    printList() {//printList function is to make sure insert method is working
      const array = [];//prints info in an array
      let currentNode = this.head;//first item in the list
      while (currentNode !== null) {//while this is happening run these commands
        array.push(currentNode.value);//add to the array the currentNode value
        currentNode = currentNode.next;//now the currentNode is currentNode.next
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
          next: null,//and a next property with a value of null
          prev: null//we add a previous property that will be null for now
      };
      //remember a link list only has reference to this.head and this.tail
      //to get a reference to any other node we need to traverse the list
      const leader = this.traverseToIndex(index - 1) //this is the first node we will connect the 
      //newNode to, so we need to traverse our list to get reference to it. the newNode will point
      //to this node we are referencing, which we are calling leader.
      //we still have to create this traverseToIndex method 

      //now we are going to do things a little differently than when using single Linked List.
      //we need to grab the leader as well as the follower so we change name of leader.next to follower.
      const follower = leader.next;//this is to store a reference to the node that comes after the 
      //node that we are inserting. also known as the node that originally came after the leader
      leader.next = newNode;//so we update the leader.next to now point to the node we are  
      //inserting which is our newNode so the leader is now pointing to our newNode instead 
      //of pointing to the node that originally came after the leader
      newNode.prev = leader;//we also want to make sure our newNode 
      //has a previous property that points to the leader
      follower.prev = newNode;//also make sure that the node that comes after the newNode has
      //a previous property that points to the newNode

      //now we make sure we can reference the next node on the
      //list that comes after the leader, we do this by saving that item to a variable
      //in this way we can now reference leader.next and point it to newNode. 
      //By doing this we have deleted the old referenceor the old pointer, meaning the reference  
      //to the to the old node that use to come after leader but we still have that reference
      //saved in the follwer variable and allows us to use it here
      newNode.next = follower;
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


let myLinkedList = new DoublyLinkedList(10);
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
  