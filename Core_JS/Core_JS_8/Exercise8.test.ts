import { flattenImp, flattenFunc } from "./Exercise8";

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

test("Test drive of the imperative algorithm", () => {
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

  const output = flattenImp(oldObj, "oldObj");
  const expectation = {
    oldObj_name: "Sara",
    oldObj_gender: "Apache Attack Helicopter",
    oldObj_address_location_city: "SF",
    oldObj_address_location_state: "CA",
    oldObj_address_preferredLocation_city: "SF",
    oldObj_address_preferredLocation_state: ["CA", "MN"],
    oldObj_address_other: undefined,
  };

  expect(output).toEqual(expectation);
});

test("Test drive of the functionality algorithm", () => {
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

  const output = flattenFunc(oldObj, "oldObj");
  const expectation = {
    oldObj_name: "Sara",
    oldObj_gender: "Apache Attack Helicopter",
    oldObj_address_location_city: "SF",
    oldObj_address_location_state: "CA",
    oldObj_address_preferredLocation_city: "SF",
    oldObj_address_preferredLocation_state: ["CA", "MN"],
    oldObj_address_other: undefined,
  };

  expect(output).toEqual(expectation);
});

test("A four levels object", () => {
  const oldObj = {
    name: "Sara",
    gender: "Apache Attack Helicopter",
    address: {
      location: {
        city: "SF",
        state: "CA",
        neighboorhood: {
          name: "test",
        },
      },
      preferredLocation: {
        city: "SF",
        state: ["CA", "MN"],
      },
      other: undefined,
    },
  };

  const output = flattenFunc(oldObj, "oldObj");
  const expectation = {
    oldObj_name: "Sara",
    oldObj_gender: "Apache Attack Helicopter",
    oldObj_address_location_city: "SF",
    oldObj_address_location_state: "CA",
    oldObj_address_location_neighboorhood_name: "test",
    oldObj_address_preferredLocation_city: "SF",
    oldObj_address_preferredLocation_state: ["CA", "MN"],
    oldObj_address_other: undefined,
  };

  expect(output).toEqual(expectation);
});

test("An already flat object", () => {
  const oldObj = {
    name: "Sara",
    gender: "Apache Attack Helicopter",
    address_location_city: "SF",
    address_location_state: "CA",
    address_location_neighboorhood_name: "test",
    address_preferredLocation_city: "SF",
    address_preferredLocation_state: ["CA", "MN"],
    address_other: undefined,
  };

  const expectation = {
    oldObj_name: "Sara",
    oldObj_gender: "Apache Attack Helicopter",
    oldObj_address_location_city: "SF",
    oldObj_address_location_state: "CA",
    oldObj_address_location_neighboorhood_name: "test",
    oldObj_address_preferredLocation_city: "SF",
    oldObj_address_preferredLocation_state: ["CA", "MN"],
    oldObj_address_other: undefined,
  };

  const output = flattenFunc(oldObj, "oldObj");

  expect(output).toEqual(expectation);
});

test("Test drive of the imperative algorithm with null properties", () => {
  const oldObj = {
    testProp: null,
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

  const output = flattenImp(oldObj, "oldObj");
  const expectation = {
    oldObj_testProp: null,
    oldObj_name: "Sara",
    oldObj_gender: "Apache Attack Helicopter",
    oldObj_address_location_city: "SF",
    oldObj_address_location_state: "CA",
    oldObj_address_preferredLocation_city: "SF",
    oldObj_address_preferredLocation_state: ["CA", "MN"],
    oldObj_address_other: undefined,
  };

  expect(output).toEqual(expectation);
});

test("Test drive of the functionality algorithm with a null property", () => {
  const oldObj = {
    testProp: null,
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

  const output = flattenFunc(oldObj, "oldObj");
  const expectation = {
    oldObj_testProp: null,
    oldObj_name: "Sara",
    oldObj_gender: "Apache Attack Helicopter",
    oldObj_address_location_city: "SF",
    oldObj_address_location_state: "CA",
    oldObj_address_preferredLocation_city: "SF",
    oldObj_address_preferredLocation_state: ["CA", "MN"],
    oldObj_address_other: undefined,
  };

  expect(output).toEqual(expectation);
});
