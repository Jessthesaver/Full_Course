const maxAreaHistogram = (histogram) => {
  let maxArea = 0;

  for (let i = 0; i < histogram.length; i++) {
    for (let j = i; j < histogram.length; j++) {
      minHeight = Math.min(histogram[i], histogram[j]);
      for (let k = i; k < j; k++) {
        minHeight = Math.min(minHeight, histogram[k]);
      }

      maxArea = Math.max(maxArea, minHeight * (j - i + 1));
    }
  }
  return maxArea;
};

const maxRectangle = (matrix) => {
  let maxArea = 0;

  if (matrix.length === 0) {
    return maxArea;
  }

  let histogram = [...matrix[0]].map((p) => 0);

  for (let row of matrix) {
    row.map((element, index) => {
      if (element === 0) {
        histogram[index] = 0;
      } else {
        histogram[index] += element;
      }
    });
    maxArea = Math.max(maxArea, maxAreaHistogram(histogram));
  }

  return maxArea;
};

module.exports = maxRectangle;
