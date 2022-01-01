import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';
import cn from 'classnames';
import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';

import styles from './ChooseSide.module.css';

const ChooseSide = () => {
	const elements = [
		{
			theme: THEME_LIGHT,
			text: 'Light Side',
			img: imgLightSide,
			classes: styles.item__light,
		},
		{
			theme: THEME_DARK,
			text: 'Dark Side',
			img: imgDarkSide,
			classes: styles.item__dark,
		},
		{
			theme: THEME_NEUTRAL,
			text: "I'm Han Solo",
			img: imgFalcon,
			classes: styles.item__neutral,
		},
	];

	const ChooseSideItem = ({ theme, text, img, classes }) => {
		const isTheme = useTheme();
		return (
			<div onClick={() => isTheme.change(theme)} className={cn(styles.item, classes)}>
				<div className={styles.item__header}>{text}</div>
				<img src={img} alt={text} className={styles.item__img} />
			</div>
		);
	};

	return (
		<div className={styles.container}>
			{elements.map(({ theme, text, img, classes }, index) => (
				<ChooseSideItem key={index} theme={theme} text={text} img={img} classes={classes} />
			))}
		</div>
	);
};

export default ChooseSide;
