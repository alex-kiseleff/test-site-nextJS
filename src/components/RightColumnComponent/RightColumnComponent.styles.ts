import styled from 'styled-components';

const Container = styled.div`
	padding: 1rem;
`;

const WrapImg = styled.div`
	width: 100%;
	display: inline-block;
	border: 2px solid ${({ theme }) => theme.colors.border.wrapImg};

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
`;

export { Container, WrapImg };
