import Coordinate from './Coordinate';

type Film = {
  title: string;
  address: string;
  director: string;
  releaseYear: string;
  actor1: string;
  actor2: string;
  actor3: string;
};

type FilmWithCoordinates = Film & {
  coordinates: Coordinate;
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

const consolidateSuggestions = (films: Array<Film>, query: string): Array<string> => {
  const suggestions = [];
  const consolidatedSuggestions: any = {};

  for (const film of films) {
    const { title, releaseYear, actor1 } = film;
    const lowerCaseQuery = query.toLowerCase();

    if (
      (title.toLowerCase().includes(lowerCaseQuery) ||
        releaseYear.toLowerCase().includes(lowerCaseQuery) ||
        actor1.toLowerCase().includes(lowerCaseQuery)) &&
      !consolidatedSuggestions[title]
    ) {
      consolidatedSuggestions[title] = true;
      suggestions.push(`${title} // ${actor1}, ${releaseYear}`);
    }
  }

  return suggestions;
};

export { FilmJson, FilmWithCoordinates, Film, consolidateSuggestions };
