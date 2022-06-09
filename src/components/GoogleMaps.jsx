import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import store from "../store";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDbkBoi9cEOLxezElsj5Su9xhsiUCvrAOA",
  });

  const [map, setMap] = React.useState(null);
  const [lat, setLat] = React.useState(43.6565512);
  const [lng, setLng] = React.useState(-79.3804294);

  let center = {
    lat: lat,
    lng: lng,
  };

  store.subscribe(() => {
    let { location } = store.getState();
    center.lat = location.lat;
    center.lng = location.lng;
    setLat(location.lat);
    setLng(location.long);
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
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
        <Marker onLoad={onLoad} position={center} />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMaps);
