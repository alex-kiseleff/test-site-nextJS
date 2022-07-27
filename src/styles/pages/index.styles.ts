import styled from 'styled-components';

const Section = styled.section`
	max-width: 100%;
	background: ${({ theme }) => theme.colors.bg.main};
	padding: 1vw;
	color: ${({ theme }) => theme.colors.font.main};
	flex-grow: 1;
`;

const Container = styled.div`
	max-width: ${({ theme }) => theme.sizes.screen.maximal};
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export { Section, Container };
