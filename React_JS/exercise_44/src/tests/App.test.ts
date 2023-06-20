import { clear } from "idb-keyval";
import "fake-indexeddb/auto";
import { act, renderHook } from "@testing-library/react";
import useIndexedDB from "../hooks/useIndexDB";
import useLocalStorage from "../hooks/useLocalStorage";
import useSession from "../hooks/useSession";
describe("useIndexDB tests", () => {
  beforeEach(() => {
    clear();
  });
  test("Basic test", async () => {
    const initialData = {
      prop1: 134,
      prop2: "John",
    };

    const { result }: any = renderHook(() => useIndexedDB("key", initialData));

    const [item] = result.current;

    expect(item).toStrictEqual(initialData);
  });

  test("Modifing data", async () => {
    const initialData = {
      prop1: 134,
      prop2: "John",
    };

    const { result }: any = renderHook(() => useIndexedDB("info", initialData));

    expect(result.current[0]).toStrictEqual(initialData);

    const updatedData = {
      prop1: 134,
      prop2: "Max",
    };

    act(() => {
      result.current[1](updatedData);
    });

    expect(result.current[0]).toStrictEqual(updatedData);
  });
});

describe("Local Storage tests", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("Setting a new data to store and changing something else", () => {
    const someConfig = {
      username: "Jonh",
      lang: "en",
    };

    const { result }: any = renderHook(() =>
      useLocalStorage("test", someConfig)
    );

    act(() => {
      result.current[1]({
        username: "Jonh",
        lang: "fr",
      });
    });

    expect(result.current[0]).toStrictEqual({
      username: "Jonh",
      lang: "fr",
    });
  });
});

describe("Tests for the session storage", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  test("Setting a new data to store and changing something else", () => {
    const someConfig = {
      username: "Jonh",
      lang: "en",
    };

    const { result }: any = renderHook(() => useSession("test", someConfig));

    act(() => {
      result.current[1]({
        username: "Jhon",
        lang: "fr",
      });
    });

    expect(result.current[0]).toStrictEqual({
      username: "Jhon",
      lang: "fr",
    });
  });
});
