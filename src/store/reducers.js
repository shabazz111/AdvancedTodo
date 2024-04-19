import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const loading_reducer = createReducer(initialState, (builder) => {
  builder
    .addCase("loading_start", (state) => {
      state.loading = true;
    })
    .addCase("loading_stop", (state) => {
      state.loading = false;
    });
});

export const tableDataReucer = createReducer(initialState, (builder) => {
  builder.addCase("tableData", (state, action) => {
    state.tableData = action.payload;
  });
});