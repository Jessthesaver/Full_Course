import useStorage from "./useStorage";

const useLocalStorage = (key: string, initVal: any) => {
  return useStorage(key, initVal, localStorage);
};

export default useLocalStorage;
