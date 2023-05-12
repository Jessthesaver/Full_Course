function flattenArrayRecursive(input) {
  let output = [];
  for (let element of input) {
    if (!Array.isArray(element)) {
      output.push(element);
    } else if (Array.isArray(element)) {
      output = [...output, ...flattenArrayRecursive(element)];
    }
  }
  return output;
}

function flattenArrayImperative(input) {
  let output = [];
  let temp = [...input];
  while (temp.length > 0) {
    let element = temp.shift();
    if (!Array.isArray(element)) {
      output.push(element);
    } else if (Array.isArray(element)) {
      temp.unshift.apply(temp, element);
    }
  }
  return output;
}

module.exports = {
  flattenArrayRecursive,
  flattenArrayImperative,
};
