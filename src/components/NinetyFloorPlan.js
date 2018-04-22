import React, {Component} from 'react'
import styled from 'styled-components'

const StyledNinetyFloorPlan = styled.div `
  width: 100vw;
  height: 300px;

  margin-top: 0;

  background-color: white;
`;


class NinetyFloorPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <StyledNinetyFloorPlan>
        <h1>Ninety</h1>
      </StyledNinetyFloorPlan>
    );
  }
}

export default NinetyFloorPlan;