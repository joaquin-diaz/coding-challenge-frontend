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
        },
      ];

      resolve(films);
    }, 5000);
  });
};

export { fetchFilms };
