import React, {Component} from 'react'
import styled from 'styled-components'

const StyledFloorPlanPage = styled.div `
  width: 100vw;
  height: 300px;

  margin-top: 0;

  background-color: white;

`;

const FloorPlanPage = () => {
  return (
    <StyledFloorPlanPage>
      <h1>Boston College Main Campus</h1>
    </StyledFloorPlanPage>
  );
}

export default FloorPlanPage;