export default function set(obj: any, path: string, value: any) {
  const propertiesToAdd = path.split(".");

  const lastProp = propertiesToAdd.pop() as string;

  const pointer = propertiesToAdd.reduce((acc, current) => {
    if (!acc[current]) acc[current] = {};

    return acc[current];
  }, obj);

  pointer[lastProp] = value;

  return obj;
}
