//unlike arrays, stacks and queues there is no random access operations
//mainly use stacks and queues to run commands like push, pop, or peek
//all of which deal exclusively with the element at the beginning or the end of the data structure
//in computer science having a limited amount of actions that can be performed on a data structure
//is an advantage because you can control that whoever uses this data structure 
//only performs the right operations that are efficent 

//Stacks are a type of data structure that stacks data on top of each other.
//LIFO = Last in is the first out
//Since data is stacked on top of each other the last data on the stack is the first out
//because it sits at the top of the stack.

//Stacks = pop 0(1), push 0(1), peek 0(1), lookup 0(n),

//why would we want to build stacks with arrays that is we will create a class of stacks
//that has the data being stored in arrays verses linked lists.
//both arrays or linked lists would work fairly well in stacks, but ne major difference is 
//arrays allow something called cashed locality which makes them technically faster 
//when accessing there items in memory because theyare right next to each other
//also linked lists have extra memory associated with them because
//we have to hold on to those pointers. but they have more dynamic memory




//Queues = enqueue 0(1), dequeue 0(1), peek 0(1), lookup 0(1)

//Queues are FIFO = First in first out
//a queue is like a line where data is put in a line and 
//the first item in line is the first item out
//example:
//a printer connected to a network of computers, who ever sends there data to get
//printed first will be the one that gets printed and so on and so on


//why would we want to build queues with linked lists that is we will create a class of queues
//that has the data being stored in linked lists verses arrays
//why not use an array to build a queue? because it would be inefficient,
//remember you have to shift the indexes whenever you add or delete from an array
//except if you add or delete at the end of the array


