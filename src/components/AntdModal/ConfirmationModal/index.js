import React, { Fragment } from "react";
import AntdModal from "..";

import FlexButtons from "../../FlexButtons";
import { Button } from "antd";

const ConfirmationModal = (props) => {
  const {
    icon,
    onCancel,
    confirmationMessage,
    confirmDescription,
    onConfirm,
    confirmText,
    cancelText,
    messageClassName,
    
    title,
    showIcon,
    closable,
    className,
    modalClass,
  } = props;

  const iconPath = "/assets/icons/";

  return (
    <AntdModal
      open={true}
      onClose={onCancel}
      className={`text-center ${className || ""}`}
      title={title}
      closable={closable}
      modalClass={modalClass}
    >
      <Fragment>
        <div className={title ? "mt-24" : ""}>
          {showIcon && (
            <img
              src={`${iconPath}${icon || "warning-icon.svg"}`}
              alt={"confirmation"}
              className="modal-icon"
            />
          )}

          {confirmationMessage && (
            <div className={`notification-text  ${messageClassName}`}>
              {confirmationMessage}
            </div>
          )}

          {confirmDescription && (
            <p className="modal-centered-text primary-black">
              {confirmDescription}
            </p>
          )}
        </div>

        <FlexButtons className={"mt-24"}>
          {cancelText && (
            <Button
              size="md"
              className="full-width"
              label={cancelText}
              onClick={onCancel}
            >
              {cancelText}
            </Button>
          )}

          <Button
            size="md"
            className="full-width"
            type="primary"
            onClick={() => onConfirm("accepted")}
            label={confirmText}
          >
            {confirmText}
          </Button>
        </FlexButtons>
      </Fragment>
    </AntdModal>
  );
};

export default ConfirmationModal;
