/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from "./validations"
import { api } from '../../service/api';
import { IFormFields } from '../../types/interfaces';
import { Form, Input, Label, Section } from './style';

const initialValues = {} as  IFormFields

export const FormComponent = () => {
  const [dynamicFields, setDynamicFields] = useState({
    vacationsTwelfth: 0,
    workScheduleExemptionValue: 0,
    christmasTwelfth: 0,
    familyMembersValue: 0
  });

  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormFields>({
    defaultValues:{
      ...initialValues, 
      workScheduleExemption: 25,
      remoteWorkAllowance: 15,
      communicationsPlafond: 25,
      healthInsurance: 30
    },
    resolver: yupResolver(schema),
  });
  

  const [
    baseValue, 
    workScheduleExemption, 
    includeFamilymembers,
    numberFamilyMembers,
    healthInsurance
  ] = 
    watch([
      'baseValue', 
      'workScheduleExemption', 
      'includeFamilymembers',
      'numberFamilyMembers',
      'healthInsurance'
    ])

  const onSubmit = (values:IFormFields) =>{
    const payload = {
      ...values, 
      vacationsTwelfth: dynamicFields.vacationsTwelfth,
      workScheduleExemptionValue: dynamicFields.workScheduleExemptionValue,
      christmasTwelfth: dynamicFields.christmasTwelfth,
      familyMembersValue: dynamicFields.familyMembersValue
    }

    api.post('/proposal', payload).then(res=> {
      console.log(res.data);
    }).catch(err =>{
      console.log(err.message);
    })
  }

  useEffect(()=>{
    if(baseValue && workScheduleExemption){
      const payload = {
        baseValue, 
        workScheduleExemption
      }
      api.post('/finantial', payload).then(res=> {
        const {vacationsTwelfth, workScheduleExemptionValue, christmasTwelfth} =  res.data
        setDynamicFields({
          ...dynamicFields, 
          vacationsTwelfth,
          workScheduleExemptionValue,
          christmasTwelfth
        });
      }).catch(err =>{
        console.log(err.message);
      })
    }
  },[baseValue, workScheduleExemption])

  useEffect(()=>{
    if(numberFamilyMembers && healthInsurance){
      const payload = {
        numberFamilyMembers, 
        healthInsurance
      }
      api.post('/benefits', payload).then(res=> {
        const {familyMembersValue} = res.data
        setDynamicFields({
          ...dynamicFields, 
          familyMembersValue
        });
      }).catch(err =>{
        console.log(err.message);
      })
    }
    
  },[numberFamilyMembers, healthInsurance])

  return (
    <div className='container'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <h1>General</h1>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input 
              type="text" 
              id="name"
              {...register('name')}
            />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              id="email"
              {...register('email')}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <Label htmlFor="collaborationStartDate">Collaboration start date</Label>
            <Input 
              type="date" 
              id="collaborationStartDate"
              {...register('collaborationStartDate')}
            />
            <p>{errors.collaborationStartDate?.message}</p>
          </div>
        </Section>
        <Section>
          <h1>Financial</h1>
          <div>
            <Label htmlFor="baseValue">Base value</Label>
            <Input 
              type="number" 
              id="baseValue"
              {...register('baseValue')}
            />
            <p>{errors.baseValue?.message}</p>
          </div>
          <div>
            <Label htmlFor="workScheduleExemption">Work schedule exemption</Label>
            <Input 
              type="workScheduleExemption" 
              id="workScheduleExemption"
              {...register('workScheduleExemption')}
            />
            <p>{errors.workScheduleExemption?.message}</p>
          </div>
          <div>
            <Label htmlFor="workScheduleExemptionValue">Work schedule exemption value</Label>
            <Input 
              type="number" 
              id="workScheduleExemptionValue"
              readOnly
              value={dynamicFields.workScheduleExemptionValue}
            />
          </div>
          <div>
            <Label htmlFor="irsTax">IRS tax</Label>
            <Input 
              type="number" 
              id="irsTax"
              {...register('irsTax')}
            />
            <p>{errors.irsTax?.message}</p>
          </div>
          <div>
            <Label htmlFor="vacationsTwelfth">Vacations twelfth</Label>
            <Input 
              type="number" 
              id="vacationsTwelfth"
              readOnly
              value={dynamicFields.vacationsTwelfth}
            />
          </div>
          <div>
            <Label htmlFor="christmasTwelfth">Christmas twelfth</Label>
            <Input 
              type="number" 
              id="christmasTwelfth"
              readOnly
              value={dynamicFields.christmasTwelfth}
            />
          </div>
          <div>
            <Label htmlFor="otherExpenses">Other expenses</Label>
            <Input 
              type="number" 
              id="otherExpenses"
              {...register('otherExpenses')}
            />
            <p>{errors.otherExpenses?.message}</p>
          </div>
          <div>
            <Label htmlFor="remoteWorkAllowance">Remote work allowance</Label>
            <Input 
              type="number" 
              id="remoteWorkAllowance"
              {...register('remoteWorkAllowance')}
            />
            <p>{errors.remoteWorkAllowance?.message}</p>
          </div>
        </Section>
        <Section>
          <h1>Benefits</h1>
          <div>
            <Label htmlFor="communicationsPlafond">Communications plafond</Label>
            <Input 
              type="number" 
              id="communicationsPlafond"
              {...register('communicationsPlafond')}
            />
            <p>{errors.communicationsPlafond?.message}</p>
          </div>
          <div>
            <Label htmlFor="healthInsurance">Health insurance</Label>
            <Input 
              type="healthInsurance" 
              id="healthInsurance"
              {...register('healthInsurance')}
            />
            <p>{errors.healthInsurance?.message}</p>
          </div>
          <div>
            <Label htmlFor="includeFamilymembers">Include family members</Label>
            <Input 
              type="checkbox" 
              id="includeFamilymembers"
              {...register('includeFamilymembers')}
            />
            <p>{errors.includeFamilymembers?.message}</p>
          </div>
          {includeFamilymembers ?(
            <>
              <div>
              <Label htmlFor="numberFamilyMembers">Number family members</Label>
              <Input 
                type="number" 
                id="numberFamilyMembers"
                {...register('numberFamilyMembers')}
              />
              <p>{errors.numberFamilyMembers?.message}</p>
            </div>
            <div>
              <Label htmlFor="familyMembersValue">Family members value</Label>
              <Input 
                type="number" 
                id="familyMembersValue"
                readOnly
                value={dynamicFields.familyMembersValue}
              />
            </div>
            </>
          ): null}
        </Section>
        <div>
          <button type='submit'>Subimit</button>
          <button type='reset'>Cancel</button>
        </div>
      </Form>
    </div>
   
  ) 
}