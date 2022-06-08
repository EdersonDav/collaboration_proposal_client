import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1{
    font-size: 48px;
    margin-bottom: 50px;
  }

  a{
    text-decoration: none;
    color: inherit;
    font-style: normal;
    font-size: 28px;
    background: transparent;
    padding: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    svg{
      margin-left: 20px ;
    }
    box-shadow: 3px 10px 24px -6px #129BA8;
  }

  @media (max-width: 628px) {
    justify-content: flex-start;
    h1{
      font-size: 28px;
      margin-bottom: 50px;
    }
    a{
      font-size: 18px;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      svg{
        margin-left: 10px ;
      }
    }
  }
`