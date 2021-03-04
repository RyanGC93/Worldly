import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import './styles.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'


const NavBar = ({ setAuthenticated }) => {
	return (
		<>
			<div className="navbar">
				<div className="logo-holder">Worldy</div>
				<div className="searchBar-wrapper">
                    <ReactSearchAutocomplete />
				</div>
                <div className="quick-linkss">
                    this will hold links
                </div>
				<div className="user-settings">
                    <LogoutButton setAuthenticated={setAuthenticated} />
				</div>
			</div>
		</>
	);
};

export default NavBar;
