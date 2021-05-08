import React, { useRef, useState } from "react";
// import { useLocation, useHistory } from "react-router-dom";
import { AiFillSwitcher, AiOutlineMenu } from "react-icons/ai";
// import { useSelector } from 'react-redux'

import { useDetectOutsideClick } from "../../../services/detectOutsideClick";
import styles from "./styles.module.css";

const SelectDropDownMenu = ({region,setRegion}) => {

	const dropdownRef = useRef(null);
	const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
	const onClick = () => {
		setIsActive(!isActive);
	};

	const selectionHandler = (selection) => {
		console.log(selection)
		debugger
		setRegion(selection)
	}


	return (
		<div className={styles.menuContainer} onClick={onClick} >
			{region ? region : "Please Select A Region"}

					<div onClick={onClick} className={styles.menuTrigger}>
				</div>
			<nav
					ref={dropdownRef}
					className={`${styles.menu} ${isActive ? `${styles.active}` : ""}`}
				>
				<ul>
					<li>
						<div  onClick={()=>selectionHandler('Africa')}>Africa</div>
					</li>
					<li>
						<div >Asia</div>
					</li>
					<li>
						<div >Asia</div>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default SelectDropDownMenu;
