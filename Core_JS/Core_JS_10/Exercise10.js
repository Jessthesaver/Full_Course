//Given a representation of a binary tree, implement a function that can traverse all nodes in prefix, infix, and postfix order

/** Tree:
 *              A
 *            /   \
 *           B     C
 *         /  \   /  \
 *        D    E F    G
 *              / \    \
 *             H   I    J
 */
const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";
/**
 * (VAL, LN, RN)
 * VAL = Value [A-Za-z0-9]+
 * LN = Left Node
 * RN = Right Node
 */

function printTree(tree, order) {
  let array = [];

  const isValidTree = checkTree(tree);

  if (!isValidTree) throw new Error("Syntax Error");

  const arrayTree = arrayConverter(tree);

  switch (order) {
    case "prefix":
      array = prefixOrder(arrayTree, array);
      break;
    case "infix":
      array = infixOrder(arrayTree, array);
      break;
    case "postfix":
      array = postfixOrder(arrayTree, array);
      break;
    default:
      array = infixOrder(arrayTree, array);
  }
  return array;
}

function postfixOrder(tree, arr) {
  const [root, left, right] = tree;

  if (root) {
    if (left) {
      postfixOrder(left, arr);
    }

    if (right) {
      postfixOrder(right, arr);
    }

    arr.push(root);
  }

  return arr;
}

function infixOrder(tree, arr) {
  const [root, left, right] = tree;
  if (root) {
    if (left) {
      infixOrder(left, arr);
    }

    arr.push(root);

    if (right) {
      infixOrder(right, arr);
    }
  }
  return arr;
}

function prefixOrder(tree, arr) {
  const [root, left, right] = tree;
  if (root) {
    arr.push(root);
    if (left) {
      prefixOrder(left, arr);
    }
    if (right) {
      prefixOrder(right, arr);
    }
  }
  return arr;
}

function arrayConverter(tree) {
  let temp = "";
  let open = true;

  for (let i = 0; i < tree.length; i++) {
    if ((tree[i] === ")" || tree[i] === ",") && open) {
      temp += `"`;
      open = false;
    }

    if (tree[i] === ",") {
      temp += ",";
    } else if (tree[i] === "(") {
      temp += `["`;
      open = true;
    } else if (tree[i] === ")") {
      temp += `]`;
      open = false;
    } else {
      temp += tree[i];
    }
  }
  const arrTree = eval(temp);
  return arrTree;
}

function checkTree(tree) {
  if (tree.length < 1) return true;

  if (tree.length === 1) return false;

  if (tree[0] !== "(" || tree[tree.length - 1] !== ")") return false;

  let cleanTree = tree.slice(1, -1);

  let internal = cleanTree.split(",");

  if (
    internal[internal.length - 1].includes("(") &&
    !internal[internal.length - 1].includes(")")
  ) {
    return false;
  }

  if (!internal[0]) {
    internal = internal.filter((p) => p);

    if (internal.length >= 1 || internal.length === 0) return false;
  }

  if (
    internal.length > 1 &&
    !internal[1] &&
    internal[2] &&
    (!cleanTree.includes("(") || !cleanTree.includes(")"))
  ) {
    return false;
  } else if (
    internal.length > 2 &&
    !internal[1] &&
    !internal[2] &&
    internal[3]
  ) {
    return false;
  } else if (internal.length > 2 && !internal[1] && !internal[2]) {
    return false;
  }

  let root = cleanTree.split(",")[0];
  if (root.includes("(") || root.includes(")")) return false;

  return true;
}

module.exports = printTree;
