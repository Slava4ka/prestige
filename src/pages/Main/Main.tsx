import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import {Paper} from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import styles from './main.module.scss';
import CustomDropzone from '../../components/CustomDropzone/CustomDropzone';

const Main = () => {
	const [data, setData] = useState<string[]>([]);

	return (
		<Container maxWidth="lg" component="main" className={styles.container}>
			<div className={styles.face}>
				<h1 className={`${styles.label} ${styles.bigLetter}`}>
					Поиск несоответствий в IFC файлах нормам строительства
				</h1>
				<h2 className={styles.label}>
					Автоматизированный поиск несоответствий в IFC файлах нормам стройтельства с
					рекомендациями по устранению
				</h2>
				<div className={styles.dropzone}>
					<CustomDropzone setRespData={setData} />
				</div>
			</div>

			<Slide direction="up" in={data.length > 0} mountOnEnter unmountOnExit>
				<Paper elevation={3} className={styles.dataPaper}>
					<ol>
						{data.map((d: string) => <li className={styles.paragraph}>{d}</li>)}
					</ol>
				</Paper>
			</Slide>
		</Container>
	);
};

export default Main;
