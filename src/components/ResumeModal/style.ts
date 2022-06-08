import styled, { createGlobalStyle } from "styled-components";
import Modal from 'react-modal';


export const ModalOpen = createGlobalStyle<{ modalOpen: boolean }>`
  main{
    overflow-x: ${({ modalOpen }) => modalOpen ? 'hidden' : 'scroll'}
  }
`;

export const ResumeModalContainer = styled(Modal)`
  background-color: #fff ;
  position: relative ;
  div{
    h1{
      font-weight: 500;
      font-size: 28px;
      color: #4B4B4B;
      margin: 20px 0 5px 0;
      @media (max-width: 628px){
        font-size: 18px;
        margin: 15px 0 5px 0;
      }
    }

  }
  .load{
    width: 50px;
    height: 50px;
    background-color: transparent;
  }
`

export const ValuesResume = styled.div`
  > p {
    font-weight: 700;
    font-size: 16px;
    color: #4B4B4B;
    
    span{
      font-weight: 500;
      margin-left: 10px;
    }
    @media (max-width: 628px){
      font-size: 14px;
      margin-bottom: 5px;
    }
  }

`

export const ContainerButtonsProposal = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 628px){
    flex-direction: column ;
  }
  button{
    cursor: pointer;
    border: 0;
    padding: 10px 15px;
    background-color: #129BA8;
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.1em;
    color: #fff;
    min-width: 150px;

    &:disabled{
      filter: grayscale(80%);
      cursor: not-allowed;
    }

    &.submit{
      background-color: #47C9A1;
    }

    &.cancel{
      background-color: #bf2626;
    }
    
    @media (max-width: 628px){
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
`