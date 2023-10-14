import React from 'react'
import './style.css'

const FlexItemContent = ({label, content}) => {
    return <div className="flex align-center justify-between flex-item-content">
        <div>{label}</div>
        <div>{content}</div>
    </div>
}

export default FlexItemContent