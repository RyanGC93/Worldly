import React, { useState } from "react";
import styles from "./styles.module.css";
import EventForm from "./Forms/EventForm";
import PhotoForm from "./Forms/PhotoForm";
import DatesForm from "./Forms/DatesForm"
import ConfirmForm from "./Forms/ConfirmForm"
import { MultiStepForm, Step } from "react-multi-form";
const CreateEventModal = ({setShowModal}) => {
  const [eventId,setEventId] = useState(1)
  const [formStep, setFormStep] = useState(3);
  return (
    <div className={styles.createEventContainer} >
      <div className={styles.eventWrap}>
          <MultiStepForm activeStep={formStep}>
            <Step className={styles.formStep} label="Basic Info">
            <EventForm setEventId={setEventId} setFormStep={setFormStep} />
            </Step>
            <Step className={styles.formStep} label="Photos">
            <PhotoForm eventId={eventId} setFormStep={setFormStep} />
            </Step>
            <Step label="Dates">
              <DatesForm eventId={eventId} setFormStep={setFormStep} />
            </Step>
            <Step label="Confirmation">
              <ConfirmForm setShowModal={setShowModal} eventId={eventId} setFormStep={setFormStep} />
            </Step>
          </MultiStepForm>
        </div>
    </div>
  );
};

export default CreateEventModal;
