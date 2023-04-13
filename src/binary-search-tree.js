const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
constructor() {
  this.rot = null;
}
  root() {
    return this.rot;
  }

  add(data) {
    this.rot = addWithin(this.rot, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      }
      else {
        node.right = addWithin(node.right, data);
      }
     return node;
    }

  }

  has(data) {
    return searchLeaf(this.rot, data);
    
    function searchLeaf(node, data) {
      if (!node) {return false;}
      if (data === node.data) {return true;}
      if (data < node.data) { return searchLeaf(node.left, data);}
      else { return searchLeaf(node.right, data);}
    }
    
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.rot = removeNode(this.rot, data);

        function removeNode(node,data) {
          if (node === null) {
            return null;
        
        } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        
        } else if (data > node.data) {
            node.right = removeNode(node.right, data);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
           if (node.left === null) {
                node = node.right;
                return node;
            } 
            if (node.right === null) {
                node = node.left;
                return node;
            }
            let k = node;
            node = findMinOfMaxrigth(node.right);
            node.left = k.left;
            node.right.right =k.right;
            return node;
          function findMinOfMaxrigth(node) {
            if (!node.left) { 
              return node;
            } 
            else {
              return findMinOfMaxrigth(node.left);
            }
          }
        }
    } 
  }


  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};