export function flattenArrayRecursive(input: any[]) {
  let output = [] as any[];
  for (let element of input) {
    if (!Array.isArray(element)) {
      output.push(element);
    } else if (Array.isArray(element)) {
      output = [...output, ...flattenArrayRecursive(element)];
    }
  }
  return output;
}

export function flattenArrayImperative(input: any[]) {
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
