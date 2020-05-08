import React, { Component } from "react";

import "./select.scss";

class Select extends Component {
  constructor(props) {
    super(props);

    this.select = React.createRef();
  }

  componentDidMount() {
    const { value, onChange } = this.props;

    onChange(value);
  }

  render() {
    const { items, onChange } = this.props;

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

    return (
      <div className="select">
        <select
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
