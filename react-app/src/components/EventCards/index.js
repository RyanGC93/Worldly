import React, {useEffect} from 'react';
import { useDispatch} from 'react-redux'
import * as eventActions from '../../store/events'

const EventCard = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(eventActions.getEvents())

    })


    return (
        <div>
            eventcars

        </div>
    )

}

export default EventCard
