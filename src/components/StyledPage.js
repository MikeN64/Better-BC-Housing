import styled from "styled-components";
import {viewport} from 'utils/viewport';

const StyledPage = styled.div `
    background-color: white;
    
    width: 100vw;
    margin: 0 auto;

    @media (max-width: ${viewport.MOBILE}) {
      width: 100vw;
    }
`;

export default StyledPage;