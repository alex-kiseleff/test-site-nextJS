/**
 * @component PayForMobileComponent - рендерит страницу со списком операторов связи.
 * @type {NextPage<Array<IOperator>>}.
 * @param {Array<IOperator>} operators - данные с сервера.
 * @returns {JSX.Element}
 */
import { GetStaticProps, NextPage } from 'next';
import OperatorCardComponent from '../components/OperatorCardComponent/OperatorCardComponent';
import { Container, Section } from '../styles/pages/pay_for_mobile.styles';
import db from '../../DATA_BASE.json';

export interface IOperator {
	id: string;
	name: string;
	webp: string;
	png: string;
	path: string;
}

interface IData {
	operators: Array<IOperator>;
}

const PayForMobileComponent: NextPage<IData> = ({ operators }): JSX.Element => {
	return (
		<Section>
			<Container>
				{operators?.map((props: IOperator) => {
					return <OperatorCardComponent key={props.id} {...props} />;
				})}
			</Container>
		</Section>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
// 		const response = await fetch('http://localhost:3000/operators');
// 		const operators = await response.json();
		const operators = db.operators;

// 		if (operators.errors) {
// 			return { notFound: true };
// 		}

// 		if (!operators) {
// 			return { notFound: true };
// 		}
		return {
			props: {
				operators,
			},
		};
	} catch (error) {
		console.log(error);

		return { props: {} };
	}
};

export default PayForMobileComponent;
