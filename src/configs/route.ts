/* eslint-disable key-spacing */

interface Route {
	[routeKey: string]: {

		/*
			url of the route
		*/
		href: string;

		/*
			header type of the route
		*/
		header?: 'transparent' | 'white' | undefined;

		/*
			should redirect to login if user is not logged in
			value is considered as false if omitted
		*/
		privateRoute?: boolean,

		/*
			should redirect to dashboard if user is logged in
			value is considered as false if omitted
		*/
		loginRoute?: boolean,
	};
}

const route: Route = {
	authLogin: 				{ href: '/auth/login',			loginRoute: true 	 },
	orderCheckout: 			{ href: '/order/checkout'			 			 	 },
	orderInvoice: 			{ href: '/order/invoice',		privateRoute: true	 },
	orderFinish: 			{ href: '/order/finish',		privateRoute: true	 },
	home: 					{ href: '/'							 				 },
};

export default route;
