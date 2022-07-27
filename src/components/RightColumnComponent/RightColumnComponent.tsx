/**
 * @component RightColumnComponent - рендерит правую колонку со схемой
 * местонахождения объекта на странице контактов.
 * @returns {ReactElement}
 */
import React, { FC, ReactElement } from 'react';
import { Container, WrapImg } from './RightColumnComponent.styles';
import map_webp from '/public/images/maps/address.webp';
import map_png from '/public/images/maps/address.png';

const RightColumnComponent: FC = (): ReactElement => {
	return (
		<Container>
			<WrapImg>
				<picture>
					<source srcSet={map_webp.src} />
					<img src={map_png.src} />
				</picture>
			</WrapImg>
		</Container>
	);
};

export default RightColumnComponent;
