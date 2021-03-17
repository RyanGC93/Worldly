
const SET_EVENTCALENDAR = "calendar/SET_EVENTCALENDAR";
const CREATE_EVENTCALENDAR = "calendar/CREATE_EVENTCALENDAR";
const REMOVE_EVENTCALENDAR = "calendar/REMOVE_EVENTCALENDAR";
const UPDATE_EVENTCALENDAR = "calendar/UPDATE_EVENTCALENDAR";

const setCalendars = (calendar) => {
  return {
    type: SET_EVENTCALENDAR,
    calendar,
  };
};

const updateCalendars = (calendar) => {
  return {
    type: UPDATE_EVENTCALENDAR,
    calendar,
  };
};
const removeCalendar = (id) => {
  return {
    type: REMOVE_EVENTCALENDAR,
    id
  }
}

export const createCalendar = (calendar) => async dispatch => {
    const { isPrivate, description, url, userId} = calendar
    const options =
    {
      method: 'EVENTCALENDAR',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ isPrivate, description, url, userId })
    }
    const res = await fetch('/api/calendar/', options)
    const json = await res.json()
    // dispatch(setCalendars([json]))
}
export const editCalendar = (id, description, isPrivate) => async dispatch => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({description, isPrivate})
  }
  const res = await fetch(`/api/calendar/${id}`, options)
  if (res.ok) {
    const newCalendar = await res.json()
    // dispatch(setCalendars([newCalendar]))
  }
}

export const deleteCalendar = (id) => async dispatch => {
  const options = {
    method: 'DELETE'
  }
  const res =await fetch(`/api/calendar/${id}`, options)
  if ( res.ok) {
    dispatch(removeCalendar(id))
  }
}

export const updateCalendarLikes = (like) => async (dispatch) => {
  const { calendarId } = like;
  const response = await fetch(`/api/calendar/${calendarId}`);
  if (response.ok) {
    const res = await response.json();
    dispatch(updateCalendars(res));
  }
  return response;
};

export const getCalendars = (calendar) => async (dispatch) => {
  dispatch(setCalendars(calendar));
  return calendar;
};

const initialState = {};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTCALENDAR:
      const calendar = action.calendar.reduce((acc, ele) => {

        acc[ele.event_id] = ele;
        return acc;
      }, {});
      return { ...state, ...calendar };
    case CREATE_EVENTCALENDAR:
      return { ...state, [action.drink.id]: action.drink };
    case REMOVE_EVENTCALENDAR:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    case UPDATE_EVENTCALENDAR:
      const newCalendars = { ...state };
      const index = action.calendar.id;
      newCalendars[index] = action.calendar;
      return newCalendars;
    default:
      return state;
  }
};

export default calendarReducer;