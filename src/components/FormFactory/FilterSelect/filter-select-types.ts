export type OptionItem = {
  label: string;
  value: string;
};

export type FilterSelectType = {
  id: string;
  htmlFor:string;
  label:string;
  onChange: (value: string) => void;
  options: Array<OptionItem>;
  defaultValue: string;
};
