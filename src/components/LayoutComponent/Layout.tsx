/**
 * @component Layout - отображает [header] и [footer] для страниц,
 * кроме страницы [404].
 * @param {PropsWithChildren} children - реакт элементы.
 * @returns {ReactElement}.
 */
import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { useRouter } from 'next/router';
import FirstHeaderComponent from '../FirstHeaderComponent/FirstHeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import SecondHeaderComponent from '../SecondHeaderComponent/SecondHeaderComponent';
import { Container } from './Layout.styles';

const Layout: FC<PropsWithChildren> = ({ children }): ReactElement => {
	const router = useRouter();
	return (
		<Container>
			{router.pathname !== '/404' && <FirstHeaderComponent />}
			{router.pathname !== '/404' && <SecondHeaderComponent />}
			{children}
			{router.pathname !== '/404' && <FooterComponent />}
		</Container>
	);
};

export default Layout;
