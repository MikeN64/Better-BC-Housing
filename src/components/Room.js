import React, {Component} from 'react'
import styled from 'styled-components'

const StyledRoom = styled.div `
    background-color: ${props => props.userRoom === props.index
  ? 'green'
  : props.availability
    ? 'white'
    : '#cc0000'};

    p {
    color: ${props => props.userRoom === props.index
      ? 'white'
      : props.availability
        ? 'black'
        : 'black'};
    }

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
    this.state = {};
  }

  handleClick = () => {
    console.log(this.props.userRoom + ' ' + this.props.index)
    this
      .props
      .setAvailability(this.props.index);
  }

  render() {
    return (
      <StyledRoom
        availability={this.props.availability}
        onClick={() => this.handleClick()}
        userRoom={this.props.userRoom}
        index={this.props.index}>
        <p>{this.props.id}</p>
        <p>{this.props.owner}</p>
      </StyledRoom>
    )
  }
}

export default Room;