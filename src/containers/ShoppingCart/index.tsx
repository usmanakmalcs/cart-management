import { FC } from "react";
import { useQuery } from "react-query";

import { fetchProducts } from "../../api/shopping-cart";
import { ProductsType } from "../../types/shopping.cart.types";

import CartProducts from "./CartProducts";
import { prepareProducts } from "./shopping-cart-utils";
import { ApiServiceErr } from "../../types/api.types";


const ShoppingCart: FC = ():JSX.Element => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery<ProductsType, ApiServiceErr>("products", fetchProducts);

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
