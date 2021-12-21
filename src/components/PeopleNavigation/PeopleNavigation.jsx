import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
	const handleChangeNext = () => getResource(nextPage);
	const handleChangePrev = () => getResource(prevPage);
	return (
		<div>
			<Link to={`/people/?page=${counterPage - 1}`} className={styles.link}>
				<button onClick={handleChangePrev} className={styles.buttons} disabled={!prevPage}>
					Previous
				</button>
			</Link>
			<Link to={`/people/?page=${counterPage + 1}`} className={styles.link}>
				<button onClick={handleChangeNext} className={styles.buttons} disabled={!nextPage}>
					Next
				</button>
			</Link>
		</div>
	);
};

PeopleNavigation.propTypes = {
	getResource: PropTypes.func,
	prevPage: PropTypes.string,
	nextPage: PropTypes.string,
	counterPage: PropTypes.number,
};

export default PeopleNavigation;
