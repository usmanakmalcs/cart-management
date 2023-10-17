import React, { FC } from 'react';
import './style.css';

type FlexButtonsType = {
    className?:string;
    children: JSX.Element | Array<JSX.Element>
}

const FlexButtons:FC<FlexButtonsType> = ({children, className}) => {
    return (
        <div className ={`flex align-center flex-button ${className || ""}`}>
            {children}
        </div>
    )
}

export default FlexButtons;