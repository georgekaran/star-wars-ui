import React, { useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { useMeasure } from "react-use";
import "./CustomSlider.scss";

import variables from "../../utils/variables";
import { countChildren } from "../../utils/reactUtils";
import SliderButton from "./SliderButton";

const initialStates = {
  page: 1,
  visibleChildren: null
}

function CustomSlider({ children, ...props }) {
  const [page, setPage] = useState(initialStates.page);
  const [visibleChildren, setVisibleChildren] = useState(initialStates.visibleChildren);
  const [ref, { width }] = useMeasure();
  const visibleCount = useMemo(() => {
    return Math.floor(width / (variables.MOVIE_CARD_WIDTH_WITH_MARGIN || 240))
  }, [width]);

  useEffect(() => {
    const childrenArray = React.Children.toArray(children);

    const sliceIndex = (visibleCount * (page - 1));
    const sliceEnd = (visibleCount * page);
    
    setVisibleChildren(childrenArray.slice(sliceIndex, sliceEnd));
  }, [visibleCount, children, page]);

  const hasNext = useMemo(() => {
    if (!!visibleChildren === false || (visibleCount * page >= countChildren(children))) {
      return false;
    }
    return true;
  }, [visibleChildren, children, page, visibleCount]);

  const hasPrev = useMemo(() => {
    if (!!visibleChildren === false || page === initialStates.page || countChildren(visibleChildren) === countChildren(children)) {
      return false;
    }
    return true;
  }, [visibleChildren, children, page]);

  const handleNextClick = useCallback(() => {
    if (hasNext) {
      setPage(prevPage => prevPage + 1);
    }
  }, [setPage, hasNext]);

  const handlePrevClick = useCallback(() => {
    if (hasPrev) {
      setPage(prevPage => prevPage - 1);
    }
  }, [setPage, hasPrev]);

  return (
    <>
      <div ref={ref} data-testid="Slider__Container" className={"Slider__Container"}>
        <div data-testid="Slider__Items" className="Slider__Items">
          {visibleChildren}
        </div>
        {hasPrev && <SliderButton data-testid="prevButton" type="Prev" onClick={handlePrevClick} />}
        {hasNext && <SliderButton data-testid="nextButton" type="Next" onClick={handleNextClick} />}
      </div>
    </>
  );
}

CustomSlider.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
};

export default CustomSlider;
