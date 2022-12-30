import React from "react";
import SpinnerImage from "assets/images/spinner.png";
import "./styles.css";

interface Params {
  loading: boolean;
}

const Spinner = ({ loading }: Params) => {
  return (
    <div className="spinnerWrapper">
      <img src={SpinnerImage} className="spinner" />
    </div>
  );
};

export default Spinner;
