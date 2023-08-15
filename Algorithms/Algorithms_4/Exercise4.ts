export default function mergeArrays(
  largeArray: number[],
  smallArray: number[]
) {
  let largeArrayIndex = largeArray.length - 1;
  let smallArrayIndex = smallArray.length - 1;

  let differenceIndex = largeArrayIndex - smallArrayIndex - 1;
  let i = largeArrayIndex;

  while (i >= 0) {
    largeArray[differenceIndex] > smallArray[smallArrayIndex]
      ? (([largeArray[i], largeArray[differenceIndex]] = [
          largeArray[differenceIndex],
          largeArray[i],
        ]),
        differenceIndex--)
      : (([largeArray[i], smallArray[smallArrayIndex]] = [
          smallArray[smallArrayIndex],
          largeArray[i],
        ]),
        smallArrayIndex--);

    if (smallArrayIndex < 0) break;
    i--;
  }

  return largeArray;
}
