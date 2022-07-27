import styled from 'styled-components';

export interface IActiveStyle {
	active: boolean;
}

const ListItem = styled.li<IActiveStyle>`
	border-bottom: 1px solid transparent;

	a {
		border-bottom: ${({ active }) => (active ? '1px solid #000' : 'none')};
	}

	@media (min-width: ${({ theme }) =>
		theme.media.minWidthXS}) and(max-width: ${({ theme }) =>
			theme.media.maxWidthMD}) {
		&:not(:last-child) {
			padding-bottom: 1.5rem;
		}
	}
	@media (min-width: ${({ theme }) => theme.media.minWidthMD}) {
		&:not(:last-child) {
			&::after {
				content: '|';
				padding: 0 1vw;
			}
		}
	}
`;

export { ListItem };
