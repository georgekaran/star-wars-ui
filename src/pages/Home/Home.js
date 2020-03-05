import React, { useEffect } from "react";
import { useAsync } from "react-use";
import "./Home.scss";

import { MovieAPI } from "../../utils/Api/Api";
import CustomSlider from "../../components/CustomSlider/CustomSlider";
import Movie from "../../components/Movie/Movie";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import { useStateValue } from "../../components/Context/index";
import { CHANGE_MOVIE } from "../../components/Context/action";
import Skeleton from "../../components/Skeleton/Skeleton";

export default function Home() {
  const movies = useAsync(async () => await MovieAPI.getMovies(), []);
  const [{ selectedMovie }, dispatch] = useStateValue();

  useEffect(() => {
    if (!movies.loading)
      dispatch(CHANGE_MOVIE(movies.value.find(m => m.episode_id === 4)));
  }, [movies, dispatch]);

  return (
    <div className="Home">
      <section className="Home__Info">
        <MovieInfo {...selectedMovie} />
      </section>
      <CustomSlider>
        {movies.loading
          ? new Array(10).fill(0).map(i => (
              <Skeleton width={200} height={300}>
                <rect x="0" y="0" rx="2" ry="2" width="200" height="300" />
                <rect x="0" y="250" rx="2" ry="2" width="170" height="36" />
              </Skeleton>
            ))
          : movies.value.map(movie => (
              <Movie key={movie.episode_id} {...movie} />
            ))}
      </CustomSlider>
    </div>
  );
}
