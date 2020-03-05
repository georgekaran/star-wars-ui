import React from "react";

function IconDirector({ className = "", children }) {
  return <i className={`gg-directory ${className}`}>{children}</i>;
}

export default React.memo(IconDirector);
