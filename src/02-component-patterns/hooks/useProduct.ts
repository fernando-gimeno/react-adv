import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const DEFAULT_VALUE = 0;

export const useProduct = ({
  onChange,
  product,
  value,
  initialValues,
}: UseProductArgs) => {
  const initialValue = initialValues?.count || value || DEFAULT_VALUE;

  const [counter, setCounter] = useState<number>(initialValue);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValue);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value || initialValue);
  }, [value]);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    }
  }, []);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.maxCount && counter === initialValues?.maxCount,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
