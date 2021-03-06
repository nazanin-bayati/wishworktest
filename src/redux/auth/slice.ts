/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

type authState = {
	accessToken: string,
	refreshToken: string,
	loggedIn: boolean,
}

const initialState: authState = {
	accessToken: '',
	refreshToken: '',
	loggedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			const { accessToken, refreshToken } = action.payload;
			state.accessToken = accessToken;
			state.refreshToken = refreshToken;
			state.loggedIn = true;
		},
		logout: () => initialState,
	},
});

export default authSlice;
