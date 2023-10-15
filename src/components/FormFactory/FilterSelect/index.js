import { Select } from "antd";
import "./style.css";
const { Option } = Select;

const FilterSelect = ({ filterClass, options, onChange, defaultValue, selectClass }) => {
  return (
    <div className={`filter-select ${filterClass}`}>
      {options.length ? (
        <Select
          onChange={onChange}
          defaultValue={defaultValue || options[0].value}
          className={selectClass || ""}
        >
          {options.map(({ label, value }, index) => (
            <Option value={value} key={index}>
              {label}
            </Option>
          ))}
        </Select>
      ) : null}
    </div>
  );
};

export default FilterSelect;
