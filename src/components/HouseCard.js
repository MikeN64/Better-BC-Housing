import React, {Component} from 'react'
import {withRouter} from "react-router-dom";

import styled from 'styled-components'
import {viewport} from 'utils/viewport.js'
import {mainColors} from 'utils/theme.js'

const StyledCard = styled.div `
  transition: transform 0.2s ease-in-out;
  display: inline-block;

  margin-top: 5px;
  margin-right: 10px;
  width: 150px;
  height: 18vh;
  background-color: ${props => props.occupancy === 100
  ? mainColors.darkblue
  : mainColors.fadedblue};
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;

  box-shadow: 2px 3px 15px -5px rgba(0,0,0,1);
  border-radius: 5px;

  p {
    text-align: left;
    font-size: 18px;
    text-align: center;
    position: relative;
    top: 20px;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

class HouseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  route = (url) => {
    this
      .props
      .history
      .push(url);
  }

  render() {
    return (
      <StyledCard
        occupancy={this.props.occupancy}
        onClick={() => this.route(this.props.url)}>
        <h3>{this.props.name}</h3>
        <p>{this.props.occupancy}% Taken</p>
      </StyledCard>
    );
  }
}

export default withRouter(HouseCard);