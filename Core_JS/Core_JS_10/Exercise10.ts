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
  let i = -1;
  const Start = "(";
  const End = ")";
  const separator = ",";
  if (tree === "") throwError();

  function parseNodeVal() {
    let val = "";
    while (tree[i] !== separator && tree[i] !== End) {
      if (tree[i] === Start || tree[i] === undefined) {
        throwError();
      }
      val += tree[i];
      i++;
    }
    return val;
  }

  function parseNode(): Node | null {
    const node = new Node("");

    i++;

    if (tree[i] === separator || tree[i] === End) {
      return null;
    } else if (tree[i] === Start) {
      i++;
      node.value = parseNodeVal();
    } else {
      throwError();
    }
    if (tree[i] === End) {
      i++;
      return node;
    }

    node.left = parseNode();

    if (tree[i] === End) {
      i++;
      return node;
    }
    node.right = parseNode();
    if (tree[i] !== End) {
      throwError();
    }
    i++;
    return node;
  }

  const treeOutput = parseNode();

  if (tree[i] !== undefined) {
    throwError();
  }
  return treeOutput;
}

const throwError = () => {
  throw new Error("Syntax Error");
};
