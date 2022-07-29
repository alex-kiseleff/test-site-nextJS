/**
 * @component LeftColumnComponent - рендерит левую колонку с контактными данными
 * на странице контактов.
 * @param {Array<IContact>} contacts - props со страницы [contacts].
 * @returns {ReactElement}
 */
import { FC, ReactElement } from 'react';
import { Container, Data, Section } from './LeftColumnComponent.styles';

export interface IContact {
	[key: string]: string;
}

interface IData {
	contacts?: Array<IContact>;
}

const LeftColumnComponent: FC<IData> = ({ contacts }): ReactElement => {
	return (
		<Section>
			{contacts?.map(({ id, post, name, phone, number, address, email }) => {
				return (
					<Container key={id}>
						<Data>{post}</Data>
						<Data>{name}</Data>
						<Data>{phone}</Data>
						<Data>{number}</Data>
						{address && <Data>{address}</Data>}
						{email && <Data>{email}</Data>}
					</Container>
				);
			})}
		</Section>
	);
};

export default LeftColumnComponent;
