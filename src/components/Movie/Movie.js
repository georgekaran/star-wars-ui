import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import "./Movie.scss";

import variables from "../../utils/variables";
import { useStateValue } from "../Context/index";
import { CHANGE_MOVIE } from "../Context/action";
import Title from "../Typography/Title";

function Movie({ episode_id, title, release_date, director, opening_crawl }) {
  const [{ handleUpdateBackgroundImage }, dispatch] = useStateValue(); //ContextState
  const loadImage = () => {
    return require(`../../assets/images/${episode_id || 1}.jpg`);
  };

  const handleMovieClick = () => {
    handleUpdateBackgroundImage(episode_id);
    dispatch(CHANGE_MOVIE({ episode_id, title, release_date, director, opening_crawl }));
  };

  return (
    <div data-testid={`Movie-${episode_id}`} className={cx("Movie")} onClick={handleMovieClick}>
      <Title className="Movie__Title" label={title}  />
      <img
        style={{ width: variables.MOVIE_CARD_WITDH || 200 }}
        src={loadImage()}
        alt={`Movie Card ${title}`}
      />
    </div>
  );
}

Movie.propTypes = {
  episode_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired
};

export default React.memo(Movie);
