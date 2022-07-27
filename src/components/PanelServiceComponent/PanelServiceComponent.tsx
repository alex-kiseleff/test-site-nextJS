/**
 * @component PanelServiceComponent - рендерит панель-ссылку предоставляемой
 * услуги.
 * @param {string} path - адрес ссылки.
 * @param {string} title - заголовок панели.
 * @returns {ReactElement}
 */
import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import { IPanelService } from '../../pages';
import { PanelService } from './PanelServiceComponent.styles';

const PanelServiceComponent: FC<IPanelService> = ({
	path,
	title,
}): ReactElement => {
	return (
		<PanelService>
			<Link href={path}>
				<a>{title.toUpperCase()}</a>
			</Link>
		</PanelService>
	);
};

export default PanelServiceComponent;
