import React, { FC } from "react";
import { OptionItem } from "../../../../components/FormFactory/FilterSelect/filter-select-types";
import FilterSelect from "../../../../components/FormFactory/FilterSelect";

type ColorFilterType = {
  options: Array<OptionItem>;
  defaultValue: string;
  onChange: (value: string) => void;
};

const ColorFilter: FC<ColorFilterType> = ({
  options,
  defaultValue,
  onChange,
}) => {
  return (
    <div className="text-right mb-20">
      <FilterSelect
        label="Filter by Color:"
        htmlFor="colorFilter"
        id="colorFilter"
        onChange={onChange}
        options={options}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default ColorFilter;
