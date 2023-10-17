import { FC } from "react";
import { useQuery } from "react-query";

import CartProducts from "./CartProducts";
import { prepareProducts } from "./shopping-cart-utils";
import { fetchProducts } from "../../api/shopping-cart";

const ShoppingCart: FC = ():JSX.Element => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery("products", fetchProducts);

  return (
    <div className="shopping-cart-container">
      <div className="cart-page-title mb-20" data-testid="heading">
        My Cart
      </div>
      {isLoading && <div>Fetching Products...</div>}
      {products && <CartProducts products={prepareProducts(products)} />}
      {error && <p>An error has occured</p>}
    </div>
  );
};

export default ShoppingCart;
