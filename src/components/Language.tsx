import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

import "./Language.scss";
import { setLanguage } from "../actions/settings";

const Language = () => {
  const dispatch = useDispatch();

  const { language } = useParams() as any;

  dispatch(setLanguage(language));

  return <Redirect to="/" />;
};

export default Language;
