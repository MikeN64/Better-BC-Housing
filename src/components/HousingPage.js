import React, {Component} from 'react'
import {withRouter} from "react-router-dom";

import styled from 'styled-components'
import {viewport} from 'utils/viewport.js'

import NinetyHousing from 'images/NinetyHousing.png';
import VandyHousing from 'images/VandyHousing.png';

import HouseCard from 'components/HouseCard.js'

const StyledHousingPage = styled.div `
  margin-top: 0;

  background-color: white;
`;

const StyledMap = styled.div `
  width: 100vw;
  height: 65vh;
`;

const StyledBar = styled.div `
  overflow-y: hidden;
  white-space: nowrap;

  width: 100vw;
  height: 35vh;
  background-color: white;

  box-shadow: inset 0px 1px 15px 1px rgba(0,0,0,0.5);
`;

const StyledNinety = styled.img `
  transition: transform 0.2s ease-in-out;
  position: absolute;
  width: 350px;

  top: 75px;
  left: 30vw;

  @media (max-width: ${viewport.MOBILE}) {
    width: 70vw;
    top: 70px;
    left: 50px;
  }

  :hover {
    mouse: pointer;
    transform: scale(1.03);
  }
  
`;

const StyledVandy = styled.img `
  transition: transform 0.2s ease-in-out;
  position: absolute;
  width: 250px;

  top: 250px;
  left: 50vw;

  @media (max-width: ${viewport.MOBILE}) {
    width: 50vw;
    top: 250px;
    left: 200px;
  }

  :hover {
    mouse: pointer;
    transform: scale(1.03);
  }
`;

const StyledInfoBox = styled.div `
  position: absolute;
  background-color: red;

  display: ${props => props.display};
  top: ${props => props.top};
  left: ${props => props.left};

  width: 200px;
  height: 300px;
`;

const InfoBox = (props) => {
  return (<StyledInfoBox display={props.display} top={props.top} left={props.left}/>);
}

class HousingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'none'
    };
  }

  mouseOut(e) {
    // this.setState({display: 'none'});
  }

  mouseOver(e) {
    // this.setState({display: 'block'});
  }

  render() {
    return (
      <StyledHousingPage>
        <StyledMap>
          <h1>Boston College Lower Campus</h1>
          <StyledNinety
            onMouseOut={() => this.mouseOut()}
            onMouseOver={() => this.mouseOver()}
            src={NinetyHousing}/>
          <StyledVandy src={VandyHousing}/>
          <InfoBox display={this.state.display}/>
        </StyledMap>
        <StyledBar>
          <HouseCard url='/housing/ninety' title={'Ninety'} occupancy={'50%'}/>
          <HouseCard url='/housing/vandy' title={'Vandy'} occupancy={'50%'}/>
          <HouseCard url='/housing/ninety' title={'Ninety'} occupancy={'50%'}/>
        </StyledBar>
      </StyledHousingPage>
    );
  }
}

export default HousingPage;