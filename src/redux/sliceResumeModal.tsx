import { createSlice } from '@reduxjs/toolkit';

const sliceResumeModal = createSlice({
  name: "resumeModal",
  initialState: false,
  reducers:{
    openCloseModal(state){
      return !state
    }
  }
});

export default sliceResumeModal.reducer;

export const { openCloseModal } = sliceResumeModal.actions;
export const useModal = (state: any) => {
  return state.resumeModal as boolean
}