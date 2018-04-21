import React, {Component} from 'react'
import styled from 'styled-components'

const StyledLoginPage = styled.div `
  height: 300px;

  margin-top: 0;

  background-color: black;

  h1 {
    color: white;
    text-align: center;
  }
`;

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <h1>Login Page</h1>
    </StyledLoginPage>
  );
}

export default LoginPage;