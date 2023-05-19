function set(obj, path, value) {
  const propertiesToAdd = path.split(".");

  const lastProp = propertiesToAdd.pop();

  const pointer = propertiesToAdd.reduce((acc, current) => {
    if (!acc[current]) acc[current] = {};

    return acc[current];
  }, obj);

  pointer[lastProp] = value;

  return obj;
}

module.exports = set;
