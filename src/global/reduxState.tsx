import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CovidData {
	state: string;
	name: string;
	covid19Site: string;
	covid19SiteOld: string;
	covid19SiteQuaternary: string;
	covid19SiteQuinary: string;
	twitter: string;
}

interface CovidState {
	covidState: CovidData[];
}

const initialState: CovidState = {
	covidState: [],
};

const reduxState = createSlice({
	name: "covidState",
	initialState,
	reducers: {
		insertData: (state, action: PayloadAction<CovidData[]>) => {
			state.covidState = action.payload;
		},
	},
});

export const { insertData } = reduxState.actions;

export default reduxState.reducer;
