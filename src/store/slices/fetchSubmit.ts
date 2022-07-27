import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface IDataForSubmit {
	oneInput: string;
	twoInput: string;
	threeInput: string;
	fourInput: string;
	sumInput: string;
}

export interface IDataForSubmitState {
	data: IDataForSubmit;
	success: boolean;
	error: string | null | undefined;
}

const fetchSubmit = createAsyncThunk<
	IDataForSubmit,
	IDataForSubmit,
	{ rejectValue: string }
>(
	'submit/fetchSubmit',
	async (
		{ oneInput, twoInput, threeInput, fourInput, sumInput },
		{ rejectWithValue }
	) => {
		const data = {
			number: `+7${oneInput}${twoInput}${threeInput}${fourInput}`,
			sum: sumInput,
		};
		// Эмуляция запросов для отправки, response/rejected в рандомном порядке.
		const fake = Math.random() > 0.5 ? 'fake' : '';
		const response = await fetch(`http://localhost:3000/pay${fake}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		if (!response.ok) {
			return rejectWithValue('Ошибка сервера!');
		}
		return (await response.json()) as IDataForSubmit;
	}
);

const initialState: IDataForSubmitState = {
	data: {
		oneInput: '',
		twoInput: '',
		threeInput: '',
		fourInput: '',
		sumInput: '',
	},
	error: null,
	success: false,
};

const submitSlice = createSlice({
	name: 'submitSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSubmit.pending, (state: IDataForSubmitState) => {
				state.error = null;
				state.success = false;
			})
			.addCase(
				fetchSubmit.fulfilled,
				(
					state: IDataForSubmitState,
					action: PayloadAction<IDataForSubmit>
				) => {
					state.data = action.payload;
					state.success = true;
				}
			)
			.addCase(
				fetchSubmit.rejected,
				(state: IDataForSubmitState, action) => {
					state.error = action.payload;
					state.success = false;
				}
			);
	},
});

export { fetchSubmit };
export default submitSlice.reducer;
