export const CHANGE_MOVIE = (movie = {}) => {
  return {
    type: "CHANGE_MOVIE",
    selectedMovie: { ...movie },
  }
}