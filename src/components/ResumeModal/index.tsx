import { Fragment, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosClose } from 'react-icons/io';

import { api } from '../../service/api';
import { openCloseModal, useModal } from '../../redux/sliceResumeModal';
import { useFormData } from '../../redux/sliceForm';
import { cancel } from '../../redux/sliceCancelProposal';
import { useDataResult } from '../../redux/sliceResult';
import { infomationObject } from './informationsObject'
import { ResumeModalContainer, ModalOpen, ValuesResume, ContainerButtonsProposal } from './style';

Modal.setAppElement('#root')

export const ResumeModal = () => {
  const [load, setLoad] = useState(false)
  const dispatch = useDispatch();
  const isModalOpen = useSelector(useModal);
  const formData = useSelector(useFormData);
  const resultData = useSelector(useDataResult);
  
  const allInformationsData: any = {  
    ...formData,  
    ...resultData.costs, 
    ...resultData.deductions, 
    ...resultData.values,
    includeFamilymembers: formData.includeFamilymembers ? 'Sim' : 'Não',
    numberFamilyMembers: formData.includeFamilymembers ? formData.numberFamilyMembers : '',
    familyMembersValue: formData.includeFamilymembers ? formData.familyMembersValue : '',
  }

  const cancelProposal = () =>{
    dispatch(cancel())
    dispatch(openCloseModal())
  }

  const onSubmitProposal = async () => {
    setLoad(true)
    await api.post('/proposal-resume', allInformationsData);
    setLoad(false)
    cancelProposal()
  }

  return(
    <>
      <ResumeModalContainer 
        isOpen={isModalOpen} 
        onRequestClose={() => dispatch(openCloseModal())}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      > 
        <button
          type="button"
          onClick={() => dispatch(openCloseModal())}
          className="react-modal-close"
        >
          <IoIosClose  color="#4B4B4B"/>
        </button>
        <div>
          {infomationObject.map( information => (
            <Fragment key={information.title} >
              <h1>{information.title}</h1>

              <ValuesResume>
                {information.data.map(data => (
                  <p key={data.key}> 
                    {data.label}: 
                    <span>
                      {allInformationsData[data.key]}
                      {
                        data.label.includes('%') ? ' %' :
                        data.label.includes('€') && allInformationsData[data.key] ? ' €' : ''
                      }
                    </span>
                  </p>
                ))}
              </ValuesResume>
            </Fragment>
          ))}
        </div>
        <ContainerButtonsProposal>
          <button disabled={load ? true : false} type='button' onClick={() => dispatch(openCloseModal())}>Edit form proposal</button>
          <button disabled={load ? true : false} className='submit' type='button' onClick={onSubmitProposal}>Submit proposal</button>
          <button disabled={load ? true : false} className='cancel' type='button' onClick={cancelProposal}>Cancel proposal</button>
        </ContainerButtonsProposal>
      </ResumeModalContainer>
      <ModalOpen modalOpen={isModalOpen}/>
    </>
    
  )

}