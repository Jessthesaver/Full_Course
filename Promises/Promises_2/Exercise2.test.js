const queryRetry = require("./Exercise2");
const fetch = require("node-fetch");

jest.setTimeout(15000);

const urlQuery = (url) => () => fetch(url);

const maxRetry = 3;
const useIncrement = true;
const delay = 1000;

/**
 * perform query successfully once or try up to a maximum of maxRetry times
 * if unsuccessful, delay the next attempt for an amount of time. If attempts
 * continue to fail then increase the delay between attempts if useIncrements
 * is set to true.
 */

test("Success at first attempt", () => {
  expect.assertions(1);

  return expect(
    queryRetry(
      urlQuery("https://jsonplaceholder.typicode.com/todos/1"),
      maxRetry,
      delay,
      useIncrement
    )
  ).resolves.toBeTruthy();
});

const successOnSecondCall = () => {
  let numberOfCall = 0;

  return () => {
    numberOfCall++;

    return new Promise((res, rej) =>
      setTimeout(numberOfCall > 1 ? res : rej, 1000, "success")
    );
  };
};

test.skip("Succeed on 2nd attempt", async () => {
  let query = successOnSecondCall();

  const res = await queryRetry(query, maxRetry, delay, useIncrement);
  expect(res).toEqual("success");
});

const successOnThirdCall = () => {
  let numberOfCall = 0;

  return () => {
    numberOfCall++;

    return new Promise((res, rej) =>
      setTimeout(numberOfCall > 2 ? res : rej, 1000, "success")
    );
  };
};

test.skip("Succeed on 3rd attempt", async () => {
  let query = successOnThirdCall();

  const res = await queryRetry(query, maxRetry, delay, useIncrement);
  expect(res).toEqual("success");
});

test.skip("Fail at n attempts", async () => {
  const res = await queryRetry(
    urlQuery("https://jsonplaceholder.tpicode.com/todos/1"),
    maxRetry,
    delay,
    useIncrement
  ).catch((err) => {
    expect(err.message).toMatch("Query retries exceeded");
  });
});

test.skip("Check delay increment", async () => {
  let start = new Date().getTime();
  let totalTime;
  try {
    await queryRetry(
      urlQuery("https://jsonplaceholder.tpicode.com/todos/1"),
      maxRetry,
      delay,
      useIncrement
    );
  } catch (e) {
    totalTime = new Date().getTime() - start;
  }
  expect(totalTime).toBeGreaterThanOrEqual(2000);
  expect(totalTime).toBeLessThan(14500);
  return;
});

test.skip("Check delay without increment.", async () => {
  let start = new Date().getTime();
  let totalTime;
  try {
    await queryRetry(
      urlQuery("https://jsonplaceholder.tpicode.com/todos/1"),
      maxRetry,
      delay,
      false
    );
  } catch (error) {
    totalTime = new Date().getTime() - start;
  }
  expect(totalTime).toBeGreaterThanOrEqual(2000);
  expect(totalTime).toBeLessThan(3500);
  return;
});
// queryRetry(urlQuery("some/url"), maxRetry, delay, useIncrement)
//   .then(handleSuccess)
//   .catch(handleErrorOrMaxRetryExceeded);
