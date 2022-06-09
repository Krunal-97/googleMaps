import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index";

const store = configureStore({
  reducer: reducers,
  initialState: {},
});

export default store;
