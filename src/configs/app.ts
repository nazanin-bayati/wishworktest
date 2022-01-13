const app = {
	debounce_delay: 1000, // milliseconds
	verification_opt_renew: 56, // seconds

	// populate from envs
	website_base_url: process.env.NEXT_PUBLIC_WEBSITE_BASE_URL,
	api_base_url: process.env.NEXT_PUBLIC_API_BASE_URL,
	sentry_url: process.env.NEXT_PUBLIC_SENTRY_URL,
	google_analytics_key: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY,
	google_auth_client_id: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID,

	default_locale: 'fa',
	default_theme: 'light',

	available_themes: ['dark', 'light'],
	available_locales: {
		fa: {
			key: 'fa',
			label: 'فارسی',
			direction: 'rtl',
			fontFamily: 'IranYekanWeb',
		},
		en: {
			key: 'en',
			label: 'English',
			direction: 'ltr',
			fontFamily: 'AirbnbCerealApp',
		},
	},
};

export default app;
