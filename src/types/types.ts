import { Action, ThunkAction } from '@reduxjs/toolkit';
import makeStore from '../store/store';

export type RootStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<RootStore['getState']>;

export type AppDispatch = RootStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
