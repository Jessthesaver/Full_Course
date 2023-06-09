const isSymmetric = (tree) => {
  const arrayTree = convertToArray(tree);

  const symmetry = traverseTree(arrayTree);

  return symmetry;
};

function traverseTree(arrayTree) {
  const queue = [];
  const [, left, right] = node;

  queue.unshift(left);
  queue.unshift(right);

  while (queue.length > 0) {
    let tempLeft = queue.pop();
    let tempRight = queue.pop();

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

const convertToArray = (tree) => {
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
};

module.exports = isSymmetric;
