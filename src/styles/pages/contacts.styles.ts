import styled from 'styled-components';

const Section = styled.section`
	max-width: 100%;
	background: ${({ theme }) => theme.colors.bg.contacts};
	padding: 1rem;
	color: ${({ theme }) => theme.colors.font.contacts};
	flex-grow: 1;
`;

const Container = styled.div`
	max-width: ${({ theme }) => theme.sizes.screen.maximal};
	margin: 0 auto;
	padding-top: 2rem;
	display: flex;
	justify-content: space-around;
	flex-wrap: nowrap;

	@media (min-width: ${({ theme }) =>
		theme.media.minWidthXS}) and (max-width: ${({ theme }) =>
			theme.media.maxWidthMD}) {
		padding-top: 0;
		justify-content: center;
		flex-wrap: wrap;
	}
`;

export { Section, Container };
