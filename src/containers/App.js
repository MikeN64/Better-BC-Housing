import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from 'components/Header';
import Nav from 'components/Nav';
import StyledPage from 'components/StyledPage';

import 'containers/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Nav/>
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
            return (
              <StyledPage>
                test
              </StyledPage>
            )
          }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
