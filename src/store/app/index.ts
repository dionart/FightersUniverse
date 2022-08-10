import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Fighter } from "@/types/Fighter";
import { Universe } from "@/types/Universe";

export interface AppState {
  universes: Universe[];
  fighters: Fighter[];
  currentFilter: string;
  nameFilterActive: boolean;
  priceFilterActive: boolean;
  rateFilterActive: boolean;
  downloadsFilterActive: boolean;
  rateFilterValue: number;
  selectedUniverse: string;
}

const initialState: AppState = {
  universes: [],
  fighters: [],
  currentFilter: "",
  nameFilterActive: false,
  priceFilterActive: false,
  rateFilterActive: false,
  downloadsFilterActive: false,
  rateFilterValue: -1,
  selectedUniverse: "",
};

export const appSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    selectUniverse: (state, action: PayloadAction<string>) => {
      state.selectedUniverse = action.payload;
    },
    setCurrentFilter: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.currentFilter = action.payload;
    },
    setNameFilter: (state, action: PayloadAction<boolean>) => {
      state.nameFilterActive = action.payload;
    },
    setPriceFilter: (state, action: PayloadAction<boolean>) => {
      state.priceFilterActive = action.payload;
    },
    setRateFilter: (state, action: PayloadAction<boolean>) => {
      state.rateFilterActive = action.payload;
    },
    setDownloadsFilter: (state, action: PayloadAction<boolean>) => {
      state.downloadsFilterActive = action.payload;
    },
    setRateFilterValue: (state, action: PayloadAction<number>) => {
      state.rateFilterValue = action.payload;
    },
  },
});

export const { selectUniverse, setCurrentFilter, setRateFilter } =
  appSlice.actions;

export default appSlice.reducer;
