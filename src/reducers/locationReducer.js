const locationReducer = (state, action) => {
    console.log("state222", state)
    switch (action.type) {
    case "latlong":
        console.log("reducer", action)
        return {
            lat: action.payload.lat,
            long: action.payload.long
        };
    default:
        return {};
}
};
export default locationReducer;