import styled from 'styled-components';

const Container = styled.li`
	align-self: center;
	background: inherit;
	display: inline-flex;
	justify-self: center;
	max-height: 10.588rem;
	max-width: 17.4rem;
	border-radius: 0.5rem;
	box-shadow: 8px 8px 8px 1px ${({ theme }) => theme.colors.chadows.operatorCard};
	overflow: hidden;
	transition: ${({ theme }) => theme.durations.ms500};

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	@media (min-width: ${({ theme }) => theme.media.minWidthMD}) {
		&:hover {
			transform: matrix(1.1, 0, 0, 1.1, -0.1, -0.1);
			transition: ${({ theme }) => theme.durations.ms500};
		}
	}
`;

export { Container };
