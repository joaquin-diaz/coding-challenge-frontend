import Film, { FilmJson } from '../types/Film';

const fetchFilms = (query: string, limit: number): Promise<Array<Film>> => {
  return fetch(`${CONFIG.apiURL}/films?query=${query}&limit=${limit}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .then((data: Array<FilmJson>) => {
      return data.map(filmJson => ({
        title: filmJson.title,
        coordinates: filmJson.coordinates,
        address: filmJson.locations,
        director: filmJson.director,
        actor1: filmJson.actor_1,
        actor2: filmJson.actor_2,
        actor3: filmJson.actor_3,
        releaseYear: filmJson.release_year,
      }));
    });
};

const fetchFilmPoster = (title: string) => {
  const requestURL = `https://api.themoviedb.org/3/search/movie?api_key=df64e6cd95db45008fde4b72584e8974&query=${title}`;
  return fetch(requestURL);
};

export { fetchFilms, fetchFilmPoster };
