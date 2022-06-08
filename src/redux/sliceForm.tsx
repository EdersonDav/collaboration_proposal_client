import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

import { IFormFields } from '../types/interfaces';

const initialState = {} as IFormFields;

const sliceForm = createSlice({
  name: "form",
  initialState,
  reducers:{
    saveDataForm(_state,  { payload }: PayloadAction<IFormFields>){
      return { ...payload, collaborationStartDate: moment(payload.collaborationStartDate).format('YYYY-MM-DD')}
    },
    clearDataForm(){
      return initialState
    }
  }
});

export default sliceForm.reducer;

export const { saveDataForm, clearDataForm } = sliceForm.actions;
export const useFormData = (state: any) => {
  return state.formData as IFormFields
}