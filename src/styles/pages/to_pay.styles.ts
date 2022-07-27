import styled from 'styled-components';

const Section = styled.article`
	max-width: 100%;
	background: ${({ theme }) => theme.colors.bg.toPay};
	padding: 2rem 0 2rem;
	color: ${({ theme }) => theme.colors.font.toPay};
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.form`
	max-width: ${({ theme }) => theme.sizes.screen.maximal};
	margin: 0 auto;
	width: 20rem;
	padding: 1rem;
	border-radius: 0.2rem;
	box-shadow: 1px 1px 8px ${({ theme }) => theme.colors.chadows.toPay};
	display: flex;
	flex-direction: column;

	& > :not(:last-child) {
		margin-bottom: 2rem;
	}
`;

const LogoOperator = styled.picture`
	width: 100%;
	height: auto;
	border-radius: 0.2rem;
	opacity: 0.7;

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		border-radius: 0.2rem;
		box-shadow: 1px 1px 8px ${({ theme }) => theme.colors.chadows.toPay};
	}
`;

export { Section, Container, LogoOperator };
