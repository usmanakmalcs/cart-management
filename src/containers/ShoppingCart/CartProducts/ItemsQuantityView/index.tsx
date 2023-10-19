import React, { FC, useEffect, useRef, useState } from "react";
import Icon from "../../../../components/Icon";
import { formatCurrency, makeDeepCopy } from "../../../../utils/common-utils";

import "./style.css";
import {
  ProductItemType,
  ProductsType,
} from "../../../../types/shopping.cart.types";

type ItemsQuantityViewType = {
  product: ProductItemType;
  cartProducts: ProductsType;
  updateCart: (value: ProductsType) => void;
};

let timeoutRef: any;

const ItemsQuantityView: FC<ItemsQuantityViewType> = ({
  product,
  updateCart,
  cartProducts,
}) => {
  const { quantity, price } = product;
  const [productQuantity, setProductQuantity] = useState(quantity);

  useEffect(() => {
    if (product.quantity !== productQuantity) {
      setProductQuantity(product.quantity);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  const quantityRef = useRef(productQuantity);

  const updateCartDetails = () => {
    timeoutRef = setTimeout(() => {
      const cartItems = makeDeepCopy(cartProducts);
      const productIndex = cartItems.findIndex(
        (item: ProductItemType) => item.id === product.id
      );

      cartItems[productIndex].quantity = quantityRef.current;

      updateCart(cartItems);
      clearTimeout(timeoutRef);
      timeoutRef = null;
    }, 400);
  };

  const onChangeQuantity = (action: string) => {
    if(!productQuantity && action === "minus") return null;
    
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
          data-testid="remove-from-cart"
          className={quantity ? "pointer" : "disabled"}
          onClick={() => onChangeQuantity("minus")}
        />

        <div
          className="quantity-box font-14-normal-400-lh-18"
          data-testid="product-quantity"
        >
          {productQuantity}
        </div>

        <Icon
          type={"plus"}
          className={"pointer"}
          data-testid="add-to-cart"
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
