import React, {useEffect, useState} from 'react';
import styles from './progress.module.scss';

interface IProgress {
	progress: number
}

const Progress = ({progress}: IProgress) => {
	const [isSent, setIsSent] = useState<boolean>(false);
	const sentHandler = () => {
		setTimeout(() => {
			setIsSent(true);
		}, 2000);
	};

	useEffect(() => {
		if (progress === 100) {
			sentHandler();
		}
		return () => {
			setIsSent(false);
		};
	}, [progress]);

	return (
		<div>
			{
				isSent
					? <h2>Считаем...</h2>
					: (
						<div className={styles.percents}>
							<h2>Отправка:</h2>
							<span className={styles.numbers}><h2>{`${progress}`}</h2></span>
							<h2>%</h2>
						</div>
					)
			}
		</div>
	);
};

export default Progress;
