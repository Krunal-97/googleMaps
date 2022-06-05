const locationReducer = (state, action) => {
    switch (action.type) {
    case "latlong":
        return {
            lat: action.payload.lat,
            long: action.payload.long
        };
    default:
        return {};
}
};
export default locationReducer;