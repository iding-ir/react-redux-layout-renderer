import React from "react";
import { useSelector } from "react-redux";

import "./Logo.scss";
import { IState } from "../../reducers";

const Logo = () => {
  const language = useSelector((state: IState) => state.settings.language);
  const logo = useSelector((state: IState) => state.data)[language].logo;

  const style = {
    backgroundImage: `url(${logo})`,
  };

  return (
    <div className="logo-wrapper">
      <div className="logo" style={style}></div>
    </div>
  );
};

export default Logo;
