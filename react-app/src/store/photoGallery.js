
const SET_GALLERY = "photos/SET_GALLERY";
const CREATE_GALLERY = "photos/CREATE_GALLERY";
const REMOVE_GALLERY = "photos/REMOVE_GALLERY";
const UPDATE_GALLERY = "photos/UPDATE_GALLERY";

const setEvents = (photos) => {
  return {
    type: SET_GALLERY,
    photos,
  };
};

const updateReviews = (photos) => {
  return {
    type: UPDATE_GALLERY,
    photos,
  };
};
const removeReview = (id) => {
  return {
    type: REMOVE_GALLERY,
    id
  }
}

export const createReview = (photos) => async dispatch => {
    const { isPrivate, description, url, userId} = photos
    const options =
    {
      method: 'GALLERY',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ isPrivate, description, url, userId })
    }
    const res = await fetch('/api/photos/', options)
    const json = await res.json()
    // dispatch(setReviews([json]))
}
export const editReview = (id, description, isPrivate) => async dispatch => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({description, isPrivate})
  }
  const res = await fetch(`/api/photos/${id}`, options)
  if (res.ok) {
    const newReview = await res.json()
    // dispatch(setReviews([newReview]))
  }
}

export const deleteReview = (id) => async dispatch => {
  const options = {
    method: 'DELETE'
  }
  const res =await fetch(`/api/photos/${id}`, options)
  if ( res.ok) {
    dispatch(removeReview(id))
  }
}

export const updateReviewLikes = (like) => async (dispatch) => {
  const { photosId } = like;
  const response = await fetch(`/api/photos/${photosId}`);
  if (response.ok) {
    const res = await response.json();
    dispatch(updateReviews(res));
  }
  return response;
};

export const getReviews = (photos) => async (dispatch) => {
  dispatch(setEvents(photos));
  return photos;
};

const initialState = {};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GALLERY:
      const photos = action.photos.reduce((acc, ele) => {

        acc[ele.event_id] = ele;
        return acc;
      }, {});
      return { ...state, ...photos };
    case CREATE_GALLERY:
      return { ...state, [action.drink.id]: action.drink };
    case REMOVE_GALLERY:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    case UPDATE_GALLERY:
      const newReviews = { ...state };
      const index = action.photos.id;
      newReviews[index] = action.photos;
      return newReviews;
    default:
      return state;
  }
};

export default photosReducer;