import * as reviewActions from './reviews'
import * as photoActions from './photoGallery'
import * as eventCalendarActions from './eventCalendar'
const SET_EVENTS = "events/SET_EVENTS";
const CREATE_EVENTS = "events/CREATE_EVENTS";
const REMOVE_POST = "events/REMOVE_POST";
const UPDATE_POST = "events/UPDATE_POST";

const setEvents = (events) => {
  return {
    type: SET_EVENTS,
    events,
  };
};

const updateEvents = (event) => {
  return {
    type: UPDATE_POST,
    event,
  };
};
const removeEvent = (id) => {
  return {
    type: REMOVE_POST,
    id
  }
}

export const createEvent = (event,eventLocation) => async dispatch => {
  const optionsLocation =
  {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(eventLocation)
  }
  
    const optionsEvent =
    {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(event)
    }
  const res = await fetch('/api/events/', optionsEvent)
    if(!res.ok) return
  const json = await res.json()
  eventLocation.id = json.id
  console.log(eventLocation)
  
    console.log(json)
}
export const editEvent = (id, description, isPrivate) => async dispatch => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({description, isPrivate})
  }
  const res = await fetch(`/api/events/${id}`, options)
  if (res.ok) {
    const newEvent = await res.json()
  }
}

export const deleteEvent = (id) => async dispatch => {
  const options = {
    method: 'DELETE'
  }
  const res = await fetch(`/api/events/${id}`, options)
  
  if ( res.ok) {
    // dispatch(removeEvent(id))
  }
}

export const updateEventLikes = (like) => async (dispatch) => {
  const { eventId } = like;
  const response = await fetch(`/api/events/${eventId}`);
  if (response.ok) {
    const res = await response.json();
    dispatch(updateEvents(res));
  }
  return response;
};

export const getEvents = (param) => async (dispatch) => {
  const response = await fetch(`/api/events/${param}`);
  if (response.ok) {
    let res = await response.json();
    console.log('res',res)
    let events = res.events
    let eventsInfo = events[0].events_info
    let eventPhotos = events[1].photo_gallery
    let eventCalendar =events[2].event_calendar
    let eventReviews = events[3].reviews

    eventCalendar.forEach((event) => {
      event["dateObj"] = new Date(`${event.date} ${event.time}`)
    })
    dispatch(eventCalendarActions.getCalendars(eventCalendar))
    dispatch(reviewActions.getReviews(eventReviews))
    dispatch(photoActions.getPhotos(eventPhotos))
    dispatch(setEvents(eventsInfo));
  }
  return response;
};

const initialState = {};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      const events = action.events.reduce((acc, ele) => {

        acc[ele.event_id] = ele;
        return acc;
      }, {});
      return { ...state, ...events };
    case CREATE_EVENTS:
      return { ...state, [action.drink.id]: action.drink };
    case REMOVE_POST:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    case UPDATE_POST:
      const newEvents = { ...state };
      const index = action.event.id;
      newEvents[index] = action.event;
      return newEvents;
    default:
      return state;
  }
};

export default eventsReducer;