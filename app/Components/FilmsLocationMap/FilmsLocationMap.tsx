import * as React from 'react';

import Map from '../Map';
import Marker from '../Marker';

import Film from '../../types/Film';

interface FilmsLocationMapProps {
  films: Array<Film>;
}

const FilmsLocationMap: React.FC<FilmsLocationMapProps> = props => {
  const renderMarker = (film: Film, key: number) => {
    return (
      <Marker
        title={film.title}
        address={film.address}
        key={key}
        lat={film.coordinates.lat}
        lng={film.coordinates.lng}
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
