const locationReducer = (state, action) => {
  switch (action.type) {
    case "latlong":
      return {
        lat: action.payload.lat,
        long: action.payload.long,
      };
    default:
      return {
        lat: 43.653226,
        long: -79.3831843,
      };
  }
};
export default locationReducer;
