import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProposalResult } from '../types/interfaces';

const initialState = {} as IProposalResult;

const sliceResult = createSlice({
  name: "result",
  initialState,
  reducers:{
    saveDataResult(state,  { payload }: PayloadAction<IProposalResult>){
      return {...state, ...payload}
    },
  }
});

export default sliceResult.reducer;

export const { saveDataResult } = sliceResult.actions;
export const useDataResult = (state: any) => {
  return state.resultData as IProposalResult
}