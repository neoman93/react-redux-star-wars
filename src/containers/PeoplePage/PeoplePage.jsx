import React, { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getpeopleImage } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';
import styles from './PeoplePage.module.css';

const PeoplePage = () => {
	const [people, setPeople] = useState(null);

	const getResource = async (url) => {
		const res = await getApiResource(url);

		const peopleList = res.results.map(({ name, url }) => {
			const id = getPeopleId(url);
			const img = getpeopleImage(id);
			return { name, id, img };
		});
		setPeople(peopleList);
	};

	useEffect(() => {
		getResource(API_PEOPLE);
	}, []);
	return <>{people && <PeopleList people={people} />}</>;
};

export default PeoplePage;
