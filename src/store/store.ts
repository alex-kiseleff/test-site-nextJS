import { configureStore } from '@reduxjs/toolkit';
import openBurgerMenuSlice from './slices/openBurgerMenuSlice';
import messengerSlice from './slices/messengerSlice';
import panelPayForPhoneSlice from './slices/panelPayForPhoneSlice';
import fetchSubmit from './slices/fetchSubmit';

const makeStore = () => {
	return configureStore({
		reducer: {
			messengerSlice,
			openBurgerMenuSlice,
			panelPayForPhoneSlice,
			fetchSubmit,
		},
	});
};

export default makeStore;
