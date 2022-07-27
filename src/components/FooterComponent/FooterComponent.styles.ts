import styled from 'styled-components';

const Footer = styled.footer`
	background: ${({ theme }) => theme.colors.bg.footer};
	max-width: 100%;
	z-index: 1000;
`;

const Container = styled.div`
	align-items: center;
	color: ${({ theme }) => theme.colors.font.footer};
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	max-width: ${({ theme }) => theme.sizes.screen.maximal};
	padding: 0.5rem 1rem;
	flex-shrink: 0;
`;

const Title = styled.h5`
	font-family: ${({ theme }) => theme.fonts.robotoMedium};
`;

const Paragraph = styled.p`
	font-family: ${({ theme }) => theme.fonts.fontForMenu};
	padding: 0.5rem;
`;

const Author = styled.span`
	font-family: ${({ theme }) => theme.fonts.fontForDesign};
`;

export { Footer, Container, Title, Paragraph, Author };
