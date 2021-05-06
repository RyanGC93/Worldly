import React, { useRef, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import { useDetectOutsideClick } from '../../../services/detectOutsideClick';
import styles from './styles.module.css';
import { logout } from '../../../services/auth';

const DropDownMenu = ({ setAuthenticated }) => {
	const onLogout = async (e) => {
		await logout();
		setAuthenticated(false);
	};

	let location = useLocation();
	const history = useHistory();
	const userId = useSelector((state) => state.session.user.username);
	const dropdownRef = useRef(null);
	const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
	const onClick = () => setIsActive(!isActive);

	const profileRedirect = () => {
		let pathname = location.pathname;
		if (pathname.startsWith(`/profile/${userId}`)) {
			setIsActive(false);
			return;
		}
		setIsActive(false);
		history.push(`/profile/${userId}`);
	};

	return (
		<div className={styles.menuContainer}>
			<div onClick={onClick} className={styles.menuTrigger}>
				<AiOutlineMenu className={styles.menuIcon} />
			</div>
			<nav ref={dropdownRef} className={`${styles.menu} ${isActive ? `${styles.active}` : ''}`}>
				<ul>
					<li>
						<div onClick={profileRedirect}>Profile</div>
					</li>
					<li>
						<div onClick={onLogout}>Sign Out</div>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default DropDownMenu;
