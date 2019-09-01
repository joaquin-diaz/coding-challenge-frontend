import * as React from 'react';

import Map from '../Map';
import Marker from '../Marker';

import { FilmWithCoordinates } from '../../types/Film';

interface FilmsLocationMapProps {
  films: Array<FilmWithCoordinates>;
  onMarkerClick: (film: FilmWithCoordinates) => void;
}

const FilmsLocationMap: React.FC<FilmsLocationMapProps> = props => {
  const renderMarker = (film: FilmWithCoordinates, key: number) => {
    return (
      <Marker
        film={film}
        key={key}
        lat={film.coordinates.lat}
        lng={film.coordinates.lng}
        onClick={props.onMarkerClick}
      />
    );
  };
  const sanFranciscoCenter = {
    lat: 37.7900484,
    lng: -122.4021149,
  };

  return (
    <div>
      <Map center={sanFranciscoCenter}>{props.films.map(renderMarker)}</Map>
    </div>
  );
};

export default FilmsLocationMap;
