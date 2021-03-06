import styles from './styles.module.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from './Slider';
// import Map from '../Map';
import * as userEventActions from '../../store/userEvents';
import * as ambassadorEventActions from '../../store/ambassadorEvents';

import EventManagement from '../EventsManagement';
import { Modal } from '../../context/Modal';

// import Passport from './Passport';
import { checkAmbassador } from '../../services/checkAmbassador';
import CreateEventModal from '../CreateEventModal';

const Profile = () => {
	const [showModal, setShowModal] = useState(false);
	const [isChecked, setChecked] = useState(true);
	const user = useSelector((state) => state.session.user);
	const ambassadorEvents = useSelector((state) => state.session.ambassadorEvents);
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [isAmbassador, setAmbassador] = useState(false);

	useEffect(() => {
		(async () => {
			const response = await fetch(`/api/users/${user.username}`);
			const res = await response.json();
			setEmail(res.email);
			setPhoneNumber(res.phone_number);
			const ifAmbassador = await checkAmbassador();
			setAmbassador(ifAmbassador);
		})();
	}, [user]);

	useEffect(() => {
		if (!isChecked) dispatch(ambassadorEventActions.getAmbassadorEvents());
		if (isChecked) dispatch(userEventActions.getUserEvents());
	}, [isChecked]);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.profileHeader}>
					<div className={styles.profileImg}>
						{/* <img
							alt=""
							src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
						/> */}
					</div>
					<div className={styles.profileNavInfo}>
						{!isChecked && <div className={styles.nameHeader}>Ambassador Profile</div>}
						{isChecked && <div className={styles.nameHeader}>User Profile</div>}
					</div>
					{/* <div className={styles.profileOption}>
						<div className={styles.notification}>
							<i className="fa fa-bell"></i>
							<span className={styles.alertMessage}>3</span>
						</div>
					</div> */}
				</div>

				<div className={styles.mainBd}>
					<div className={styles.leftSide}>
						<div className={styles.profileSide}>
							{isAmbassador && <Slider isChecked={isChecked} setChecked={setChecked} />}

							<div className={styles.userBio}>
								<div className={styles.profileText}>User</div>
								<div className={`${styles.profileText} ${styles.subText}`}>
									{user.first_name} , {user.last_name}
								</div>
							</div>
							<div className={styles.userBio}>
								<div className={styles.profileText}>Location</div>
								<div className={`${styles.profileText} ${styles.subText}`}>New York</div>
							</div>
							<div className={styles.userBio}>
								<div className={styles.profileText}>Bio</div>
								<div className={`${styles.profileText} ${styles.subText}`}>{user.bio}</div>
							</div>
							{/* Part of the old passport */}
							{/* {isChecked && (
								<div
									onClick={manageBookings}
									id="bookings-btn"
									className={`${styles.bookingsBtn} btn-ticket blue`}
								>
									Manage Events
								</div>
							)} */}
							{!isChecked && (
								<div className={styles.btnContainer}>
									<div onClick={() => setShowModal(true)} id="bookings-btn" className={styles.blue}>
										Create Event
									</div>
									{showModal && (
										<Modal onClose={() => setShowModal(false)}>
											<CreateEventModal setShowModal={setShowModal} />
										</Modal>
									)}
								</div>
							)}
						</div>

						{/* PASSPORT */}
						{/* {isChecked && (
							<Passport
								user={user}
								email={email}
								phoneNumber={phoneNumber}
								isChecked={isChecked}
							/>
						)} */}
					</div>
					<div className={styles.rightSide}>
						{isChecked && <EventManagement className="event-management" isChecked={isChecked} />}
						{!isChecked && <EventManagement className="event-management" isChecked={isChecked} />}
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
