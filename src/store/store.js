import { configureStore } from "@reduxjs/toolkit";
import { loading_reducer, tableDataReucer } from "./reducers";

const store = configureStore({
  reducer: {
    loading_reducer, 
    tableDataReucer,
  },
});

export default store;