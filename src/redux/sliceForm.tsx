import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

import { IFormFields } from '../types/interfaces';

const initialState = {} as IFormFields;

const sliceForm = createSlice({
  name: "form",
  initialState,
  reducers:{
    saveDataForm(state,  { payload }: PayloadAction<IFormFields>){
      return {...state, ...payload, collaborationStartDate: moment(payload.collaborationStartDate).format('YYYY-MM-DD')}
    },
  }
});

export default sliceForm.reducer;

export const { saveDataForm } = sliceForm.actions;
export const useFormData = (state: any) => {
  return state.formData as IFormFields
}