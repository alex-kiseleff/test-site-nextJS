import styled, { css } from 'styled-components';

export interface IVisibility {
	message?: string;
}

const Section = styled.article<IVisibility>`
	visibility: hidden;
	background: ${({ theme }) => theme.colors.bg.message};
	color: ${({ theme }) => theme.colors.font.message};
	height: 1.5rem;
	width: 100%;
	padding: 0 1rem;
	position: absolute;
	top: 1.6rem;
	left: 0;
	margin: -1.5rem auto 0;
	z-index: 30;
	transition: ${({ theme }) => theme.durations.ms500};

	@media (min-width: ${({ theme }) =>
		theme.media.minWidthSM}) and (max-width: ${({ theme }) =>
			theme.media.maxWidthMD}) {
		height: 1.3rem;
	}
	@media (min-width: ${({ theme }) =>
		theme.media.minWidthXS}) and (max-width: ${({ theme }) =>
			theme.media.maxWidthSM}) {
		height: 1.1rem;
	}

	${({ message }) =>
		message &&
		css`
			height: 1.5rem;
			visibility: visible;
			transition: all ${({ theme }) => theme.durations.ms500};
			margin: 0 auto;

			${Title} {
				@media (min-width: ${({ theme }) =>
				theme.media.minWidthSM}) and (max-width: ${({
					theme,
				}) => theme.media.maxWidthMD}) {
					font-size: 1.1rem;
				}

				@media (min-width: ${({ theme }) =>
				theme.media.minWidthXS}) and (max-width: ${({
					theme,
				}) => theme.media.maxWidthSM}) {
					font-size: 0.9rem;
				}
			}
		`};
`;

const Container = styled.div`
	height: 100%;
	padding: 0 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h3`
	font-family: ${({ theme }) => theme.fonts.robotoMedium};
	font-size: ${({ theme }) => theme.sizes.font.message};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export { Section, Container, Title };
