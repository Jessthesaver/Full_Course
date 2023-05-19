const set = require("./Exercise_18");

test.skip("Basic test", () => {
  const obj = {
    name: "Mario",
    age: 30,
  };

  const newObj = set(obj, "path.to.deeply.nested.property", 42);
  console.log(newObj);
  expect(newObj).toMatchObject({
    name: "Mario",
    age: 30,
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
