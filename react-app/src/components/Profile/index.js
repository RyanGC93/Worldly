import "./styles.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as eventActions from "../../store/events";
import EventManager from "./EventManager";
import Map from "../Map";
import * as userEventActions from "../../store/userEvents";
import Passport from './Passport'

const Profile = () => {
	const userEvents = useSelector((state) => Object.values(state.userEvents));
	const user = useSelector((state) => state.session.user);

	const history = useHistory();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	// const [isLoaded, setLoaded] = useState(false)

	useEffect(() => {
		// if (!user) return

		// if(userEvents && user ) return setLoaded(true)

		(async () => {
			const response = await fetch(`/api/users/${user.username}`);
			const res = await response.json();
			console.log(res, "res");
			setEmail(res.email);
			setPhoneNumber(res.phone_number);
		})();

		dispatch(userEventActions.getUserEvents(user.username));
	}, [user, dispatch]);

	if (!userEvents) {
		return null;
	}
	console.log(userEvents);

	let markers = [];
	userEvents.forEach((event) => {
		markers.push({
			markerOffset: -30,
			name: `${event.title}`,
			coordinates: [event.location_longitude, event.location_latitude],
		});
	});

	return (
		<>
			<div className="container">
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
							<div className="profile-text">Phone Number</div>
							<div className="profile-text sub-text">{phoneNumber}</div>
							<div className="profile-text">Email</div>
							<div className="profile-text sub-text">{email}</div>

							<div className="user-bio">
								<div className="profile-text">Bio</div>
								<div className="profile-text sub-text">{user.bio}</div>
							</div>
							<div className="profile-btn">
								<button className="chatbtn" id="chatBtn">
									<i className="fa fa-comment"></i> Chat
								</button>
								<button className="createbtn" id="Create-post">
									<i className="fa fa-plus"></i> Create
								</button>
							</div>
						</div>
						<Passport />
					</div>
					<div className="right-side">
						<Map className="map-wrapper" />
					</div>
				</div>
				<EventManager />
			</div>
		</>
	);
};

export default Profile;
