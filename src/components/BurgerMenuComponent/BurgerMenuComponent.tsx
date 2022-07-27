/**
 * @component BurgerMenuComponent - рендерит кнопку и тело "бургер" меню.
 * @returns {ReactElement}
 */
import React, { FC, ReactElement, useRef } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { setCondition } from '../../store/slices/openBurgerMenuSlice';
import BurgerButtonComponent from '../BurgerButtonComponent/BurgerButtonComponent';
import SideMenuComponent from '../SideMenuComponent/SideMenuComponent';
import { Navbar } from './BurgerMenuComponent.styles';

const BurgerMenuComponent: FC = (): ReactElement => {
	const ref = useRef(null);
	const { isMenuOpen } = useAppSelector((state) => state.openBurgerMenuSlice);
	const dispatch = useAppDispatch();

	useOnClickOutside(ref, () => {
		if (isMenuOpen) {
			dispatch(setCondition(!isMenuOpen));
		}
	});

	return (
		<Navbar ref={ref}>
			<BurgerButtonComponent />
			<SideMenuComponent />
		</Navbar>
	);
};

export default BurgerMenuComponent;
