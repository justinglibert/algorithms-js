import BST from './data-structures/binary-tree';



const testBST = () => {
  const bst = new BST();
  
  bst.insert(4);
  bst.insert(2);
  bst.insert(6);
  bst.insert(1);
  bst.insert(3);
  bst.insert(5);
  bst.insert(7);
  
  bst.getMin();
  bst.getMax();
  
  console.log(bst.find(3));
  
  console.log(bst);
}

testBST();
