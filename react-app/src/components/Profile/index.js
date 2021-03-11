import "./styles.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Profile = () => {
	const user = useSelector((state) => state.session.user);
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("")

	useEffect(() => {
		if (!user) {
		  return
		}
		(async () => {
		  const response = await fetch(`/api/users/${user.username}`);
			const res = await response.json();
			
			setEmail(res.email)
			setPhoneNumber(res.phone_number)
		})();
	  }, [user]);

	return (
		<div className="container">
			<div className="profile-header">
				<div className="profile-img">
					<img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
				</div>
				<div className="profile-nav-info">
					<div className="name-header">
						{user.first_name}   {user.last_name}
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
						<p className="mobile-no">
							<h4>Phone Number</h4>
							<i className="fa fa-phone"></i> {phoneNumber}
						</p>
						<p className="user-mail">
							<h4>Email</h4>
							<i className="fa fa-envelope"></i> {email}
						</p>
						<div className="user-bio">
							<h3>Bio</h3>
							<p className="bio">
								{user.bio}
							</p>
						</div>
						<div className="profile-btn">
							<button className="chatbtn" id="chatBtn">
								<i className="fa fa-comment"></i> Chat
							</button>
							<button className="createbtn" id="Create-post">
								<i className="fa fa-plus"></i> Create
							</button>
						</div>
						<div className="user-rating">
							<h3 className="rating">4.5</h3>
							<div className="rate">
								<div className="star-outer">
									<div className="star-inner">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
									</div>
								</div>
								<span className="no-of-user-rate">
									<span>123</span>&nbsp;&nbsp;reviews
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="right-side"></div>
			</div>
		</div>
	);
};

export default Profile;
