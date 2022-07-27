/**
 * @component Page404Component - рендерит страницу с ошибкой адреса.
 * @type {NextPage}
 * @returns {JSX.Element}
 */
import { NextPage } from 'next';
import Link from 'next/link';
import { Title, Container } from '../styles/pages/404.styles';

const Page404Component: NextPage = (): JSX.Element => {
	return (
		<Container>
			<Title>{'Страница не найдена, код ошибки 404.'}</Title>
			<Link href={'/'}>
				<a>{'Хочу на главную страницу'}</a>
			</Link>
		</Container>
	);
};

export default Page404Component;
