import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1vw;
	width: 100%;
	height: 100vh;
	background: ${({ theme }) => theme.colors.bg.page404};
	color: ${({ theme }) => theme.colors.font.page404.container};
	text-align: center;
`;

const Title = styled.h2`
	text-align: center;
	font-size: 2rem;
	padding-bottom: 1rem;
	color: ${({ theme }) => theme.colors.font.page404.title};

	@media (min-width: ${({ theme }) =>
		theme.media.minWidthXS}) and (max-width: ${({ theme }) =>
			theme.media.maxWidthSM}) {
		font-size: 1.2rem;
	}

	@media (min-width: ${({ theme }) =>
		theme.media.minWidthSM}) and (max-width: ${({ theme }) =>
			theme.media.maxWidthMD}) {
		font-size: 1.6rem;
	}
`;

export { Container, Title };
