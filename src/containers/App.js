import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import axios from 'axios';

import styled from 'styled-components';

import StyledPage from 'components/StyledPage';

import LoginPage from 'components/LoginPage';
import HousingPage from 'components/HousingPage';

import VandyFloorPlan from 'components/VandyFloorPlan';
import NinetyFloorPlan from 'components/NinetyFloorPlan';

import 'containers/App.css';

const mockData = [
  {
    id: 200,
    availability: true,
    owner: '.'
  }, {
    id: 201,
    availability: true,
    owner: '.'
  }, {
    id: 202,
    availability: true,
    owner: '.'
  }, {
    id: 203,
    availability: true,
    owner: '.'
  }, {
    id: 204,
    availability: true,
    owner: '.'
  }
];

const StyledScreen = styled.div `
  margin:0;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomData: [],
      userName: 'unnamed',
      userRoom: null,
      userRoomId: null,
      occupancy: 0
    }

    this.getRooms();
  }

  getRooms = () => {
    axios
      .get('/api')
      .then((response) => {
        this.setState({roomData: response.data});
        this.calcOccupancy();
        console.log('got rooms.')
      });
    this.calcOccupancy();
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
    if (this.state.userRoom === null && this.state.roomData[id].availability) {
      let aval = false;
      const roomData = this.state.roomData;

      console.log('room change')
      const roomJson = {
        id: roomData[id]
          .id
          .toString(),
        availability: aval,
        owner: this.state.userName
      };
      console.log(roomJson);
      this.setState({
        roomData
      }, () => {
        this.toggleRoom(roomData[id].id.toString(), roomJson);
        console.log('update room');
      });
      this.setState({userRoom: id, userRoomId: roomData[id].id});
    } else if (id === this.state.userRoom) {
      let aval = true;
      const roomData = this.state.roomData;
      console.log('room change')
      const roomJson = {
        id: roomData[id]
          .id
          .toString(),
        availability: aval,
        owner: '.'
      };
      console.log(roomJson);
      this.setState({
        roomData
      }, () => {
        this.toggleRoom(roomData[id].id, roomJson);
        console.log('update room');
      });
      this.setState({userRoom: null, userRoomId: null});
    }
  }

  calcOccupancy = () => {
    let openRooms = 0;

    let roomData = this.state.roomData;
    roomData.forEach((element) => {
      if (element.availability) {
        openRooms++;
      }
    });
    this.setState({
      occupancy: (openRooms / 18).toFixed() * 100
    });
  }

  setUsername = (name) => {
    this.setState({
      userName: name
    }, () => console.log(this.state.userName));
  }

  componentDidMount = () => {
    setInterval(() => {
      console.log('tick');
      this.getRooms();
    }, 300)
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
                  <LoginPage setUsername={this.setUsername}/>
                </StyledPage>
              )
            }}/>
            <Route
              exact
              path='/housing'
              render={() => {
              return (
                <StyledPage>
                  <HousingPage occupancy={this.state.occupancy}/>
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
                    setAvailability={this.setAvailability}
                    userRoom={this.state.userRoom}
                    userRoomId={this.state.userRoomId}
                    userName={this.state.userName}/>
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
