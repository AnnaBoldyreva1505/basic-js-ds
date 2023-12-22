const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this.addData(this.rootNode, data);
  }

  addData(node, data) {
    if (node === null) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this.addData(node.left, data);
    } else if (data > node.data) {
      node.right = this.addData(node.right, data);
    }

    return node;
  }

  has(data) {
    return this.hasData(this.rootNode, data);
  }

  hasData(node, data) {
    if (node === null) {
      return false;
    }

    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this.hasData(node.left, data);
    } else {
      return this.hasData(node.right, data);
    }
  }

  find(data) {
    return this.findData(this.rootNode, data);
  }

  findData(node, data) {
    if (node === null || node.data === data) {
      return node;
    }

    if (data < node.data) {
      return this.findData(node.left, data);
    } else {
      return this.findData(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this.removeData(this.rootNode, data);
  }

  removeData(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      node.data = this.findMin(node.right);
      node.right = this.removeData(node.right, node.data);
    } else if (data < node.data) {
      node.left = this.removeData(node.left, data);
    } else {
      node.right = this.removeData(node.right, data);
    }

    return node;
  }

  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }

    let current = this.rootNode;
    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }

    let current = this.rootNode;
    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};