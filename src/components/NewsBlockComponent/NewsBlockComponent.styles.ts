import styled from 'styled-components';

const Article = styled.article`
	background: ${({ theme }) => theme.colors.bg.newsColumn};
	color: ${({ theme }) => theme.colors.font.newsColumn};
	margin-bottom: 1rem;
	padding: 1rem;
`;

const Title = styled.h3`
	font-size: 1.2rem;
	text-align: center;
	font-family: ${({ theme }) => theme.fonts.robotoMedium};
	padding-bottom: 1rem;

	@media (min-width: ${({ theme }) =>
		theme.media.minWidthXS}) and (max-width: ${({ theme }) =>
	theme.media.maxWidthSM}) {
		font-size: 1rem;
	}
`;

const Description = styled.p`
	font-size: 0.8rem;
	font-family: ${({ theme }) => theme.fonts.robotoRegular};
	text-align: justify;
	text-indent: 2rem;
	hyphens: auto;
	white-space: pre-wrap;
	word-wrap: break-word;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
`;

export { Article, Title, Description };
