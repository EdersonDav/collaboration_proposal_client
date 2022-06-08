import { configureStore } from '@reduxjs/toolkit';
import sliceForm from "./sliceForm";
import sliceResult from "./sliceResult";
import sliceResumeModal from "./sliceResumeModal";
import sliceCancelProposal from "./sliceCancelProposal";

export const store = configureStore({
  reducer: {
    formData: sliceForm,
    resultData: sliceResult,
    resumeModal: sliceResumeModal,
    calcelProposal: sliceCancelProposal
  }
});
