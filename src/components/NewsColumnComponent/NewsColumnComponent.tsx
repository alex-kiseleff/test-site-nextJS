/**
 * @component NewsColumnComponent - рендерит новостные блоки в колонку.
 * @param {Array<INewsBlock>} news - реквизиты со страницы [about].
 * @returns {ReactElement}
 */
import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import NewsBlockComponent, {
	INewsBlock,
} from '../NewsBlockComponent/NewsBlockComponent';
import { Container } from './NewsColumnComponent.styles';

interface IData {
	news: Array<INewsBlock>;
}

const NewsColumnComponent: FC<IData> = ({ news }): ReactElement => {
	return (
		<Container>
			{news?.map((item: INewsBlock) => {
				return (
					<Link
						key={item.id}
						href={'/news/[id]'}
						as={`/news/${item.id}`}
					>
						<a>
							<NewsBlockComponent {...item} />
						</a>
					</Link>
				);
			})}
		</Container>
	);
};

export default NewsColumnComponent;
