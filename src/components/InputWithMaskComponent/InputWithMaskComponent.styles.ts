import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;

	label {
		font-weight: 600;
		padding: 0 0.3rem;
		color: ${({ theme }) => theme.colors.font.inputWithMask};
		margin-bottom: 0.5rem;
	}
`;

const WrapElements = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const WrapInput = styled.div`
	color: ${({ theme }) => theme.colors.font.inputWithMask};
	display: inline-flex;

	input {
		font-weight: 600;
		border-bottom: 1px solid ${({ theme }) => theme.colors.border.inputWithMask};
		font-size: 1rem;
		background: inherit;
		padding: 0 0.1rem 0.1rem;
	}

	span {
		font-weight: 600;
		font-size: 1rem;
		border-bottom: 1px solid ${({ theme }) => theme.colors.border.inputWithMask};
		padding: 0 0.1rem 0.1rem;
	}
`;

const InputOne = styled.input`
	width: 1.7rem;
`;
const InputTwo = styled.input`
	width: 1.7rem;
`;
const InputThree = styled.input`
	width: 1.2rem;
`;
const InputFour = styled.input`
	width: 1.2rem;
`;

const ButtonReset = styled.button`
	font-weight: 600;
	background: ${({ theme }) => theme.colors.bg.buttonReset.usually};
	padding: 0 1rem;
	align-items: flex-end;
	height: 2rem;
	border-radius: 0.2rem;
	box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.chadows.buttonReset};
	align-self: flex-start;
	transition: ${({ theme }) => theme.durations.ms200};

	&:hover {
		transition: ${({ theme }) => theme.durations.ms200};
		background: ${({ theme }) => theme.colors.bg.buttonReset.hover};
	}

	&:active {
		transition: ${({ theme }) => theme.durations.ms200};
		background: ${({ theme }) => theme.colors.bg.buttonReset.active};
		box-shadow: none;
		transform: translateY(1px) translateX(1px);
	}
`;

export { Container, WrapElements, WrapInput, InputFour, InputOne, InputThree, InputTwo, ButtonReset };
