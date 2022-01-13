import { nextReduxCookieMiddleware, wrapMakeStore } from 'next-redux-cookie-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import rootReducer from './reducers';

const makeStore = () => {
	const store = configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware => getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).prepend(
			nextReduxCookieMiddleware({
				subtrees: ['my.subtree'],
			}),
		),
		devTools: process.env.NODE_ENV !== 'production',
	});

	const persistor = persistStore(store);

	return { store, persistor };
};

export default configRedux;
