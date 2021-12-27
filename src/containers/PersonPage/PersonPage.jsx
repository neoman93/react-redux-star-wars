import React, { useEffect, useState, Suspense } from 'react';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { API_PERSON } from '@constants/api';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';

import UiLoading from '@components/Ui/UiLoading';

import propTypes from 'prop-types';
import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'));

const PersonPage = ({ match, setErrorApi }) => {
	const [personInfo, setPersonInfo] = useState(null);
	const [personName, setPersonName] = useState(null);
	const [personPhoto, setPersonPhoto] = useState(null);
	const [personFilms, setPersonFilms] = useState(null);

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
				res.films && setPersonFilms(res.films);
				console.log(res.films);
			} else {
				setErrorApi(true);
			}
		})();
	}, []);

	return (
		<>
			<PersonLinkBack />
			<UiLoading theme="white" />
			<div className={styles.wrapper}>
				<span className={styles.person__name}>{personName}</span>
				<div className={styles.container}>
					<PersonPhoto personPhoto={personPhoto} personName={personName} />
					{personInfo && <PersonInfo personInfo={personInfo} />}
					{personFilms && (
						<Suspense fallback={<UiLoading theme="white" />}>
							<PersonFilms personFilms={personFilms} />
						</Suspense>
					)}
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
