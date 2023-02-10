//Array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  //Nuestro método get devuelve el valor del elemento con índice index
  get(index) {
    return this.data[index];
  }
  //Nuestro método push añade un valor al final del array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  //Nuestro método pop remueve el último elemento del array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
  }
  //Nuestro método delete elimina el elemento de indice index y devuelve el elemento removido.
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  //Nuestro método unshiftItem añade un elemento(item) al inicio de nuestro array y devuelve la longitud del array
  unshiftItem(item) {
    this.length++;
    this.unshiftIndex();
    this.data[0] = item;

    return this.length;
  }
  unshiftIndex() {
    for (let i = this.length - 1; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
  }
  //Para nuestro método shiftItem vamos a remover el primer elemento de nuestro array, usaremos el método delete() creado anteriormente.
  shiftItem() {
    return this.delete(0);
  }
}

//Hash Tables

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  //Lo siguiente es un Hash Function que fue creado arbitrariamente, existen muchos Hash Functions en GitHub
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  //El metodo set nos permitirá insertar un valor con determinado key y value(puede haber colisiones)
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  //El metodo get nos devuelve el valor que le corresponde al key que enviemos como parámetro, en caso no exista el key nos devolverá undefined
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}
//Instanciamos el HashTable con 50 espacios libres
const myHashTable = new HashTable(50);

//Singly Linked List
//Creamos una clase Node(nodo) para no reescribir código en los métodos
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
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  //Nuestro método append agregará un elemento al final(tail) del Singly Linked List
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  //Nuestro método prepend agregará un elemento al inicio(head) del Singly Linked List
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }
  //Nuestro método insert insertará un elemento con índice index en el Singly Linked List
  insert(index, value) {
    if (index >= this.length) {
      console.log('No hay suficientes elementos, será enviado al final');
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    //Se crea una const holdingPointer que servirá para no perder el puntero next del firstPointer.
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this;
  }

  getTheIndex(index) {
    let currentNode = this.head;

    for (let counter = 0; counter < this.length; counter++) {
      if (counter !== index) {
        currentNode = currentNode.next;
      } else {
        return currentNode;
      }
    }
  }
}
//Instanciando MySinglyLinkedList:
let myLinkedList = new MySinglyLinkedList(1);

//Doubly Linked List

//Como podremos ver el código para la creación de un doubly solo se diferencia por ser unas cuantas líneas más larga:

//Creamos una clase Node(nodo) para no reescribir código en los métodos
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
      // Doubly: se añade la siguiente linea
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
    // Doubly: se añade la siguiente linea
    this.head.prev = newNode;

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }
  insert(index, value) {
    if (index >= this.length) {
      console.log('No hay suficientes elementos, será enviado al final');
      return this.append(value);
    }

    const newNode = new Node(value);
    let firstPointer = this.getTheIndex(index - 1);
    let secondPointer = this.getTheIndex(index);
    let holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    // Doubly: se añaden las siguientes 3 líneas
    holdingPointer.prev = newNode;
    firstPointer = newNode.prev;
    holdingPointer = secondPointer;

    this.length++;

    return this;
  }

  getTheIndex(index) {
    let currentNode = this.head;

    for (let counter = 0; counter < this.length; counter++) {
      if (counter !== index) {
        currentNode = currentNode.next;
      } else {
        return currentNode;
      }
    }
  }
}
//Instanciado MyDoublyLinkedList:
let myDoublyLinkedList = new MyDoublyLinkedList(1);

//Stack
//Creamos una clase Node(nodo) para no reescribir código en los métodos
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
  //Nuestro método peek nos devuelve el elemento top(último en ingresar)
  peek() {
    return this.top;
  }
  //Nuestro método push agrega un elemento al (top) del stack y nos devuelve el stack
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
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
  //Nuestro método pop remueve el elemento top y nos devuelve el stack
  pop() {
    var penultimo = myStack.bottom;
    for (let i = 0; i < this.length - 2; i++) {
      penultimo = penultimo.next;
    }

    this.top = penultimo;
    this.top.next = null;
    this.length--;

    return this;
  }
}
//Instanciamos la clase Stack
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
  //Nuestro método peek nos devuelve el elemento first(primero en la cola)
  peek() {
    return this.first;
  }
  //Con nuestro método enqueue agregaremos un elemento al final de la cola (last)
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;

    return this;
  }
  //Con nuestro método dequeue removeremos el primer elemento de la cola
  dequeue() {
    if (this.length !== 0) {
      const second = myQueue.first.next;
      this.first = second;
      this.length--;

      return this;
    } else {
      console.log('Queue is empty, you cannot dequeue!');
    }
  }
}
//Instanciamos la clase Queue
const myQueue = new Queue();

//Tree

//      10
//   4      20
// 2   8  17  170

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
  //Con este método insert, podremos agregar nodos con sus valores y referencias según la condición si son menor o mayor al padre.
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  //El método search nos permitirá devolver el nodo en el que se encuentra el valor(value) enviado como argumento. Recordar que el nodo es el conjunto de información como: value, left child, right child. En caso de recorrerse el binary search tree y no encontrar el valor buscado nos indicará que no existe el valor.
  search(value) {
    var msj = 'no se encuentra el valor';
    if (this.root === null) {
      console.log(`The tree is empty!`);
    } else {
      let currentNode = this.root;
      while (true) {
        if (value === currentNode.value) {
          return currentNode;
        } else {
          if (value < currentNode.value) {
            if (currentNode.left) {
              currentNode = currentNode.left;
            } else {
              return msj;
            }
          } else {
            if (currentNode.right) {
              currentNode = currentNode.right;
            } else {
              return msj;
            }
          }
        }
      }
    }
  }
}
//Instanciamos BinarySearchTree
const myBinarySearchTree = new BinarySearchTree();

//Graph

class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }
  //Se agregan nodos(vértices)
  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }
  //Se agregan bordes(edges) pasando como argumentos a nodos(nodo1 y nodo2), el grafo del ejercicio es del tipo no dirigido, así que debe colocarse el método push en ambas direcciones.
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

const myGraph = new Graph();

//Creamos los vértices(nodos):
myGraph.addVertex(1);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addVertex(8);

//Creamos los Edges(bordes), ya que hay 7 bordes en el gráfico, deben haber 7 addEdge:
myGraph.addEdge(8, 4);
myGraph.addEdge(4, 5);
myGraph.addEdge(4, 1);
myGraph.addEdge(1, 6);
myGraph.addEdge(3, 6);
myGraph.addEdge(1, 3);
myGraph.addEdge(5, 3);
