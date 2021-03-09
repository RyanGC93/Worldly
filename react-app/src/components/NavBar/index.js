import React from "react";
import { useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import './styles.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useSelector } from 'react-redux'


const NavBar = ({ setAuthenticated }) => {
	// const username = useSelector(state => state.session.user.username)

	// const history = useHistory()
	// const profileRedirect = () => {
	// 	history.push(`profile/${username}`)
	// }


	return (
	<>
			<div className="navbar">
				<div className="logo-holder">Worldy</div>
				<div className="searchBar-wrapper">
                    <ReactSearchAutocomplete />
				</div>
                <div className="quick-linkss">
					{/* <div onClick={profileRedirect}>Profile</div> */}
                </div>
				<div className="user-settings">
                    <LogoutButton setAuthenticated={setAuthenticated} />
				</div>
			</div>
		</>
	);
};

export default NavBar;
