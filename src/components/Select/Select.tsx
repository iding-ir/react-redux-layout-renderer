import React, { useState } from "react";

import "./Select.scss";
import { ISelect } from "../../interfaces";

interface Props {
  items: ISelect[];
  image: string;
  defaultValue: string;
  onChange: (value: string) => void;
}

const Select = (props: Props) => {
  const { items, image, defaultValue, onChange } = props;

  const [value, setValue] = useState(defaultValue);

  const renderOption = () => {
    return items.map((item: ISelect, index: number) => {
      const { value, title } = item;

      return (
        <option key={index} value={value}>
          {title}
        </option>
      );
    });
  };

  const style = {
    WebkitMaskImage: `url("${image}")`,
    MaskImage: `url("${image}")`,
  };

  return (
    <div className="select">
      <div className="image" style={style}></div>

      <select
        value={value}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          setValue(event.target.value);

          onChange(event.target.value);
        }}
      >
        {renderOption()}
      </select>
    </div>
  );
};

export default Select;
