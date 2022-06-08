import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email().required(),
  collaborationStartDate: yup.date(),

  baseValue: yup.number().min(100).required(),
  workScheduleExemption: yup.number().min(10).required(),
  irsTax: yup.number().min(10).required(),
  otherExpenses: yup.number().min(10).required(),
  remoteWorkAllowance: yup.number().min(10).required(),

  communicationsPlafond: yup.number().min(10).required(),
  healthInsurance: yup.number().min(10).required(),
  includeFamilymembers: yup.boolean(),
  numberFamilyMembers: yup.number().min(1),
})