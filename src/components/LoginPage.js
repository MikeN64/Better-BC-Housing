import React, { Component } from 'react'
import styled from 'styled-components'
import {keyframes} from 'styled-components'
import LoginBG from 'images/LoginBG.png'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLoginPage = styled.body`
  height: 100vh;
  h1 {
    text-align: center;
  }

  h2 {
    margin-top: 10px;
    margin-left: 10px;
    color: #696969;
  }
`;

const LoginBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const LoginPanel = styled.div`
  animation: ${rotate360} 2s linear infinite;
  position: relative;
  height: 30vh;
  width: 30%;
  left: 36%;
  top: 40%;
  background-color: #AFEEEE;
  opacity: 0.75;
  border-radius: 25px;
  
`
const UserInput = styled.input`
  position: relative;
  width: 60%;
  padding: 0.5em;
  margin: 0.5em;
  color: gray;
  background: white;
  border: none;
  border-radius: 3px;
  `;

const PasswordInput = styled.input`
  position: relative;
  width: 60%;
  padding: 0.5em;
  margin: 0.5em;
  color: gray;
  background: white;
  border: none;
  border-radius: 3px;
  
  `;

const LoginButton = styled.button`
  position: relative;
  top: 33vh;
  left: 50%;
  margin: -20px -50px; 
  background: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
    `;

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  changeColor = (newColor) => {
    this.setState({ color: newColor })
    console.log(newColor);
  }

  render() {
    return (
      <StyledLoginPage>
        <h1> Login Page </h1>
        <LoginBackground src={LoginBG} />
        <LoginPanel>
          <h2> Username </h2>
          <UserInput />
          <h2> Password </h2>
          <PasswordInput type="password" id="myInput"/>
          <LoginButton type="button"
          onclick="alert('Hello world!')">LOGIN!
          </LoginButton>
        </LoginPanel>

      </StyledLoginPage>
    );
  }
}

export default LoginPage;