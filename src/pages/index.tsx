import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from 'next/head';

// constants

// Components
import { Button } from 'components';
import Header from 'components/Layout/Header';

import i18n from '../../i18n';

type HomeProps = {
	locale: string,
}

const Home = ({ locale }: HomeProps) => {
	const { t } = useTranslation('common');
	const example2 = t('num', { value: 123456789.12212 });
	const example3 = t('date', { value: '1992-03-03' });
	const example4 = t('date_time', { value: '1992-03-03' });

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />

			{/* {example} */}
			<Button>{t('change-locale')}</Button>
			{example2}
			<br />
			{example3}
			<br />
			{example4}
			{locale}

			<main />
		</div>
	);
};

export const getStaticProps = async ({ locale }: HomeProps) => ({
	props: {
		locale,
		...(await serverSideTranslations(locale, ['common'], i18n)),
	},
});

export default Home;
