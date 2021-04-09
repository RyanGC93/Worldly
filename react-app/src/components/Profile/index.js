import "./styles.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "./Slider";
import Map from "../Map";
import * as userEventActions from "../../store/userEvents";
import * as ambassadorEventActions from "../../store/ambassadorEvents";
import EventManagement from "../EventsManagement";
import { Modal } from "../../context/Modal";

import Passport from "./Passport";
import { checkAmbassador } from "../../services/checkAmbassador";
import CreateEventModal from "../CreateEventModal";


const Profile = () => {
	const [showModal, setShowModal] = useState(false);
	const [isChecked, setChecked] = useState(true);
	const userEvents = useSelector((state) => {
		// WORKS
		if (state.userEvents && isChecked) {
			let res = Object.values(state.userEvents);
			return res;
		}

		if (state.ambassadorEvents && !isChecked) {
			let res = Object.values(state.ambassadorEvents);
			return res;
		}
	});
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isAmbassador, setAmbassador] = useState(false);

	useEffect(() => {
		if (!user) return;
		(async () => {
			const response = await fetch(`/api/users/${user.username}`);
			const res = await response.json();
			setEmail(res.email);
			setPhoneNumber(res.phone_number);
		})();
		(async () => {
			const response = await checkAmbassador();
			setAmbassador(response);
		})();
		if (!isChecked) dispatch(ambassadorEventActions.getAmbassadorEvents());
		if (isChecked) dispatch(userEventActions.getUserEvents(user.username));
	}, [user, dispatch, isChecked]);

	if (!userEvents) {
		return null;
	}

	const manageBookings = () => {
		let passport = document.getElementById("passport");
		passport.classList.add("passport-active");
	};
	const createBookings = () => {};

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
							{/* <div className="profile-text">Phone Number</div>
							<lassName="profile-text sub-text">{phoneNumber}</div>
							<div className="profile-text">Email</div>
							<div className="profile-text sub-text">{email}</div> */}
							{isAmbassador && (
								<Slider isChecked={isChecked} setChecked={setChecked} />
							)}

							<div className="user-bio">
								<div className="profile-text">Bio</div>
								<div className="profile-text sub-text">{user.bio}</div>
							</div>
							{isChecked && (
								<div
									onClick={manageBookings}
									id="bookings-btn"
									className="btn-ticket blue"
								>
									Manage Events
								</div>
							)}
							{!isChecked && (
								<>
									<div
										onClick={() => setShowModal(true)}
										id="bookings-btn"
										className="btn-ticket blue"
									>
										Create Event
									</div>
									{showModal && (
										<Modal onClose={() => setShowModal(false)}>
											<CreateEventModal setShowModal={setShowModal} />
										</Modal>
									)}
								</>
							)}
						</div>
						{isChecked && (
							<Passport
								user={user}
								email={email}
								phoneNumber={phoneNumber}
								isChecked={isChecked}
							/>
						)}
					</div>
					<div className="right-side">
						{isChecked && <Map isChecked={isChecked} className="map-wrapper" />}
						{!isChecked && (
							<EventManagement
								className="event-management"
								isChecked={isChecked}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
