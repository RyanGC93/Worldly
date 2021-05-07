import React, { useRef, useState } from "react";
// import { useLocation, useHistory } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
// import { useSelector } from 'react-redux'

import { useDetectOutsideClick } from "../../../services/detectOutsideClick";
import styles from "./styles.module.css";

const SelectDropDownMenu = () => {

	const dropdownRef = useRef(null);
	const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
	const onClick = () => setIsActive(!isActive);

	return (
		<div className={styles.menuContainer}>
				<AiOutlineMenu />
				<div onClick={onClick} className={styles.menuTrigger}>
				</div>
			<nav
					ref={dropdownRef}
					className={`${styles.menu} ${isActive ? `${styles.active}` : ""}`}
				>
				<ul>
					<li>
						<div >Profile</div>
					</li>
					<li>\ </li>
					<li>
						<div >Sign Out</div>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default SelectDropDownMenu;
