import { Fragment } from "react";

import plusSvg from "./assets/plus.svg";
import minusSvg from "./assets/minus.svg";
import deleteSvg from "./assets/delete.svg";

import './style.css';

const Icon = ({ type, className, ...restProps }) => {

  const imageClass = `${className} icon-image`;
  const icon = {
    plus: () => <img className={imageClass} src={plusSvg} alt="plus" {...restProps} />,
    minus: () => <img className={imageClass} src={minusSvg} alt="minus" {...restProps} />,
    delete: () => <img className={imageClass} src={deleteSvg} alt="delete" {...restProps} />,
  };

  return <Fragment>{icon[type]()}</Fragment>;
};

export default Icon;
