import styled from 'styled-components';

const Section = styled.section`
	max-width: 100%;
	background: ${({ theme }) => theme.colors.bg.aboutUs};
	padding: 1rem;
	color: ${({ theme }) => theme.colors.font.aboutUs};
	flex-grow: 1;
`;

const Container = styled.div`
	max-width: ${({ theme }) => theme.sizes.screen.maximal};
	margin: 0 auto;
	display: grid;
	grid-template-columns: 70% auto;
	grid-gap: 1rem;

	@media (min-width: ${({ theme }) =>
		theme.media.minWidthXS}) and (max-width: ${({ theme }) =>
	theme.media.maxWidthMD}) {
		grid-template-columns: 100%;
	}
`;

export { Section, Container };
