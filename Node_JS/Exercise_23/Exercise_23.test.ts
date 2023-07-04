import { computePrimes, progressBar } from "./Exercise_23";
import readline from "readline";
import colors from "colors/safe";

test.skip("Initial algorithm functionality for a basic success case", () => {
  const N = 7;
  process.stdout.write = jest.fn();

  const primes = computePrimes(N);

  expect(primes).toEqual([2, 3, 5, 7, 11, 13, 17]);

  expect(process.stdout.write).toHaveBeenCalledWith("\n");
  expect(process.stdout.write).toHaveBeenCalledWith("2,3,5,7,11,13,17");
});

test("The correct behavior of the empty loading bar when called with an input of 0", () => {
  const N = 7;
  process.stdout.write = jest.fn();

  progressBar(0);

  expect(process.stdout.write).toHaveBeenCalledWith(
    colors.green(`\n`) + colors.red(`${"░".repeat(100)}`) + colors.blue(`${0}%`)
  );
});

test("The correct behavior of the loading bar with a given value(50% for this case)", () => {
  const N = 7;
  process.stdout.write = jest.fn();

  progressBar(0.5);

  expect(process.stdout.write).toHaveBeenCalledWith(
    colors.green(`\n${"▓".repeat(50)}`) +
      colors.red(`${"░".repeat(50)}`) +
      colors.blue(`${50}%`)
  );
});

test("The correct behavior of the loading bar when the loading is completed, with a 1 input", () => {
  const N = 7;
  process.stdout.write = jest.fn();

  progressBar(1);

  expect(process.stdout.write).toHaveBeenCalledWith(
    colors.green(`\n${"▓".repeat(100)}`) +
      colors.red(`${"░".repeat(0)}`) +
      colors.blue(`${100}%`)
  );
});
