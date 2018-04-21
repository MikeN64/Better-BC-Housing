import styled from "styled-components";
import {viewport} from 'utils/viewport';

const StyledPage = styled.div `
    background-color: white;
    
    width: ${viewport.DESKTOP};
    
    margin: auto;
    margin-top: 50px;

    @media (max-width: ${viewport.DESKTOP}) {
      padding: 0px 0.5vw;
      width: 100vw;
    }
`;

export default StyledPage;