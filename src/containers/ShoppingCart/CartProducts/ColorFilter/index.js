import React from "react";
import FilterSelect from "../../../../components/FormFactory/FilterSelect";

const ColorFilter = ({ options, defaultValue, onChange }) => {
  return (
    <div className="mb-20 flex align-center gap-2 justify-end">
      <div>Color Filter: </div>
      <FilterSelect
        key={options}
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        selectClass={"full-width"}
      />
    </div>
  );
};

export default ColorFilter;
