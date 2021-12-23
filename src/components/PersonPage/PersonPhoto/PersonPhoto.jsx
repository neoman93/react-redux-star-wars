import PropTypes from 'prop-types';
const PersonPhoto = ({ personPhoto, personName }) => {
	return (
		<div>
			<img src={personPhoto} alt={personName} />
		</div>
	);
};

PersonPhoto.propTypes = {
	personPhoto: PropTypes.string,
	personName: PropTypes.string,
};

export default PersonPhoto;
