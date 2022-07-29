import styled from 'styled-components';

const Section = styled.section`
	position: sticky;
	top: 0;
	background: ${({ theme }) => theme.colors.bg.secondHeader};
	height: 1.7rem;
	max-width: 100%;
	z-index: 1000;
`;

const Container = styled.div`
	background: ${({ theme }) => theme.colors.bg.secondHeader};
	position: relative;
	font-family: ${({ theme }) => theme.fonts.fontForMenu};
	height: 100%;
	margin: 0 auto;
	max-width: 100%;
	padding: 0.3vw 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
`;

const Title = styled.h1`
	font-size: ${({ theme }) => theme.sizes.font.secondHeader.title};

	@media (min-width: ${({ theme }) => theme.media.minWidthSM}) and (max-width: ${({ theme }) => theme.media.maxWidthMD}) {
		font-size: 1.1rem;
	}

	@media (min-width: ${({ theme }) => theme.media.minWidthXS}) and (max-width: ${({ theme }) => theme.media.maxWidthSM}) {
		font-size: 0.9rem;
	}
`;

export { Section, Container, Title };
