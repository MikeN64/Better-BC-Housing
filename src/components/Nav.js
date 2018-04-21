import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'semantic-ui-react';
import styled from "styled-components";
import {viewport} from 'utils/viewport';

import {Link, withRouter} from 'react-router-dom';

const Navbar = styled.div `
  width: 100vw;
  height: 56px;
  text-align: center;
  background-color: black;
`;

const NavbarButtons = styled.div `
  width: 780px;
  margin: auto;
  @media (max-width: ${viewport.DESKTOP}) {
    width: 100vw;
    padding: 0;
  }

`;

const StyledButton = styled.div `
  display: inline-block;
  background-color: blue;

  width: 100px;
  height: 25px;
  padding: 15px;

  margin-right: 15px;

  :hover {
    cursor: pointer;
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  toRoute = (url) => {
    this
      .props
      .history
      .push('/' + url);
  }

  render() {
    return (
      <Navbar>
        <NavbarButtons>
          <StyledButton onClick={() => this.toRoute('')}>
            <a>Home</a>
          </StyledButton>
          <StyledButton onClick={() => this.toRoute('Ancients')}>
            <a>Ancients</a>
          </StyledButton>
        </NavbarButtons>
      </Navbar>
    )
  }
}

export default withRouter(Nav);