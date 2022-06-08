import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 50px ;
  @media (max-width: 628px){
    padding: 0;
    margin-top: -30px;
  }
`

export const Section = styled.section`
  h1{
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #212121;
    margin: 30px 0 25px 0;
    @media (max-width: 628px){
      font-size: 16px;
      line-height: 20px;
      margin: 25px 0 10px 0;
    }
  }
  > div{
    display: inline-flex;
    flex-wrap: wrap;
    gap: 30px;
    p {
      font-size: 12px;
      color: red;
      margin-top: 10px;
      font-style: italic;
    }
    > div{
      display: flex ;
      flex-direction: column;
    }
    @media (max-width: 628px){
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
`

export const Input = styled.input`
  padding: 10px;
  background: #F1F3F5;
  border-radius: 8px;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #212121;
  width: fit-content;
  border: solid 1px #999999 ;
  @media (max-width: 628px){
    padding: 7px;
  }
`

export const Label = styled.label`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #4B4B4B;
  margin-bottom: 10px;
  @media (max-width: 628px){
    
  }
`

export const ButtonContend = styled.div`
  margin-top:  20px;
  margin-bottom: 30px;
  button{
    cursor: pointer;
    border: 0;
    padding: 14px 20px;
    background-color: #bf2626;
    border-radius: 8px;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff ;

    &:first-child{
      margin-right: 30px;
      background-color: #129BA8;

    }
    @media (max-width: 628px){
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 40px;
    }
  }
  
`
