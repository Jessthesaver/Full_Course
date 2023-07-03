export default function isSymmetric(tree: string) {
  const arrayTree = convertToArray(tree);

  const symmetry = traverseTree(arrayTree);

  return symmetry;
}

function traverseTree(arrayTree: any[]) {
  const queue = [];
  const [, left, right] = arrayTree;

  queue.unshift(left);
  queue.unshift(right);

  while (queue.length > 0) {
    let tempLeft = queue.pop() as any;
    let tempRight = queue.pop() as any;

    if (!tempLeft && !tempRight) {
      continue;
    }

    if ((!tempLeft && tempRight) || (tempLeft && !tempRight)) {
      return false;
    }

    const [valFromLeft, leftFromLeft, rightFromLeft] = tempLeft;
    const [valFromRight, leftFromRight, rightFromRight] = tempRight;

    if (valFromLeft !== valFromRight) return false;

    queue.unshift(leftFromLeft);
    queue.unshift(rightFromRight);

    queue.unshift(rightFromLeft);
    queue.unshift(leftFromRight);
  }

  if (queue.length > 0) return false;

  return true;
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
