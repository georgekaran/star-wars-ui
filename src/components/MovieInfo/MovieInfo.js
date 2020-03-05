import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./MovieInfo.scss";

import Title from "../Typography/Title";
import Skeleton from "../Skeleton/Skeleton";
import { getYearFromDate } from "../../utils/date/dateFormats";
import IconFire from "../../Icons/IconFire";
import IconCircle from "../../Icons/IconCircle";

function MovieInfo({
  episode_id,
  title,
  release_date,
  director,
  opening_crawl
}) {
  const generateFakeIMDBScore = () => {
    // Only want to generate scores that are equals or higher than 7!
    const randomNumber = Number(Math.random() * (10 - 7 + 1) + 7).toFixed(1);
    return randomNumber > 10 ? 10 : randomNumber;
  };

  const isLoaded = useMemo(() => !!title, [title]);

  return (
    <section className="MovieInfo__Container">
      <div className="MovieInfo__Wrapper">
        <div className="MovieInfo__Header">
          {isLoaded ? (
            <>
              <Title
                className="MovieInfo__Header__Year"
                label={getYearFromDate(release_date)}
              />
              <IconCircle className="MovieInfo__Header__Circle" />
              <Title
                className="MovieInfo__Header__Episode"
                label={`Episódio ${episode_id}`}
              />
            </>
          ) : (
            <Skeleton
              className="MovieInfo__Main__Title"
              width={200}
              height={20}
            >
              <rect x="0" y="0" rx="2" ry="2" width="200" height="20" />
            </Skeleton>
          )}
        </div>
        <div className="MovieInfo__Score">
          {isLoaded ? (
            <>
              <IconCircle className="MovieInfo__Score__Circle">
                <IconFire className="MovieInfo__Score__Fire" />
              </IconCircle>
              <Title
                className="MovieInfo__Score__Score"
                label={generateFakeIMDBScore()}
              />
              <Title className="MovieInfo__Score__Total" label="/10" />
            </>
          ) : (
            <Skeleton
              className="MovieInfo__Main__Title"
              width={100}
              height={40}
            >
              <rect x="0" y="0" rx="2" ry="2" width="100" height="40" />
            </Skeleton>
          )}
        </div>
        <div className="MovieInfo__Main">
          {isLoaded ? (
            <>
              <Title className="MovieInfo__Main__Title" label={title} />
              <Title className="MovieInfo__Main__Crawl" label={opening_crawl} />
            </>
          ) : (
            <Skeleton
              className="MovieInfo__Main__Title"
              width={500}
              height={83}
            >
              <rect x="0" y="0" rx="2" ry="2" width="500" height="83" />

              {new Array(10).fill(0).map((i, idx) => (
                <rect
                  x="0"
                  y={20 * (idx + 1)}
                  rx="2"
                  ry="2"
                  width="500"
                  height="15"
                />
              ))}
            </Skeleton>
          )}
        </div>
      </div>
    </section>
  );
}

MovieInfo.propTypes = {
  episode_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  opening_crawl: PropTypes.string.isRequired
};

export default MovieInfo;
