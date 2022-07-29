/**
 *@component OperatorCardComponent - рендерит карточку оператора связи.
 * @param {string} id - id.
 * @param {string} webp - путь до репозитория изображения с форматом webp.
 * @param {string} png - путь до репозитория изображения с форматом png.
 * @returns {ReactElement}.
 */
import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import { IOperator } from '../../pages/pay_for_mobile';
import { Container } from './OperatorCardComponent.styles';

const OperatorCardComponent: FC<IOperator> = ({ id, webp, png }): ReactElement => {
	return (
		<Container>
			<Link href={'/to_pay/[id]'} as={`/to_pay/${id}`}>
				<a>
					<picture>
						<source srcSet={webp} />
						<img src={png} />
					</picture>
				</a>
			</Link>
		</Container>
	);
};

export default OperatorCardComponent;
