import { configureStore } from '@reduxjs/toolkit';
import openBurgerMenuSlice from './slices/openBurgerMenuSlice';
import messengerSlice from './slices/messengerSlice';
import panelPayForPhoneSlice from './slices/panelPayForPhoneSlice';

const makeStore = () => {
	return configureStore({
		reducer: {
			messengerSlice,
			openBurgerMenuSlice,
			panelPayForPhoneSlice,
		},
	});
};

export default makeStore;
