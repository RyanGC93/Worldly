


const SET_SESSION = 'session/SET_SESSION';
const REMOVE_SESSION = 'session/REMOVE_SESSION';

const setSession = (user) => {
  return {
    type: SET_SESSION,
    user,
  };
};

const removeSession = () => {
  return {
    type: REMOVE_SESSION,
  };
};

export const login = (user) => async (dispatch) => {
  const { email, password } = user;
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  let res = await response.json()
  console.log(res)
  if (!res.errors) dispatch(setSession(res));
  return res;
};

export const restoreUser = () => async (dispatch) => {
  const response = await fetch('/api/session');
  dispatch(setSession(response.data.user));
  return response;
};

export const registerUser = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  let res = await response.json()
  console.log(res)
  dispatch(setSession(res))
  // dispatch(setSession(response.data.user));
  return response;
};

export const logoutUser = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    method: 'DELETE',
  });
  dispatch(removeSession());
  return response;
};

const initialState = {
  user: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSION:
      return { ...state, user: action.user }
    case REMOVE_SESSION:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;
