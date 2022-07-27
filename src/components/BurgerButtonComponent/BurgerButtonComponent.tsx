/**
 * @component BurgerButtonComponent - рендерит кнопку "бургер" или "крестик",
 * взависимости от состояния [isMenuOpen], по клику диспатчит экшен для смены состояния [isMenuOpen].
 * Показывается при маленьких разрешениях экранов.
 * @returns {ReactElement}
 */
import React, { FC, ReactElement } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { setCondition } from '../../store/slices/openBurgerMenuSlice';
import { MenuButton, Title } from './BurgerButtonComponent.styles';

const BurgerButtonComponent: FC = (): ReactElement => {
	const dispatch = useAppDispatch();
	const { isMenuOpen } = useAppSelector((state) => state.openBurgerMenuSlice);

	const clickHandler = () => {
		dispatch(setCondition(!isMenuOpen));
	};

	return (
		<MenuButton isMenuOpen={isMenuOpen} onClick={clickHandler}>
			<Title />
			<Title />
			<Title />
		</MenuButton>
	);
};

export default BurgerButtonComponent;
