const isSymmetric = (tree) => {
  const arrayTree = convertToArray(tree);

  const isSymmetic = traverseTree(arrayTree);

  return isSymmetic;
};

function traverseTree(arrayTree) {
  for (let level = 0; 2 ** (level + 1) - 1 <= arrayTree.length; level++) {
    let row = arrayTree.slice(2 ** level - 1, 2 ** (level + 1) - 1);

    const left = JSON.stringify(row);

    const right = JSON.stringify(row.map((e, i, a) => a[a.length - 1 - i]));

    if (left !== right) {
      return false;
    }
  }
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
