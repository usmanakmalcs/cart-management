import React, { FC } from "react";

type FlexItemContentType = {
  label: string;
  labelClass?: string;
  content: any;
  contentClass?: string;
  className?: string;
};

const FlexItemContent: FC<FlexItemContentType> = ({
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
        <div className={contentClass || "text-sm primary-black"}>{content}</div>
      )}
    </div>
  );
};

export default FlexItemContent;
