import styled from 'styled-components';

const Section = styled.section`
	max-width: 100%;
	background: ${({ theme }) => theme.colors.bg.main};
	padding: 1vw;
	color: ${({ theme }) => theme.colors.font.main};
	flex-grow: 1;
`;

const Container = styled.ul`
	width: 100%;
	background: ${({ theme }) => theme.colors.bg.payForMobile};
	display: grid;
	column-gap: 2vw;
	row-gap: 2vw;
	justify-content: center;
	align-content: center;
	grid-template-columns: repeat(4, 1fr);
	padding: 1rem;

	@media (min-width: ${({ theme }) =>
		theme.media.minWidthXS}) and (max-width: ${({ theme }) =>
			theme.media.maxWidthSM}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${({ theme }) =>
		theme.media.minWidthSM}) and (max-width: ${({ theme }) =>
			theme.media.maxWidthMD}) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export { Section, Container };
