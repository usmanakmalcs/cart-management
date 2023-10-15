import React from "react";

const FlexItemContent = ({
  label,
  labelClass,
  content,
  contentClass,
  className,
}) => {
  return (
    <div className={`flex-item-between flex-item-content ${className || ""}`}>
      <div className={labelClass || "text-sm secondary-color"}>{label}</div>
      {content && (
        <div className={contentClass || "text-sm primary-black"}>
          {content}
        </div>
      )}
    </div>
  );
};

export default FlexItemContent;
