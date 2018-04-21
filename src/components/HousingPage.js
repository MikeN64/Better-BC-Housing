import React, {Component} from 'react'
import styled from 'styled-components'

const StyledHousingPage = styled.div `
  width: 100vw;
  height: 300px;

  margin-top: 0;

  background-color: black;

  h1 {
    color: white;
    text-align: center;
  }
`;

const HousingPage = () => {
  return (
    <StyledHousingPage>
      <h1>Header</h1>
    </StyledHousingPage>
  );
}

export default HousingPage;