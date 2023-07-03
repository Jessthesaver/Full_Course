import { type } from "os";

const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

export default function printTree(tree: string, order?: string) {
  let array = [] as any[];

  const { index, data: arrayTree } = convertToArray(tree, 0);

  if (index !== tree.length - 1) throwError();

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

function postfixOrder(tree: any[], arr: any[]) {
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

function infixOrder(tree: any[], arr: any[]) {
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

function prefixOrder(tree: any[], arr: any[]) {
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

function convertToArray(tree: string, startIndex: number): any {
  if (tree[startIndex] === ",") {
    return { index: startIndex - 1, data: null };
  }
  if (tree[startIndex] === ")" && startIndex === tree.length - 1)
    return { index: startIndex - 1, data: null };
  if (tree[startIndex] !== "(") throwError();

  let i = startIndex + 1;

  for (; i < tree.length && tree[i] !== ","; i++) {
    if (tree[i] === ")") {
      const element = Array.from(tree.substring(startIndex + 1, i));

      return { index: i, data: element };
    } else if (tree[i] === "(") {
      throwError();
    }
  }

  if (i === tree.length - 1 && tree[i] !== ")") {
    throwError();
  }

  const root = tree.substring(startIndex + 1, i);

  if (!root) {
    throwError();
  }

  let { index, data: firstChildData } = convertToArray(tree, i + 1);

  if (tree[index + 1] === ")") {
    return { index: index + 1, data: [root, firstChildData] };
  }

  if (tree[index + 1] !== ",") {
    throwError();
  }

  const { index: secondChildIndex, data: seconChildData } = convertToArray(
    tree,
    index + 2
  );
  index = secondChildIndex;

  if (tree[index + 1] !== ")") throwError();

  return { index: index + 1, data: [root, firstChildData, seconChildData] };
}

const throwError = () => {
  throw new Error("Syntax Error");
};
