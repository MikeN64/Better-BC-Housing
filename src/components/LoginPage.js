import React, {Component} from 'react'
import {withRouter} from "react-router-dom";

import styled from 'styled-components'
import {keyframes} from 'styled-components'
import {viewport} from 'utils/viewport.js'

import loginBG from 'images/loginBG.png'
import titleLogo from 'images/titleLogo.png'

const loadIn = keyframes `
  from {
    transform: translateY(-50px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const StyledLoginPage = styled.body `
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const StyledLoginBG = styled.img `
    position: absolute;
    top: 0;
    width: 1920px;
    left: -200px;

    @media (max-width: ${viewport.MOBILE}) {
      width: 1280px;
      left: -500px;
    }
`;

const StyledLoginTitle = styled.img `
  animation: ${loadIn} 700ms ease-in-out forwards;
  opacity: 0;
  animation-delay: 250ms;
    position: absolute;

    display: block;
    width: 70vw;
    left: 15vw;
    top: 50px;

    @media (max-width: ${viewport.MOBILE}) {
      width: 95vw;
      top: 50px;
      left: 2.5vw;
    }
`;

const StyledLoginPanel = styled.div `
  animation: ${loadIn} 700ms ease-in-out forwards;
  opacity: 0;
  animation-delay: 450ms;

  height: 275px;
  width: 400px;
  
  top: 250px;
  margin: auto;
  padding: 20px;
  background-color: white;

  
  @media (max-width: ${viewport.MOBILE}) {
      width: 95vw;
      top: 150px;
    }
`;

const LoginForm = styled.form `
  background-color: white;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  handleChange = (event) => {
    this.setState({username: event.target.value});
  }

  handleSubmit = (event) => {
    this
      .props
      .setUsername(this.state.username);
    this.route('housing');
    event.preventDefault();
  }

  route = (url) => {
    this
      .props
      .history
      .push(url);
  }

  render() {
    return (
      <StyledLoginPage>
        <StyledLoginBG src={loginBG}/>
        <StyledLoginTitle src={titleLogo}/>
        <StyledLoginPanel className="mdl-card mdl-shadow--16dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Welcome</h2>
          </div>
          <div class="mdl-card__supporting-text">
            A modern redesign of Boston College's housing selection service.
          </div>
          <div class="mdl-card__actions">
            <LoginForm onSubmit={this.handleSubmit}>
              <div
                style={{
                width: '100%'
              }}
                class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input
                  class="mdl-textfield__input"
                  type="text"
                  id="sample3"
                  onChange={this.handleChange}/>
                <label class="mdl-textfield__label" for="sample3">Name:</label>
              </div>
              <button
                style={{
                width: '100%'
              }}
                type="submit"
                class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                Login
              </button>
            </LoginForm>
          </div>
        </StyledLoginPanel>
      </StyledLoginPage>
    );
  }
}

export default withRouter(LoginPage);