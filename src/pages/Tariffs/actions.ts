import {createCustomAction} from 'typesafe-actions';
import cartActionTypes from './constants';
import {ITariff} from './types';

export const setTariffsData = createCustomAction(cartActionTypes.SET_TARIFFS_DATA,
	(tariffs: ITariff[]) => ({tariffs}));

export const setTariffsIsLoading =	createCustomAction(cartActionTypes.SET_TARIFFS_IS_LOADING,
	(loading: boolean) => ({loading}));
