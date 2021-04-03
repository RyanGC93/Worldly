import MainFeed from './MainFeed'
import {useDispatch} from 'react-redux'
import React, { useEffect} from 'react'
import * as eventActions from '../../store/events'
import {useParams} from 'react-router-dom'

export default () => {
    const dispatch = useDispatch()
    let { region } = useParams();

    useEffect(() => {
        dispatch(eventActions.getEvents(region));

    }, [dispatch,region]);  
    return (
        <>
            <MainFeed />
        </>
    )
    

}