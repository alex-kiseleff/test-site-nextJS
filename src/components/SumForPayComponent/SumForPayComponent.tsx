/**
 * @component SumForPayComponent - создает поле ввода с маской
 * и валидацией в форме оплаты, для ввода суммы.
 * @returns {ReactElement}
 */
import React, { FC, ReactElement, useEffect, useRef } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { setMessage } from '../../store/slices/messengerSlice';
import {
	checkValidSum,
	setValueInputSum,
	toggleButton,
} from '../../store/slices/panelPayForPhoneSlice';
import { isInvalid } from '../../utilites/testValid';
import { Container, PayInput } from './SumForPayComponent.styles';

const SumForPayComponent: FC = (): ReactElement => {
	const dispatch = useAppDispatch();
	const refSum = useRef<HTMLInputElement>(null);
	const {
		isOneValid,
		isTwoValid,
		isThreeValid,
		isFourValid,
		isSumValid,
		oneInput,
		twoInput,
		threeInput,
		fourInput,
		sumInput,
	} = useAppSelector((state) => state.panelPayForPhoneSlice);

	const handlerSum = (e: { target: { value: string } }) => {
		const value = e.target.value;
		if (isInvalid(value, 4)) {
			return;
		}
		dispatch(setValueInputSum(value));
		if (
			!sumInput ||
			(Number(value) >= 1 && Number(value) <= 1000 && value.length <= 4)
		) {
			dispatch(checkValidSum(true));
			return;
		}
		dispatch(setMessage('Некорректная сумма!'));
		dispatch(checkValidSum(false));
		dispatch(toggleButton(true));
	};

	useEffect(() => {
		if (isOneValid && isTwoValid && isThreeValid && isFourValid) {
			(refSum.current as HTMLInputElement).focus();
		}
		if (
			isOneValid &&
			isTwoValid &&
			isThreeValid &&
			isFourValid &&
			isSumValid
		) {
			dispatch(toggleButton(false));
		}
		if (
			isOneValid &&
			isTwoValid &&
			isThreeValid &&
			isFourValid &&
			!sumInput
		) {
			dispatch(checkValidSum(false));
			dispatch(toggleButton(true));
		}
		if (
			(isSumValid && !isOneValid) ||
			(isSumValid && !isTwoValid) ||
			(isSumValid && !isThreeValid) ||
			(isSumValid && !isFourValid)
		) {
			dispatch(setMessage('Некорректный номер!'));
			dispatch(toggleButton(true));
		}
	}, [
		isOneValid,
		isTwoValid,
		isThreeValid,
		isFourValid,
		isSumValid,
		sumInput,
		oneInput,
		twoInput,
		threeInput,
		fourInput,
	]);

	return (
		<Container>
			<label htmlFor='sum'>{'Сумма платежа:'}</label>
			<PayInput
				onChange={handlerSum}
				id={'sum'}
				value={sumInput}
				ref={refSum}
				name={'sumInput'}
				autoComplete={'off'}
			/>
			<span>{'руб.'}</span>
		</Container>
	);
};

export default SumForPayComponent;
