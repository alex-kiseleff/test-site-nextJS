/**
 * @component ToPayComponent - рендерит страницу с панелью оплаты
 * мобильного телефона.
 * @type {NextPage}.
 * @param {Array<IOperator>} propsToPay - данные с сервера.
 * @returns {JSX.Element}
 */
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { FormEvent, useEffect } from 'react';
import ButtonSubmitComponent from '../../components/ButtonSubmitComponent/ButtonSubmitComponent';
import InputWithMaskComponent from '../../components/InputWithMaskComponent/InputWithMaskComponent';
import SumForPayComponent from '../../components/SumForPayComponent/SumForPayComponent';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { fetchSubmit, IDataForSubmit } from '../../store/slices/fetchSubmit';
import { setMessage } from '../../store/slices/messengerSlice';
import { IOperator } from '../pay_for_mobile';
import {
	Container,
	LogoOperator,
	Section,
} from '../../styles/pages/to_pay.styles';

interface IData {
	propsToPay: Array<IOperator>;
}

const ToPayComponent: NextPage<IData> = ({ propsToPay }): JSX.Element => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { error, success } = useAppSelector((state) => state.fetchSubmit);

	useEffect(() => {
		dispatch(setMessage(error));
		if (success) {
			router.push('/');
		}
	}, [error, success]);
	// Функция handlerSubmit формирует объект для отправки на сервер, из введенных значений инпутов.
	const handlerSubmit = (e: FormEvent) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const arr = Object.entries(form);
		const dataForSend = arr.reduce(
			(obj: IDataForSubmit, item: Array<HTMLFormElement>) => {
				return item[1].tagName === 'INPUT'
					? { ...obj, [item[1].name]: item[1].value }
					: obj;
			},
			{} as IDataForSubmit
		);
		dispatch(fetchSubmit(dataForSend));
	};

	return (
		<Section>
			<Container onSubmit={handlerSubmit}>
				<LogoOperator>
					<picture>
						<source srcSet={propsToPay[0].webp} />
						<img src={propsToPay[0].png} />
					</picture>
				</LogoOperator>
				<InputWithMaskComponent />
				<SumForPayComponent />
				<ButtonSubmitComponent />
			</Container>
		</Section>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const response = await fetch(
			`${process.env.API_HOST}/operators?id=${ctx.query.id}`
		);
		const propsToPay = await response.json();

		if (propsToPay.errors) {
			return { notFound: true };
		}

		if (!propsToPay) {
			return { notFound: true };
		}
		return {
			props: {
				propsToPay,
			},
		};
	} catch (error) {
		console.log(error);

		return { props: {} };
	}
};

export default ToPayComponent;
