type OptionItem = {
  label: string;
  value: string;
};

export type FilterSelectType = {
  filterClass?: string;
  onChange: (value: string) => void;
  options: Array<OptionItem>;
  defaultValue: string;
  selectClass?: string;
};
