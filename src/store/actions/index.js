import {
	ADD_PERSON_TO_FAROVITE,
	REMOVE_PERSON_FROM_FAVORITE,
} from '@store/constants/actionTypes.js';
export const setPersonToFavorite = (person) => ({
	type: ADD_PERSON_TO_FAROVITE,
	payload: person,
});

export const removePersonFromFavorite = (personId) => ({
	type: REMOVE_PERSON_FROM_FAVORITE,
	payload: personId,
});
