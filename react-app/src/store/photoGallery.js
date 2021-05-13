const SET_GALLERY = 'photos/SET_GALLERY';
const CREATE_GALLERY = 'photos/CREATE_GALLERY';
const REMOVE_GALLERY = 'photos/REMOVE_GALLERY';
const UPDATE_GALLERY = 'photos/UPDATE_GALLERY';

const setPhotos = (photos) => {
	return {
		type: SET_GALLERY,
		photos,
	};
};

const updatePhotos = (photos) => {
	return {
		type: UPDATE_GALLERY,
		photos,
	};
};
const addPhoto = (photo) => {
	return {
		type: CREATE_GALLERY,
		photo,
	};
};
const removePhoto = (id) => {
	return {
		type: REMOVE_GALLERY,
		id,
	};
};

export const createPhoto = (eventId, description, url) => async (dispatch) => {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'Application/json',
		},
		body: JSON.stringify({ eventId, description, url }),
	};
	const res = await fetch('/api/photos/', options);
	const data = await res.json();
	dispatch(addPhoto(data));
	if (res.ok) return res;
};
export const editPhoto = (id, description) => async (dispatch) => {
	const options = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ description: description }),
	};
	const res = await fetch(`/api/photos/${id}`, options);
	if (res.ok) {
		const newPhoto = await res.json();
		return newPhoto;
	}
};

export const deletePhoto = (id) => async (dispatch) => {
	const options = {
		method: 'DELETE',
	};
	const res = await fetch(`/api/photos/${id}`, options);
	if (res.ok) {
		dispatch(removePhoto(id));
	}
};

export const getPhotos = (photos) => async (dispatch) => {
	dispatch(setPhotos(photos));
	return photos;
};

const initialState = {};

const photosReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_GALLERY:
			const photos = action.photos.reduce((acc, ele) => {
				acc[ele.photo_id] = ele;
				return acc;
			}, {});
			return { ...state, ...photos };
		case CREATE_GALLERY:
			return { ...state, [action.photo.id]: action.photo };
		case REMOVE_GALLERY:
			const newState = { ...state };
			delete newState[action.id];
			return newState;
		case UPDATE_GALLERY:
			const newPhotos = { ...state };
			const index = action.photos.id;
			newPhotos[index] = action.photos;
			return newPhotos;
		default:
			return state;
	}
};

export default photosReducer;
