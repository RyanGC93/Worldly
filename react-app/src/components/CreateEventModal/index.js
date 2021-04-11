import React, { useState } from "react";
import "./styles.css";
import EventForm from "./Forms/EventForm";
import LoginForm from "../LoginPage/LoginForm"

const CreateEventModal =() => {
  return (
    <div classname='create-event-container' >
		{/* <div className="login-wrap">
			<div className="login-html">
				<div className="login-title">Worldly</div>
				<div className="login-form">
					<div className="sign-in-htm"> */}
						<div className="creation-form-container">
        <EventForm />
						</div>
					{/* </div>
				</div>
			</div>
      </div> */}
      </div>
	);
}

export default CreateEventModal;
