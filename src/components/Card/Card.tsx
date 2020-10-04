import React from 'react';
import Button from 'react-bootstrap/cjs/Button';
import HouseIcon from '@material-ui/icons/House';
import BusinessIcon from '@material-ui/icons/Business';
import styles from './card.module.scss';
import {ITariff} from '../../pages/Tariffs/types';

interface ICard extends ITariff {}

const Card = ({
	id, type, name, cost, currency, description, period, picture,
}: ICard) => (
	<div className={styles.card}>
		<div className={styles.type}>
			{type === 'operating'
				? (
					<>
						<HouseIcon />
						{' '}
						Личный
					</>
				) : (
					<>
						<BusinessIcon />
						{' '}
						Рабочий
					</>
				)}
		</div>
		<div className={styles.picture}>
			<img src={picture} alt={`picture of ${name}`} />
		</div>
		<div className={styles.name}>
			<h3>{name}</h3>
		</div>
		<div className={styles.cost}>
			<h5>
				{
					currency && period
						? `${cost} ${currency === 'rub' ? 'руб' : 'usd'}/${period === 'month' ? 'месяц' : 'год'}`
						: cost
				}
			</h5>
		</div>
		<div className={styles.description}>
			{description}
		</div>
		<div className={styles.button}>
			{
				type === 'operating'
					? <Button variant="outline-dark">Регистрация</Button>
					: <Button variant="secondary">Оплатить</Button>
			}
		</div>
	</div>
);

export default Card;
