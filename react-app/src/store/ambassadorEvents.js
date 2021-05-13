import * as photoActions from './photoGallery';
import * as reviewActions from './reviews';
import * as eventCalendarActions from './eventCalendar';

const SET_AMBASSADOR_EVENTS = 'events/SET_AMBASSADOR';

const CREATE_AMBASSADOR = 'events/CREATE_AMBASSADORS';
const REMOVE_AMBASSADOR = 'events/REMOVE_AMBASSADOR';
const UPDATE_AMBASSADOR = 'events/UPDATE_AMBASSADOR';

const setAmbassadorEvents = (events) => {
	return {
		type: SET_AMBASSADOR_EVENTS,
		events,
	};
};
const createEvent = (event) => {
	return {
	  type: CREATE_AMBASSADOR,
	  event,
	};
  };


const removeEvent = (id) => {
	return {
	  type: REMOVE_AMBASSADOR,
	  id
	}
  }
  

export const createAmbassadorEvent = (event, eventLocation) => async (dispatch) => {
	const optionsEvent = {
		method: 'POST',
		headers: {
			'Content-Type': 'Application/json',
		},
		body: JSON.stringify(event),
	};
	const res = await fetch('/api/events/', optionsEvent);
	if (!res.ok) return;
	const json = await res.json();
	eventLocation.id = json.id;
	// ! Add the location api call
	const optionsLocation = {
		method: 'POST',
		headers: {
			'Content-Type': 'Application/json',
		},
		body: JSON.stringify(eventLocation),
	};
	const resLocation = await fetch('/api/location/', optionsLocation);
	if (!resLocation.ok) return;
	const jsonLocation = await resLocation.json();
	dispatch(getAmbassadorEvents())
	return json;
	
};

export const getAmbassadorEvents = () => async (dispatch) => {
	const response = await fetch(`/api/ambassadors/`);
	let res = await response.json();
		let events = res.events;
		let eventsInfo = events[0].ambassador_events_info;
		let eventPhotos = events[1].photo_gallery;
		let eventCalendar = events[2].event_calendar;
		let eventReviews = events[3].reviews;

		eventCalendar.forEach((event) => {
			event['dateObj'] = new Date(`${event.date} ${event.time}`);
		});
		dispatch(setAmbassadorEvents(eventsInfo));
		dispatch(eventCalendarActions.getCalendars(eventCalendar));
		dispatch(reviewActions.getReviews(eventReviews));
		dispatch(photoActions.getPhotos(eventPhotos));
	return response;
};


export const deleteAmbassadorEvent = (id) => async dispatch => {
	const options = {
	  method: 'DELETE'
	}
	const res = await fetch(`/api/events/delete/${id}`, options)
	
	if ( res.ok) {
	  dispatch(removeEvent(id))
	}
  }

const initialState = {};

const ambassadorEventsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AMBASSADOR_EVENTS:
			const events = action.events.reduce((acc, ele) => {
				acc[ele.event_id] = ele;
				return acc;
			}, {});
			return { ...state, ...events };
		case CREATE_AMBASSADOR:
			return { ...state, [action.drink.id]: action.drink };
		case REMOVE_AMBASSADOR:
			const newState = { ...state };
			delete newState[action.id];
			return newState;
		case UPDATE_AMBASSADOR:
			const newEvents = { ...state };
			const index = action.event.id;
			newEvents[index] = action.event;
			return newEvents;
		default:
			return state;
	}
};

export default ambassadorEventsReducer;
