import React, {Component} from 'react'
import {withRouter} from "react-router-dom";

import styled from 'styled-components'
import {viewport} from 'utils/viewport.js'
import {mainColors} from 'utils/theme.js'

import NinetyHousing from 'images/NinetyHousing.png';
import VandyHousing from 'images/VandyHousing.png';
import campusMap from 'images/campusMap.png'

import HouseCard from 'components/HouseCard.js'

const StyledHousingPage = styled.div `
  margin-top: 0;
  
  > button {
    position: absolute;
    z-index: 500;
    top: 2vh;
    left: 15px;
  }
`;

const StyledHeader = styled.div `
  position: relative;
  z-index: 30;
  overflow: hidden;

  width: 100vw;
  height: 10vh;
  background-color: ${mainColors.darkblue};
  text-align: center;
  h1 {
    font-size: 5vh;
    margin-top: 10px;
  }

  box-shadow: inset 0px 1px 15px 1px rgba(0,0,0,0.5);
`;

const StyledMap = styled.div `
  overflow: hidden;
  width: 100vw;
  height: 70vh;

  h1 {
    display: block;
    position: absolute;
    z-index: 100;
  }
`;

const StyledCampusMap = styled.img `
    position: absolute;
    top: 0vw;
    width: 100vw;
    opacity: 0.7;

    @media (max-width: ${viewport.MOBILE}) {
      top: 50px;
      width: 650px;
    }
`;

const StyledBar = styled.div `
  position: relative;
  z-index: 30;
  overflow-y: hidden;
  white-space: nowrap;

  width: 100vw;
  height: 20vh;
  background-color: ${mainColors.darkblue};

  box-shadow: inset 0px 1px 15px 1px rgba(0,0,0,0.5);
`;

const StyledNinety = styled.img `
  transition: transform 0.2s ease-in-out;
  position: absolute;
  z-index: 20;
  width: 23vw;

  top: 8vw;
  left: 10vw;

  @media (max-width: ${viewport.MOBILE}) {
    width: 175px;
    top: 100px;
    left: 50px;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
  
`;

const StyledVandy = styled.img `
  transition: transform 0.2s ease-in-out;
  position: absolute;
  z-index: 20;
  width: 20vw;

  top: 20vw;
  left: 35vw;

  @media (max-width: ${viewport.MOBILE}) {
    width: 150px;
    top: 170px;
    left: 215px;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

const housingData = [
  {
    url: 'housing/Vandy',
    name: "Vanderslice",
    occupancy: 50
  }, {
    url: 'housing/Vandy',
    name: "Thomas Moore",
    occupancy: 50
  }, {
    url: 'housing',
    name: "Walsh",
    occupancy: 100
  }, {
    url: 'housing',
    name: "Stayer",
    occupancy: 100
  }, {
    url: 'housing',
    name: "2150 St.",
    occupancy: 100
  }, {
    url: 'housing',
    name: "Greycliff",
    occupancy: 100
  }, {
    url: 'housing',
    name: "Ignacio",
    occupancy: 100
  }, {
    url: 'housing',
    name: "Rubenstein",
    occupancy: 100
  }
];

class HousingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'none'
    };
  }

  mapHousing = (occupancy) => {
    return housingData.map((house, index) => <HouseCard url={house.url} name={house.name} occupancy={occupancy} key={index}/>)
  };

  route = (url) => {
    this
      .props
      .history
      .push(url);
  }

  render() {
    return (
      <StyledHousingPage>
        <button
          style={{}}
          class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-button--accent"
          onClick={() => this.route('/')}>
          Logout
        </button>
        <StyledHeader>
          <h1>Lower Campus</h1>
        </StyledHeader>
        <StyledMap>
          <StyledCampusMap src ={campusMap}/>
          <StyledNinety onClick={() => this.route('/housing/Vandy')} src={NinetyHousing}/>
          <StyledVandy onClick={() => this.route('/housing/Vandy')} src={VandyHousing}/>
        </StyledMap>
        <StyledBar>
          {this.mapHousing(this.props.occupancy)}
        </StyledBar>
      </StyledHousingPage>
    );
  }
}

export default withRouter(HousingPage);