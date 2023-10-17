
export type AntdModalType = {
    title?: string;
  
    open: boolean;
    modalClass?: string;
    onClose: () => void;
    className?: string;
    closable?: boolean;
    borderless?: boolean;
    children?: JSX.Element | Array<JSX.Element>;
  };
  