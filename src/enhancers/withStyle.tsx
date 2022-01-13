import React, { useMemo, useEffect } from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import appSlice from 'redux/app/slice';

import rtlPlugin from 'stylis-plugin-rtl';
import configTheme from 'theme/configure';

import useThemeDetector from 'enhancers/useThemeDetector';

// Constants
// import APP_CONSTANTS from 'constants/app';

type Props = {
	children: Node
};

/* WithTheme Component =================== */
const WithTheme = ({ children }: Props) => {
	// const app = useSelector(state => state.app);
	const isDark = useThemeDetector();
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(appSlice.actions.updateTheme(isDark ? 'dark' : 'light'));
	// }, [isDark]);

	const { themeObject, styleCache } = useMemo(() => {
		// const { direction, fontFamily } = APP_CONSTANTS.LANG[app.lang];
		const theme = configTheme({ direction: 'rtl', mode: 'dark', fontFamily: 'iransans' });
		// const stylisPlugin = [];

		// if (direction === 'rtl') {
		// 	stylisPlugin.push(rtlPlugin);
		// }

		const style = createCache({
			key: 'css',
			stylisPlugins: [rtlPlugin],
		});

		return { themeObject: theme, styleCache: style };
	}, []);

	return (
		<CacheProvider value={styleCache}>
			<ThemeProvider theme={themeObject}>
				{children}
			</ThemeProvider>
		</CacheProvider>
	);
};

// Export default
export default WithTheme;
