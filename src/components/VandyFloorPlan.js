import React, {Component} from 'react'
import styled from 'styled-components'

import Room from 'components/Room.js'

const StyledVandyFloorPlan = styled.div `
  width: 100vw;
  height: 100vh;

  margin-top: 0;

  background-color: white;
`;

const StyledMap = styled.div `
  width: 100vw;
  height: 65vh;
`;

const StyledBar = styled.div `
  overflow-y: hidden;
  white-space: nowrap;

  width: 100vw;
  height: 35vh;
  background-color: white;

  box-shadow: inset 0px 1px 15px 1px rgba(0,0,0,0.5);
`;

const FloorPlanBox = styled.div `
  position: absolute;
  transform: rotate(-10deg);
  background-color: gray;
  box-shadow: 0px 1px 15px 1px rgba(0,0,0,0.5);

  width: 495px;
  height: 150px;

  left: 35vw;
  top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

class VandyFloorPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  mapRooms = (data) => {
    return data.map((room,index) => <Room availability ={room.availability} id={room.id} index={index} setAvailability={this.props.setAvailability}/>);
  }

  render() {
    return (
      <StyledVandyFloorPlan>
        <StyledMap>
          <h1>Vanderslice</h1>
          <FloorPlanBox>
            {this.mapRooms(this.props.roomData)}
          </FloorPlanBox>
        </StyledMap>
        <StyledBar></StyledBar>
      </StyledVandyFloorPlan>
    );
  }
}

export default VandyFloorPlan;