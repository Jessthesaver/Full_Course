import { useEffect, useState } from "react";
import { get, set } from "idb-keyval";

const useIndexDB = (key: string, initVal: any) => {
  const [value, setValue] = useState(initVal);

  useEffect(() => {
    (async () => {
      try {
        const saved = await get(key);
        if (saved) {
          setValue(saved);
        }
      } catch (e: any) {
        console.error("Error getting value", e);
      }
    })();
  }, []);

  useEffect(() => {
    set(key, () => value);
  }, [value, key]);
  return [value, setValue];
};

export default useIndexDB;
