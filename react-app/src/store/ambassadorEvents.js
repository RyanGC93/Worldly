import * as photoActions from './photoGallery'
import * as reviewActions from './reviews'
import * as eventCalendarActions from './eventCalendar'

const SET_AMBASSADOR_EVENTS = "events/SET_AMBASSADOR_EVENTS";

const CREATE_POSTS = "events/CREATE_POSTS";
const REMOVE_POST = "events/REMOVE_POST";
const UPDATE_POST = "events/UPDATE_POST";

const setAmbassadorEvents = (events) => {
  return {
    type: SET_AMBASSADOR_EVENTS,
    events,
  };
};

// const updateEvents = (event) => {
//   return {
//     type: UPDATE_POST,
//     event,
//   };
// };
const removePost = (id) => {
  return {
    type: REMOVE_POST,
    id
  }
}

export const createPost = (event) => async dispatch => {
    const { isPrivate, description, url, userId} = event
    const options =
    {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ isPrivate, description, url, userId })
    }
    const res = await fetch('/api/events/', options)
    const json = await res.json()
}
export const editPost = (id, description, isPrivate) => async dispatch => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({description, isPrivate})
  }
  const res = await fetch(`/api/events/${id}`, options)
  if (res.ok) {
    const newPost = await res.json()
  }
}

export const deletePost = (id) => async dispatch => {
  const options = {
    method: 'DELETE'
  }
  const res =await fetch(`/api/events/${id}`, options)
  if ( res.ok) {
    dispatch(removePost(id))
  }
}

export const updatePostLikes = (like) => async (dispatch) => {
  const { eventId } = like;
  const response = await fetch(`/api/events/${eventId}`);
  if (response.ok) {
      const res = await response.json();
  }
  return response;
};

export const getAmbassadorEvents = (user) => async (dispatch) => {
  const response = await fetch(`/api/ambassadors/`);
  if (response.ok) {
      let res = await response.json();
    let events = res.events
    let eventsInfo = events[0].events_info
    let eventPhotos = events[1].photo_gallery
    let eventCalendar =events[2].event_calendar
    let eventReviews = events[3].reviews


    eventsInfo.forEach((event) => {
      event["dateObj"] = new Date(`${event.date} ${event.time}`)
    })
    dispatch(setAmbassadorEvents(eventsInfo));
    dispatch(eventCalendarActions.getCalendars(eventCalendar))
    dispatch(reviewActions.getReviews(eventReviews))
    dispatch(photoActions.getPhotos(eventPhotos))
  }
  return response;
};

const initialState = {};

const ambassadorEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AMBASSADOR_EVENTS:
      const events = action.events.reduce((acc, ele) => {

        acc[ele.event_id] = ele;
        return acc;
      }, {});
      return { ...state, ...events };
    case CREATE_POSTS:
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

export default ambassadorEventsReducer;