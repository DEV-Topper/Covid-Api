import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  covidState: {} || [],
};

const reduxState = createSlice({
  name: "covidState",
  initialState,
  reducers: {
    insertData: (state, { payload }) => {
      state.covidState = payload;
    },
  },
});

export const { insertData } = reduxState.actions;

export default reduxState.reducer;
