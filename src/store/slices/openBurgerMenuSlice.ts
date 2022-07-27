import { createSlice } from '@reduxjs/toolkit';

export interface IBurgerMenu {
	isMenuOpen: boolean;
}

const initialState: IBurgerMenu = {
	isMenuOpen: false,
};

const openBurgerMenuSlice = createSlice({
	name: 'openBurgerMenuSlice',
	initialState,
	reducers: {
		setCondition: (state, action) => {
			state.isMenuOpen = action.payload;
		},
	},
});

export const { setCondition } = openBurgerMenuSlice.actions;
export default openBurgerMenuSlice.reducer;
