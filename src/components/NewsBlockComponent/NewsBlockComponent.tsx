/**
 * @component NewsBlockComponent - создает новостную статью в колонке
 * новостей на странице [about].
 * @param {string} title - заголовок.
 * @param {string} description - описание.
 * @returns {ReactElement}
 */
import React, { FC, ReactElement } from 'react';
import { Article, Description, Title } from './NewsBlockComponent.styles';

export interface INewsBlock {
	id: string;
	title: string;
	description: string;
}

const NewsBlockComponent: FC<INewsBlock> = ({ title, description }): ReactElement => {
	return (
		<Article>
			<Title>{title}</Title>
			<Description lang={'ru'}>{description}</Description>
		</Article>
	);
};

export default NewsBlockComponent;
