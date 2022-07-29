import styled from 'styled-components';

const Container = styled.section`
	max-width: 100%;
	display: flex;
	flex-direction: column;
	padding-top: 4.2rem;

	@media (min-width: ${({ theme }) => theme.media.minWidthXS}) and (max-width: ${({ theme }) => theme.media.maxWidthMD}) {
		padding-top: 1rem;

		&::before {
			content: 'Новости';
			padding-bottom: 1rem;
			font-size: 1.5rem;
			text-align: center;
			font-family: ${({ theme }) => theme.fonts.robotoMedium};
			color: ${({ theme }) => theme.colors.font.newsColumn};
		}
	}
`;

export { Container };
