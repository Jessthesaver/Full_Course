//Implement the flatten function that will produce the expected output. Create solutions with an imperative and a functional style approach
const oldObj = {
  name: "Sara",
  gender: "Apache Attack Helicopter",
  address: {
    location: {
      city: "SF",
      state: "CA",
    },
    preferredLocation: {
      city: "SF",
      state: ["CA", "MN"],
    },
    other: undefined,
  },
};

function flattenImp(oldObj, parentName) {
  /* Your implementation goes here */
  let outputObj = {};
  for (let key in oldObj) {
    const newKey = parentName ? `${parentName}_${key}` : key;

    if (
      typeof oldObj[key] === "object" &&
      !Array.isArray(oldObj[key]) &&
      oldObj[key] !== null
    ) {
      outputObj = { ...outputObj, ...flattenImp(oldObj[key], newKey) };
    } else {
      outputObj[newKey] = oldObj[key];
    }
  }
  return outputObj;
}

function flattenFunc(obj, parentName = "") {
  const isObject = (instance) => typeof instance === "object";
  const isArray = (instance) => Array.isArray(instance);

  const newObj = Object.keys(obj).reduce((acc, i) => {
    const prefixKey = parentName.length ? `${parentName}_` : ``;
    if (isObject(obj[i]) && !isArray(obj[i]) && obj[i] !== null) {
      Object.assign(acc, flattenFunc(obj[i], prefixKey + i));
    } else {
      acc[`${prefixKey}${i}`] = obj[i];
    }
    return acc;
  }, {});
  return newObj;
}

module.exports = { flattenImp, flattenFunc };
