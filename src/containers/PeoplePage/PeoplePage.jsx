import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import { getPeopleId, getpeopleImage } from '@services/getPeopleData';
import { getApiResource } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import styles from './PeoplePage.module.css';

const PeoplePage = ({ setErrorApi }) => {
	const [people, setPeople] = useState(null);

	const getResource = async (url) => {
		const res = await getApiResource(url);

		if (res) {
			const peopleList = res.results.map(({ name, url }) => {
				const id = getPeopleId(url);
				const img = getpeopleImage(id);
				return { name, id, img };
			});
			setPeople(peopleList);
			setErrorApi(false);
		} else {
			setErrorApi(true);
		}
	};

	useEffect(() => {
		getResource(API_PEOPLE);
	}, []);
	return (
		<>
			<h1>Navigation</h1>
			{people && <PeopleList people={people} />}
		</>
	);
};
PeoplePage.propTypes = {
	setErrorApi: propTypes.func,
};

export default withErrorApi(PeoplePage);
