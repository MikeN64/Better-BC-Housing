import React, {Component} from 'react'
import styled from 'styled-components'

const StyledFloorPlanPage = styled.div `
  width: 100vw;
  height: 300px;

  margin-top: 0;

  background-color: black;

  h1 {
    color: white;
    text-align: center;
  }
`;

const FloorPlanPage = () => {
  return (
    <StyledFloorPlanPage>
      <h1>Header</h1>
    </StyledFloorPlanPage>
  );
}

export default FloorPlanPage;