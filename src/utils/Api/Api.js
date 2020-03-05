import Axios from "./BaseAxios";

export const MovieAPI = {
  getMovies: id => {
    return Axios.get(`films/${id ? id : ""}`)
      .then(resp => resp.data.results)
      .catch(err => {
        console.error(err);
        return [];
      });
  }
};
