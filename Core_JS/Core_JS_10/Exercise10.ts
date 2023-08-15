class Node {
  left: null | Node;
  right: null | Node;
  value: any;
  constructor(value: any) {
    this.left = null; // left child node of the current node
    this.right = null;
    this.value = value;
  }
}

export default function printTree(tree: string, order?: string) {
  let array = [] as any[];

  const nodeTree = convertToNode(tree);

  switch (order) {
    case "prefix":
      array = prefixOrder(nodeTree);
      break;
    case "infix":
      array = infixOrder(nodeTree);
      break;
    case "postfix":
      array = postfixOrder(nodeTree);
      break;
    default:
      array = infixOrder(nodeTree);
  }
  return array;
}

function postfixOrder(node: Node | null): any[] {
  if (!node || node === null) {
    return [];
  }
  const arr = [];

  arr.push(...postfixOrder(node.left));
  arr.push(...postfixOrder(node.right));
  arr.push(node.value);

  return arr;
}

function infixOrder(node: null | Node): any[] {
  if (!node || node === null) {
    return [];
  }
  const arr = [];

  arr.push(...infixOrder(node.left));
  arr.push(node.value);
  arr.push(...infixOrder(node.right));

  return arr;
}

function prefixOrder(node: null | Node): any[] {
  if (!node || node === null) {
    return [];
  }
  const arr = [];

  arr.push(node.value);
  arr.push(...prefixOrder(node.left));
  arr.push(...prefixOrder(node.right));

  return arr;
}

function convertToNode(tree: string): Node | null {
  if (tree === "" || !/[A-Za-z0-9 -]/.test(tree)) {
    throwError();
  }

  let index = -1;

  const getValue = () => {
    let value = "";
    while (tree[index] !== ")" && tree[index] !== ",") {
      if (tree[index] === "(" || !tree[index]) {
        throwError();
      }

      value += tree[index];
      index++;
    }

    return value;
  };

  function createNode(): Node | null {
    index++;
    let root;

    if (tree[index] === ")" || tree[index] === ",") {
      return null;
    } else if (tree[index] === "(") {
      index++;
      root = new Node(getValue()) as Node;
    } else {
      throwError();
    }

    if (tree[index] === ")" && root) {
      index++;
      return root;
    }

    if (root) root.left = createNode();

    if (tree[index] !== ",") {
      throwError();
    } else if (tree[index] === ")" && root) {
      index++;
      return root;
    }

    if (root) root.right = createNode();
    if (tree[index] !== ")") {
      throwError();
    }

    index++;

    if (root) return root;
    return null;
  }

  const bTree = createNode();
  if (tree[index]) {
    throwError();
  }

  return bTree;
}

const throwError = () => {
  throw new Error("Syntax Error");
};
