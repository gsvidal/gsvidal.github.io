//Array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  //Nuestro método get devuelve el valor del índice index
  get(index) {
    return this.data[index];
  }
  //Nuestro método push añade al final un valor al array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  //Nuestro método pop remueve el último elemento del array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length -1];
    this.length--;
     
  }
  //Nuestro método delete devuelve el elemento con índice index
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  //Nuestro método unshiftItem añade un elemento(item) al inicio de nuestro array y devuelve la longitud
  unshiftItem(item) {
    this.length++;
    this.unshiftIndex();
    this.data[0] = item;
    
    return this.length;
  }
  unshiftIndex() {
    for(let i = this.length - 1; i > 0 ; i--) {
      this.data[i] = this.data[i-1];
    }
  }
  //Para nuestro método shiftItem vamos a remover el primer elemento de nuestro array, usaremos el método delete() creado anteriormente.
  shiftItem() {
    return this.delete(0);
  }
}


//Singly Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }
  insert(index, value) {
    if(index >= this.length) {
      console.log("No hay suficientes elementos, será enviado al final");
      return this.append(value);
    }

    const newNode = new Node(value); 
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this;

  }

  getTheIndex(index) {
    
    let currentNode = this.head;

    for(let counter = 0; counter < this.length; counter++) {
      if(counter !== index) {
        currentNode = currentNode.next;
      } else{
        return currentNode;
      }
    }
  }
}

let myLinkedList = new MySinglyLinkedList(1);


//Doubly Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      // Doubly: sgt linea
      prev: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    // Doubly: sgt linea
    this.head.prev = newNode;
    
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }
  insert(index, value) {
    if(index >= this.length) {
      console.log("No hay suficientes elementos, será enviado al final");
      return this.append(value);
    }

    const newNode = new Node(value);
    let firstPointer = this.getTheIndex(index - 1);
    let secondPointer = this.getTheIndex(index);
    let holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    // Doubly: sgts 3 líneas
    holdingPointer.prev = newNode;
    firstPointer = newNode.prev;
    holdingPointer = secondPointer;

    this.length++;

    return this;

  }

  getTheIndex(index) {
    
    let currentNode = this.head;

    for(let counter = 0; counter < this.length; counter++) {
      if(counter !== index) {
        currentNode = currentNode.next;
      } else{
        return currentNode;
      }
    }
  }
  
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);



//Stack

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.top = newNode;
      this.bottom = this.top;
    } else {
      const holdingPointer = newNode;
      this.top.next = holdingPointer;
      this.top = holdingPointer;
    }
    this.length++;

    return this;
  }
  pop() {
    var penultimo = myStack.bottom;
    for(let i = 0; i < this.length-2; i++) {
      penultimo = penultimo.next;
    }

    this.top = penultimo;
    this.top.next = null;
    this.length--;

    return this;
  }
}

const myStack = new Stack();



//Queue

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;

    return this;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;

    return this;
  }
  dequeue() {
    if(this.length !== 0) {
    const second = myQueue.first.next;
    this.first = second;
    this.length--;

    return this;
    } else {
      console.log("Queue is empty, you cannot dequeue!")
    }
  }
  
}

const myQueue = new Queue();



//Tree

 //      10
  //   4      20  
  // 2  8   17  170
  
  class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
      const newNode = new Node(value);
      if(this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while(true) {
          if(value < currentNode.value) {
            if(!currentNode.left) {
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            if(!currentNode.right) {
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        } 
      }
    }
    search(value) {
      if(this.root === null) {
        console.log(`The tree is empty!`);
      } else {
        let currentNode = this.root;
         while(true) {
          if(value === currentNode.value) {
            return currentNode;
          } else {
            if(value < currentNode.value) {
              currentNode = currentNode.left;
            } else {
              currentNode = currentNode.right;
            }
          }
         }
        } 
    }   
  }
  
  const myBinarySearchTree = new BinarySearchTree();


