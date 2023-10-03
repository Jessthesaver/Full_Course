export default function isSameLevel(tree: string, n1: string, n2: string) {
  let level = 0;
  const array = [] as any[];

  if (!tree) {
    return "Invalid Tree structure";
  }

  const arrayTree = convertToArray(tree);

  if (arrayTree?.length <= 1) {
    return "Numbers not found at the same level";
  }

  const stringArray = JSON.stringify(arrayTree);

  const sameLevel = prefixOrder(arrayTree, array, level, n1, n2);

  if (!stringArray.includes(n1) || !stringArray.includes(n2)) {
    return "Not in tree";
  }

  if (sameLevel[0] === sameLevel[1]) {
    return "Numbers found at the same level";
  } else if (sameLevel[0] !== sameLevel[1]) {
    return "Numbers not found at the same level";
  }
}

function prefixOrder(
  tree: any[],
  array: any[],
  level: number,
  n1: string,
  n2: string
) {
  const [root, left, right] = tree;

  if (root) {
    if (root === n1 || root === n2) {
      array.push(level);
    }
    level++;
    if (left) {
      prefixOrder(left, array, level, n1, n2);
    }
    if (right) {
      prefixOrder(right, array, level, n1, n2);
    }
  }
  return array;
}

function convertToArray(tree: string) {
  let temp = "";
  let isOpen = true;

  for (let i = 0; i < tree.length; i++) {
    if ((tree[i] === ")" || tree[i] === ",") && isOpen) {
      temp += `"`;
      isOpen = false;
    }

    if (tree[i] === ",") {
      temp += ",";
    } else if (tree[i] === "(") {
      temp += '["';
      isOpen = true;
    } else if (tree[i] === ")") {
      temp += "]";
      isOpen = false;
    } else {
      temp += tree[i];
    }
  }

  const arrayTree = eval(temp);

  return arrayTree;
}
