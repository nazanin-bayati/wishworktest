/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import type { ThemeMode } from 'theme/type';

type AppState = {
	loading: boolean,
	theme: ThemeMode,
}

const initialState: AppState = {
	loading: false,
	theme: 'light',
};

const appSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		toggleLoading: state => {
			state.loading = !state.loading;
		},
		toggleTheme: state => {
			state.theme = state.theme === 'light' ? 'dark' : 'light';
		},
	},
});

export default appSlice;
