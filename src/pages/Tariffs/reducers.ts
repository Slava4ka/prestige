import {ActionType, getType} from 'typesafe-actions';
import * as actions from './actions';
import {ITariff} from './types';

export type cardState = Readonly<{
	tariffs: ITariff[];
	isLoading: boolean;
}>;

const initialState: cardState = {
	tariffs: [
		{
			id: 'a,dbn3kb_sds',
			name: 'Стандарт',
			cost: 'Бесплатный',
			type: 'operating',
			description: 'Доступно до 15 загрузок ifc файлов в месяц',
			picture: '/picForCard/a.jpg',
		},
		{
			id: 'jn_sdw@WDS2!',
			name: 'Плюс',
			cost: '10000',
			currency: 'rub',
			period: 'month',
			type: 'private',
			description: 'Доступно безлимитное число загрузок ifc файлов в месяц',
			picture: '/picForCard/c.jpg',
		},
		{
			id: 'nbsdk3_i6^_',
			name: 'Профессиональный',
			cost: '96000',
			currency: 'rub',
			period: 'year',
			type: 'private',
			description: 'Доступно безлимитное число загрузок ifc файлов',
			picture: '/picForCard/b.jpeg',
		},
	],
	isLoading: false,
};

export type cartActions = ActionType<typeof actions>;

export default (
	state = initialState,
	action: cartActions,
): cardState => {
	switch (action.type) {
	case getType(actions.setTariffsData):
		return {
			...state,
			tariffs: action.tariffs,
		};
	case getType(actions.setTariffsIsLoading):
		return {
			...state,
			isLoading: action.loading,
		};
	default:
		return state;
	}
};
