import cn from 'classnames';
import { useEffect, useRef } from 'react';
import styles from './UiVideo.module.css';

const UiVideo = ({ src, classes, playbackRate = 1.0 }) => {
	const videoRef = useRef(null);
	useEffect(() => {
		videoRef.current.playbackRate = playbackRate;
	}, []);
	return (
		<>
			<video
				className={cn(styles.video, classes)}
				playbackRate={playbackRate}
				loop
				autoPlay
				muted
				ref={videoRef}>
				<source src={src} />
			</video>
		</>
	);
};

export default UiVideo;
