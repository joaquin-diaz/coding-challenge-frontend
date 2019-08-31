import * as React from 'react';

import Map from './Map';
import Marker from './Marker';
import SearchBar from './SearchBar/SearchBar';

const Main: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <Map>
        <Marker lat="-33.840096" lng="-59.455256" />
      </Map>
    </div>
  );
};

export default Main;
