import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions';

import iconFavorite from './img/favorite.svg';
import iconFavoriteFull from './img/favorite-fill.svg';

import styles from './PersonPhoto.module.css';
const PersonPhoto = ({ personPhoto, personName, personId, personFavorite, setPersonFavorite }) => {
	const dispatch = useDispatch();

	const dispatchFavoritePeople = () => {
		if (personFavorite) {
			dispatch(removePersonFromFavorite(personId));
			setPersonFavorite(false);
		} else {
			dispatch(
				setPersonToFavorite({
					[personId]: {
						name: personName,
						img: personPhoto,
					},
				}),
			);
			setPersonFavorite(true);
		}
	};
	return (
		<>
			<div className={styles.container}>
				<img className={styles.photo} src={personPhoto} alt={personName} />
				<img
					src={personFavorite ? iconFavoriteFull : iconFavorite}
					alt="Favorite icon"
					className={styles.favorite}
					onClick={dispatchFavoritePeople}
				/>
			</div>
		</>
	);
};

PersonPhoto.propTypes = {
	personPhoto: PropTypes.string,
	personName: PropTypes.string,
};

export default PersonPhoto;
