import styled from 'styled-components'
import image from '../../assets/image.svg'
import { shade } from 'polished'

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-left: 2rem;
`

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 500px;
  margin-right: 5rem;
  h1 {
    color: #461f69;
  }
  form {
    display: grid;
    gap: 1rem;
    p {
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      color: #444b59;
      margin-bottom: 4rem;
    }
    h2 {
      color: #461f69;
      font-size: 1.3rem;
    }

    .erro {
      color: red;
      display: flex;
      justify-content: center;
      margin-top: 0.5rem;
    }
    /* input {
      border-radius: 5rem;
      border-style: solid;
      border-color: #9ba0fc;
      outline: none;
      padding: 0.5rem;
      ::placeholder {
        color: #c8d3f9;
        size: 1.5rem;
      } */
  }
  a {
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    color: #444b59;
    text-align: center;
    margin-bottom: 1rem;
  }
  button {
    font-family: 'Nunito', sans-serif;
    border-radius: 5rem;
    border-color: #9ba0fc;
    border: none;
    outline: none;
    background: #461f69;
    color: white;
    padding: 0.5rem;
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    transition: background 0.2s;
  }

  button:hover {
    background: ${shade(0.1, '#461f69')};
  }

  .separator {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #444b59;
    line-height: 0.1rem;
    margin: 16px 0 20px;
  }
  .separator span {
    background: #dfddda;
    padding: 0 10px;
  }

  .sign-button {
    font-family: 'Nunito', sans-serif;
    border-radius: 5rem;
    border-color: #9ba0fc;
    outline: none;
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    background: #9ba0fc;
    color: white;
    padding: 0.6rem;
    transition: background 0.2s;
  }
  .sign-button:hover {
    background: ${shade(0.1, '#9ba0fc')};
  }
`

export const Image = styled.div`
  background: url(${image}) no-repeat center;
  background-size: contain;
  width: 100vw;
  height: 100vh;
`
