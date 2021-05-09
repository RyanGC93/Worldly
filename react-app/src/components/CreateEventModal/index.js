import React, { useState } from "react";
import styles from "./styles.module.css";
import EventForm from "./Forms/EventForm";
import PhotoForm from "./Forms/PhotoForm";
import DatesForm from "./Forms/DatesForm"
import { MultiStepForm, Step } from "react-multi-form";
const CreateEventModal = () => {
  const [eventId,setEventId] = useState('')
  const [formStep, setFormStep] = useState(1);
  return (
    <div className={styles.createEventContainer} >
      <div className={styles.eventWrap}>
          <MultiStepForm activeStep={formStep}>
            <Step className={styles.formStep} label="Basic Info">
            <EventForm setEventId={setEventId} setFormStep={setFormStep} />
            </Step>
            <Step className={styles.formStep} label="Photos">
              <PhotoForm setFormStep={setFormStep} />
            </Step>
            <Step label="Dates">
              <DatesForm setFormStep={setFormStep}/>
            </Step>
            <Step label="Confirmation">
              <div></div>
            </Step>
          </MultiStepForm>
        </div>
    </div>
  );
};

export default CreateEventModal;
