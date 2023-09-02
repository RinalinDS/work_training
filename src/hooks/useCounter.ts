import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(0);
  const onPlusClickHandler = useCallback(
    () => setCount((prevState) => prevState + 1),
    []
  );
  const onMinusClickHandler = useCallback(
    () => setCount((prevState) => prevState - 1),
    []
  );
  const onResetButtonHandler = useCallback(() => setCount(0), []);

  return {
    count,
    onMinusClickHandler,
    onPlusClickHandler,
    onResetButtonHandler,
  };
};
