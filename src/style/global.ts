import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }
  body{
    background: #fff;
    color: #1B1B1F;
  }
  button{
    cursor: pointer;
  }
  h1{
    font-weight: 500;
  }

  main{
    width: 100%;
    height: 100vh;
    background-color: transparent;
  }

  .container{
    max-width: calc(1280px - 100px);
    padding: 0;
    @media(max-width: 680px) {
      max-width: calc(100% - 32px);
    }
    @media(min-width: 2000px) {
      max-width: calc(1280px - 100px);
    }
    margin: auto;
    margin-top: 80px;
  }

  .react-modal-overlay{
    position: fixed;
    background: rgba(0,0,0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 60%;
    padding: 20px;
    height: 80%;
    background-color: #fff;
    border: none;
    border-radius: 15px;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 30px;

    @media (max-width: 769px) {
      width: 100% ;
      height: 625px;
      max-height: 625px;
      padding: 5px;
      border-radius: 0;
    }

    ::-webkit-scrollbar {
      width: 4px;
      border-radius: 10px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background: none; 
      border-radius: 10px;
      margin-bottom: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #ddd; 
      border-radius: 10px;
    }
  }
  .react-modal-close{
    position: absolute;
    right: 24px;
    top: 24px;
    border:0;
    background: transparent;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.8);
    }
    svg{
      font-size: 40px;
    }
    @media (max-width: 769px) {
      top: 16px;
      right: 16px;
      svg{
        font-size: 40px;
      }
    }
  }
`;