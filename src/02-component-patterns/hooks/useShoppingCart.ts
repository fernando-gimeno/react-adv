import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    console.log({ count });
    
    setShoppingCart((prevShoppingCart) => {
      if (count === 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [product.id]: _, ...rest } = prevShoppingCart;

        return {
          ...rest,
        };
      }

      return {
        ...prevShoppingCart,
        [product.id]: {
          ...product,
          count,
        },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
