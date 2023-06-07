const runTasks = async (tasks, batchSize) => {
  if (batchSize === 0) {
    throw new Error("You can't run no tasks per batch!");
  }
  const queue = [...tasks];
  const activeTasks = {};
  const batch = Math.min(batchSize, tasks.length);
  const results = [];

  while (queue.length > 0) {
    if (Object.keys(activeTasks).length < batchSize) {
      const task = queue.shift();
      const index = tasks.length - queue.length - 1;

      const solvedTasks = task()
        .then((value) => [index, { value }])
        .catch((error) => [index, { error }]);
      activeTasks[index] = solvedTasks;
    } else {
      const [index, value] = await Promise.race(Object.values(activeTasks));

      delete activeTasks[index];
      results[index] = value;
    }
  }

  const tasksQueue = await Promise.allSettled(Object.values(activeTasks));
  tasksQueue.forEach((element) => {
    results[element.value[0]] = element.value[1];
  });

  return results;
};
module.exports = runTasks;
