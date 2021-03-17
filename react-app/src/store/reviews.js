
const SET_REVIEWS = "reviews/SET_REVIEWS";
const CREATE_REVIEWS = "reviews/CREATE_REVIEWS";
const REMOVE_REVIEWS = "reviews/REMOVE_REVIEWS";
const UPDATE_REVIEWS = "reviews/UPDATE_REVIEWS";

const setEvents = (reviews) => {
  return {
    type: SET_REVIEWS,
    reviews,
  };
};

const updateReviews = (review) => {
  return {
    type: UPDATE_REVIEWS,
    review,
  };
};
const removeReview = (id) => {
  return {
    type: REMOVE_REVIEWS,
    id
  }
}

export const createReview = (review) => async dispatch => {
    const { isPrivate, description, url, userId} = review
    const options =
    {
      method: 'REVIEWS',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ isPrivate, description, url, userId })
    }
    const res = await fetch('/api/reviews/', options)
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
  const res = await fetch(`/api/reviews/${id}`, options)
  if (res.ok) {
    const newReview = await res.json()
    // dispatch(setReviews([newReview]))
  }
}

export const deleteReview = (id) => async dispatch => {
  const options = {
    method: 'DELETE'
  }
  const res =await fetch(`/api/reviews/${id}`, options)
  if ( res.ok) {
    dispatch(removeReview(id))
  }
}

export const updateReviewLikes = (like) => async (dispatch) => {
  const { reviewId } = like;
  const response = await fetch(`/api/reviews/${reviewId}`);
  if (response.ok) {
    const res = await response.json();
    dispatch(updateReviews(res));
  }
  return response;
};

export const getReviews = (reviews) => async (dispatch) => {
  dispatch(setEvents(reviews));
  return reviews;
};

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REVIEWS:
      const reviews = action.reviews.reduce((acc, ele) => {

        acc[ele.review_id] = ele;
        return acc;
      }, {});
      return { ...state, ...reviews };
    case CREATE_REVIEWS:
      return { ...state, [action.drink.id]: action.drink };
    case REMOVE_REVIEWS:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    case UPDATE_REVIEWS:
      const newReviews = { ...state };
      const index = action.review.id;
      newReviews[index] = action.review;
      return newReviews;
    default:
      return state;
  }
};

export default reviewsReducer;