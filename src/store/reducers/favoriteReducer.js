import { omit } from 'lodash';
import { ADD_PERSON_TO_FAROVITE, REMOVE_PERSON_FROM_FAVORITE } from '../constants/actionTypes';
import { getLocalStorage } from '@utils/localStorage';

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PERSON_TO_FAROVITE: {
			return {
				...state,
				...action.payload,
			};
		}
		case REMOVE_PERSON_FROM_FAVORITE:
			return omit(state, [action.payload]);

		default:
			return state;
	}
};

export default favoriteReducer;
