import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '../../components/Card/Card';
import styles from './tariffs.module.scss';
import {ITariff} from './types';

interface ITariffsComponent {
	tariffs: ITariff[]
}

const Tariffs = ({tariffs}: ITariffsComponent) => (
	<Container maxWidth="lg" component="main" className={styles.container}>
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			spacing={5}
		>
			{tariffs.map((tariff: ITariff) => (
				<Grid key={tariff.id} item xs={12} sm={12} md={12} lg={4} xl={4} className={styles.grid}>
					<Card
						id={tariff.id}
						type={tariff.type}
						name={tariff.name}
						cost={tariff.cost}
						description={tariff.description}
						currency={tariff.currency}
						period={tariff.period}
						picture={tariff.picture}
					/>
				</Grid>
			))}
		</Grid>
	</Container>
);

export default Tariffs;
