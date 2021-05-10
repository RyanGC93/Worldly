import React from 'react';
import { useDispatch }    from 'react-redux'
import styles from './styles.module.css';
import {deleteAmbassadorEvent} from '.../../../src/store/ambassadorEvents'
import {getAmbassadorEvents} from '.../../../src/store/ambassadorEvents'


const ConfirmForm = ({ setShowModal, setFormStep, eventId }) => {
    const dispatch = useDispatch();
    const confirm = () => {
        setShowModal(false)
        dispatch(getAmbassadorEvents())

        
    };
    const startOver = async() => {
        // delete event
        let eventId=4
        await dispatch(deleteAmbassadorEvent(eventId))
        setFormStep(1)
    };

	return (
		<div>
            <div onClick={confirm}
                className={styles.input}>Confirm</div>
            <div onClick={startOver}
                className={styles.input}>Start Over</div>
		</div>
	);
};

export default ConfirmForm;
