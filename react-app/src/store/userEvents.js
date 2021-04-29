import * as photoActions from './photoGallery'
import * as reviewActions from './reviews'
import * as eventCalendarActions from './eventCalendar'

const SET_USER_EVENTS = "events/SET_USER_EVENTS";
const REMOVE_USER_EVENT = "events/REMOVE_USER_EVENT";


const setUserEvents = (events) => {
  return {
    type: SET_USER_EVENTS,
    events,
  };
};

const removeUserEvent = (id) => {
  return {
    type: REMOVE_USER_EVENT,
    id
  }
}


export const getUserEvents = (user) => async (dispatch) => {
  const response = await fetch(`/api/events/user`);
  if (response.ok) {
    let res = await response.json();
    let events = res.events
    let eventsInfo = events[0].user_events_info
    let eventPhotos = events[1].photo_gallery
    let eventCalendar =events[2].event_calendar
    let eventReviews = events[3].reviews
    eventsInfo.forEach((event) => {
      event["dateObj"] = new Date(`${event.date} ${event.time}`)
    })
    dispatch(setUserEvents(eventsInfo));
    dispatch(eventCalendarActions.getCalendars(eventCalendar))
    dispatch(reviewActions.getReviews(eventReviews))
    dispatch(photoActions.getPhotos(eventPhotos))
  }
  return response;
};

export const deleteUserEvent = (id) => async dispatch => {
  const options = {
    method: 'DELETE'
  }

  const res = await fetch(`/api/events/user/${id}`, options);
  if (res.ok) {
    alert(id)
    console.log(id)
    dispatch(removeUserEvent(id))
  }
}

const initialState = {};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_EVENTS:
      const events = action.events.reduce((acc, ele) => {
        acc[ele.booking_id] = ele;
        return acc;
      }, {});
      return { ...state, ...events };
      case REMOVE_USER_EVENT:
        const newState = { ...state };
      delete newState[action.id];
      console.log(newState,'sdsadsad')
        return newState;
    default:
      return state;
  }
};

export default eventsReducer;