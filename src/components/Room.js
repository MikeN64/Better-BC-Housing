import React, {Component} from 'react'
import styled from 'styled-components'

const StyledRoom = styled.div `
    background-color: ${props => props.availability ? 'white' : 'red'};
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
    this.state = {
    };
  }

  handleClick = () => {
    this.props.setAvailability(this.props.index);
  }

  render() {
    return (
      <StyledRoom availability={this.props.availability} onClick={() => this.handleClick()}>
        <p>{this.props.id}</p>
      </StyledRoom>
    )
  }
}

export default Room;