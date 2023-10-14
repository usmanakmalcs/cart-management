import { useRef, useState } from "react";
import Icon from "../../../../components/Icon";
import { formatCurrency, makeDeepCopy } from "../../../../utils/common-utils";

import "./style.css";

let timeoutRef = null;

const ItemsQuantityView = ({ product, updateCart, cartProducts }) => {
  const { quantity, price } = product;
  const [productQuantity, setProductQuantity] = useState(quantity);
  const quantityRef = useRef(productQuantity);

  const updateCartDetails = () => {
    timeoutRef = setTimeout(() => {
      const cartItems = makeDeepCopy(cartProducts);
      const productIndex = cartItems.findIndex(
        ({ id }) => id === product.id
      );

      cartItems[productIndex].quantity = quantityRef.current;

      updateCart(cartItems);
      clearTimeout(timeoutRef);
      timeoutRef = null;
    }, 400);
  };
  const onChangeQuantity = (action) => {
    const itemQuantity =
      action === "minus" ? productQuantity - 1 : productQuantity + 1;

    setProductQuantity(itemQuantity);
    quantityRef.current = itemQuantity;

    if (timeoutRef) {
      clearTimeout(timeoutRef);
      timeoutRef = null;
      updateCartDetails();
    } else {
      updateCartDetails();
    }
  };

  return (
    <div className="flex-item-between">
      <div className="quantity-buttons">
        <Icon
          type={"minus"}
          className={quantity ? "pointer" : "disabled"}
          onClick={() => onChangeQuantity("minus")}
        />

        <div className="quantity-box font-14-normal-400-lh-18">
          {productQuantity}
        </div>

        <Icon
          type={"plus"}
          className={"pointer"}
          onClick={() => onChangeQuantity("plus")}
        />
      </div>

      <div className="quantity-price-view">
        {formatCurrency(productQuantity * price, "PKR")}
      </div>
    </div>
  );
};

export default ItemsQuantityView;
