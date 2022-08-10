import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Fighter } from "@/types/Fighter";
import { Universe } from "@/types/Universe";

export interface AppState {
  universes: Universe[];
  fighters: Fighter[];
  currentFilter: string;
  rateFilterValue: number;
  selectedUniverse: string;
}

const initialState: AppState = {
  universes: [],
  fighters: [],
  currentFilter: "",
  rateFilterValue: 0,
  selectedUniverse: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    selectUniverse: (state, action: PayloadAction<string>) => {
      state.selectedUniverse = action.payload;
    },
    setCurrentFilter: (state, action: PayloadAction<string>) => {
      state.currentFilter = action.payload;
    },
    setRateFilterValue: (state, action: PayloadAction<number>) => {
      state.rateFilterValue = action.payload;
    },
  },
});

export const { selectUniverse, setCurrentFilter, setRateFilterValue } =
  appSlice.actions;

export default appSlice.reducer;
