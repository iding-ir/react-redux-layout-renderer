import React, { useState } from "react";

import "./Select.scss";

interface Props {
  items: any[];
  image: string;
  value: any;
  onChange: (event: any) => void;
}

const Select = (props: Props) => {
  const { items, image, value, onChange } = props;

  const [val, setVal] = useState(value);

  const renderOption = () => {
    return items.map((item: any, index: number) => {
      const { value, title } = item;

      return (
        <option key={index} value={value}>
          {title}
        </option>
      );
    });
  };

  const style = {
    WebkitMaskImage: `url(${image})`,
    MaskImage: `url(${image})`,
  };

  return (
    <div className="select">
      <div className="image" style={style}></div>

      <select
        value={val}
        onChange={(event: any) => {
          setVal(event.target.value);
          onChange(event.target.value);
        }}
      >
        {renderOption()}
      </select>
    </div>
  );
};

export default Select;
