import styled from 'styled-components';

const Navbar = styled.div`
	left: 1rem;
	position: absolute;
	display: none;
	font-size: ${({ theme }) => theme.sizes.font.menuItem};

	@media (min-width: ${({ theme }) =>
		theme.media.minWidthXS}) and (max-width: ${({ theme }) =>
	theme.media.maxWidthMD}) {
		display: flex;
	}
`;

export { Navbar };
