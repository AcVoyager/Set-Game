import React from 'react';

import Game from '../components/Game'
import WelcomePage from '../components/WelcomePage'
import Rule from '../components/Rule'

import { STATES } from "../redux/stateConstants";
import { useSelector } from 'react-redux';

function PageMainContent(props) {

  const getPage = (appState) => {
    switch(appState){
      case STATES.WELCOME:
        return <WelcomePage/>
      case STATES.GAME:
        return <Game/>;
      case STATES.RULE:
        return <Rule/>;
      default:
        return (
          <div>Unknown App State</div>
        )
    }
  }

  const appState = useSelector(state => state.appState);

  return getPage(appState);
      

}

export default PageMainContent;