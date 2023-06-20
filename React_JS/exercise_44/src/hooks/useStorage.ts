import { useEffect, useState, useCallback } from "react";

function useStorage<T>(key: string, initval: any, storage: any) {
  const readValue = useCallback((): T => {
    try {
      const item = storage.getItem(key);
      return item ? (JSON.parse(item) as T) : initval;
    } catch (error) {
      console.error(`Can´t read the storage key "${key}"`, error);
      return initval;
    }
  }, [initval, key]);

  const [storedVal, setStoredVal] = useState(readValue);

  useEffect(() => {
    setStoredVal(readValue());
  }, []);

  return [storedVal, setStoredVal];
}

export default useStorage;
