import React, { FC } from "react";
import FilterSelect from "../../../../components/FormFactory/FilterSelect";
import { FilterSelectType } from "../../../../components/FormFactory/FilterSelect/filter-select-types";


const ColorFilter:FC<FilterSelectType> = ({ options, defaultValue, onChange }) => {
  return (
    <div className="mb-20 flex align-center gap-2 justify-end">
      <div>Color Filter: </div>
      <FilterSelect
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        selectClass={"full-width"}
      />
    </div>
  );
};

export default ColorFilter;
