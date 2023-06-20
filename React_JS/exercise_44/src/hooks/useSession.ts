import useStorage from "./useStorage";

function useSession(key: string, initVal: any) {
  return useStorage(key, initVal, sessionStorage);
}

export default useSession;
