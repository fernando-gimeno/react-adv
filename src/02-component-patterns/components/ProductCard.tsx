import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import {
  Product,
  ProductContextProps,
  OnChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  // children?: React.ReactElement | React.ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  product: Product;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, maxCount, isMaxCountReached, reset, increaseBy } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
