import React, { useRef } from "react";

import "./select.scss";

const Select = (props) => {
  const { items, image, value, onChange } = props;

  const selectElement = useRef(null);

  const renderOption = () => {
    return items.map((item, index) => {
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
        value={value}
        ref={selectElement}
        onChange={() => {
          onChange(selectElement.current.value);
        }}
      >
        {renderOption()}
      </select>
    </div>
  );
};

export default Select;
