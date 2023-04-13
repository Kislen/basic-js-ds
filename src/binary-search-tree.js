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
      if (!node) { return false; }
      if (data === node.data) { return true; }
      if (data < node.data) { return searchLeaf(node.left, data); }
      else { return searchLeaf(node.right, data); }
    }

  }

  find(data) {
    if (!this.has(data)) {
      return null;
    }
    return findData(this.rot, data);
    function findData(node, data) {
      if (node.data === data) {
        return node;
      }
      else if (node.data < data) {
        return findData(node.right, data);
      }
      else {
        return findData(node.left, data);
      }

    }
  }

  remove(data) {
    this.rot = removeNode(this.rot, data);

    function removeNode(node, data) {
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
        node = findMinOfMaxright(node.right);
        node.left = k.left;
        if (node.right) {
          node.right.right = k.right;
        }
        if (!node.right && k.right != node) {
          node.right = k.right;
        }
        return node;
        function findMinOfMaxright(node) {
          if (!node.left) {
            return node;
          }
          else {
            return findMinOfMaxright(node.left);
          }
        }
      }
    }
  }


  min() {
    return findMin(this.rot)
    function findMin(node) {
      if (!node) {
        return null;
      }
      if(!node.left) {
        return node.data;
      }
      else {
        return findMin(node.left);
      }
    }
  }

  max() {
    return findMax(this.rot)
    function findMax(node) {
      if (!node) {
        return null;
      }
      if(!node.right) {
        return node.data;
      }
      else {
        return findMax(node. right);
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};