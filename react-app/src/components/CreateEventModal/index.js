import React, { useState } from "react";
import "./styles.css";
import EventForm from "./Forms/EventForm";
import LoginForm from "../LoginPage/LoginForm"

const CreateEventModal =() => {
  return (
    <div className='create-event-container' >
		<div className="event-wrap">
			<div className="">
				<div className="login-title">Create event</div>
				<div className="">
					<div className=""> 
						<div className="creation-form-container">
        					<EventForm />
						</div>
					</div>
				</div>
			</div>
      </div>
      </div>
	);
}

export default CreateEventModal;
