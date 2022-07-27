/**
 * @component InputWithMaskComponent - создает поле ввода с маской и
 * валидацией для номера телефона, с кнопкой очистки содержимого.
 * @returns {ReactElement}
 */
import React, { FC, MouseEvent, ReactElement, useEffect, useRef } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import {
	setValueInputOne,
	checkValidOne,
	setValueInputTwo,
	checkValidTwo,
	setValueInputThree,
	checkValidThree,
	setValueInputFour,
	checkValidFour,
	setValueInputSum,
	checkValidSum,
	toggleButton,
} from '../../store/slices/panelPayForPhoneSlice';
import { isInvalid, isTest } from '../../utilites/testValid';
import {
	ButtonReset,
	Container,
	InputFour,
	InputOne,
	InputThree,
	InputTwo,
	WrapElements,
	WrapInput,
} from './InputWithMaskComponent.styles';

const InputWithMaskComponent: FC = (): ReactElement => {
	const dispatch = useAppDispatch();
	const refOne = useRef<HTMLInputElement>(null);
	const refTwo = useRef<HTMLInputElement>(null);
	const refThree = useRef<HTMLInputElement>(null);
	const refFour = useRef<HTMLInputElement>(null);
	const {
		isOneValid,
		isTwoValid,
		isThreeValid,
		oneInput,
		twoInput,
		threeInput,
		fourInput,
	} = useAppSelector((state) => state.panelPayForPhoneSlice);

	const handlerInputOne = (e: { target: { value: string } }) => {
		const value = e.target.value;
		if (isInvalid(value, 3)) {
			return;
		}
		dispatch(setValueInputOne(value));
		if (isTest(value, 3)) {
			dispatch(checkValidOne(true));
			return;
		}
		dispatch(checkValidOne(false));
	};
	const handlerInputTwo = (e: { target: { value: string } }) => {
		const value = e.target.value;
		if (isInvalid(value, 3)) {
			return;
		}
		dispatch(setValueInputTwo(value));
		if (isTest(value, 3)) {
			dispatch(checkValidTwo(true));
			return;
		}
		dispatch(checkValidTwo(false));
	};
	const handlerInputThree = (e: { target: { value: string } }) => {
		const value = e.target.value;
		if (isInvalid(value, 2)) {
			return;
		}
		dispatch(setValueInputThree(value));
		if (isTest(value, 2)) {
			dispatch(checkValidThree(true));
			return;
		}
		dispatch(checkValidThree(false));
	};
	const handlerInputFour = (e: { target: { value: string } }) => {
		const value = e.target.value;
		if (isInvalid(value, 2)) {
			return;
		}
		dispatch(setValueInputFour(value));
		if (isTest(value, 2)) {
			dispatch(checkValidFour(true));
			return;
		}
		dispatch(checkValidFour(false));
	};
	const handlerClear = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(checkValidOne(false));
		dispatch(checkValidTwo(false));
		dispatch(checkValidThree(false));
		dispatch(checkValidFour(false));
		dispatch(checkValidSum(false));
		dispatch(setValueInputOne(''));
		dispatch(setValueInputTwo(''));
		dispatch(setValueInputThree(''));
		dispatch(setValueInputFour(''));
		dispatch(setValueInputSum(''));
		dispatch(toggleButton(true));
		(refOne.current as HTMLInputElement).focus();
	};

	useEffect(() => {
		if (isOneValid) {
			(refTwo.current as HTMLInputElement).focus();
		}
		if (isOneValid && isTwoValid) {
			(refThree.current as HTMLInputElement).focus();
		}
		if (isOneValid && isTwoValid && isThreeValid) {
			(refFour.current as HTMLInputElement).focus();
		}
	}, [isOneValid, isTwoValid, isThreeValid]);

	return (
		<Container>
			<label htmlFor='phone'>{'Введите номер телефона:'}</label>
			<WrapElements>
				<WrapInput>
					<span>{'+7'}</span>
					<span>{'('}</span>
					<InputOne
						onChange={handlerInputOne}
						value={oneInput}
						ref={refOne}
						name={'oneInput'}
						autoFocus={true}
						type='tel'
						tabIndex={1}
						id={'phone'}
						autoComplete={'off'}
					/>
					<span>{')'}</span>
					<InputTwo
						onChange={handlerInputTwo}
						value={twoInput}
						ref={refTwo}
						name={'twoInput'}
						type='tel'
						tabIndex={2}
						autoComplete={'off'}
					/>
					<span>{'-'}</span>
					<InputThree
						onChange={handlerInputThree}
						value={threeInput}
						ref={refThree}
						name={'threeInput'}
						type='tel'
						tabIndex={3}
						autoComplete={'off'}
					/>
					<span>{'-'}</span>
					<InputFour
						onChange={handlerInputFour}
						value={fourInput}
						ref={refFour}
						name={'fourInput'}
						type='tel'
						tabIndex={4}
						autoComplete={'off'}
					/>
				</WrapInput>
				<ButtonReset type={'button'} onClick={handlerClear}>
					{'ОЧИСТИТЬ'}
				</ButtonReset>
			</WrapElements>
		</Container>
	);
};

export default InputWithMaskComponent;
