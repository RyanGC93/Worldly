import React from "react";
import { useHistory } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import './styles.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import DropDownMenu from './DropDownMenu'



const NavBar = ({ setAuthenticated }) => {
	const history = useHistory()

	const homeRedirect = () => {
		history.push('/')
	}



	return (
	<>
			<div className="navbar">
				<div className="logo-holder centered" >
					<div className='nav-logo' onClick={homeRedirect}>Worldy </div>
				</div>
				<div className="searchBar-wrapper">
                    <ReactSearchAutocomplete />
				</div>
				<div className="user-settings">
					<DropDownMenu />
                    {/* <LogoutButton setAuthenticated={setAuthenticated} /> */}
				</div>
			</div>
		</>
	);
};

export default NavBar;
