import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Fighter } from "@/types/Fighter";
import { Universe } from "@/types/Universe";

export interface AppState {
  universes: Universe[];
  fighters: Fighter[];
  filters: string[];
  universeToFilter: string;
}

const initialState: AppState = {
  universes: [],
  fighters: [],
  filters: [],
  universeToFilter: "",
};

export const appSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    selectUniverse: (state, action: PayloadAction<string>) => {
      state.universeToFilter = action.payload;
    },
    addFilter: (state, action: PayloadAction<string>) => {
      state.filters = [...state.filters, action.payload];
      console.log(state.filters);
    },
  },
});

export const { addFilter, selectUniverse } = appSlice.actions;

export default appSlice.reducer;
