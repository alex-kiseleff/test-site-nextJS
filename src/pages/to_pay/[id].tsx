/**
 * @component ToPayComponent - рендерит страницу с панелью оплаты
 * мобильного телефона.
 * @type {NextPage}.
 * @param {Array<IOperator>} operatorCurrent - данные с сервера.
 * @returns {JSX.Element}
 */
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { FormEvent, useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import { setMessage } from '../../store/slices/messengerSlice';
import { toggleButton } from '../../store/slices/panelPayForPhoneSlice';
import ButtonSubmitComponent from '../../components/ButtonSubmitComponent/ButtonSubmitComponent';
import InputWithMaskComponent from '../../components/InputWithMaskComponent/InputWithMaskComponent';
import SumForPayComponent from '../../components/SumForPayComponent/SumForPayComponent';
import { IOperator } from '../pay_for_mobile';
import { Container, LogoOperator, Section } from '../../styles/pages/to_pay.styles';

export interface IDataForSubmit {
	oneInput: string;
	twoInput: string;
	threeInput: string;
	fourInput: string;
	sumInput: string;
}

interface IData {
	operatorCurrent: Array<IOperator>;
}

const ToPayComponent: NextPage<IData> = ({ operatorCurrent }): JSX.Element => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(toggleButton(true));
	}, [dispatch]);

	/** Функция handlerSubmit формирует объект для отправки на сервер,
	 * из введенных значений инпутов и отправляет его.
	 */
	const handlerSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const arr = Object.entries(form);
		const dataForSend = arr.reduce((obj: IDataForSubmit, item: Array<HTMLFormElement>) => {
			return item[1].tagName === 'INPUT' ? { ...obj, [item[1].name]: item[1].value } : obj;
		}, {} as IDataForSubmit);

		const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/to_payAPI`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(dataForSend),
		});
		if (!response.ok) {
			dispatch(setMessage('Ошибка сервера.'));
		}
		if (response.ok) {
			router.push('/');
		}
		return (await response.json()) as IDataForSubmit;
	};

	return (
		<Section>
			<Container onSubmit={handlerSubmit}>
				<LogoOperator>
					<picture>
						<source srcSet={operatorCurrent[0].webp} />
						<img src={operatorCurrent[0].png} />
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
	const { id } = ctx.query;
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/to_payAPI?id=${id}`);
		const data = await response.json();

		if (data.errors) {
			return { notFound: true };
		}

		if (!data) {
			return { notFound: true };
		}
		return {
			props: {
				operatorCurrent: data,
			},
		};
	} catch (error) {
		console.log(error);

		return { props: {} };
	}
};

export default ToPayComponent;
