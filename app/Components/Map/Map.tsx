import * as React from 'react';
import styled from '@emotion/styled';
import { Props as GoogleMapProps, default as GoogleMapReact } from 'google-map-react';

import Coordinate from '../../types/Coordinate';

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

interface MapProps {
  center: Coordinate;
}

const Map: React.FC<MapProps> = props => {
  const mapProps: GoogleMapProps = {
    center: props.center,
    zoom: 14,
    bootstrapURLKeys: {
      key: ENV.GOOGLE_MAPS_API_KEY,
    },
  };

  return (
    <MapContainer>
      <GoogleMapReact {...mapProps}>{props.children}</GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
