import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    initData(state, action) {
      const { dataSet } = action.payload;

      state[dataSet] = { label: [], y: [] };
    },
    setData(state, action) {
      const { dataSet, data } = action.payload;
      state[dataSet] = data;
    },
  },
});

export const { initData, setData } = dataSlice.actions;
export default dataSlice.reducer;
