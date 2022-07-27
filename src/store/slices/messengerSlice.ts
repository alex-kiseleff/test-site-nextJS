import { createSlice } from '@reduxjs/toolkit';

export interface IMessenger {
	message: string;
}

const initialState: IMessenger = {
	message: '',
};

const messengerSlice = createSlice({
	name: 'messengerSlice',
	initialState,
	reducers: {
		setMessage: (state, action) => {
			state.message = action.payload;
		},
	},
});

export const { setMessage } = messengerSlice.actions;
export default messengerSlice.reducer;
