import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import styled from 'styled-components';

import Header from 'components/Header';
import Nav from 'components/Nav';
import StyledPage from 'components/StyledPage';

import LoginPage from 'components/LoginPage';
import HousingPage from 'components/HousingPage';
import FloorPlanPage from 'components/FloorPlanPage';

import 'containers/App.css';

const StyledScreen = styled.div `
  margin-top: 0;
  width: 100vw;
  height: 100vh;
  background-color: maroon;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <StyledScreen>
          <Switch>
            <Route
              exact
              path='/'
              render={() => {
              return (
                <StyledPage>
                  <LoginPage/>
                </StyledPage>
              )
            }}/>
            <Route
              exact
              path='/housing'
              render={() => {
              return (
                <StyledPage>
                  <HousingPage/>
                </StyledPage>
              )
            }}/>
            <Route
              path='/housing/'
              render={() => {
              return (
                <StyledPage>
                  <FloorPlanPage/>
                </StyledPage>
              )
            }}/>
          </Switch>
        </StyledScreen>
      </div>
    );
  }
}

export default App;
