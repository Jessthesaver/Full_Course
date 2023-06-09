const { computePrimes, progressBar } = require("./Exercise_23");
const readline = require("readline");
const colors = require("colors/safe");

test.skip("Test for the algorithm functionality", () => {
  const N = (process.argv[2] = 7);
  process.stdout.write = jest.fn();

  const primes = computePrimes(N);

  expect(primes).toEqual([2, 3, 5, 7, 11, 13, 17]);

  expect(process.stdout.write).toHaveBeenCalledWith("\n");
  expect(process.stdout.write).toHaveBeenCalledWith("2,3,5,7,11,13,17");
});

test("Test the correct behavior of the empty loading bar", () => {
  const N = (process.argv[2] = 7);
  process.stdout.write = jest.fn();

  progressBar(0);

  expect(process.stdout.write).toHaveBeenCalledWith(
    colors.green(`\n`) + colors.red(`${"░".repeat(100)}`) + colors.blue(`${0}%`)
  );
  //progressBar(0.5);
  //expect(process.stdout.write).toHaveBeenCalledWith();
  //progressBar(1);

  //expect(process.stdout.write).toHaveBeenCalledWith();
});

test("Test the correct behavior of the loading bar with a given value(50% for this case)", () => {
  const N = (process.argv[2] = 7);
  process.stdout.write = jest.fn();

  progressBar(0.5);

  expect(process.stdout.write).toHaveBeenCalledWith(
    colors.green(`\n${"▓".repeat(50)}`) +
      colors.red(`${"░".repeat(50)}`) +
      colors.blue(`${50}%`)
  );
});

test("Test the correct behavior of the loading bar when the loading is completed", () => {
  const N = (process.argv[2] = 7);
  process.stdout.write = jest.fn();

  progressBar(1);

  expect(process.stdout.write).toHaveBeenCalledWith(
    colors.green(`\n${"▓".repeat(100)}`) +
      colors.red(`${"░".repeat(0)}`) +
      colors.blue(`${100}%`)
  );
});
