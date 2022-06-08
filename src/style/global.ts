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
    width: 100vw;
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
`;