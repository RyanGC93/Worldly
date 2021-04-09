import React from "react";
import {useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import './styles.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import DropDownMenu from './DropDownMenu'



const NavBar = ({ setAuthenticated }) => {
	const history = useHistory()
	const username = useSelector(state => state.session.user.username)

	const homeRedirect = () => {
		history.push('/')
	}
	
	const searchHandler = () => {



	}
	const focusHandler = () => {



	}

	return (
	<>
			<div className="navbar">
				<div className="logo-holder centered" >
					<div className='nav-logo' onClick={homeRedirect}>Worldy </div>
				</div>
				<div className="searchBar-wrapper">
					<ReactSearchAutocomplete
						inputDebounce={searchHandler}
						onFocus={focusHandler}
						
					
					/>
				</div>
				<div className="user-settings">
					<DropDownMenu username={username} setAuthenticated={setAuthenticated} />
                    {/* <LogoutButton  /> */}
				</div>
			</div>
		</>
	);
};

export default NavBar;
