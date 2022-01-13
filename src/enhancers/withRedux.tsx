import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

// Libs
import configureStore from 'redux/configure';

const { store, persistor } = configureStore();

type Props = {
	children: Node
};

/* withRedux Component =================== */
const WithRedux = ({ children }: Props) => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			{children}
		</PersistGate>
	</Provider>
);

// Export default
export default WithRedux;
