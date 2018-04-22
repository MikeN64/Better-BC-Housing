import React, {Component} from 'react'
import styled from 'styled-components'
import {viewport} from 'utils/viewport.js'
import {mainColors} from 'utils/theme.js'

import {withRouter} from "react-router-dom";

import Room from 'components/Room.js'
import RoomFake from 'components/RoomFake.js'
import DormCard from 'components/DormCard.js'

import vandyBG from 'images/vandyBG.png'

const StyledVandyFloorPlan = styled.div `
  width: 100vw;
  height: 100vh;

  margin-top: 0;

  > button {
    position: absolute;
    z-index: 500;
    top: 2vh;
    left: 15px;
  }
`;

const StyledHeader = styled.div `
  position: relative;
  z-index: 30;
  overflow: hidden;

  width: 100vw;
  height: 10vh;
  background-color: ${mainColors.darkblue};
  text-align: center;
  h1 {
    font-size: 5vh;
    margin-top: 10px;
  }

  box-shadow: inset 0px 1px 15px 1px rgba(0,0,0,0.5);
`;

const StyledBG = styled.img `
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
`;

const StyledMap = styled.div `
  width: 100vw;
  height: 70vh;

  overflow-x: hidden;
`;

const Floors = styled.div `
  width: 70vw;
  height: 70vh;
  position: relative;
  z-index: 2;
  top: 25px;
  margin: auto;
  text-align: center;

  > h2 {
    line-height: 50px;
    margin-top: 25px;
  }

  @media (max-width: ${viewport.MOBILE}) {
    left: 2.5vw;
    width: 95vw;
  }
`;

const FloorsBG = styled.div `
  width: 70vw;
  height: 70vh;
  position: absolute;
  z-index: 2;
  left: 15vw;

  opacity: 0.5;

  @media (max-width: ${viewport.MOBILE}) {
    left: 2.5vw;
    width: 95vw;
  }
`;

const StyledBar = styled.div `
  overflow-y: hidden;
  white-space: nowrap;
  position: relative;
  z-index: 2;

  width: 100vw;
  height: 20vh;
  background-color: ${mainColors.darkblue};

  box-shadow: inset 0px 1px 15px 1px rgba(0,0,0,0.5);
`;

const FloorPlanBox = styled.div `
  box-shadow: 0px 1px 15px 1px rgba(0,0,0,0.5);
  background-color: #d1d1d1;

  width: 495px;
  height: 150px;

  left: 10vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

    @media (max-width: ${viewport.MOBILE}) {
      margin-left: 10px;
    }
`;

const floorTwoData = [
  {
    id: 200,
    availability: false
  }, {
    id: 201,
    availability: false
  }, {
    id: 202,
    availability: false
  }, {
    id: 203,
    availability: false
  }, {
    id: 204,
    availability: false
  }, {
    id: 205,
    availability: false
  }, {
    id: 206,
    availability: false
  }, {
    id: 207,
    availability: false
  }, {
    id: 208,
    availability: false
  }, {
    id: 209,
    availability: false
  }, {
    id: 210,
    availability: false
  }, {
    id: 211,
    availability: false
  }, {
    id: 212,
    availability: false
  }, {
    id: 213,
    availability: false
  }, {
    id: 214,
    availability: false
  }, {
    id: 215,
    availability: false
  }, {
    id: 216,
    availability: false
  }, {
    id: 217,
    availability: false
  }
];

const floorThreeData = [
  {
    id: 300,
    availability: false
  }, {
    id: 301,
    availability: false
  }, {
    id: 302,
    availability: false
  }, {
    id: 303,
    availability: false
  }, {
    id: 304,
    availability: false
  }, {
    id: 305,
    availability: false
  }, {
    id: 306,
    availability: false
  }, {
    id: 307,
    availability: false
  }, {
    id: 308,
    availability: false
  }, {
    id: 309,
    availability: false
  }, {
    id: 310,
    availability: false
  }, {
    id: 311,
    availability: false
  }, {
    id: 312,
    availability: false
  }, {
    id: 313,
    availability: false
  }, {
    id: 314,
    availability: false
  }, {
    id: 315,
    availability: false
  }, {
    id: 316,
    availability: false
  }, {
    id: 317,
    availability: false
  }
];

class VandyFloorPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  mapRooms = (data) => {
    return data.map((room, index) => <Room
      availability
      ={room.availability}
      id={room.id}
      index={index}
      setAvailability={this.props.setAvailability}
      userRoom={this.props.userRoom}
      owner={room.owner}/>);
  }

  mapRoomsFake = (data) => {
    return data.map((room, index) => <RoomFake availability={room.availability} id={room.id}/>);
  }

  route = (url) => {
    this
      .props
      .history
      .push(url);
  }

  render() {
    return (
      <StyledVandyFloorPlan>
        <button
          style={{}}
          class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
          onClick={() => this.route('/housing')}>
          Back
        </button>
        <StyledHeader>
          <h1>Vanderslice Hall</h1>
        </StyledHeader>
        <StyledMap>
          <StyledBG src={vandyBG}/>
          <FloorsBG/>
          <Floors>
            <h2>Floor 1</h2>
            <FloorPlanBox>
              {this.mapRooms(this.props.roomData)}
            </FloorPlanBox>
            <h2>Floor 2</h2>
            <FloorPlanBox>
              {this.mapRoomsFake(floorTwoData)}
            </FloorPlanBox>
            <h2>Floor 3</h2>
            <FloorPlanBox>
              {this.mapRoomsFake(floorThreeData)}
            </FloorPlanBox>
          </Floors>
        </StyledMap>
        <StyledBar>
          <DormCard
            userRoom={this.props.userRoom}
            userName={this.props.userName}
            userRoomId={this.props.userRoomId}/>
        </StyledBar>
      </StyledVandyFloorPlan>
    );
  }
}

export default withRouter(VandyFloorPlan);