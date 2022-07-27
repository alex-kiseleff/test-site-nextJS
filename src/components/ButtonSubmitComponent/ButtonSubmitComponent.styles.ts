import styled from 'styled-components';

const Button = styled.button`
	background: ${({ theme }) => theme.colors.bg.buttonSubmit.usually};
	padding: 0 1rem;
	width: 100%;
	height: 2rem;
	border-radius: 0.2rem;
	box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.chadows.buttonSubmit};
	align-self: flex-start;
	transition: ${({ theme }) => theme.durations.ms200};
	font-weight: 600;

	&:hover {
		transition: ${({ theme }) => theme.durations.ms200};
		background: ${({ theme }) => theme.colors.bg.buttonSubmit.hover};
	}

	&:active {
		transition: ${({ theme }) => theme.durations.ms200};
		background: ${({ theme }) => theme.colors.bg.buttonSubmit.active};
		box-shadow: none;
		transform: translateY(1px) translateX(1px);
	}

	&:disabled {
		box-shadow: none;
		transform: translateY(1px) translateX(1px);
		cursor: default;

		&:hover {
			background: ${({ theme }) => theme.colors.bg.buttonSubmit.usually};
		}
	}
`;

export { Button };
