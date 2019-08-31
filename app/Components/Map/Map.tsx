import * as React from 'react';
import styled from '@emotion/styled';
import { Props as MapProps, default as GoogleMapReact } from 'google-map-react';

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const Map: React.FC = props => {
  const mapProps: MapProps = {
    center: {
      lat: -33.840096,
      lng: -59.455255,
    },
    zoom: 16,
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
