/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return validate(root, null, null);
};

const validate = (root, low, high) => {
  if (root === null) return true; //empty trees are valid BSTs

  // The current node's value must be between low and high.
  if ((low != null && root.val <= low) || (high != null && root.val >= high)) {
    return false;
  }
  // The left and right subtree must also be valid.
  return (
    validate(root.right, root.val, high) && validate(root.left, low, root.val)
  );
};

//or
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root, low = null, high = null) {
  if (root === null) return true; //empty trees are valid BSTs

  // The current node's value must be between low and high.
  if ((low != null && root.val <= low) || (high != null && root.val >= high)) {
    return false;
  }
  // The left and right subtree must also be valid.
  return (
    isValidBST(root.right, root.val, high) &&
    isValidBST(root.left, low, root.val)
  );
};
