import { createSlice } from '@reduxjs/toolkit';

const sliceCancelProposal = createSlice({
  name: "calcelProposal",
  initialState: false,
  reducers:{
    cancel(state){
      return !state
    }
  }
});

export default sliceCancelProposal.reducer;

export const { cancel } = sliceCancelProposal.actions;
export const useCancelProposal = (state: any) => {
  return state.calcelProposal as boolean
}