import { useEffect, useState } from "react";
import { IShape } from "types/ContextTypes";

function useLocalStorage(key: string, initial: IShape) {
  const [val, setVal] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [key, val]);

  return [val, setVal];
}

export default useLocalStorage;