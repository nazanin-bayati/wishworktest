/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});
const { i18n } = require('./i18n');

const nextConfig = {
	reactStrictMode: true,
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === 'development',
	},
	experimental: {
		scrollRestoration: true,
	},
	i18n,
};

module.exports = withPlugins([
	[withBundleAnalyzer],
	[withPWA],
], nextConfig);
