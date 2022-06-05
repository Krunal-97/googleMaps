import { createStore } from "redux";
import locationReducer from "./reducers/locationReducer";

function configureStore(state = { lat: 0, long: 0 }) {
  return createStore(locationReducer,state);
}

export default configureStore;