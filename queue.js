class Node {
    constructor(data, priority=null, next=null) {
        this._data = data;
        this._priority = priority;
        this._next = next;
    }
    
    get data() {
        return this._data;
    }

    get next() {
        return this._next;
    }

    get priority() {
        return this._priority;
    }
    
    set priority(data) {
        this._priority = data;
    }

    set next(data) {

        if (data instanceof Node || data === null) {
            this._next = data;
        } else {
            throw new Error('_next must be instanceof Node class or null')
        }
    }
}

class Queue {
    constructor(maxSize=null) {
        this._head = null;
        this._tail = null;
        this._maxSize = maxSize;
        this._size = 0; 
    }

    get head(){
        return this._head;
    }

    set head(data) {
        if (data instanceof Node || data === null) {
            this._head = data;
            return
        }
        throw new Error('_head must be instanceof Node class or null')
    }

    get tail() {
        return this._tail;
    }

    set tail(data) {
        if (data instanceof Node || data === null) {
            this._tail = data;
            return
        }
        throw new Error('_tail must be instanceof Node class or null')
    }

    get size() {
        return this._size;
    }

    set size(data) {
        this._size = data;
    }

    get maxSize() {
        return this._maxSize;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    toArray(attribute) {
        // returns list of node attribues in an array
        let current = this.head
        let arr = []
        while (current != null){
            arr.push(current.data[attribute])
            current = current.next;
        }
        return arr
    }

    remove(data, attribute) {
        
        // removes first instance of data  matching attribute if found and returns true or returns false if data not found 
        let current = this.head;
        let prev = false

        while (current != null) {
            if (current.data[attribute] == data) {
                
                if (!prev) {
                    this.head = current.next;
                } else {
                    prev.next = current.next
                }
                this._size--;
                return true         
            }
            prev = current;
            current = current.next       
        } 
        return false
    }

    stringify(delimiter='') {
        // return the Queue data as a string
        let node = this.head;

        let str = '';
        
        while (node != null) {
            
            str += node.data + `${delimiter}`
            node = node.next;
        } return str
    }

    isFull() {
        if (this.maxSize != null) {
            return this.maxSize <= this.size
        }
        return false
    }

    hasSpace() {
        return this.size < this.maxSize
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return this.head
        }
        return this.head.data
    }

    enqueue(data) {

        if (this.isFull()) {
            return 'Cannot add data, Queue at max size'
        }

        let node = new Node(data) 

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.size++;
            
            return 
        }
        
        this.tail.next = node 
        this.tail = node
        this.size++;
        return
    }

    dequeue() {

        if (this.isEmpty()) {
            return false
        }
        
        let headNode = this.head;

        if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size--;
            return headNode.data
        }

        
        this.head = headNode.next;
        this.size--;
        return headNode.data;
    }

    orderedInsert(data,priority=null) {
        
        
        if (priority === null) {
            this.enqueue(data)
            return
        }

        if (this.isFull()) {
            return 'Cannot add data, Queue at max size'
        }
       
        let node = new Node(data, priority);
        
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.size++;
            return 
        }

        let qhead = this.head;
        let prev = null 
        
        while (qhead != null) {
            if (node.priority > qhead.priority) {
                
                if (prev != null) {
                    node.next = qhead;
                    prev.next = node;
                    this.size++;
                    return 
                }

                node.next = this.head;   
                this.head = node;
                this.size++;
                return 

                }

            prev = qhead;
            qhead = qhead.next;
        }
        prev.next = node;
        this.tail = node;
        this.size++;
        return
    }


}
