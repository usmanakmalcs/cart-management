import React, { FC } from "react";
import { FilterSelectType } from "./filter-select-types";
import './style.css';

const FilterSelect: FC<FilterSelectType> = ({
  id,
  label,
  htmlFor,
  options,
  onChange,
  defaultValue,
}) => {
  return (
    <div className="filter-select">
      <label htmlFor={htmlFor}>{label}</label>
      <select
        id={id || "select"}
        onChange={({ target }) => onChange(target.value)}
        defaultValue={defaultValue}
      >
        {options.map((optionItem) => (
          <option key={optionItem.value} value={optionItem.value}>
            {optionItem.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;
