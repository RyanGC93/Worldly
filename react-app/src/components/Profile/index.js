import "./styles.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as eventActions from "../../store/events";
import Slider from './Slider'
import Map from "../Map";
import * as userEventActions from "../../store/userEvents";
import * as ambassadorEventActions from "../../store/ambassadorEvents";

import Passport from './Passport'
import { checkAmbassador } from "../../services/checkAmbassador";

const Profile = () => {
	const userEvents = useSelector((state) => Object.values(state.userEvents));
	const user = useSelector((state) => state.session.user);
	const [isChecked, setChecked] = useState(true);
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isAmbassador, setAmbassador] = useState(false)


		let dateNow = new Date()
		const pastEvents = userEvents.filter(ev => ev.dateObj < dateNow )
		const upcomingEvents = userEvents.filter(ev => ev.dateObj > dateNow)
		const sortedUpcomingEvents = upcomingEvents.sort((a, b) =>a.dateObj - b.dateObj )
		const sortedPastEvents = pastEvents.sort((a, b) => a.dateObj - b.dateObj)

	const contentDivider = (arr) => {
		let newarr = [];
		let i, j, temparray, chunk = 2;
		for (i = 0, j = arr.length; i < j; i += chunk) {
			temparray = arr.slice(i, i + chunk);
			newarr.push(temparray);
		}
		return newarr;
	}
		  
	let upcomingBookEvents = contentDivider(sortedUpcomingEvents)
	let pastBookEvents = contentDivider(sortedPastEvents)
	




	useEffect(() => {
		if (!user) return
		(async () => {
			const response = await fetch(`/api/users/${user.username}`);
			const res = await response.json();
			console.log(res, "res");
			setEmail(res.email);
			setPhoneNumber(res.phone_number);
		})();
		(async () => {
			const response = await checkAmbassador()
			setAmbassador(response)
		})();
		if (isAmbassador) dispatch(ambassadorEventActions.getAmbassadorEvents());
		if (!isAmbassador) dispatch(userEventActions.getUserEvents(user.username));
	
	}, [user, dispatch,isChecked]);

	if (!userEvents || !upcomingEvents[0] || !pastEvents[0] ) {
		return null;
	}

	const manageBookings = () => {
		let passport = document.getElementById('passport')
		passport.classList.add('passport-active')
	}

	return (
		<>
			<div className="container"
			
			>
				<div className="profile-header">
					<div className="profile-img">
						<img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
					</div>
					<div className="profile-nav-info">
						<div className="name-header">
							{user.first_name} {user.last_name}
						</div>
						<div className="address">
							{/* TODO> Add Location for the user */}
							NY,Newyork
						</div>
					</div>
					<div className="profile-option">

						<div className="notification">
							<i className="fa fa-bell"></i>
							<span className="alert-message">3</span>
						</div>
					</div>
				</div>

				<div className="main-bd">
					<div className="left-side">
						<div className="profile-side">
							{/* <div className="profile-text">Phone Number</div>
							<div className="profile-text sub-text">{phoneNumber}</div>
							<div className="profile-text">Email</div>
							<div className="profile-text sub-text">{email}</div> */}
							{isAmbassador && (
								<Slider isChecked={isChecked} setChecked={setChecked}/>
					)}	

							<div className="user-bio">
								<div className="profile-text">Bio</div>
								<div className="profile-text sub-text">{user.bio}</div>
							</div>
							<div
								onClick={manageBookings}
								id="bookings-btn"
								className="btn-ticket blue">Manage Events</div>
						</div>
						<Passport upcomingEvents={upcomingBookEvents}
							user={user}
							email={email}
							phoneNumber={phoneNumber}
						pastEvents={pastBookEvents}	
						/>
					</div>
					<div className="right-side">
						<Map className="map-wrapper" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
