import React from "react";
import PropTypes from "prop-types";
import './SliderButton.scss';

import IconArrowDown from '../../Icons/IconArrowDown';

function SliderButton({ type, onClick }) {
  return (
    <button data-testid={`Slider__Button__${type}`} className={`Slider__Button Slider__Button__${type}`} onClick={onClick}>
      <span>
        <IconArrowDown />
      </span>
    </button>
  );
}

SliderButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default React.memo(SliderButton);
