import React from 'react';
import Card from '../../components/Card/Card';
import styles from './tariffs.module.scss';
import {ITariff} from './types';

interface ITariffsComponent {
	tariffs: ITariff[]
}

const Tariffs = ({tariffs}: ITariffsComponent) => (
	<div className={styles.cards}>
		{tariffs.map((tariff: ITariff) => <Card
			key={tariff.id}
			id={tariff.id}
			type={tariff.type}
			name={tariff.name}
			cost={tariff.cost}
			description={tariff.description}
			currency={tariff.currency}
			period={tariff.period}
			picture={tariff.picture}
		/>)}
	</div>
);

export default Tariffs;
