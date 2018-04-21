import React, {Component} from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div `
  width: 100vw;
  height: 300px;

  margin-top: 0;

  background-color: black;

  h1 {
    color: white;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  );
}

export default Header;