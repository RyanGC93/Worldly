import React from 'react';
import styles from './styles.module.css';

const ConfirmForm = ({ setShowModal,setFormStep, eventId }) => {
    const confirm = () => {
        setShowModal(false)        

        
    };
    const startOver = () => {
        // delete event
        setFormStep(1)
    };

	return (
		<div>
            <div onClick={confirm}
                className={styles.btn}>Confirm</div>
            <div onClick={startOver}
                className={styles.btn}>StartOver</div>
		</div>
	);
};

export default ConfirmForm;
