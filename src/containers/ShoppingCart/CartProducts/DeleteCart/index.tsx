import React, { FC, Fragment, useState } from "react";
import Icon from "../../../../components/Icon";
import { makeDeepCopy } from "../../../../utils/common-utils";
import ConfirmationModal from "../../../../components/AntdModal/ConfirmationModal";
import { ProductItemType } from "../../shopping-cart-types";

type DeleteCartType = {
  product: ProductItemType;
  cartProducts: Array<ProductItemType>;
  updateCart: (value: Array<ProductItemType>) => void;
};

const DeleteCart: FC<DeleteCartType> = ({
  product,
  cartProducts,
  updateCart,
}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const onDeleteProduct = () => {
    const cartItems = makeDeepCopy(cartProducts);
    const productIndex = cartItems.findIndex(
      (item: ProductItemType) => item.id === product.id
    );
    cartItems[productIndex].quantity = 0;

    updateCart(cartItems);
  };

  return (
    <Fragment>
      <Icon type={"delete"} className={"pointer"} onClick={toggleModal} />

      {modal && (
        <ConfirmationModal
          open={true}
          cancelText={"No"}
          confirmText={"Yes"}
          title={"Delete Product"}
          onClose={toggleModal}
          onConfirm={onDeleteProduct}
          confirmDescription={`Are you sure, you want to clear quantity of product "${product.name}"`}
        />
      )}
    </Fragment>
  );
};

export default DeleteCart;
