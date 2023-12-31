import React, { FC, Fragment, useState } from "react";

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
import { ProductItemType } from "../../../types/shopping.cart.types";

type CartProductsType = {
  products: Array<ProductItemType>;
};

const CartProducts: FC<CartProductsType> = ({ products }) => {
  const [cartProducts, setCartProducts] = useState(products);
  const [colorFilter, setColorFilter] = useState("");

  const onChangeFilter = (filterValue: string): void => {
    setColorFilter(filterValue);
  };

  const onUpdateCart = (cartItems: Array<ProductItemType>): void => {
    setCartProducts(cartItems);
  };

  const cartItems = applyColorFilter(colorFilter, cartProducts);

  return (
    <div className="cart-products-container">
      {!cartProducts.length ? (
        <div> No Products Available </div>
      ) : (
        <Fragment>
          <ColorFilter
            options={colorFilterOptions(cartProducts)}
            defaultValue={colorFilter}
            onChange={onChangeFilter}
          />

          <div className="cart-products">
            <div className="cart-items-container" data-testid={"cart-item"}>
              {cartItems.map((product: ProductItemType) => {
                const { id, img, name, price, colour } = product;
                return (
                  <div
                    className="flex gap-2 full-width cart-product-item"
                    key={id}
                  >
                    <div className="image-container">
                      <img src={img} alt="itemImage" />
                    </div>

                    <div className="full-width">
                      <FlexItemContent
                        label={name}
                        className={"mb-20"}
                        labelClass="weight-500 text-base primary-black"
                        content={
                          <DeleteCart
                            product={product}
                            updateCart={onUpdateCart}
                            cartProducts={cartItems}
                          />
                        }
                      />

                      <FlexItemContent
                        className={"mb-10"}
                        label={"Price"}
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
            </div>

            <div className="border-divider" />

            <FlexItemContent
              label={"Total"}
              labelClass={"primary-black"}
              className={"cart-total-view"}
              content={formatCurrency(calculateTotal(cartProducts), "PKR")}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default CartProducts;
