import styled from 'styled-components';

const Container = styled.article`
	max-width: 100%;
`;

const Title = styled.h2`
	font-size: 1.7rem;
	text-align: center;
	font-family: ${({ theme }) => theme.fonts.robotoMedium};
	padding: 1rem 0;

	@media (min-width: ${({ theme }) => theme.media.minWidthSM}) and (max-width: ${({ theme }) => theme.media.maxWidthMD}) {
		font-size: 1.3rem;
	}

	@media (min-width: ${({ theme }) => theme.media.minWidthXS}) and (max-width: ${({ theme }) => theme.media.maxWidthSM}) {
		font-size: 1.1rem;
	}
`;

const Paragraph = styled.p`
	font-size: 1rem;
	font-family: ${({ theme }) => theme.fonts.robotoRegular};
	text-align: justify;
	text-indent: 2rem;
	padding-bottom: 0.5rem;

	@media (min-width: ${({ theme }) => theme.media.minWidthSM}) and (max-width: ${({ theme }) => theme.media.maxWidthMD}) {
		font-size: 0.9rem;
	}

	@media (min-width: ${({ theme }) => theme.media.minWidthXS}) and (max-width: ${({ theme }) => theme.media.maxWidthSM}) {
		font-size: 0.9rem;
	}
`;

export { Container, Title, Paragraph };
