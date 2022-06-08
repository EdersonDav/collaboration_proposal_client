import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProposalResult } from '../types/interfaces';

const initialState = {} as IProposalResult;

const sliceResult = createSlice({
  name: "result",
  initialState,
  reducers:{
    saveDataResult(_state,  { payload }: PayloadAction<IProposalResult>){
      return {...payload}
    },
    clearDataResult(){
      return initialState
    }
  }
});

export default sliceResult.reducer;

export const { saveDataResult, clearDataResult } = sliceResult.actions;
export const useDataResult = (state: any) => {
  return state.resultData as IProposalResult
}