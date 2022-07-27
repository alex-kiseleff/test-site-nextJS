import styled from 'styled-components';

const Container = styled.div`
	color: ${({ theme }) => theme.colors.font.sumForPay};
	display: inline-flex;

	label {
		font-weight: 600;
		padding: 0 0.3rem;
	}
`;

const PayInput = styled.input`
	border-bottom: 1px solid ${({ theme }) => theme.colors.border.sumForPay};
	font-size: 1rem;
	padding: 0 0.1rem 0.1rem;
	background: inherit;
	width: 2.2rem;
	text-align: right;
	font-weight: 600;
`;

export { Container, PayInput };
