import React, { FC } from "react";

import { Select } from "antd";
import "./style.css";
import { FilterSelectType } from "./filter-select-types";

const { Option } = Select;

const FilterSelect: FC<FilterSelectType> = ({
  filterClass,
  options,
  onChange,
  defaultValue,
  selectClass,
}) => {
  return (
    <div className={`filter-select ${filterClass}`}>
      {options.length ? (
        <Select
          onChange={onChange}
          defaultValue={defaultValue || options[0].value}
          className={selectClass || ""}
          data-testid="select"
          value={defaultValue}
        >
          {options.map(({ label, value }, index) => (
            <Option value={value} key={index} >
              {label}
            </Option>
          ))}
        </Select>
      ) : null}
    </div>
  );
};

export default FilterSelect;
