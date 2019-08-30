import * as React from 'react';
import styled from '@emotion/styled';
import { Props as MapProps, default as GoogleMapReact } from 'google-map-react';

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const Map: React.FC = () => {
  const mapProps: MapProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
    bootstrapURLKeys: {
      key: ENV.GOOGLE_MAPS_API_KEY,
    },
  };

  return (
    <MapContainer>
      <GoogleMapReact {...mapProps} />
    </MapContainer>
  );
};

export default Map;
