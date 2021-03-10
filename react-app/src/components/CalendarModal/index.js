import React, { useState } from 'react'
import './styles.css'
import { Modal } from '../../context/Modal'
import Calendar from 'react-calendar';
import {BsCalendar} from 'react-icons/bs'
function CalendarModal({ edit }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <BsCalendar onClick={() => setShowModal(true)} />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Calendar setShowModal={setShowModal} edit={edit}/>
        </Modal>
      )}
    </>
  )
}

export default CalendarModal;