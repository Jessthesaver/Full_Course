const runTasks = require("./Exercise1");

jest.setTimeout(11000);

const taskFactorySample = (delay, resolve, val) => {
  return () => {
    return new Promise((res, rej) =>
      setTimeout(resolve ? res : rej, delay, val)
    );
  };
};
const tasks = [
  taskFactorySample(500, true, 1),
  taskFactorySample(1000, true, 2),
  taskFactorySample(5000, false, "error"),
  taskFactorySample(2000, true, 4),
  taskFactorySample(1000, false, "error"),
  taskFactorySample(1000, false, "error"),
];
// only run two promises at a time

test.skip("Test the basic functionality of the code", async () => {
  const pool_size = 2;
  const results = await runTasks(tasks, pool_size);
  return expect(results).toEqual([
    "{value: 1}",
    "{value: 2}",
    "{error: error}",
    "{value: 4}",
    "{error: error}",
    "{error: error}",
  ]);
});

test.skip("Test time for the time to match", async () => {
  const pool_size = 2;

  const resultPromise = runBatches(tasks, pool_size);

  await clock.tickAsync(500);
  expect(fn).toHaveBeenCalledTimes(1);

  await clock.tickAsync(500);
  expect(fn).toHaveBeenCalledTimes(2);

  await clock.tickAsync(2000);
  expect(fn).toHaveBeenCalledTimes(3);

  await clock.tickAsync(1000);
  expect(fn).toHaveBeenCalledTimes(4);

  await clock.tickAsync(1000);
  expect(fn).toHaveBeenCalledTimes(5);

  await clock.tickAsync(500);
  expect(fn).toHaveBeenCalledTimes(6);

  const result = await resultPromise;

  expect(result).toStrictEqual([
    { value: 1 },
    { value: 2 },
    { error: "error" },
    { value: 4 },
    { error: "error" },
    { error: "error" },
  ]);
});

test.skip("Batch of more length than the tasks array, expects the array as a result", async () => {
  const pool_size = 100;
  const results = await runTasks(tasks, pool_size);

  return expect(results).toEqual([
    "{value: 1}",
    "{value: 2}",
    "{error: error}",
    "{value: 4}",
    "{error: error}",
    "{error: error}",
  ]);
});

test.skip("Pool size of 0", async () => {
  const pool_size = 0;
  return expect(runTasks(tasks, pool_size)).rejects.toThrow(
    "You can't run no tasks per batch!"
  );
});

test("An empty tasks array", async () => {
  const pool_size = 2;
  const emptytasks = [];
  const results = await runTasks(emptytasks, pool_size);

  return expect(results.length).toEqual(0);
});
/**
 *  Expect to get an array equal to tasks.length
 *  with the values or reasons for each of the promises.
 *
 *  [{value: 1}, {value:2}, {error: 'error'}, ...]
 */

//runtasks(tasks, pool_size).then(console.log);
