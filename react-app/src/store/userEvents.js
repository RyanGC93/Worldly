const SET_USER_EVENTS = "events/SET_USER_EVENTS";

const CREATE_POSTS = "posts/CREATE_POSTS";
const REMOVE_POST = "posts/REMOVE_POST";
const UPDATE_POST = "posts/UPDATE_POST";

const setUserEvents = (events) => {
  return {
    type: SET_USER_EVENTS,
    events,
  };
};

const updatePosts = (post) => {
  return {
    type: UPDATE_POST,
    post,
  };
};
const removePost = (id) => {
  return {
    type: REMOVE_POST,
    id
  }
}

export const createPost = (post) => async dispatch => {
    const { isPrivate, description, url, userId} = post
    const options =
    {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ isPrivate, description, url, userId })
    }
    const res = await fetch('/api/posts/', options)
    const json = await res.json()
    // dispatch(setPosts([json]))
}
export const editPost = (id, description, isPrivate) => async dispatch => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({description, isPrivate})
  }
  const res = await fetch(`/api/posts/${id}`, options)
  if (res.ok) {
    const newPost = await res.json()
    // dispatch(setPosts([newPost]))
  }
}

export const deletePost = (id) => async dispatch => {
  const options = {
    method: 'DELETE'
  }
  const res =await fetch(`/api/posts/${id}`, options)
  if ( res.ok) {
    dispatch(removePost(id))
  }
}

export const updatePostLikes = (like) => async (dispatch) => {
  const { postId } = like;
  const response = await fetch(`/api/posts/${postId}`);
  if (response.ok) {
      const res = await response.json();
      console.log(res)
    // dispatch(updatePosts(res));
  }
  return response;
};

export const getUserEvents = (user) => async (dispatch) => {
  const response = await fetch(`/api/events/user/${user}`);
  if (response.ok) {
      let res = await response.json();
      console.log('sadasdasdasdas')
    console.log(res)
    // dispatch(setUserEvents());
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
    case CREATE_POSTS:
      return { ...state, [action.drink.id]: action.drink };
    case REMOVE_POST:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    case UPDATE_POST:
      const newPosts = { ...state };
      const index = action.post.id;
      newPosts[index] = action.post;
      return newPosts;
    default:
      return state;
  }
};

export default eventsReducer;