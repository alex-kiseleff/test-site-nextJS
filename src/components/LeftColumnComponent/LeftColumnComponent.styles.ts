import styled from 'styled-components';

const Section = styled.section`
	font-size: 1.5rem;

	@media (min-width: ${({ theme }) => theme.media.minWidthXS}) and (max-width: ${({ theme }) => theme.media.maxWidthSM}) {
		font-size: 1.1rem;
	}
`;

const Container = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
`;

const Data = styled.span`
	padding-bottom: 0.3rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export { Section, Container, Data };
