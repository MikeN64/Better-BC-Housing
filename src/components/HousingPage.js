import React, {Component} from 'react'
import styled from 'styled-components'

const StyledHousingPage = styled.div `
  margin-top: 0;

  background-color: white;
`;

const HousingPage = () => {
  return (
    <StyledHousingPage>
      <h1>Boston College Main Campus</h1>
    </StyledHousingPage>
  );
}

export default HousingPage;