/**
 * @component FooterComponent - создает [footer] сайта.
 * @returns {ReactElement}
 */
import React, { FC, ReactElement } from 'react';
import {
	Author,
	Container,
	Footer,
	Paragraph,
	Title,
} from './FooterComponent.styles';

const FooterComponent: FC = (): ReactElement => {
	return (
		<Footer>
			<Container>
				<Title>{'Спасибо, что выбираете нас!'}</Title>
				<Paragraph>
					{'Copyright © '}
					<Author>{'Alex Kiseleff,'}</Author>
					{' 2022'}
				</Paragraph>
			</Container>
		</Footer>
	);
};

export default FooterComponent;
