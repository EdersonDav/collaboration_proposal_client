import { createSlice } from '@reduxjs/toolkit';

const sliceFormWhitResult = createSlice({
  name: "formWhitResult",
  initialState: false,
  reducers:{
    toogleValue(state){
      return !state
    }
  }
});

export default sliceFormWhitResult.reducer;

export const { toogleValue } = sliceFormWhitResult.actions;
export const useToogleValue = (state: any) => {
  return state.formWhitResult as boolean
}