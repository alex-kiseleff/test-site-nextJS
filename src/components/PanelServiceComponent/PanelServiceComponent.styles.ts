import styled from 'styled-components';

const PanelService = styled.article`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	background: ${({ theme }) => theme.colors.bg.panelService};
	color: ${({ theme }) => theme.colors.font.panelService};
	font-size: ${({ theme }) => theme.sizes.font.panelService};
	font-family: ${({ theme }) => theme.fonts.robotoMedium};
	min-height: 3rem;
	width: 100%;
	border-radius: 0.3rem;
	box-shadow: 8px 8px 8px 1px ${({ theme }) => theme.colors.chadows.panelService};
	overflow: hidden;
	transition: ${({ theme }) => theme.durations.ms200};

	@media (min-width: ${({ theme }) => theme.media.minWidthLG}) {
		&:hover {
			opacity: 0.8;
			font-size: 1.41rem;
			transition: ${({ theme }) => theme.durations.ms200};
		}
	}

	&:not(:last-child) {
		margin-bottom: 0.5rem;
	}

	a {
		min-height: 3rem;
		min-width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: ${({ theme }) => theme.media.minWidthXS}) and (max-width: ${({ theme }) => theme.media.maxWidthSM}) {
		font-size: 1.1rem;
	}
`;

export { PanelService };
