const runTasks = async (tasks, batchSize) => {
  if (batchSize === 0) {
    throw new Error("You can't run no tasks per batch!");
  }
  const batch = Math.min(batchSize, tasks.length);
  const results = [];

  const tasksQueue = Array.from({ length: batch }, async () => {
    for (const [index, task] of tasks.entries()) {
      try {
        results[index] = `{value: ${await task()}}`;
      } catch (error) {
        results[index] = `{error: ${error}}`;
      }
    }
  });

  await Promise.all(tasksQueue);

  return results;
};
module.exports = runTasks;
