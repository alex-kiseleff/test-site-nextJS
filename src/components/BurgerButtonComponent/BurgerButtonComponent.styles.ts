import styled from 'styled-components';

export interface IBurgerMenu {
	isMenuOpen: boolean;
}

const Title = styled.span`
	display: block;
	height: 0.2rem;
	background-color: #000;
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

	&:not(:last-child) {
		margin-bottom: 0.3rem;
	}
`;

const MenuButton = styled.button<IBurgerMenu>`
	display: block;
	background: inherit;
	color: inherit;
	transform-origin: 16px 11px;

	${Title}:nth-of-type(1) {
		transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(45deg) translate(0.4rem, 0.3rem)' : 'rotate(0)')};
		width: ${({ isMenuOpen }) => (isMenuOpen ? '1.5rem' : '2rem')};
	}
	${Title}:nth-of-type(2) {
		opacity: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '1')};
		pointer-events: none;
	}
	${Title}:nth-of-type(3) {
		transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-45deg) translate(0.4rem, -0.3rem)' : 'rotate(0)')};
		width: ${({ isMenuOpen }) => (isMenuOpen ? '1.5rem' : '2rem')};
	}
`;

export { MenuButton, Title };
