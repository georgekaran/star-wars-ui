import React from "react";

function IconCircle({ className = "", children }) {
  return <i className={`gg-shape-circle ${className}`}>{children}</i>;
}

export default React.memo(IconCircle);
