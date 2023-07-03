export default function reverseBlocks(arr: number[], blockSize: number) {
  //arr subdivision in blocks
  if (blockSize > arr.length) {
    throw new Error("The blocks can´t be larger than the array");
  }
  if (blockSize === 0) {
    throw new Error("The blocks can´t be of size 0");
  }
  const n = arr.length;
  for (let i = 0; i < n; i += blockSize) {
    let left = i;
    let right = Math.min(i + blockSize - 1, n - 1);
    let temp;

    while (left < right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left += 1;
      right -= 1;
    }
  }
  return arr;
}
