#!/usr/bin/env node
const readline = require("readline");
const colors = require("colors/safe");

const computePrimes = (N) => {
  progressBar(0);

  let progress = 0;
  let count = 0;

  let i = 2;

  let primes = [];

  while (count < N) {
    if (isPrime(i)) {
      primes.push(i);

      progress = count / N;

      count++;

      progressBar(progress);
    }

    i++;
  }

  progressBar(1);

  const primeStr = primes.toString();

  process.stdout.write("\n");
  process.stdout.write(primeStr);

  return primes;
};

const isPrime = (n) => {
  if (n === 1 || n === 0) return false;

  const max = Math.sqrt(n);

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter == 0) {
      return false;
    }
  }

  return true;
};

const progressBar = (progress, primes = "") => {
  const size = 100;

  let totalProgress = parseInt(progress * size);

  const empty = "░".repeat(size - totalProgress);

  const fill = "▓".repeat(totalProgress);

  readline.cursorTo(process.stdout, 0, 0);

  process.stdout.write(
    colors.green(`\n${fill}`) +
      colors.red(`${empty}`) +
      colors.blue(`${totalProgress}%`)
  );
};

progressBar(1);

const input = process.argv[2];
computePrimes(input);

module.exports = {
  computePrimes,
  isPrime,
  progressBar,
};
