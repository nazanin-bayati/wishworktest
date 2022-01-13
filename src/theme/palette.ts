import { colors } from '@mui/material';

const common = {
	primary: {
		main: '#FF8300',
		contrastText: 'white',
	},
	secondary: {
		main: '#2D2E83',
		contrastText: 'white',
	},
	error: {
		main: '#f46a6a',
		contrastText: 'white',
		dark: colors.red[900],
		light: colors.red[400],
	},
	warning: {
		main: '#f1b44c',
		contrastText: 'white',
		dark: colors.yellow[900],
		light: colors.yellow[400],
	},
	success: {
		main: '#34c38f',
		contrastText: 'white',
		dark: colors.green[900],
		light: colors.green[400],
	},
	info: {
		main: '#50a5f1',
		contrastText: 'white',
		dark: colors.green[900],
		light: colors.green[400],
	},
	grey: {
		main: colors.grey[700],
		...colors.grey,
	},
};

const light = {
	...common,
	type: 'light',
	text: {
		primary: common.secondary.main,
		secondary: common.primary.main,
		alternate: colors.grey[100],
		hint: colors.grey[600],
		link: colors.blue[600],
	},
	background: {
		default: '#FAF7F4',
		paper: 'white',
		toolbar: '#ffffff',
		tableHeader: 'rgb(241, 243, 246)',
	},
	divider: colors.grey[200],
	border: {
		default: '#E7E8F8',
	},
};

const dark = {
	...common,
	type: 'dark',
	text: {
		primary: colors.grey[200],
		secondary: common.primary.main,
		alternate: colors.grey[900],
		hint: colors.grey[400],
		link: colors.blue[600],
	},
	background: {
		default: '#18191a',
		paper: '#242526',
		toolbar: '#20232a',
		tableHeader: '#20232a',
	},
	divider: colors.grey[800],
	border: {
		default: colors.grey[800],
	},
};

const pallete = {
	dark,
	light,
};

export default pallete;
