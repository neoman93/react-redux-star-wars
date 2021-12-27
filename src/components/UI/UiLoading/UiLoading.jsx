import { useState, useEffect } from 'react';
import cn from 'classnames';

import loaderBlack from './img/loader-black.svg';
import loaderWhite from './img/loader-white.svg';
import loaderBlue from './img/loader-blue.svg';

import styles from './UiLoading.module.css';

const UiLoading = ({ theme = 'white', isShadow = true, classes }) => {
	const [loaderIcon, setLoaderIcon] = useState(null);
	useEffect(() => {
		switch (theme) {
			case 'white':
				setLoaderIcon(loaderWhite);
				break;
			case 'blue':
				setLoaderIcon(loaderBlue);
				break;
			case 'black':
				setLoaderIcon(loaderBlack);
				break;
			default:
				setLoaderIcon(loaderBlack);
				break;
		}
	}, []);
	return (
		<img
			className={cn(styles.loader, isShadow && styles.shadow, classes)}
			src={loaderIcon}
			alt="Loading"
		/>
	);
};

export default UiLoading;
