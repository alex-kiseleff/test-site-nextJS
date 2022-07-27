/**
 * @component ButtonSubmitComponent - рендерит кнопку отправки
 * формы с оплатой телефона.
 * @returns {ReactElement}
 */
import React, { FC, ReactElement } from 'react';
import useAppSelector from '../../hooks/useAppSelector';
import { Button } from './ButtonSubmitComponent.styles';

const ButtonSubmitComponent: FC = (): ReactElement => {
	const { onButton } = useAppSelector((state) => state.panelPayForPhoneSlice);

	return (
		<Button disabled={onButton} type={'submit'}>
			{'ОПЛАТИТЬ'}
		</Button>
	);
};

export default ButtonSubmitComponent;
