import {Queue} from './queue.js';

function Node (data) {
    this.data = data; 
    this.parent = null; 
    this.children = [];
}

function Tree(data) {
    var node = new Node(data); 
    this._root = node;
}

Tree.prototype.traverseDF = function(callback) {
    (function recurse(currentNode) {
        for (var i =0, length = currentNode.children.length; i < length; i++) {
            recurse(currentNode.children[i]);
        }
        callback(currentNode)
        
    })(this._root);
};

Tree.prototype.traverseBF = function (callback) {
    var queue = new Queue();
    queue.enqueue(this._root);
    currentTree = queue.dequeue();
    while (currentTree) {
        for (var i=0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }
        callback(currentTree); 
        currentTree = queue.dequeue();
    }
}

var tree = new Tree('one');
 
tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;
 
tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;
 
tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];
 
tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

console.log(tree)
tree.traverseDF(function(node){
    console.log(node.data)
})

