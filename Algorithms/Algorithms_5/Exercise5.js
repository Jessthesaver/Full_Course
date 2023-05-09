//Write a function that will reverse N sized blocks of an array.

function reverseBlocks(arr, blockSize) {
  //arr subdivision in blocks
  if (blockSize > arr.length) {
    throw new Error();
  }
  let blocks = [];
  for (let i = 0; i < arr.length; i += blockSize) {
    blocks.push(arr.slice(i, i + blockSize));
  }
  //each block is inverted
  blocks.forEach((block) => {
    block.reverse();
  });
  let output = blocks.flat();

  return output;
  //return a merged output
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const blockSize = 3;
reverseBlocks(arr, blockSize);
/**
 * Expected result:
 * [2,1,0,5,4,3,8,7,6,9]
 */
module.exports = reverseBlocks;
