/**
 * @component SecondHeaderComponent - рендерит: текущее название страницы,
 * меню (кнопку "бургер"), всплывающее сообщение.
 * @returns {ReactElement}
 */
import React, { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';
import useAppSelector from '../../hooks/useAppSelector';
import MenuComponent from '../MenuComponent/MenuComponent';
import MessengerComponent from '../MessengerComponent/MessengerComponent';
import BurgerMenuComponent from '../BurgerMenuComponent/BurgerMenuComponent';
import { titles } from '../../configurations/titles';
import { Section, Container, Title } from './SecondHeaderComponent.styles';

const SecondHeaderComponent: FC = (): ReactElement => {
	const mapTitles = new Map(Object.entries(titles));
	const router = useRouter();
	const { message } = useAppSelector((state) => state.messengerSlice);
	const title = mapTitles.get(router.pathname);

	return (
		<Section>
			<Container>
				<BurgerMenuComponent />
				<MenuComponent />
				<Title>{title}</Title>
			</Container>
			<MessengerComponent message={message} />
		</Section>
	);
};

export default SecondHeaderComponent;
