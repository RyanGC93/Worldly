import MainFeed from './MainFeed'
import {useDispatch} from 'react-redux'
import React, { useEffect} from 'react'
import * as eventActions from '../../store/events'

export default () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(eventActions.getEvents());

    }, [dispatch]);  
    return (
        <>
            <MainFeed />
        </>
    )

}