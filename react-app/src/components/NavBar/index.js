import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import './styles.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import DropDownMenu from './DropDownMenu'



const NavBar = ({ setAuthenticated }) => {
	const history = useHistory()
	const username = useSelector(state => state.session.user.username)
	const [searchItems, setSearchItems]= useState([])
	const homeRedirect = () => {
		history.push('/')
	}
	const handleOnSelect = (item) => {
		// the item selected
		console.log(item)
	  }
	const styles = {
	marginTop:"15px",
    height: "50px",
    border: "1px solid #dfe1e5",
    borderRadius: "24px",
    backgroundColor: "white",
    boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
    hoverBackgroundColor: "#eee",
    color: "black",
    fontSize: "26px",
    fontFamily: "Arial",
    iconColor: "grey",
    lineColor: "rgb(232, 234, 237)",
    placeholderColor: "grey",
  };

	useEffect(() => {
		(async () => {
			const url = '/api/search/'
		  const res = await fetch(url)
			if (!res.ok) console.error(res)
			const data = await res.json()
			setSearchItems(data.search)
		})();

	  }, []);
	return (
	<>
			<div className="navbar">
				<div className="logo-holder centered" >
					<div className='nav-logo' onClick={homeRedirect}>Worldy </div>
				</div>
				<div className="searchBar-wrapper">
					{searchItems && (
						<ReactSearchAutocomplete
							styling={styles}
							onSelect={handleOnSelect}
							key={searchItems.event_id}
							items={searchItems}
            				resultStringKeyName="title"
            				fuseOptions={{ keys: ["title", "region"] }}
						/>
						)}
				</div>
				<div className="user-settings">
					<DropDownMenu username={username} setAuthenticated={setAuthenticated} />
				</div>
			</div>
		</>
	);
};

export default NavBar;
