const locationReducer = (state, action) => {
  switch (action.type) {
    case "latlong":
      return {
        lat: action.payload.lat,
        long: action.payload.long,
      };
    default:
      return {
        lat: 43.6565512,
        long: -79.3804294,
      };
  }
};
export default locationReducer;
