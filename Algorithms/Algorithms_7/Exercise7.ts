export default function longestRunOfTwoNumbers(input: string) {
  if (/^\d+$/.test(input) !== true) {
    throw new Error("The string contains non numerical characters");
  }
  let start = 0;
  let count = {
    [input[0]]: 1,
  };
  let i = 0;
  let out = input[0];

  let tempStart = 0 as number;
  let tempi = 0;

  let counterKey = 1;

  while (i < input.length) {
    if (counterKey > 2) {
      count[input[start]]--;
      if (count[input[start]] === 0) {
        counterKey--;
      }

      start++;
    }

    if (counterKey < 3) {
      tempStart = start as number;
      tempi = i;
    }
    i++;
    if (!count[input[i]]) {
      counterKey++;
    }

    count[input[i]] = (count[input[i]] ?? 0) + 1;
  }
  out = input.substring(tempStart, tempi + 1);

  return out;
}
