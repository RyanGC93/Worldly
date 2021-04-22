import * as photoActions from './photoGallery'
import * as reviewActions from './reviews'
import * as eventCalendarActions from './eventCalendar'

const SET_USER_EVENTS = "events/SET_USER_EVENTS";


const setUserEvents = (events) => {
  return {
    type: SET_USER_EVENTS,
    events,
  };
};


export const getUserEvents = (user) => async (dispatch) => {
  const response = await fetch(`/api/events/user/${user}`);
  if (response.ok) {
    let res = await response.json();
    console.log(res,'rezzzzzzzzzz')
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

const initialState = {};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_EVENTS:
      const events = action.events.reduce((acc, ele) => {

        acc[ele.event_id] = ele;
        return acc;
      }, {});
      return { ...state, ...events };
    default:
      return state;
  }
};

export default eventsReducer;