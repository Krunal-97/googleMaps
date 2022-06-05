const setLatLong = (payload) => {
    console.log("action hit", payload)
    return {
        type: "latlong",
        payload
    }
};

export default setLatLong;