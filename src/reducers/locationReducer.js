export default (state, action) => {
    switch (action.type) {
      case "latlong":
        console.log("reducer", action)
        return {
          lat: action.payload.lat,
          long: action.payload.long
        };
      default:
        return state;
    }
  };