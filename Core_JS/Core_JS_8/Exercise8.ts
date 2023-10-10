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

export function flattenImp(oldObj: any, parentName: string) {
  /* Your implementation goes here */
  let outputObj = {} as Object;
  type T = keyof typeof outputObj;
  for (let key in oldObj) {
    const newKey = (parentName ? `${parentName}_${key}` : key) as string;

    if (
      typeof oldObj[key] === "object" &&
      !Array.isArray(oldObj[key]) &&
      oldObj[key] !== null
    ) {
      outputObj = { ...outputObj, ...flattenImp(oldObj[key], newKey) };
    } else {
      outputObj[newKey as keyof typeof outputObj] = oldObj[key];
    }
  }
  return outputObj;
}

export function flattenFunc(obj: any, parentName = "") {
  const isObject = (instance: string) => typeof instance === "object";
  const isArray = (instance: string) => Array.isArray(instance);

  const newObj = Object.keys(obj).reduce((acc: any, i) => {
    type T = keyof typeof acc;
    const prefixKey = parentName.length ? `${parentName}_` : ``;
    if (isObject(obj[i]) && !isArray(obj[i]) && obj[i] !== null) {
      Object.assign(acc, flattenFunc(obj[i], prefixKey + i));
    } else {
      acc[`${prefixKey}${i}` as keyof typeof acc] = obj[i];
    }
    return acc;
  }, {});
  return newObj;
}
