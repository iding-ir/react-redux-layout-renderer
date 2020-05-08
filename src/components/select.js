import React, { Component } from "react";

import "./select.scss";

class Select extends Component {
  constructor(props) {
    super(props);

    this.select = React.createRef();
  }

  render() {
    const { items, image, value, onChange } = this.props;

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
    };

    return (
      <div className="select">
        <div className="image" style={style}></div>

        <select
          value={value}
          ref={this.select}
          onChange={() => {
            onChange(this.select.current.value);
          }}
        >
          {renderOption()}
        </select>
      </div>
    );
  }
}

export default Select;
