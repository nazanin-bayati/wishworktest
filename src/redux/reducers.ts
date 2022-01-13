import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

import appSlice from './app/slice';
import userSlice from './user/slice';
import authSlice from './auth/slice';

const rootPersistConfig = {
	key: 'root',
	blacklist: ['auth'],
	version: 1,
	storage,
};

const authPersistConfig = {
	key: 'auth',
	blacklist: [],
	version: 1,
	storage,
};

const rootReducer = combineReducers({
	app: persistReducer(authPersistConfig, appSlice.reducer),
	user: userSlice.reducer,
	auth: authSlice.reducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
