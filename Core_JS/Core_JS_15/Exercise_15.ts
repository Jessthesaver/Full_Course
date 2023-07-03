export default function findIndexElement(array: number[]) {
  let rightSum = 0;
  let leftSum = 0;
  let rightIndex = array.length - 1;
  let leftIndex = 0;

  if (rightIndex === leftIndex) {
    return -1;
  }

  while (leftIndex - rightIndex <= 0) {
    if (leftSum > rightSum) {
      rightSum += array[rightIndex];
      rightIndex--;
    } else {
      leftSum += array[leftIndex];
      leftIndex++;
    }

    if (rightSum === leftSum) {
      return rightIndex;
    }
  }
  return -1;
}
