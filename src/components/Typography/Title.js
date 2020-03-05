import React from "react";
import PropTypes from "prop-types";

function Title({ label, className, style, ...props }) {
  return (
    <h1 style={style} className={className}>
      {label}
    </h1>
  );
}

Title.propTypes = {
  label: PropTypes.string.isRequired
};

export default Title;
