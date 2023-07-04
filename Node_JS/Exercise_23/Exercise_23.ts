#!/usr/bin/env node
import readline from "readline";
import colors from "colors/safe";

export function computePrimes(N: number) {
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
}

export function isPrime(n: number) {
  if (n === 1 || n === 0) return false;

  const max = Math.sqrt(n);

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter == 0) {
      return false;
    }
  }

  return true;
}

export function progressBar(progress: number) {
  const size = 100;

  let totalProgress = progress * size;

  const empty = "░".repeat(size - totalProgress);

  const fill = "▓".repeat(totalProgress);

  readline.cursorTo(process.stdout, 0, 0);

  process.stdout.write(
    colors.green(`\n${fill}`) +
      colors.red(`${empty}`) +
      colors.blue(`${totalProgress}%`)
  );
}

progressBar(1);

const input = parseInt(process.argv[2]);

computePrimes(input);
