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
  height: 33vh;
  background-color: ${mainColors.fadedblue};
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

class DormCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <StyledCard>
        <h3>{this.props.userName}</h3>
        <p>{'Room:' + this.props.userRoomId}</p>
      </StyledCard>
    );
  }
}

export default withRouter(DormCard);