/**
 * @component FirstHeaderComponent - создает первый [header] сайта.
 * @returns {ReactElement}
 */
import React, { FC, ReactElement } from 'react';
import {
	Container,
	Header,
	Img,
	Picture,
	TextLeft,
	TextRight,
} from './FirstHeaderComponent.styles';
import sc_png from '/public/images/header/scrooge_mc_duck/png/scrooge_mc_duck.png';
import sc_webp from '/public/images/header/scrooge_mc_duck/webp/scrooge_mc_duck.webp';

const FirstHeaderComponent: FC = (): ReactElement => {
	return (
		<Header>
			<Container>
				<TextLeft>{'Bank Of $crooge'}</TextLeft>
				<Picture>
					<source srcSet={sc_webp.src} type='image/webp' />
					<Img src={sc_png.src} alt={'Скрудж МакДак'} />
				</Picture>
				<TextRight>{'McDuke $ $ $'}</TextRight>
			</Container>
		</Header>
	);
};

export default FirstHeaderComponent;
