export class Queue {
    constructor(capacity){
        this.queue = [];
        this.capacity = capacity;
        this.size = 0;
    }

    enqueue(element) {
        if (this.isFull()) return false; 
        this.queue.push(element);
        ++ this.size;
    }

    dequeue () {
        if (this.isEmpty()) return true;
        -- this.size;
        return this.queue.shift();
        
    }

    peek(){
        if (this.isEmpty()) return null;
        return this.queue[0]
    }

    isEmpty(){
        return !this.queue.length;
    }

    isFull(){
        return this.size === this.capacity;
    }
}

var queue = new Queue(5);
for (var i = 0; i <5; i++){
    queue.enqueue(i)
}

queue.dequeue()
queue.dequeue()
console.log(queue.size)
queue.enqueue(6)
queue.enqueue(7)
console.log(queue)