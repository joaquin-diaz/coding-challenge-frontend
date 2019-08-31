import Film from '../types/Film';

const fetchFilms = (query: string, limit: number) => {
  // Fake data
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Fetching films: ', query, limit);
      const films: Array<Film> = [
        {
          title: 'The lord of the Rings',
          coordinates: {
            lat: 37.7900442,
            lng: -122.3999262,
          },
          address: '555 Market St',
          releaseYear: 2001,
          director: 'Peter something',
          actor1: 'Sir Ian',
          actor2: 'El del ciclon',
          actor3: 'Orlandito Boom',
        },
      ];

      resolve(films);
    }, 100);
  });
};

const fetchFilmPoster = (title: string) => {
  const requestURL = `https://api.themoviedb.org/3/search/movie?api_key=df64e6cd95db45008fde4b72584e8974&query=${title}`;
  return fetch(requestURL);
};

export { fetchFilms, fetchFilmPoster };
