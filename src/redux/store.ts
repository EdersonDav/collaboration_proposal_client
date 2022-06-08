import { configureStore } from '@reduxjs/toolkit';
import sliceForm from "./sliceForm";
import sliceResult from "./sliceResult";
import sliceFormWhitResult from "./sliceFormWhitResult";

export const store = configureStore({
  reducer: {
    formData: sliceForm,
    resultData: sliceResult,
    formWhitResult: sliceFormWhitResult
  }
});
