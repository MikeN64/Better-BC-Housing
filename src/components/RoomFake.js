import React, {Component} from 'react'
import styled from 'styled-components'

const StyledRoom = styled.div `
    background-color: ${props => props.availability
  ? 'white'
  : '#cc0000'};
    width: 54px;
    height: 65px;
    margin-right: 1px;
    margin-bottom: 20px;

    :hover {
      cursor: pointer;
    }
`;

class Room extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledRoom availability={false}>
        <p>{this.props.id}</p>
      </StyledRoom>
    )
  }
}

export default Room;