/**
 * @component ItemMenuComponent - создает пункт меню.
 * @param {string} path - адрес ссылки.
 * @param {string} name - название пункта меню.
 * @param {boolean} activeStyle - активный класс для стилей.
 * @returns {ReactElement}
 */
import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import { ListItem } from './ItemMenuComponent.styles';

export interface IItemMenu {
	id: string;
	path: string;
	name: string;
	activeStyle: boolean;
}

const ItemMenuComponent: FC<IItemMenu> = ({
	path,
	name,
	activeStyle,
}): ReactElement => {
	return (
		<ListItem active={activeStyle}>
			<Link href={path}>
				<a>{name.toUpperCase()}</a>
			</Link>
		</ListItem>
	);
};

export default ItemMenuComponent;
