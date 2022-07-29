/**
 * @component MenuComponent - создает блок меню.
 * @returns {ReactElement}
 */
import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ItemMenuComponent from '../ItemMenuComponent/ItemMenuComponent';
import { menu } from '../../configurations/menu';
import { NavList } from './MenuComponent.styles';

const MenuComponent: FC = (): ReactElement => {
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
		<NavList>
			{menu.map((props) => {
				props?.id === idActive ? (props.activeStyle = true) : (props.activeStyle = false);
				return <ItemMenuComponent key={props.id} {...props} />;
			})}
		</NavList>
	);
};

export default MenuComponent;
