import { useCallback, useState } from "react";

export const useCount = (defaultCountValue = 0) => {
  const [count, setCount] = useState(defaultCountValue);

  const increment = useCallback(
    () => setCount((currentCount) => currentCount + 1),
    []
  );

  const decrement = useCallback(
    () => setCount((currentCount) => currentCount - 1),
    []
  );

  return { count, increment, decrement };
};

export default useCount;
