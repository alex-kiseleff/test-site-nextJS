/**
 * @component NoServiceComponent - рендерит техническую страницу с временно
 * неработающими сервисами.
 * @type {NextPage}.
 * @returns {JSX.Element}
 */
import { NextPage } from 'next';
import Link from 'next/link';
import { Title, Container } from '../styles/pages/no_service.styles';

const NoServiceComponent: NextPage = (): JSX.Element => {
	return (
		<Container>
			<Title>{'К сожалению данный сервис временно не предоставляется.'}</Title>
			<Title>{'Ведутся технические работы.'}</Title>
			<Link href={'/'}>
				<a>{'Хочу на главную страницу'}</a>
			</Link>
		</Container>
	);
};

export default NoServiceComponent;
