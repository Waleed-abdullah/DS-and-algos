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
    if (!value) return 'Invalid input';

    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let pointer = this.root;
      while (true) {
        if (newNode.value <= pointer.value) {
          if (pointer.left === null) {
            pointer.left = newNode;
            break;
          } else {
            pointer = pointer.left;
          }
        } else {
          if (pointer.right === null) {
            pointer.right = newNode;
            break;
          } else {
            pointer = pointer.right;
          }
        }
      }
    }
  }
  lookup(value) {
    if (!value) return null;

    let pointer = this.root;
    while (pointer != null) {
      if (value <= pointer.value) {
        if (value === pointer.value) {
          return true;
        } else {
          pointer = pointer.left;
        }
      } else {
        pointer = pointer.right;
        if (value === pointer.value) {
          return true;
        }
      }
    }
    return false;
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root));
tree.lookup(1);
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
