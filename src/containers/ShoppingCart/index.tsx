import { FC } from "react";
import { useProducts } from "../../api/cart.api";

import CartProducts from "./CartProducts";
import { prepareProducts } from "./shopping-cart-utils";

const ShoppingCart: FC = (): JSX.Element => {
  const { isLoading, error, data: products } = useProducts();

  return (
    <div className="shopping-cart-container">
      <div className="cart-page-title mb-20" data-testid="heading">
        My Cart
      </div>
      {isLoading && <div>Fetching Products...</div>}
      {products && <CartProducts products={prepareProducts(products)} />}
      {error && <div>An Error Occured {error.message}</div>}
    </div>
  );
};

export default ShoppingCart;
