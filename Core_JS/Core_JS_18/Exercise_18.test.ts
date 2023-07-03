import set from "./Exercise_18";

test("algorithm initial functionality, a simple success case", () => {
  const obj = {
    name: "Saver",
    age: 27,
  };

  const newObj = set(obj, "path.to.deeply.nested.property", 42);

  expect(newObj).toMatchObject({
    name: "Saver",
    age: 27,
    path: {
      to: {
        deeply: {
          nested: {
            property: 42,
          },
        },
      },
    },
  });
});

test("a property value triying to be overriden, should fail", () => {
  const obj = {
    name: "Saver",
    age: 27,
  };

  expect(() => set(obj, "age.path.to.deeply.nested.property", 42)).toThrow(
    Error
  );
});

test("the algorithm functionality for more than one adition, should success", () => {
  const obj = {
    name: "Saver",
    age: 27,
  };

  let newObj = set(obj, "path.to.deeply.nested.property", 42);

  newObj = set(newObj, "another.property.addition", 24);
  expect(newObj).toMatchObject({
    name: "Saver",
    age: 27,
    path: {
      to: {
        deeply: {
          nested: {
            property: 42,
          },
        },
      },
    },
    another: { property: { addition: 24 } },
  });
});
