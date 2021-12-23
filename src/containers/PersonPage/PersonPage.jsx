import { API_PERSON } from '@constants/api';
import { useEffect, useState } from 'react';
import { withErrorApi } from '@hoc-helpers/withErrorApi';

import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';

import propTypes from 'prop-types';
import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import styles from './PersonPage.module.css';
const PersonPage = ({ match, setErrorApi }) => {
	const [personInfo, setPersonInfo] = useState(null);
	const [personName, setPersonName] = useState(null);
	const [personPhoto, setPersonPhoto] = useState(null);

	useEffect(() => {
		(async () => {
			const id = match.params.id;
			const res = await getApiResource(`${API_PERSON}/${id}/`);
			if (res) {
				setPersonInfo([
					{ title: 'Height', data: res.height },
					{ title: 'Mass', data: res.mass },
					{ title: 'Skin Color', data: res.skin_color },
					{ title: 'Eye Color', data: res.eye_color },
					{ title: 'Hair Color', data: res.hair_color },
					{ title: 'Birth Year', data: res.birth_year },
					{ title: 'Gender', data: res.gender },
				]);
				setPersonName(res.name);
				setPersonPhoto(getPeopleImage(id));
				setErrorApi(false);
				// res.films
			} else {
				setErrorApi(true);
			}
		})();
	}, []);

	return (
		<>
			<PersonLinkBack />
			<div className={styles.wrapper}>
				<span className={styles.person__name}>{personName}</span>
				<div className={styles.container}>
					<PersonPhoto personPhoto={personPhoto} personName={personName} />
					{personInfo && <PersonInfo personInfo={personInfo} />}
				</div>
			</div>
		</>
	);
};

PersonPage.propTypes = {
	setErrorApi: propTypes.func,
	match: propTypes.object,
};

export default withErrorApi(PersonPage);