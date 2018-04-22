import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import axios from 'axios';

import styled from 'styled-components';

import Header from 'components/Header';
import Nav from 'components/Nav';
import StyledPage from 'components/StyledPage';

import LoginPage from 'components/LoginPage';
import HousingPage from 'components/HousingPage';

import VandyFloorPlan from 'components/VandyFloorPlan';
import NinetyFloorPlan from 'components/NinetyFloorPlan';

import 'containers/App.css';

const StyledScreen = styled.div `
  margin:0;
  width: 100vw;
  height: 100vh;
  background-color: maroon;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomData: []
    }

    this.getRooms();
  }

  getRooms = () => {
    axios
      .get('/api')
      .then((response) => {
        this.setState({roomData: response.data});
        console.log('got rooms.')
      });
  }

  toggleRoom = (id, roomJson) => {
    return axios({
      method: 'put',
      url: '/api',
      params: {
        id: id
      },
      data: roomJson
    }).then((response) => {
      return response;
    });
  }

  setAvailability = (id) => {
    let aval = null;
    const roomData = this.state.roomData;
    if (roomData[id].availability) {
      roomData[id].availability = false;
      aval = false;
    } else {
      roomData[id].availability = true;
      aval = true;
    }
    console.log('room change')
    const roomJson = {
      id: roomData[id]
        .id
        .toString(),
      availability: aval
    };
    console.log(roomJson);
    this.setState({
      roomData
    }, () => {
      this.toggleRoom(roomData[id].id.toString(), roomJson);
      console.log('update room');
    });
  }

  componentDidMount = () => {
    setInterval(() => {
      console.log('tick');
      this.getRooms();
    }, 1000)
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
              exact
              path='/housing/vandy'
              render={() => {
              return (
                <StyledPage>
                  <VandyFloorPlan
                    roomData={this.state.roomData}
                    setAvailability={this.setAvailability}/>
                </StyledPage>
              )
            }}/>
            <Route
              exact
              path='/housing/ninety'
              render={() => {
              return (
                <StyledPage>
                  <NinetyFloorPlan/>
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
