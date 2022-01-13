/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

type userState = {
	profile: {
		mobile: string,
		name: string,
	},
}

const initialState: userState = {
	profile: {
		mobile: '',
		name: '',
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		updateProfile: (state, action) => {
			const { payload } = action;
			state.profile = payload;
		},
		clearProfile: () => initialState,
	},
});

export default userSlice;
