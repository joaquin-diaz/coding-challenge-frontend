import Coordinate from './Coordinate';

type Film = {
  title: string;
  coordinates: Coordinate;
  address: string;
  director: string;
  releaseYear: string;
  actor1: string;
  actor2: string;
  actor3: string;
};

type FilmJson = {
  title: string;
  release_year: string;
  locations: string;
  production_company: string;
  director: string;
  writer: string;
  actor_1: string;
  actor_2: string;
  actor_3: string;
  coordinates: {
    lat: string;
    lng: string;
  };
};

export default Film;

export { FilmJson };
