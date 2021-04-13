import React, { useState } from "react";
import "./styles.css";
import EventForm from "./Forms/EventForm";
import LoginForm from "../LoginPage/LoginForm"
import { MultiStepForm, Step } from 'react-multi-form'


const CreateEventModal = () => {
	const [formStep,setFormStep] = useState(1)
  return (
    <div className='create-event-container' >
		<div className="event-wrap">
			<div className="">
				<div className="login-title">Create Event</div>
				<div className="">
					<div className=""> 
						  <div className="creation-form-container">
						  <MultiStepForm activeStep={formStep}>
							<Step label='Basic Info'>
								<EventForm />
							</Step>
							<Step label='Photos'>
							<div>sdfdf</div>
							</Step>
							<Step label='Dates'>
							<div></div>
							</Step>
							<Step label='Confirmation'>
							<div></div>
							</Step>
						</MultiStepForm>
        					
						</div>
					</div>
				</div>
			</div>
      </div>
      </div>
	);
}

export default CreateEventModal;
