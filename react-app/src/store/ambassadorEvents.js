import * as photoActions from './photoGallery';
import * as reviewActions from './reviews';
import * as eventCalendarActions from './eventCalendar';

const SET_AMBASSADOR_EVENTS = 'events/SET_AMBASSADOR_EVENTS';

const CREATE_POSTS = 'events/CREATE_POSTS';
const REMOVE_POST = 'events/REMOVE_POST';
const UPDATE_POST = 'events/UPDATE_POST';

const setAmbassadorEvents = (events) => {
	return {
		type: SET_AMBASSADOR_EVENTS,
		events,
	};
};

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
	return json;
};

export const getAmbassadorEvents = (user) => async (dispatch) => {
	const response = await fetch(`/api/ambassadors/`);
	if (response.ok) {
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
	}
	return response;
};

const initialState = {};

const ambassadorEventsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AMBASSADOR_EVENTS:
			const events = action.events.reduce((acc, ele) => {
				acc[ele.booking_id] = ele;
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
