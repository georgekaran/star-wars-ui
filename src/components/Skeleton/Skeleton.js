import React from "react";
import PropTypes from "prop-types";
import ContentLoader from "react-content-loader";

function Skeleton({ width, height, children, ...props }) {
  return (
    <ContentLoader
      speed={1}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#eaeced"
      foregroundColor="#ffffff"
      {...props}
    >
      {children}
    </ContentLoader>
  );
}

Skeleton.propTypes = {
  width: PropTypes.number.isRequired, 
  height: PropTypes.number.isRequired
};

export default Skeleton;
