class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let node = new Node(data);

    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;
    let parent;

    while (true) {
      parent = current;
      if (data > current.data) {
        current = current.right;
        if (current === null) {
          parent.right = node;
          break;
        }
      } else {
        current = current.left;
        if (current === null) {
          parent.left = node;
          break;
        }
      }
    }
  }
  getMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }
  getMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current;
  }
  find(data) {
    let current = this.root;
    while (data !== current.data) {
      if (data > current.data) {
        current = current.right;
      } else {
        current = current.left;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
}

export default BST;
