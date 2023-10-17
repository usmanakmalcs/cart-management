import React, { FC, Fragment } from "react";
import AntdModal from "..";

import FlexButtons from "../../FlexButtons";
import { Button } from "antd";
import { AntdModalType } from "../../../types/ant.modal.types";

type ConfirmationModalType = {
  confirmText: string;
  cancelText: string;
  confirmDescription: string;
  onConfirm: () => void;
};

type ModalType = ConfirmationModalType & AntdModalType;


const ConfirmationModal: FC<ModalType> = (props) => {
  const {
    onClose,
    confirmDescription,
    onConfirm,
    confirmText,
    cancelText,
    title,
    closable,
    className,
    modalClass,
  } = props;

  return (
    <AntdModal
      open={true}
      className={`text-center ${className || ""}`}
      title={title}
      closable={closable}
      modalClass={modalClass}
      onClose={onClose}
    >
      <Fragment>
        <div className={title ? "mt-24" : ""}>
          {confirmDescription && (
            <p className="modal-centered-text primary-black">
              {confirmDescription}
            </p>
          )}
        </div>

        <FlexButtons className={"mt-24"}>
          <Fragment>
            {cancelText && (
              <Button className="full-width" onClick={onClose}>
                {cancelText}
              </Button>
            )}
          </Fragment>

          <Button
            className="full-width"
            type="primary"
            onClick={() => onConfirm()}
          >
            {confirmText}
          </Button>
        </FlexButtons>
      </Fragment>
    </AntdModal>
  );
};

export default ConfirmationModal;
