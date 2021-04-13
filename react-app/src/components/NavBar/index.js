import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import styles from './styles.module.css'
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
	
	const searchStyles = {
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
			<div className={styles.navbar}>
				<div className={styles.logoHolder} >
					<div className={styles.navLogo} onClick={homeRedirect}>Worldy </div>
				</div>
				<div className={styles.searchBarWrapper}>
					{searchItems && (
						<ReactSearchAutocomplete
							styling={searchStyles}
							onSelect={handleOnSelect}
							key={searchItems.event_id}
							items={searchItems}
            				resultStringKeyName="title"
            				fuseOptions={{ keys: ["title", "region"] }}
						/>
						)}
				</div>
				<div className={styles.userSettings}>
					<DropDownMenu username={username} setAuthenticated={setAuthenticated} />
				</div>
			</div>
		</>
	);
};

export default NavBar;
