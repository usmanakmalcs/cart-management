import { Fragment, useState } from "react";
import Icon from "../../../../components/Icon";
import { makeDeepCopy } from "../../../../utils/common-utils";
import ConfirmationModal from "../../../../components/AntdModal/ConfirmationModal";

const DeleteCart = ({ product, cartProducts, updateCart }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const onDeleteProduct = () => {
    const cartItems = makeDeepCopy(cartProducts);
    const productIndex = cartItems.findIndex(({ id }) => id === product.id);
    cartItems[productIndex].quantity = 0;

    updateCart(cartItems);
  };

  return (
    <Fragment>
      <Icon type={"delete"} className={"pointer"} onClick={toggleModal} />

      {modal && (
        <ConfirmationModal
          open={true}
          onCancel={toggleModal}
          onConfirm={onDeleteProduct}
          cancelText={"No"}
          confirmText={"Yes"}
          title={"Delete Product"}
          confirmDescription={`Are you sure, you want to clear quantity of product "${product.name}"`}
        />
      )}
    </Fragment>
  );
};

export default DeleteCart;
