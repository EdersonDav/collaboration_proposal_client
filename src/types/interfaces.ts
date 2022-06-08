export interface IFormFields {
  name: string;
  email: string;
  collaborationStartDate: Date;

  baseValue: number;
  workScheduleExemption: number;
  workScheduleExemptionValue: number;
  irsTax: number;
  vacationsTwelfth: number;
  christmasTwelfth: number;
  otherExpenses: number;
  remoteWorkAllowance: number;

  communicationsPlafond: number;
  healthInsurance: number;
  includeFamilymembers: boolean;
  numberFamilyMembers?: number;
  familyMembersValue?: number;
}

export interface IDeductions {
  baseValueSocialSecurity: number;
  christmasAllowanceTwelfthSocialSecurity: number;
  vacationsAllowanceTwelfthSocialSecurity: number;
  baseValueIRS: number;
  christmasAllowanceTwelfthAllowanceIRS: number;
  vacationsAllowanceTwelfthAllowanceIRS: number;
}

export interface IValues {
  monthlyGrossValue: number;
  monthlyNetValue: number;
  anualGrossValue: number;
  anualNetValue: number;
  monthlyBenefits: number;
  anualBenefits: number;
}

export interface ICosts {
  annualCosts: number;
  monthlyCosts: number;
  dailyCosts: number;
}

export interface IProposalResult {
  deductions: IDeductions;
  values: IValues;
  costs: ICosts;
}