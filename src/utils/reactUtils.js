import React from 'react';

export const countChildren = (children) => {
  return React.Children.count(children);
}