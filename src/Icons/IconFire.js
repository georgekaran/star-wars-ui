import React from 'react'

function IconFire({ className = "", children }) {
  return <i className={`gg-crowdfire ${className}`}>{children}</i>
}

export default React.memo(IconFire);