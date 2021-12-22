import propTypes from 'prop-types';
import cn from 'classnames';
import '../index.css';
import styles from './UiButton.module.css';
const UiButton = ({ text, onClick, disabled, theme = 'dark', classes }) => {
	return (
		<>
			<button
				onClick={onClick}
				className={cn(styles.button, styles[theme], classes)}
				disabled={disabled}
				theme="dark">
				{text}
			</button>
		</>
	);
};

UiButton.propTypes = {
	text: propTypes.string,
	onclick: propTypes.func,
	disabled: propTypes.bool,
	theme: propTypes.string,
	classes: propTypes.string,
};

export default UiButton;
