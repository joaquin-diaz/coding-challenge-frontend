import * as React from 'react';
import FilmsLocationMap from '../Components/FilmsLocationMap';

import Film from '../types/Film';

const FilmsLocationMapContainer = () => {
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

  return <FilmsLocationMap films={films} />;
};

export default FilmsLocationMapContainer;
