import { Theme as MaterialTheme } from '@mui/material/styles';

export type BorderRadius = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Direction = 'ltr' | 'rtl';
export type ThemeMode = 'light' | 'dark';

export type ThemeObject = {
	fontFamily?: string,
	direction: Direction,
	mode: ThemeMode,
	responsiveFont?: boolean,
};

declare module '@mui/material/styles' {
	export interface Theme {
		shape: {
			borderRadius: Record<BorderRadius, number>;
		}
    }

	// allow configuration using `createTheme`
	export interface ThemeOptions {
		shape: {
			borderRadius: Record<BorderRadius, number>;
		};
	}
}

declare module '@emotion/react' {
	export interface Theme extends MaterialTheme {}
}
