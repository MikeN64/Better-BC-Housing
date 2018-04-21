import styled from "styled-components";
import {viewport} from 'utils/viewport';

const StyledPage = styled.div `
    background-color: white;
    
    width: ${viewport.DESKTOP};
    margin: 0 auto;

    @media (max-width: ${viewport.DESKTOP}) {
      padding: 0px 0.5vw;
      width: 90vw;
    }
`;

export default StyledPage;