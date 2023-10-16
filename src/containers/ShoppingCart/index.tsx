import React, { FC } from "react";

import useFetch from "../../hooks/useFetch";
import CartProducts from "./CartProducts";
import { prepareProducts } from "./shopping-cart-utils";

const ShoppingCart:FC = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch(
    "https://my-json-server.typicode.com/benirvingplt/products/products"
  );

  return (
    <div className="shopping-cart-container">
      <div className="cart-page-title mb-20" data-testid="heading">
        My Cart
      </div>
      {loading && <div>Fetching Products...</div>}
      {products && <CartProducts products={prepareProducts(products)} />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ShoppingCart;
