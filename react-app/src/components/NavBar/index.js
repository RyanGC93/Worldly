import React from "react";
import { useHistory } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import './styles.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useSelector } from 'react-redux'
import DropDownMenu from './DropDownMenu'



const NavBar = ({ setAuthenticated }) => {
	const username = useSelector(state => state.session.user.username)

	const history = useHistory()
	const profileRedirect = () => {
		history.push(`profile/${username}`)
	}
	const homeRedirect = () => {
		history.push('/')
	}



	return (
	<>
			<div className="navbar">
				<div className="logo-holder centered" >
					<div onClick={homeRedirect}>Worldy </div>
				</div>
				<div className="searchBar-wrapper">
                    <ReactSearchAutocomplete />
				</div>
				<div className='centered'>
					<div className='profile' onClick={profileRedirect}>Profile</div>

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
