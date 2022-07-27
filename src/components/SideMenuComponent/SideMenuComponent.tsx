/**
 * @component SideMenuComponent - рендерит тело "бургер" меню.
 * @returns {ReactElement}
 */
import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useAppSelector from '../../hooks/useAppSelector';
import ItemMenuComponent, {
	IItemMenu,
} from '../ItemMenuComponent/ItemMenuComponent';
import { menu } from '../../configurations/menu';
import { Container, Wrapper } from './SideMenuComponent.styles';

const SideMenuComponent: FC = (): ReactElement => {
	const { isMenuOpen } = useAppSelector((state) => state.openBurgerMenuSlice);
	const router = useRouter();
	const [idActive, setIdActive] = useState('');

	useEffect(() => {
		let count = 0;
		menu.map((item) => {
			item?.path === router.pathname ? setIdActive(item.id) : count++;
			if (count === menu.length) setIdActive('');
		});
	}, [router]);

	return (
		<Wrapper>
			<Container isMenuOpen={isMenuOpen}>
				{menu.map((props: IItemMenu) => {
					props?.id === idActive
						? (props.activeStyle = true)
						: (props.activeStyle = false);
					return <ItemMenuComponent key={props.id} {...props} />;
				})}
			</Container>
		</Wrapper>
	);
};

export default SideMenuComponent;
