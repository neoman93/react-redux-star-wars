import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { makeConCurrentRequest, changeHTTP } from '@utils/network';
import styles from './PersonFilms.module.css';
const PersonFilms = ({ personFilms }) => {
	const [filmsName, setFilmsName] = useState([]);
	useEffect(() => {
		(async () => {
			const filmsHTTPS = personFilms.map((url) => changeHTTP(url));
			const response = await makeConCurrentRequest(filmsHTTPS);

			setFilmsName(response);
		})();
	}, []);
	return (
		<div>
			<ul>
				{filmsName.map(({ title, episode_id }) => (
					<li key={episode_id}>
						<span>Episode: {episode_id}</span>
						<span> : </span>
						<span> {title} </span>
					</li>
				))}
			</ul>
		</div>
	);
};

PersonFilms.propTypes = {
	personFilms: propTypes.array,
};

export default PersonFilms;
