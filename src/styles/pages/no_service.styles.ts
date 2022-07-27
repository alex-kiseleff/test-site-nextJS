import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	background: ${({ theme }) => theme.colors.bg.main};
	padding: 1vw;
	color: ${({ theme }) => theme.colors.font.main};
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.colors.bg.noService};
	color: ${({ theme }) => theme.colors.font.noService.container};
	text-align: center;
`;

const Title = styled.h2`
	text-align: center;
	font-size: 2rem;
	padding-bottom: 1rem;
	color: ${({ theme }) => theme.colors.font.noService.title};

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
