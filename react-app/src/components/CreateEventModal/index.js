import React, { useState } from "react";
import "./styles.css";
import EventForm from './Forms/EventForm'

function CreateEventModal() {


  return (
    <div className='creation-form-container' >
      <EventForm />
    </div>
  );
}

export default CreateEventModal;
