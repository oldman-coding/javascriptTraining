class TreeNode {
    constructor(key,value = key, parent = null){
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
    }

    get isLeaf(){
        return this.children.length ===0;
    }

    get hasChildren(){
        return !this.isLeaf;
    }
}

class Tree {
    constructor(key, value = key){
        this.root = new TreeNode(key, value);
    }

    *preOrderTraversal (node = this.root) {
        yield node; 
        for (let child of node.children) {
            if (node.children.length)  {
                for (let child of node.children) {
                    yield *this.preOrderTraversal(child)
                }
            }
        }
            yield* this.preOrderTraversal(child)
    }
}
