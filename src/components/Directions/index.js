import React from "react";
import MapViewDirections from "react-native-maps-directions";

import { apikey } from "../../config/constants";

const Directions = ({ destination, origin, onReady }) => {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey={apikey}
      strokeWidth={3}
      strokeColor="#222"
    />
  );
};

export default Directions;
