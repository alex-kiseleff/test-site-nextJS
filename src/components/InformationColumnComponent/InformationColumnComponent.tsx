/**
 * @component InformationColumnComponent - рендерит информационную колонку
 * на странице [about].
 * @param {Array<IAbout>} about - реквизиты со страницы [about].
 * @returns {ReactElement}
 */
import React, { FC, ReactElement } from 'react';
import { Container, Paragraph, Title } from './InformationColumnComponent.styles';

export interface IAbout {
	id: string;
	title?: string;
	paragraph: string;
}

interface IData {
	about?: Array<IAbout>;
}

const InformationColumnComponent: FC<IData> = ({ about }): ReactElement => {
	return (
		<Container>
			{about?.map(({ id, title, paragraph }) => {
				return (
					<div key={id}>
						{title && <Title>{title}</Title>}
						{paragraph && <Paragraph>{paragraph}</Paragraph>}
					</div>
				);
			})}
		</Container>
	);
};

export default InformationColumnComponent;
