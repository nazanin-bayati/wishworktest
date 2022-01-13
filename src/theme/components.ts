import { Theme } from '@mui/material/styles';

const components = (theme: Theme) => ({
	MuiCssBaseline: {
		styleOverrides: {
			a: {
				textDecoration: 'none',
				color: 'inherit',
			},
			'::-webkit-scrollbar': {
				width: '0px !important',
				height: '0px !important',
			},

			/* Track */
			'::-webkit-scrollbar-track': {
				background: '#f1f1f1',
			},

			/* Handle */
			'::-webkit-scrollbar-thumb': {
				background: 'transparent',
			},

			/* Handle on hover */
			'::-webkit-scrollbar-thumb:hover': {
				background: '#555',
			},
		},
	},
	MuiPaper: {
		styleOverrides: {
			root: {
				boxShadow: 'none',
				borderRadius: theme.shape.borderRadius.md,
			},
		},
	},
	MuiInputBase: {
		styleOverrides: {
			root: {
				borderRadius: theme.shape.borderRadius.xl,
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				borderRadius: theme.shape.borderRadius.xl,
				boxShadow: 'none',
			},
		},
		defaultProps: {
			variant: 'contained' as const,
		},
	},
	MuiAppBar: {
		styleOverrides: {
			root: {
				boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05)',
				borderRadius: 0,
			},
		},
	},
	MuiLink: {
		styleOverrides: {
			root: {
				textDecoration: 'none',
			},
		},
	},
});

export default components;
