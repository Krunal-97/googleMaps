import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const containerStyle = {
  width: "950px",
  height: "100vh",
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDbkBoi9cEOLxezElsj5Su9xhsiUCvrAOA",
  });

  //   let { location } = useSelector((state) => state);
  //   console.log("mapsCOMP", location);

  const [map, setMap] = React.useState(null);

  //   let center = {
  //     lat: location.lat,
  //     lng: location.long,
  //   };

  let center = {
    lat: 40.0,
    lng: -79.9,
  };

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  console.log("center", center);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker position={center} />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMaps);
