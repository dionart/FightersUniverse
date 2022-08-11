import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "..";

export interface AppState {
  currentFilter: string;
  rateFilterValue: number;
  selectedUniverse: string;
  hasSeenOnboarding: boolean;
}

const initialState: AppState = {
  currentFilter: "",
  rateFilterValue: 0,
  selectedUniverse: "",
  hasSeenOnboarding: false,
};

export const initialize = createAsyncThunk("app/initialize", async () => {
  return await AsyncStorage.getItem("@onboarding");
});

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
    initializeOnboarding: (state) => {
      AsyncStorage.setItem("@onboarding", "true");
      state.hasSeenOnboarding = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initialize.fulfilled, (state, action) => {
      if (action.payload) {
        state.hasSeenOnboarding = Boolean(action.payload);
      }
    });
  },
});

export const {
  selectUniverse,
  setCurrentFilter,
  setRateFilterValue,
  initializeOnboarding,
} = appSlice.actions;

export const selectInitializedAuth = (state: RootState) =>
  state.app.hasSeenOnboarding;

export default appSlice.reducer;
