import React from 'react';
import styles from './main.module.scss';
import Dropzone from '../../components/Dropzone/Dropzone';

const Main = () => (
	<div className={styles.face}>
		<div className={styles.label}>
			<h1>Поиск несоответствий в IFC файлах нормам строительства</h1>
			<h2>
				Автоматизированный поиск несоответствий в IFC файлах нормам стройтельства с
				рекомендациями по устранению
			</h2>

			<div className={styles.dropzone}>
				<Dropzone />
			</div>
		</div>
	</div>

);

export default Main;
