import { useState } from "react";


import {
  applyColorFilter,
  calculateTotal,
  colorFilterOptions,
} from "../shopping-cart-utils";

import { formatCurrency } from "../../../utils/common-utils";
import FlexItemContent from "../../../components/FlexItemContent";

import ItemsQuantityView from "./ItemsQuantityView";
import DeleteCart from "./DeleteCart";
import ColorFilter from "./ColorFilter";

import "../style.css";

const CartProducts = ({ products }) => {
  const [cartProducts, setCartProducts] = useState(products);
  const [colorFilter, setColorFilter] = useState("");

  const onChangeFilter = (filterValue) => {
    setColorFilter(filterValue);
  };

  const onUpdateCart = (cartItems) => {
    setCartProducts(cartItems);
  };

  const cartItems = applyColorFilter(colorFilter, products);

  return (
    <div className="cart-products-container">
      <ColorFilter
        options={colorFilterOptions(cartProducts)}
        defaultValue={colorFilter}
        onChange={onChangeFilter}
      />

      <div className="cart-products">
        {cartItems.map((product) => {
          const { id, img, name, price, quantity, colour } = product;
          return (
            <div className="flex gap-2 full-width cart-product-item" key={id}>
              <div className="image-container">
                <img src={img} alt="itemImage" />
              </div>

              <div className="full-width">
                <FlexItemContent
                  label={name}
                  className={"mb-20"}
                  labelClass="weight-500 text-base primary-black"
                  content={
                    quantity > 0 && (
                      <DeleteCart
                        product={product}
                        updateCart={onUpdateCart}
                        cartProducts={cartItems}
                      />
                    )
                  }
                />

                <FlexItemContent
                  className={"mb-10"}
                  label={"Product Price"}
                  content={formatCurrency(price, "PKR")}
                />

                <FlexItemContent label={"Color"} content={colour} />

                <div className="mt-20 mb-20 border-divider" />

                <ItemsQuantityView
                  product={product}
                  updateCart={onUpdateCart}
                  cartProducts={cartItems}
                />
              </div>
            </div>
          );
        })}

        <div className="border-divider" />

        <FlexItemContent
          label={"Total"}
          labelClass={"primary-black"}
          className={"cart-total-view mt-20"}
          content={formatCurrency(calculateTotal(cartProducts), "PKR")}
        />
      </div>
    </div>
  );
};

export default CartProducts;
