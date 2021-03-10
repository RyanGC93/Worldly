
const SET_SESSION = 'session/SET_SESSION';
const REMOVE_SESSION='session/REMOVE_SESSION';
const setSession = (user) => {
    return {
        type: SET_SESSION,
        user,
    };
};

export const login = (email, password) => async (dispatch) => {
  alert(email)
  console.log(email)
  alert(password)
	const response = await fetch('/api/auth/login', {
		method: 'POST',
		headers: {
				'Content-Type': 'application/json'
			},
		body: JSON.stringify({
			email,
			password
			})
		});
  const user = await response.json()
  console.log(user)  
		dispatch(setSession(user));
		return user;
};


const removeSession = () => {
  return {
    type: REMOVE_SESSION,
  };
};


export const restoreUser = () => async dispatch => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  let res = await response.json();
  console.log(res);
  if (!res.errors) {
    dispatch(setSession(res));
  
  }
  return res;
}

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
  dispatch(setSession(res))
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
