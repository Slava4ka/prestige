export interface ITariff {
	id: string;
	name: string;
	type: 'private' | 'operating';
	cost: string;
	period?: 'month' | 'year';
	currency?: 'rub'| 'usd';
	description: string;
	picture: string;
}
