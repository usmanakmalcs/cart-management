import { useState } from "react";

import "../style.css";
import { calculateTotal } from "../shopping-cart-utils";
import { formatCurrency } from "../../../utils/common-utils";

const CartProducts = ({ products }) => {
  const [cartProducts, setCartProducts] = useState(products);

  return (
    <div className="cart-products-container">
      <div className="cart-products">
        {cartProducts.map((item) => {
          return (
            <div className="flex gap-2 mb-20 full-width" key={item.id}>
              <div className="image-container">
                <img src={item.img} alt="itemImage" />
              </div>
              <div className="full-width">
                <p className="weight-500">{item.name}</p>
                <div className="flex align-center justify-between">
                  <div>Price</div>
                  <div>{formatCurrency(item.price, "PKR")}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-20 border-divider" />

      <div className="cart-total-view flex align-center justify-between">
        <div>Total</div>
        <div>{formatCurrency(calculateTotal(cartProducts), "PKR")}</div>
      </div>
    </div>
  );
};

export default CartProducts;
