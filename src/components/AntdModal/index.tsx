import React, { FC } from "react";
import { Modal } from "antd";
import "./style.css";

type AntdModalType = {
  title?: string;

  open: boolean;
  modalClass?: string;
  onClose: () => void;
  className?: string;
  closable?: boolean;
  borderless?: boolean;
  children: JSX.Element | Array<JSX.Element>;
};

const AntdModal:FC<AntdModalType> = ({
  title,
  children,
  open,
  modalClass,
  onClose,
  className,
  closable,
  borderless,
}) => {
  return (
    <Modal
      className={`custom-ant-modal ${modalClass} ${
        borderless ? "borderless-header" : ""
      }`}
      closable={closable || false}
      title={title && title}
      open={open}
      footer={null}
      onCancel={onClose}
      centered
      maskClosable={false}
    >
      <div className={className || ""}>{children}</div>
    </Modal>
  );
};

export default AntdModal;
