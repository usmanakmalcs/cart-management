import { useState } from "react";

import "../style.css";
import { calculateTotal } from "../shopping-cart-utils";
import { formatCurrency } from "../../../utils/common-utils";
import FlexItemContent from "../../../components/FlexItemContent";
import ItemsQuantityView from "./ItemsQuantityView";

const CartProducts = ({ products }) => {
  const [cartProducts, setCartProducts] = useState(products);

  return (
    <div className="cart-products-container">
      <div className="cart-products">
        {cartProducts.map((product) => {
          const { id, img, name, price } = product;
          return (
            <div className="flex gap-2 full-width cart-product-item" key={id}>
              <div className="image-container">
                <img src={img} alt="itemImage" />
              </div>

              <div className="full-width">
                <p className="weight-500">{name}</p>

                <FlexItemContent
                  label={"Product Price"}
                  content={formatCurrency(price, "PKR")}
                />

                <div className="mt-20 mb-20 border-divider" />

                <ItemsQuantityView
                  product={product}
                  cartProducts={cartProducts}
                  updateCart={setCartProducts}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-divider" />

      <div className="cart-total-view flex align-center justify-between">
        <div>Total</div>
        <div>{formatCurrency(calculateTotal(cartProducts), "PKR")}</div>
      </div>
    </div>
  );
};

export default CartProducts;
