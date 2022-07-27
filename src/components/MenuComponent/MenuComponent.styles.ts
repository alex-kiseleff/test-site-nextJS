import styled from 'styled-components';

const NavList = styled.ul`
	left: 1rem;
	position: absolute;
	align-items: center;
	display: none;
	font-size: ${({ theme }) => theme.sizes.font.menuItem};

	@media (min-width: ${({ theme }) => theme.media.minWidthMD}) {
		display: flex;
	}
`;

export { NavList };
