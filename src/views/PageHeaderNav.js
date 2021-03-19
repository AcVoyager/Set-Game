import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STATES } from '../redux/stateConstants';
import { ACTIONS } from '../redux/actions'


function PageHeaderNav(props) {

	const appState = useSelector(state => state.appState);
	const dispatch = useDispatch();

	const clickHome = () => {
		if(appState !== STATES.WELCOME) {
			dispatch(ACTIONS.changeState(STATES.WELCOME));
		}
	}
	
	const clickRules = () => {
		if(appState !== STATES.RULE) {
			dispatch(ACTIONS.changeState(STATES.RULE));
		}
	}

	return (
		// ref: https://getbootstrap.com/docs/5.0/components/navbar/
		<header>
			<nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#brand">Chang Xu</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => clickHome()}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => clickRules()}>Rules</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
		</header>
	);
}

export default PageHeaderNav;